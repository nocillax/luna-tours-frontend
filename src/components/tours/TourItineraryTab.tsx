import React from "react";
import { Tour } from "@/lib/data";
import ItineraryDayItem from "@/components/ui/ItineraryDayItem";

interface TourItineraryTabProps {
  tour: Tour;
}

const TourItineraryTab: React.FC<TourItineraryTabProps> = ({ tour }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
        Your Journey Day by Day
      </h2>

      <div className="space-y-10">
        {tour.itinerary.map((day, index) => (
          <ItineraryDayItem
            key={day.day}
            day={day}
            index={index}
            isLast={index === tour.itinerary.length - 1}
            locations={tour.locations}
          />
        ))}
      </div>
    </div>
  );
};

export default TourItineraryTab;
