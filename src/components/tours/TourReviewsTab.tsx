import React from "react";
import { Tour } from "@/lib/data";
import TourReviewForm from "./TourReviewForm";

interface TourReviewsTabProps {
  tour: Tour;
  showReviewForm: boolean;
  setShowReviewForm: (show: boolean) => void;
  handleReviewSubmit: (e: React.FormEvent) => void;
  toggleReviewForm: () => void;
}

const TourReviewsTab: React.FC<TourReviewsTabProps> = ({
  tour,
  showReviewForm,
  setShowReviewForm,
  handleReviewSubmit,
  toggleReviewForm,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[var(--earth-light)]">
          Guest Reviews
        </h2>
        <button
          onClick={toggleReviewForm}
          className="px-5 py-2.5 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80 transition-all text-sm font-medium"
        >
          Write a Review
        </button>
      </div>

      {/* Review form */}
      <TourReviewForm
        showReviewForm={showReviewForm}
        setShowReviewForm={setShowReviewForm}
        handleReviewSubmit={handleReviewSubmit}
      />

      {/* Reviews list */}
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
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      star <= review.rating ? "text-amber-400" : "text-gray-500"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
};

export default TourReviewsTab;
