"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CompassIcon, StarIcon, UsersThreeIcon } from "@phosphor-icons/react";
import { CurtainReveal, TextReveal, useSafeReducedMotion } from "./motion";
import { WaveDivider } from "./WaveDivider";
import { PhotoGrain } from "./PhotoGrain";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const shouldReduceMotion = useSafeReducedMotion();
  const d = (value: number) => (shouldReduceMotion ? 0 : value);

  return (
    <section className="relative flex min-h-[94vh] items-end overflow-hidden pb-20 md:pb-24">
      <motion.div
        key={`hero-bg-${shouldReduceMotion ? "reduced" : "motion"}`}
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: d(7), ease: EASE_OUT }}
      >
        <Image
          src="https://images.unsplash.com/photo-1587307519295-2605c1396225?auto=format&fit=crop&w=2200&q=80"
          alt="Layered Himalayan ridgelines at dawn, Uttarakhand"
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover"
        />
        <PhotoGrain />
      </motion.div>
      <CurtainReveal viewport={false} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/45 to-primary-dark/10" />

      <motion.div
        key={`hero-caption-${shouldReduceMotion ? "reduced" : "motion"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: d(0.8), delay: d(0.6), ease: EASE_OUT }}
        className="absolute right-6 top-24 z-20 hidden items-center gap-3 text-white/70 md:right-14 md:flex"
      >
        <span className="h-px w-8 bg-white/40" />
        <span className="font-display text-xs uppercase tracking-[0.25em]">
          Uttarakhand &middot; The Himalayas
        </span>
      </motion.div>

      <div className="container-page relative z-10">
        <motion.div
          key={`hero-eyebrow-${shouldReduceMotion ? "reduced" : "motion"}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.6), ease: EASE_OUT }}
          className="flex items-center gap-3 text-white/75"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Ahmedabad-based &middot; Journeys across India and beyond
          </span>
        </motion.div>

        <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl md:text-7xl xl:text-8xl">
          <TextReveal delay={0.15} viewport={false}>
            Crafted journeys across <em className="italic text-primary-light">India</em> and
            beyond
          </TextReveal>
        </h1>

        <motion.p
          key={`hero-subtitle-${shouldReduceMotion ? "reduced" : "motion"}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.7), delay: d(0.2), ease: EASE_OUT }}
          className="mt-6 max-w-xl text-balance text-base text-white/85 md:text-lg"
        >
          From the White Rann of Kutch to Dubai skylines, Himalayan hill stations to corporate
          offsites — we plan every detail so you don&apos;t have to.
        </motion.p>

        <motion.div
          key={`hero-cta-${shouldReduceMotion ? "reduced" : "motion"}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.7), delay: d(0.3), ease: EASE_OUT }}
          className="mt-9 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/contact"
            className="flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-accent-dark px-7 py-3 text-sm font-semibold text-white shadow-lifted transition-transform duration-200 hover:scale-105 hover:bg-accent"
          >
            Plan My Trip
          </Link>
          <Link
            href="/destinations"
            className="link-underline text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            Explore Packages &rarr;
          </Link>
        </motion.div>

        <motion.div
          key={`hero-stats-${shouldReduceMotion ? "reduced" : "motion"}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.7), delay: d(0.45), ease: EASE_OUT }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-white/70"
        >
          <div className="flex items-center gap-2">
            <UsersThreeIcon size={17} weight="fill" className="text-accent" />
            <span className="text-xs uppercase tracking-wide">32,000+ travellers served</span>
          </div>
          <div className="flex items-center gap-2">
            <CompassIcon size={17} weight="fill" className="text-accent" />
            <span className="text-xs uppercase tracking-wide">85+ destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon size={17} weight="fill" className="text-accent" />
            <span className="text-xs uppercase tracking-wide">4.8/5 average rating</span>
          </div>
        </motion.div>
      </div>

      <WaveDivider className="z-10" />
    </section>
  );
}
