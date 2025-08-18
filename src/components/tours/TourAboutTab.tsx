import React from "react";
import { Tour } from "@/lib/data";

interface TourAboutTabProps {
  tour: Tour;
}

const TourAboutTab: React.FC<TourAboutTabProps> = ({ tour }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-6">
        About This Tour
      </h2>
      <div className="prose prose-invert prose-headings:text-[var(--earth-light)] prose-p:text-[var(--earth-light)]/80 max-w-none mb-8">
        <p className="text-lg leading-relaxed mb-6">{tour.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Tour Highlights */}
        <div>
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-[var(--earth-accent)] mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            Tour Highlights
          </h3>
          <ul className="space-y-3">
            {/* Create some mock highlights based on the description and itinerary */}
            {tour.itinerary.map((day) => (
              <li key={day.day} className="flex items-start">
                <span className="text-[var(--earth-accent)] mr-3 mt-1">✓</span>
                <span className="text-[var(--earth-light)]/80">
                  {day.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tour Locations */}
        <div>
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-[var(--earth-accent)] mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Tour Locations
          </h3>
          <div className="flex flex-wrap gap-2">
            {tour.locations.map((location) => (
              <span
                key={location}
                className="px-3 py-1.5 bg-[var(--earth-dark)]/50 text-[var(--earth-light)] text-sm rounded-full"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourAboutTab;
