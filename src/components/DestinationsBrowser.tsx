"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PackageCard } from "./PackageCard";
import { useSafeReducedMotion } from "./motion";
import { categoryLabels, packages, type PackageCategory } from "@/lib/data";

type FilterValue = PackageCategory | "all";

const filters: { label: string; value: FilterValue }[] = [
  { label: "All Packages", value: "all" },
  ...(Object.entries(categoryLabels) as [PackageCategory, string][]).map(([value, label]) => ({
    label,
    value,
  })),
];

export function DestinationsBrowser() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as FilterValue | null;
  const [active, setActive] = useState<FilterValue>(
    initialCategory && filters.some((f) => f.value === initialCategory) ? initialCategory : "all"
  );

  const shouldReduceMotion = useSafeReducedMotion();

  const filteredPackages = useMemo(
    () => (active === "all" ? packages : packages.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="no-scrollbar flex gap-x-8 gap-y-3 overflow-x-auto border-b border-border sm:flex-wrap sm:overflow-visible">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            aria-pressed={active === filter.value}
            className={`relative min-h-11 shrink-0 cursor-pointer whitespace-nowrap pb-3 text-sm font-medium transition-colors duration-200 ${
              active === filter.value
                ? "text-accent"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {filter.label}
            {active === filter.value ? (
              <motion.span
                layoutId="destination-tab-underline"
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent"
              />
            ) : null}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredPackages.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          No packages in this category yet — message us and we&apos;ll craft one for you.
        </p>
      ) : null}
    </div>
  );
}
