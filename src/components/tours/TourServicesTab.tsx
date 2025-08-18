import React from "react";
import { Tour } from "@/lib/data";

interface TourServicesTabProps {
  tour: Tour;
}

const TourServicesTab: React.FC<TourServicesTabProps> = ({ tour }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
        What's Included & Excluded
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Included */}
        <div className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg border border-[var(--earth-medium)]/20">
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-[var(--earth-accent)] mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            What's Included
          </h3>
          <ul className="space-y-4">
            {tour.includedServices.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="h-5 w-5 mr-3 rounded-full bg-[var(--earth-accent)]/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[var(--earth-accent)]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[var(--earth-light)]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excluded */}
        <div className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg border border-[var(--earth-medium)]/20">
          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
            <span className="text-red-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            What's Excluded
          </h3>
          <ul className="space-y-4">
            {tour.excludedServices.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="h-5 w-5 mr-3 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[var(--earth-light)]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourServicesTab;
