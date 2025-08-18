import React from "react";
import { Tour } from "@/lib/data";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";

interface TourAboutTabProps {
  tour: Tour;
}

export default function TourAboutTab({ tour }: TourAboutTabProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-6">
        About This Tour
      </h2>
      <div className="prose prose-invert prose-headings:text-[var(--earth-light)] prose-p:text-[var(--earth-light)]/80 max-w-none mb-8">
        <p className="text-lg leading-relaxed mb-6">{tour.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* highlights section */}
        <div>
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-[var(--earth-accent)] mr-2">
              <StarIcon className="h-5 w-5" />
            </span>
            Tour Highlights
          </h3>
          <ul className="space-y-3">
            {/* show key spots from itinerary */}
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

        {/* locations list */}
        <div>
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-[var(--earth-accent)] mr-2">
              <MapPinIcon className="h-5 w-5" />
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
}
