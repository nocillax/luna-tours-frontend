import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/lib/data";

interface SimilarToursProps {
  tours: Tour[];
}

export default function SimilarTours({ tours }: SimilarToursProps) {
  return (
    <div className="mt-16 pt-12 border-t border-[var(--earth-medium)]/20">
      <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
        Similar Tours You Might Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tours.map((similarTour) => (
          <Link
            href={`/tours/${similarTour.slug}`}
            key={similarTour.id}
            className="group relative h-[360px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:shadow-[var(--earth-accent)]/20 transition-all duration-500"
          >
            {/* tour image */}
            <div className="absolute inset-0 w-full h-full bg-[var(--earth-medium)]">
              {(similarTour.gallery?.length > 0 || similarTour.coverImage) && (
                <Image
                  src={
                    similarTour.gallery?.length > 0
                      ? similarTour.gallery[0]
                      : similarTour.coverImage
                  }
                  alt={similarTour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>

            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/95 via-[var(--earth-dark)]/75 to-transparent"></div>

            {/* tour info */}
            <div className="absolute bottom-0 w-full p-6">
              <h3 className="text-xl font-bold text-[var(--earth-highlight)] group-hover:text-[var(--earth-light)] transition-colors">
                {similarTour.title}
              </h3>
              <p className="text-[var(--earth-light)]/80 text-sm mt-2 line-clamp-2">
                {similarTour.shortDescription}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[var(--earth-highlight)] font-bold">
                  ${similarTour.price}
                  <span className="text-[var(--earth-light)]/50 text-xs font-normal ml-1">
                    / person
                  </span>
                </span>
                <span className="text-[var(--earth-light)]/70 text-sm">
                  {similarTour.duration}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
