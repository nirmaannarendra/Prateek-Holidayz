import Image from "next/image";
import Link from "next/link";
import { ClockIcon, CompassIcon, HandCoinsIcon, ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/motion";
import { PhotoGrain } from "@/components/PhotoGrain";
import { companyInfo, featuredPackages, testimonials } from "@/lib/data";

const categoryLinks = [
  { label: "Gujarat & Kutch", href: "/destinations?category=gujarat" },
  { label: "Pan-India", href: "/destinations?category=pan-india" },
  { label: "International", href: "/destinations?category=international" },
  { label: "Pilgrimage & Yatra", href: "/destinations?category=pilgrimage" },
];

const howWeWork = [
  {
    icon: CompassIcon,
    title: "Pan-India Expertise",
    description: "14+ years planning trips across India, from Kutch to Kerala — we know the terrain.",
  },
  {
    icon: ClockIcon,
    title: "24x7 WhatsApp Support",
    description: "A real consultant is one message away, before, during, and after your trip.",
  },
  {
    icon: HandCoinsIcon,
    title: "Transparent Pricing",
    description: "No hidden charges. Every quote itemizes what's included and what isn't.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Vetted Stays & Vendors",
    description: "Every hotel, resort, and driver on our list is personally inspected by our team.",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Philosophy */}
      <section className="container-page flex flex-col items-center py-20 text-center md:py-28">
        <Reveal>
          <p className="text-balance font-display text-2xl font-semibold leading-[1.3] text-foreground sm:text-3xl md:text-4xl">
            We believe a good trip is never generic.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-1 text-balance font-display text-2xl font-semibold leading-[1.3] text-muted-foreground sm:text-3xl md:text-4xl">
            It&apos;s built around who&apos;s actually going, and why.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-balance text-muted-foreground md:text-lg">
            Fourteen years in, every itinerary we send out is still written by a person who has
            been there — not assembled from a template.
          </p>
        </Reveal>
      </section>

      {/* Featured journeys */}
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Featured Journeys</Eyebrow>
              <Reveal delay={0.1}>
                <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-semibold text-foreground md:text-4xl">
                  A few places worth rearranging your year for.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-10 flex flex-col">
            {featuredPackages.map((pkg, index) => (
              <Reveal key={pkg.slug}>
                <Link
                  href={`/destinations/${pkg.slug}`}
                  className="group flex items-center gap-5 border-t border-border py-6 transition-[padding] duration-500 ease-out last:border-b hover:pl-3 md:gap-10 md:py-8 md:hover:pl-4"
                >
                  <span className="font-display text-sm text-muted-foreground/70 md:min-w-10 md:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <span className="font-display text-xl font-semibold text-foreground md:text-3xl">
                      {pkg.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {pkg.location} &middot; {pkg.duration}
                    </span>
                  </div>
                  <div className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-xl shadow-lifted sm:block md:h-32 md:w-52">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="208px"
                      className="img-grade object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <PhotoGrain />
                  </div>
                  <span className="hidden text-xl text-muted-foreground transition-transform duration-500 ease-out group-hover:translate-x-1.5 sm:inline">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-8 text-center md:text-right">
            <Link href="/destinations" className="text-sm font-semibold text-accent">
              View all packages &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Pilgrimage interstitial */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
        <Image
          src="https://images.unsplash.com/photo-1717326630799-703fe906e283?auto=format&fit=crop&w=1920&q=80"
          alt="Temple spire with a traditional flag in Dwarka, Gujarat"
          fill
          sizes="100vw"
          className="img-grade object-cover"
        />
        <PhotoGrain />
        <div className="absolute inset-0 bg-primary-dark/80" />
        <div className="container-page relative z-10">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Pilgrimage &amp; Yatra
            </span>
            <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
              Some journeys aren&apos;t about the view. They&apos;re about arriving somewhere
              that&apos;s been calling you.
            </p>
            <p className="mt-4 text-balance text-white/75 md:text-lg">
              From Dwarka and Somnath to Ambaji and Pavagadh, our yatra packages are paced for
              comfort — sattvic meals, accessible stays, and someone on hand to help with darshan
              queues.
            </p>
            <Link
              href="/destinations?category=pilgrimage"
              className="link-underline mt-6 text-sm font-semibold text-white"
            >
              Explore Yatra Packages &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="container-page py-16 md:py-24">
        <Eyebrow>How We Work</Eyebrow>
        <Reveal delay={0.1}>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-semibold text-foreground md:text-4xl">
            Four things we don&apos;t compromise on.
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-col">
          {howWeWork.map((item, index) => (
            <Reveal key={item.title}>
              <div className="flex items-start gap-6 border-t border-border py-7 last:border-b md:gap-10">
                <span className="font-display text-sm text-accent md:min-w-10 md:text-base">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <item.icon size={22} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                  <p className="font-display text-lg font-semibold text-foreground sm:w-64 sm:shrink-0">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-page">
          <Eyebrow>Traveller Stories</Eyebrow>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name}>
                <div className="flex h-full flex-col gap-4">
                  <span className="font-display text-4xl leading-none text-accent">&ldquo;</span>
                  <p className="flex-1 text-balance text-sm leading-relaxed text-foreground/85 md:text-base">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-3">
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location} &middot; {testimonial.trip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="https://images.unsplash.com/photo-1572339152622-ce5e57956129?auto=format&fit=crop&w=1920&q=80"
          alt="Palm trees silhouetted against a golden sunset"
          fill
          sizes="100vw"
          className="img-grade object-cover"
        />
        <PhotoGrain />
        <div className="absolute inset-0 bg-primary-dark/85" />
        <div className="container-page relative z-10 text-center">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="text-balance font-display text-3xl font-semibold text-white md:text-4xl">
              Let&apos;s plan your next journey
            </h2>
            <p className="mt-3 text-balance text-white/80">
              Tell us where you want to go — we&apos;ll take care of the rest.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="flex min-h-12 cursor-pointer items-center rounded-full bg-accent-dark px-7 py-3 text-sm font-semibold text-white shadow-lifted transition-transform duration-200 hover:scale-105 hover:bg-accent"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex min-h-12 cursor-pointer items-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Call {companyInfo.phone}
              </a>
            </div>
            <p className="mt-8 text-sm text-white/60">
              Planning for a team instead?{" "}
              <Link href="/corporate-travel" className="link-underline font-semibold text-white">
                See our Corporate &amp; MICE desk &rarr;
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
