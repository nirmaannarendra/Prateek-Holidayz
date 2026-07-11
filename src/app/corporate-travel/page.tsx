import type { Metadata } from "next";
import {
  AirplaneTiltIcon,
  BriefcaseIcon,
  CalendarCheckIcon,
  ChatCircleTextIcon,
  FileTextIcon,
  HandshakeIcon,
  PresentationChartIcon,
  RocketLaunchIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { InquiryForm } from "@/components/InquiryForm";
import { corporateServices, type CorporateService } from "@/lib/data";

export const metadata: Metadata = {
  title: "Corporate & MICE Travel Management",
  description:
    "Dedicated corporate travel management from Ahmedabad — offsites, MICE, incentive travel, and group bookings with a single account manager.",
};

const iconMap: Record<CorporateService["icon"], Icon> = {
  briefcase: BriefcaseIcon,
  users: UsersThreeIcon,
  calendar: CalendarCheckIcon,
  airplane: AirplaneTiltIcon,
  presentation: PresentationChartIcon,
  handshake: HandshakeIcon,
};

const process = [
  {
    icon: ChatCircleTextIcon,
    title: "Consult",
    description: "Share your goals, headcount, budget band, and dates — we listen first.",
  },
  {
    icon: FileTextIcon,
    title: "Propose",
    description: "A detailed, itemized proposal within 48 hours, with 2-3 options where useful.",
  },
  {
    icon: HandshakeIcon,
    title: "Confirm & Book",
    description: "We lock in rates, handle paperwork, and share a single itinerary document.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Travel & Support",
    description: "On-ground coordination and 24x7 WhatsApp support for the whole group.",
  },
];

export default function CorporateTravelPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate & MICE Travel"
        title="Business travel, handled end-to-end"
        description="From a 12-person offsite in Kutch to a multi-city conference tour, one dedicated account manager owns the entire journey."
        image="https://images.unsplash.com/photo-1517940001917-1c03b8b1b85b?auto=format&fit=crop&w=2000&q=80"
        imageAlt="A business traveller working from a sunlit airport terminal"
      />

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="What We Handle"
          title="A single desk for every kind of business trip"
          description="Whether it's a leadership offsite or recurring travel for a distributed team, our corporate desk adapts to your policy and approval process."
        />
        <div className="mt-10 flex flex-col">
          {corporateServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title}>
                <div className="flex items-start gap-6 border-t border-border py-7 last:border-b md:gap-10">
                  <span className="font-display text-sm text-accent md:min-w-10 md:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon size={22} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                  <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                    <p className="font-display text-lg font-semibold text-foreground sm:w-64 sm:shrink-0">
                      {service.title}
                    </p>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-dark py-16 md:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              How It Works
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white md:text-4xl">
              A straightforward four-step process
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col">
            {process.map((step, index) => (
              <Reveal key={step.title}>
                <div className="flex items-start gap-6 border-t border-white/15 py-7 last:border-b md:gap-10">
                  <span className="font-display text-sm text-accent md:min-w-10 md:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <step.icon size={22} weight="fill" className="mt-0.5 shrink-0 text-white/70" />
                  <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                    <p className="font-display text-lg font-semibold text-white sm:w-64 sm:shrink-0">
                      {step.title}
                    </p>
                    <p className="text-sm text-white/70 md:text-base">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get Started
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground md:text-4xl">
            Request a corporate travel proposal
          </h2>
          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            Tell us about your team and travel goals — our corporate desk typically responds
            within one business day with a detailed proposal.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {[
              "Negotiated corporate rates on flights & hotels",
              "GST-compliant invoicing for easy reimbursement",
              "Single point of contact from proposal to return",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-lifted md:p-8">
            <InquiryForm variant="corporate" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
