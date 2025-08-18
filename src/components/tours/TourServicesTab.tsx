import React from "react";
import { Tour } from "@/lib/data";
import {
  CheckCircleIcon,
  XCircleIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface TourServicesTabProps {
  tour: Tour;
}

export default function TourServicesTab({ tour }: TourServicesTabProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
        What's Included & Excluded
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* included section */}
        <div className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg border border-[var(--earth-medium)]/20">
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-[var(--earth-accent)] mr-2">
              <CheckCircleIcon className="h-6 w-6" />
            </span>
            What's Included
          </h3>
          <ul className="space-y-4">
            {tour.includedServices.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="h-5 w-5 mr-3 rounded-full bg-[var(--earth-accent)]/20 flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-[var(--earth-accent)]" />
                </span>
                <span className="text-[var(--earth-light)]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* excluded section */}
        <div className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg border border-[var(--earth-medium)]/20">
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-red-500 mr-2">
              <XCircleIcon className="h-6 w-6" />
            </span>
            What's Excluded
          </h3>
          <ul className="space-y-4">
            {tour.excludedServices.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="h-5 w-5 mr-3 rounded-full bg-red-500/20 flex items-center justify-center">
                  <XMarkIcon className="h-4 w-4 text-red-500" />
                </span>
                <span className="text-[var(--earth-light)]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
