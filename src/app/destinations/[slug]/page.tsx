import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarCheckIcon,
  CaretRightIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PackageCard } from "@/components/PackageCard";
import { InquiryForm } from "@/components/InquiryForm";
import { PhotoGrain } from "@/components/PhotoGrain";
import { PackageProvider } from "@/components/PackageContext";
import { categoryLabels, companyInfo, packages } from "@/lib/data";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata(
  props: PageProps<"/destinations/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return {};

  return {
    title: pkg.title,
    description: pkg.tagline,
    alternates: { canonical: `https://prateekholidayz.in/destinations/${pkg.slug}` },
    openGraph: {
      title: `${pkg.title} | ${companyInfo.name}`,
      description: pkg.tagline,
      images: [{ url: pkg.image }],
    },
  };
}

export default async function PackageDetailPage(props: PageProps<"/destinations/[slug]">) {
  const { slug } = await props.params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) notFound();

  const related = packages
    .filter((p) => p.category === pkg.category && p.slug !== pkg.slug)
    .slice(0, 3);

  return (
    <PackageProvider packageTitle={pkg.title}>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.title} - ${pkg.location}`}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover"
        />
        <PhotoGrain />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/50 to-primary-dark/20" />
        <div className="container-page relative z-10 pb-12 pt-40">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-xs text-white/70">
              <Link href="/destinations" className="hover:text-white">
                Destinations
              </Link>
              <CaretRightIcon size={12} />
              <span>{categoryLabels[pkg.category]}</span>
            </nav>
            <h1 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold text-white md:text-5xl">
              {pkg.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
              <span className="flex items-center gap-1.5">
                <MapPinIcon size={16} weight="fill" className="text-accent" />
                {pkg.location}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon size={16} />
                {pkg.duration}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 md:grid-cols-[1fr_380px] md:py-24">
        <div className="flex flex-col gap-14">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foreground">Overview</h2>
            <p className="mt-4 text-balance text-muted-foreground md:text-lg">{pkg.description}</p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Trip Highlights
              </h2>
            </Reveal>
            <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
              {pkg.highlights.map((highlight) => (
                <StaggerItem key={highlight}>
                  <div className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-4">
                    <CheckCircleIcon size={20} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/85">{highlight}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Day-by-Day Itinerary
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-col gap-3">
              {pkg.itinerary.map((item, index) => (
                <Reveal key={item.day} delay={index * 0.05}>
                  <details
                    className="group rounded-xl border border-border bg-surface open:shadow-soft"
                    open={index === 0}
                  >
                    <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 px-5 py-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        <span className="block text-xs font-medium uppercase tracking-wide text-accent">
                          {item.day}
                        </span>
                        <span className="font-display text-base font-semibold text-foreground">
                          {item.title}
                        </span>
                      </span>
                      <CaretRightIcon
                        size={18}
                        className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-90"
                      />
                    </summary>
                    <p className="px-5 pb-5 pl-[4.25rem] text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-lg font-semibold text-foreground">Inclusions</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircleIcon size={18} weight="fill" className="mt-0.5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-lg font-semibold text-foreground">Exclusions</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <XCircleIcon size={18} weight="fill" className="mt-0.5 shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal className="md:sticky md:top-24 md:h-fit">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-lifted">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Starting from</p>
            <p className="font-display text-3xl font-semibold text-primary">
              &#8377;{pkg.priceFrom.toLocaleString("en-IN")}
              <span className="text-sm font-normal text-muted-foreground"> / person</span>
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarCheckIcon size={18} />
              {pkg.duration}
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-4 font-display text-base font-semibold text-foreground">
                Enquire about this trip
              </p>
              <InquiryForm variant="general" defaultDestination={pkg.category} packageTitle={pkg.title} />
            </div>
          </div>
        </Reveal>
      </section>

      {related.length > 0 ? (
        <section className="bg-surface-alt py-16 md:py-20">
          <div className="container-page">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                You might also like
              </h2>
            </Reveal>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPkg) => (
                <StaggerItem key={relatedPkg.slug}>
                  <PackageCard pkg={relatedPkg} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}
    </PackageProvider>
  );
}
