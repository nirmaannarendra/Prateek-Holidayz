import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions that apply when you use the Prateek Holidayz website and book travel packages with us.",
  alternates: { canonical: "https://prateekholidayz.in/terms-of-service" },
};

const lastUpdated = "23 August 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of our website and travel services."
        image="https://images.unsplash.com/photo-1468278006021-a83de2cb9b3b?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Open road stretching through a scenic Indian landscape"
      />

      <section className="container-page max-w-3xl py-16 md:py-24">
        <p className="mb-10 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

        <div className="flex flex-col gap-10 text-foreground/85 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-0 [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:text-sm [&_ul]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">

          <div className="flex flex-col gap-4">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website or submitting an enquiry to {companyInfo.name}
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these
              Terms of Service. If you do not agree, please do not use this website.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>2. Use of Website</h2>
            <p>
              This website is provided for personal, non-commercial use to browse travel
              packages and submit enquiries. You agree not to:
            </p>
            <ul>
              <li>Submit false or misleading enquiry information</li>
              <li>Attempt to overload, scrape, or disrupt the website or its API</li>
              <li>Use automated tools to submit enquiries in bulk</li>
              <li>Reproduce or republish our content without written permission</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2>3. Enquiries and Quotations</h2>
            <p>
              Submitting an enquiry form does not constitute a booking or payment commitment.
              All prices and itineraries displayed are indicative and subject to confirmation
              based on availability and travel dates at the time of booking.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>4. Booking and Payment</h2>
            <p>
              A confirmed booking is created only upon receipt of a written booking confirmation
              from {companyInfo.name} and the payment of any applicable deposit. Full payment
              terms will be communicated at the time of confirmation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>5. Accuracy of Information</h2>
            <p>
              We make every effort to ensure that package descriptions, prices, and itinerary
              details are accurate. However, errors may occur. We reserve the right to correct
              any inaccuracies and to notify you accordingly before confirming a booking.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>6. Third-Party Services</h2>
            <p>
              Our packages include services provided by third-party vendors (hotels, airlines,
              transport operators, guides). We act as an agent for these providers and are not
              liable for their performance or service quality, although we take reasonable steps
              to vet and monitor all vendors.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>7. Cancellations and Refunds</h2>
            <p>
              Our cancellation and refund terms are detailed in our{" "}
              <Link href="/cancellation-policy" className="text-accent hover:underline">
                Cancellation Policy
              </Link>
              . Please read it carefully before confirming a booking.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, {companyInfo.name} shall not be liable
              for indirect, incidental, or consequential damages arising from the use of this
              website or from travel services booked through us. Our total liability in any
              dispute shall not exceed the total amount paid by you for the relevant package.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>9. Intellectual Property</h2>
            <p>
              All content on this website — including text, photography, and itinerary
              descriptions — is the property of {companyInfo.name} or its licensors and is
              protected by applicable copyright laws. Unauthorised reproduction is prohibited.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the
              laws of India. Any disputes shall be subject to the exclusive jurisdiction of the
              courts in Ahmedabad, Gujarat.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>11. Changes to These Terms</h2>
            <p>
              We may revise these Terms of Service at any time. The revised version will be
              effective from the date shown at the top of this page. Continued use of our website
              after any revision constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>12. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-accent hover:underline">
                {companyInfo.email}
              </a>{" "}
              or call {companyInfo.phone}.
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-4 text-sm text-muted-foreground">
          <Link href="/privacy-policy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          <span aria-hidden>·</span>
          <Link href="/cancellation-policy" className="text-accent hover:underline">
            Cancellation Policy
          </Link>
        </div>
      </section>
    </>
  );
}
