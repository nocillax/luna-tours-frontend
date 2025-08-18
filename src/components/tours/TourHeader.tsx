import React from "react";
import TourRating from "./TourRating";
import { Tour } from "@/lib/data";
import {
  ClockIcon,
  UserGroupIcon,
  LanguageIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

interface TourHeaderProps {
  tour: Tour;
  averageRating: number;
}

export default function TourHeader({ tour, averageRating }: TourHeaderProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--earth-highlight)] mb-2">
        {tour.title}
      </h1>
      <div className="flex items-center mb-3">
        <TourRating value={averageRating} reviewCount={tour.reviews.length} />
      </div>
      <p className="text-lg text-[var(--earth-light)] mb-4">
        {tour.shortDescription}
      </p>

      {/* tour details */}
      <div className="flex flex-wrap gap-3">
        {/* duration pill */}
        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-[var(--earth-accent)]" />
            <span className="text-[var(--earth-light)] text-sm">
              {tour.duration}
            </span>
          </div>
        </div>

        {/* group size pill */}
        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <UserGroupIcon className="h-5 w-5 text-[var(--earth-accent)]" />
            <span className="text-[var(--earth-light)] text-sm">
              {tour.groupSize}
            </span>
          </div>
        </div>

        {/* languages pill */}
        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <LanguageIcon className="h-5 w-5 text-[var(--earth-accent)]" />
            <span className="text-[var(--earth-light)] text-sm">
              {tour.languages.join(", ")}
            </span>
          </div>
        </div>

        {/* category pill */}
        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <TagIcon className="h-5 w-5 text-[var(--earth-accent)]" />
            <span className="text-[var(--earth-light)] text-sm">
              {tour.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
