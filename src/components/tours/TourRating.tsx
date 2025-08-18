import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

interface TourRatingProps {
  value: number;
  reviewCount: number;
  size?: "small" | "medium" | "large";
  showCount?: boolean;
}

export default function TourRating({
  value,
  reviewCount,
  size = "medium",
  showCount = true,
}: TourRatingProps) {
  // set icon size based on prop
  const starSize =
    size === "small" ? "h-4 w-4" : size === "large" ? "h-6 w-6" : "h-5 w-5";

  return (
    <div className="flex items-center">
      {/* star icons */}
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`${starSize} ${
            star <= Math.round(value) ? "text-amber-400" : "text-gray-500"
          }`}
        />
      ))}
      {/* review count */}
      {showCount && (
        <span className="ml-2 text-[var(--earth-light)]">
          {value.toFixed(1)} ({reviewCount}{" "}
          {reviewCount === 1 ? "review" : "reviews"})
        </span>
      )}
    </div>
  );
}
