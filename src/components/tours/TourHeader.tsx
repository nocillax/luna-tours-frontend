import React from "react";
import TourRating from "./TourRating";
import { Tour } from "@/lib/data";

interface TourHeaderProps {
  tour: Tour;
  averageRating: number;
}

const TourHeader: React.FC<TourHeaderProps> = ({ tour, averageRating }) => {
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

      {/* Key info pills */}
      <div className="flex flex-wrap gap-3">
        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[var(--earth-accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-[var(--earth-light)] text-sm">
              {tour.duration}
            </span>
          </div>
        </div>

        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[var(--earth-accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-[var(--earth-light)] text-sm">
              {tour.groupSize}
            </span>
          </div>
        </div>

        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[var(--earth-accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            <span className="text-[var(--earth-light)] text-sm">
              {tour.languages.join(", ")}
            </span>
          </div>
        </div>

        <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[var(--earth-accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <span className="text-[var(--earth-light)] text-sm">
              {tour.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourHeader;
