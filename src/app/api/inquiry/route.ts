import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire up to email/CRM provider (e.g. Resend, SendGrid, HubSpot) before launch.
  console.log("New travel enquiry received:", body);

  return NextResponse.json({ ok: true });
}
