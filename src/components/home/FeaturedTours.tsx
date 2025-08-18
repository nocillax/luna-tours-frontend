import React from "react";
import Link from "next/link";
import TourCard from "@/components/tours/TourCard";
import { Tour } from "@/lib/data";

interface FeaturedToursProps {
  featuredTours: Tour[];
}

export default function FeaturedTours({ featuredTours }: FeaturedToursProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-extrabold mb-8 text-center">
          Popular Tours
        </h2>

        {/* tour cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        {/* view all button */}
        <div className="mt-12 text-center">
          <Link
            href="/tours"
            className="inline-block hover:text-[var(--earth-accent)] bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] text-[var(--earth-darkest)] font-bold py-3 px-8 rounded-md transition duration-300"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
