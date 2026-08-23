import type { Metadata } from "next";
import {
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { InquiryForm } from "@/components/InquiryForm";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Prateek Holidayz in Ahmedabad — call, WhatsApp, or send an enquiry and a travel consultant will respond within 24 hours.",
};

const contactCards = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: WhatsappLogoIcon,
    title: "WhatsApp",
    value: "Chat with a consultant",
    href: `https://wa.me/${companyInfo.whatsapp}`,
  },
  {
    icon: EnvelopeSimpleIcon,
    title: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start planning"
        description="Share a few details and a travel consultant will get back to you within 24 hours — or reach us directly below."
        image="https://images.unsplash.com/photo-1762513839526-c596f5e99a9a?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Boats along the ghats of Varanasi on the Ganges at midday"
      />

      <section className="container-page grid gap-10 py-16 md:grid-cols-3 md:py-24">
        {contactCards.map((card) => (
          <Reveal key={card.title}>
            <a
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-8 text-center shadow-soft transition-shadow duration-300 hover:shadow-lifted"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <card.icon size={24} weight="fill" className="text-primary" />
              </div>
              <p className="font-display text-base font-semibold text-foreground">{card.title}</p>
              <p className="text-sm text-muted-foreground">{card.value}</p>
            </a>
          </Reveal>
        ))}
      </section>

      <section className="container-page grid gap-12 pb-16 md:grid-cols-[1fr_420px] md:pb-24">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-lifted md:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Send us an enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us where you&apos;d like to go and we&apos;ll put together a plan that fits
              your budget and timeline.
            </p>
            <div className="mt-6">
              <InquiryForm variant="general" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <p className="font-display text-lg font-semibold text-foreground">Office</p>
            <div className="mt-4 flex flex-col gap-4 text-sm text-foreground/80">
              <div className="flex items-start gap-3">
                <MapPinIcon size={20} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                {companyInfo.address}
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon size={20} className="mt-0.5 shrink-0 text-accent" />
                {companyInfo.hours}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-64 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Prateek Holidayz office location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.mapsQuery)}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Unable to view map?{" "}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Open location in Google Maps
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
