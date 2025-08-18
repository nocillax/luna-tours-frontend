import React from "react";
import TourCard from "@/components/tours/TourCard";
import { Tour } from "@/lib/data";

interface ToursListProps {
  filteredTours: Tour[];
  resetFilters: () => void;
}

const ToursList: React.FC<ToursListProps> = ({
  filteredTours,
  resetFilters,
}) => {
  return (
    <section className="py-12 px-4 bg-[var(--earth-darkest)]">
      <div className="max-w-7xl mx-auto">
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-[var(--earth-light)] mb-4">
              No tours found matching your criteria
            </div>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToursList;
