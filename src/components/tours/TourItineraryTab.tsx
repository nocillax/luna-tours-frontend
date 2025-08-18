import React from "react";
import { Tour } from "@/lib/data";
import ItineraryDayItem from "@/components/tours/ItineraryDayItem";

interface TourItineraryTabProps {
  tour: Tour;
}

export default function TourItineraryTab({ tour }: TourItineraryTabProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
        Your Journey Day by Day
      </h2>

      {/* itinerary timeline */}
      <div className="space-y-10">
        {tour.itinerary.map((day, index) => (
          <ItineraryDayItem
            key={day.day}
            day={day}
            index={index}
            isLast={index === tour.itinerary.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
