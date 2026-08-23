import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "Understand the cancellation and refund terms that apply to travel packages booked with Prateek Holidayz.",
  alternates: { canonical: "https://prateekholidayz.in/cancellation-policy" },
};

const lastUpdated = "23 August 2026";

const tiers = [
  { period: "30+ days before departure", cancellation: "10% of total package cost" },
  { period: "15 – 29 days before departure", cancellation: "25% of total package cost" },
  { period: "7 – 14 days before departure", cancellation: "50% of total package cost" },
  { period: "0 – 6 days before departure", cancellation: "100% of total package cost (no refund)" },
];

export default function CancellationPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cancellation & Refund Policy"
        description="Clear, honest terms for cancellations and refunds on all packages booked with us."
        image="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Taj Mahal at dawn representing the journey that awaits with Prateek Holidayz"
      />

      <section className="container-page max-w-3xl py-16 md:py-24">
        <p className="mb-10 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

        <div className="flex flex-col gap-10 text-foreground/85 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-0 [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:text-sm [&_ul]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">

          <div className="flex flex-col gap-4">
            <h2>1. Cancellation by the Traveller</h2>
            <p>
              If you need to cancel a confirmed booking, please notify us in writing at{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-accent hover:underline">
                {companyInfo.email}
              </a>{" "}
              as soon as possible. Cancellation charges apply based on how far in advance of
              the departure date we receive your written cancellation:
            </p>

            {/* Cancellation table */}
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-5 py-3 text-left font-semibold text-foreground">Notice Period</th>
                    <th className="px-5 py-3 text-left font-semibold text-foreground">Cancellation Charge</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((tier, i) => (
                    <tr
                      key={tier.period}
                      className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-surface" : "bg-surface-alt"}`}
                    >
                      <td className="px-5 py-3.5 text-muted-foreground">{tier.period}</td>
                      <td className="px-5 py-3.5 text-foreground">{tier.cancellation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Charges are calculated on the <strong className="text-foreground">total package cost</strong>,
              including all components (accommodation, transport, activities). Non-refundable
              components charged by airlines, hotels, or permit authorities will be deducted
              before any refund is calculated, regardless of the notice period.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>2. Refund Processing</h2>
            <p>
              Approved refunds will be processed within <strong className="text-foreground">7–10 working days</strong> of
              receiving your written cancellation. Refunds are credited to the original payment
              method where possible. Bank transfer charges (if any) will be deducted from the
              refund amount.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>3. Changes to a Booking</h2>
            <p>
              If you wish to amend travel dates, destinations, or the number of travellers, we
              will do our best to accommodate changes subject to availability. Amendment fees
              charged by airlines, hotels, or other vendors will be passed on to you at cost.
              Significant changes requested within 15 days of departure may be treated as a
              cancellation and re-booking.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>4. No-Show</h2>
            <p>
              If you fail to join a trip on the departure date without prior written
              cancellation, no refund will be issued.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>5. Cancellation by Prateek Holidayz</h2>
            <p>
              In rare cases — such as natural disasters, government advisories, force majeure
              events, or insufficient group size — we may need to cancel or significantly alter
              a package. In such cases you will be offered:
            </p>
            <ul>
              <li>An alternative dates or itinerary of equal or greater value, or</li>
              <li>A full refund of all amounts paid to us</li>
            </ul>
            <p>
              We are not liable for any indirect losses (flight costs, visas, personal expenses)
              arising from such cancellations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>6. Travel Insurance</h2>
            <p>
              We strongly recommend that all travellers purchase comprehensive travel insurance
              that covers trip cancellation, medical emergencies, and baggage loss before
              confirming a booking. We can assist with recommendations on request.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>7. Contact for Cancellations</h2>
            <p>All cancellation requests must be submitted in writing to:</p>
            <ul>
              <li>Email: {companyInfo.email}</li>
              <li>Phone: {companyInfo.phone}</li>
              <li>Office hours: {companyInfo.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-4 text-sm text-muted-foreground">
          <Link href="/privacy-policy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          <span aria-hidden>·</span>
          <Link href="/terms-of-service" className="text-accent hover:underline">
            Terms of Service
          </Link>
        </div>
      </section>
    </>
  );
}
