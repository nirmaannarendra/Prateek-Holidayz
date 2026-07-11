import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DestinationsBrowser } from "@/components/DestinationsBrowser";

export const metadata: Metadata = {
  title: "Destinations & Packages",
  description:
    "Browse Gujarat & Kutch, pan-India, international, and pilgrimage travel packages crafted by Rann Voyages.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Find your next journey"
        description="From the salt flats of Kutch to sacred temples and international skylines — filter by the kind of trip you're after."
        image="https://images.unsplash.com/photo-1742107939655-4f8af7484dfa?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Mist rolling over tea plantations in the hills of Munnar, Kerala"
      />
      <section className="container-page py-16 md:py-24">
        <Suspense fallback={<div className="h-96" />}>
          <DestinationsBrowser />
        </Suspense>
      </section>
    </>
  );
}
