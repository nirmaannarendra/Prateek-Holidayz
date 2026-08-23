import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type InquiryVariant = "general" | "corporate";

interface InquiryPayload {
  variant: InquiryVariant;
  name: string;
  email: string;
  phone: string;
  company?: string;
  destination?: string;
  packageTitle?: string;
  travelDates?: string;
  teamSize?: string;
  eventType?: string;
  message?: string;
}

// ---------------------------------------------------------------------------
// In-memory rate limiting
// Each bucket tracks how many requests an IP has made in a sliding window.
// Map is keyed by IP; value is [count, windowStartMs].
// Limit: 5 requests per 60 seconds per IP.
// ---------------------------------------------------------------------------

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const ipBuckets = new Map<string, [number, number]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);

  if (!bucket || now - bucket[1] > RATE_WINDOW_MS) {
    // New window
    ipBuckets.set(ip, [1, now]);
    return false;
  }

  const [count, windowStart] = bucket;
  if (count >= RATE_LIMIT) {
    console.warn(`[inquiry] Rate limit exceeded for IP ${ip}`);
    return true;
  }

  ipBuckets.set(ip, [count + 1, windowStart]);
  return false;
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

const MAX_BODY_BYTES = 10_240; // 10 KB

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Accepts any string that looks like it could be a phone number:
 *  at least 7 digits, optional leading +, spaces/dashes/parens allowed. */
function isPhone(value: string) {
  return /^\+?[\d\s\-().]{7,20}$/.test(value);
}

function validateInquiry(body: unknown): InquiryPayload | null {
  if (!body || typeof body !== "object") return null;

  const record = body as Record<string, unknown>;
  const variant = record.variant === "corporate" ? "corporate" : "general";
  const payload: InquiryPayload = {
    variant,
    name: getString(record.name),
    email: getString(record.email),
    phone: getString(record.phone),
    company: getString(record.company),
    destination: getString(record.destination),
    packageTitle: getString(record.packageTitle),
    travelDates: getString(record.travelDates),
    teamSize: getString(record.teamSize),
    eventType: getString(record.eventType),
    message: getString(record.message),
  };

  if (!payload.name || !isEmail(payload.email) || !payload.phone) return null;
  if (!isPhone(payload.phone)) return null;
  if (variant === "corporate" && !payload.company) return null;

  return payload;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  // — Payload size guard —
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    console.warn("[inquiry] Oversized payload rejected:", contentLength);
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  // — Rate limiting —
  // Next.js App Router exposes the real IP via the x-forwarded-for header in
  // most deployment environments (Vercel, Netlify, etc.).
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded ? forwarded.split(",")[0] : "unknown").trim();

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many enquiries. Please wait a minute before trying again." },
      { status: 429 }
    );
  }

  // — Parse & validate —
  const body = await request.json().catch(() => null);
  const inquiry = validateInquiry(body);

  if (!inquiry) {
    console.warn("[inquiry] Invalid payload from IP:", ip);
    return NextResponse.json({ error: "Missing or invalid required fields" }, { status: 400 });
  }

  // — Webhook delivery —
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Enquiry delivery is temporarily unavailable. Please WhatsApp or call us directly." },
      { status: 503 }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5_000);

  const delivery = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...inquiry,
      submittedAt: new Date().toISOString(),
      source: "website",
    }),
    signal: controller.signal,
  }).catch((err) => {
    console.error("[inquiry] Webhook delivery failed:", err?.message ?? err);
    return null;
  });

  clearTimeout(timeout);

  if (!delivery?.ok) {
    return NextResponse.json(
      { error: "Unable to deliver enquiry. Please WhatsApp or call us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
