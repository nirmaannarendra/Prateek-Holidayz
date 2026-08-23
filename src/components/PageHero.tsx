import Image from "next/image";
import { CurtainReveal, Reveal, TextReveal } from "./motion";
import { PhotoGrain } from "./PhotoGrain";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  priority = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="img-grade object-cover"
      />
      <PhotoGrain />
      <CurtainReveal viewport={false} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-primary-dark/30" />
      <div className="container-page relative z-10 pb-16 pt-40">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {eyebrow}
          </span>
        </Reveal>
        <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-semibold text-white md:text-5xl">
          <TextReveal delay={0.1} viewport={false}>
            {title}
          </TextReveal>
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-xl text-balance text-white/85 md:text-lg">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
