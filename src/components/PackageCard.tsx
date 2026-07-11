"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClockIcon, MapPinIcon } from "@phosphor-icons/react";
import { categoryLabels, type TravelPackage } from "@/lib/data";
import { PhotoGrain } from "./PhotoGrain";

export function PackageCard({ pkg }: { pkg: TravelPackage }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <Link
        href={`/destinations/${pkg.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-shadow duration-300 hover:shadow-lifted"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={pkg.image}
            alt={`${pkg.title} - ${pkg.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="img-grade object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <PhotoGrain />
          <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
            {categoryLabels[pkg.category]}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPinIcon size={16} weight="fill" className="text-accent" />
            {pkg.location}
          </div>
          <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
            {pkg.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{pkg.tagline}</p>
          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ClockIcon size={16} />
              {pkg.duration}
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                From
              </p>
              <p className="font-display text-base font-semibold text-primary">
                &#8377;{pkg.priceFrom.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
