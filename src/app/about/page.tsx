import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  CompassIcon,
  HandHeartIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoGrain } from "@/components/PhotoGrain";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Prateek Holidayz is an Ahmedabad-based travel agency crafting Gujarat, pan-India, international, and corporate journeys since 2012.",
};

const values = [
  {
    icon: CompassIcon,
    title: "Local First",
    description: "We're based in Ahmedabad and personally travel every route we sell, from Gujarat to the Himalayas.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Radical Transparency",
    description: "Every itinerary is itemized. No surprise costs, no vague inclusions.",
  },
  {
    icon: HandHeartIcon,
    title: "Genuine Care",
    description: "From a solo traveller's first trip to a 50-person offsite, every enquiry gets a real person.",
  },
  {
    icon: SparkleIcon,
    title: "Thoughtful Detail",
    description: "The small things — a birthday cake at the resort, a wheelchair-friendly route — are never an afterthought.",
  },
];

const milestones = [
  { year: "2012", title: "Founded in Ahmedabad", description: "Started as a two-person desk booking domestic Gujarat trips." },
  { year: "2016", title: "Pilgrimage circuits launched", description: "Added dedicated Dwarka-Somnath and Ambaji-Pavagadh yatra packages." },
  { year: "2019", title: "Corporate travel desk", description: "Opened a dedicated MICE and corporate travel management vertical." },
  { year: "2023", title: "32,000+ travellers", description: "Crossed 32,000 travellers served across 85+ destinations worldwide." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Fourteen years of showing India to the world — and the world to India"
        description="We're a home-grown Ahmedabad travel agency built on local knowledge, honest pricing, and a genuine love for the journey."
        image="https://images.unsplash.com/photo-1678038737507-91ac7e9f7843?auto=format&fit=crop&w=2000&q=80"
        imageAlt="The Statue of Unity rising against the sky above the Narmada river valley"
      />

      <section className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lifted">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Travel consultants celebrating with a client after finalizing an itinerary"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="img-grade object-cover"
            />
            <PhotoGrain />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Story
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground md:text-4xl">
            Started by two travellers who couldn&apos;t find honest itineraries
          </h2>
          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            Prateek Holidayz began in 2012 out of a small office in Navrangpura, born from a simple
            frustration: too many Indian itineraries were vague, over-priced, or written by
            people who had never actually visited the places they sold.
          </p>
          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            Today we&apos;re a full-service agency covering Gujarat, pan-India, and international
            leisure travel, plus a dedicated corporate desk — but the standard hasn&apos;t
            changed: if we wouldn&apos;t send our own family on a trip, we don&apos;t sell it.
          </p>
        </Reveal>
      </section>

      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            index="01"
            eyebrow="What We Believe"
            title="The values behind every itinerary"
          />
          <div className="mt-10 flex flex-col">
            {values.map((value, index) => (
              <Reveal key={value.title}>
                <div className="flex items-start gap-6 border-t border-border py-7 last:border-b md:gap-10">
                  <span className="font-display text-sm text-accent md:min-w-10 md:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <value.icon size={22} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                  <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                    <p className="font-display text-lg font-semibold text-foreground sm:w-64 sm:shrink-0">
                      {value.title}
                    </p>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading index="02" eyebrow="Milestones" title="Fourteen years, one trip at a time" />
        <div className="relative mt-12 flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 0.05} className="relative">
              <span className="absolute -left-[2.6rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent sm:-left-[3.1rem]">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="font-display text-xl font-semibold text-primary">
                {milestone.year}
              </span>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {milestone.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-10 pb-16 md:grid-cols-2 md:pb-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Visit Us
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground md:text-4xl">
            Our Ahmedabad office
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-start gap-3 text-sm text-foreground/80">
              <MapPinIcon size={20} weight="fill" className="mt-0.5 shrink-0 text-accent" />
              {companyInfo.address}
            </div>
            <div className="flex items-start gap-3 text-sm text-foreground/80">
              <ClockIcon size={20} className="mt-0.5 shrink-0 text-accent" />
              {companyInfo.hours}
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 cursor-pointer items-center rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-primary"
          >
            Get in Touch
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-80 overflow-hidden rounded-2xl border border-border shadow-soft md:h-full">
            <iframe
              title="Prateek Holidayz office location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.mapsQuery)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
