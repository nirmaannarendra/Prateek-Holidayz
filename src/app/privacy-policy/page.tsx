import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Prateek Holidayz collects, uses, and protects your personal information when you enquire about or book travel packages.",
  alternates: { canonical: "https://prateekholidayz.in/privacy-policy" },
};

const lastUpdated = "23 August 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Aerial view of Indian landscape representing our commitment to responsible travel"
      />

      <section className="container-page max-w-3xl py-16 md:py-24">
        <p className="mb-10 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert max-w-none flex flex-col gap-10 text-foreground/85 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-0 [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:text-sm [&_ul]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">

          <div className="flex flex-col gap-4">
            <h2>1. Who We Are</h2>
            <p>
              {companyInfo.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a travel
              agency based at {companyInfo.address}. We operate this website to provide information
              about our travel packages and to receive enquiries from prospective travellers.
            </p>
            <p>
              For questions about this policy, contact us at{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-accent hover:underline">
                {companyInfo.email}
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>2. Information We Collect</h2>
            <p>We collect information you voluntarily provide when you:</p>
            <ul>
              <li>Submit an enquiry form (name, email address, phone number, travel preferences)</li>
              <li>Contact us by phone, email, or WhatsApp</li>
              <li>Book a travel package through us</li>
            </ul>
            <p>
              We do not use cookies for tracking, advertising, or analytics beyond basic server
              logs required for security and uptime.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Respond to your travel enquiry and prepare a personalised itinerary</li>
              <li>Communicate about your booking, payments, and travel details</li>
              <li>Fulfil our contractual obligations when you book a package</li>
              <li>Comply with legal or regulatory requirements</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>4. Data Sharing</h2>
            <p>
              We may share your information with hotels, airlines, transport providers, and other
              travel vendors only to the extent necessary to deliver the services you have booked.
              All such partners are required to keep your information confidential.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal data for as long as required to provide our services and
              meet our legal obligations — typically no longer than 3 years after your last
              interaction with us, unless a longer period is required by law (for example, for
              financial records).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-accent hover:underline">
                {companyInfo.email}
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>7. Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your
              personal information. Enquiry submissions are transmitted over HTTPS. No method of
              transmission over the internet is 100% secure, however, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>8. Children</h2>
            <p>
              Our website is not directed at children under 18. We do not knowingly collect
              personal information from minors without parental consent.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The date at the top of this page
              will reflect the most recent revision. Continued use of our website after any
              changes constitutes your acceptance of the updated policy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2>10. Contact Us</h2>
            <p>For any privacy-related concerns or requests, reach us at:</p>
            <ul>
              <li>Email: {companyInfo.email}</li>
              <li>Phone: {companyInfo.phone}</li>
              <li>Address: {companyInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-4 text-sm text-muted-foreground">
          <Link href="/terms-of-service" className="text-accent hover:underline">
            Terms of Service
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
