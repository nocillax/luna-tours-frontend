import React from "react";
import { Tour } from "@/lib/data";
import TourReviewForm from "./TourReviewForm";
import { StarIcon } from "@heroicons/react/24/solid";

interface TourReviewsTabProps {
  tour: Tour;
  showReviewForm: boolean;
  setShowReviewForm: (show: boolean) => void;
  handleReviewSubmit: (e: React.FormEvent) => void;
  toggleReviewForm: () => void;
}

export default function TourReviewsTab({
  tour,
  showReviewForm,
  setShowReviewForm,
  handleReviewSubmit,
  toggleReviewForm,
}: TourReviewsTabProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[var(--earth-light)]">
          Guest Reviews
        </h2>
        {/* add review button */}
        <button
          onClick={toggleReviewForm}
          className="px-5 py-2.5 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80 transition-all text-sm font-medium"
        >
          Write a Review
        </button>
      </div>

      {/* review form */}
      <TourReviewForm
        showReviewForm={showReviewForm}
        setShowReviewForm={setShowReviewForm}
        handleReviewSubmit={handleReviewSubmit}
      />

      {/* reviews list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tour.reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[var(--earth-dark)]/20 p-6 rounded-lg border border-[var(--earth-medium)]/10 transition-transform hover:translate-y-[-4px]"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-[var(--earth-light)] text-lg">
                {review.name}
              </h3>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating ? "text-amber-400" : "text-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[var(--earth-light)]/60 text-sm mb-3">
              {new Date(review.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-[var(--earth-light)]/80 italic">
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
