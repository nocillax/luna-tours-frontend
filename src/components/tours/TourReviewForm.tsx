import React, { useRef } from "react";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/solid";

interface TourReviewFormProps {
  showReviewForm: boolean;
  setShowReviewForm: (show: boolean) => void;
  handleReviewSubmit: (e: React.FormEvent) => void;
}

export default function TourReviewForm({
  showReviewForm,
  setShowReviewForm,
  handleReviewSubmit,
}: TourReviewFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  if (!showReviewForm) return null;

  return (
    <div
      ref={formRef}
      className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg mb-8 border border-[var(--earth-medium)]/20"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium text-[var(--earth-light)]">
          Write a Review
        </h3>
        {/* close button */}
        <button
          onClick={() => setShowReviewForm(false)}
          className="text-[var(--earth-light)]/70 hover:text-[var(--earth-light)]"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      <form
        onSubmit={handleReviewSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* name field */}
        <div>
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Name *
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
            required
          />
        </div>

        {/* email field */}
        <div>
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Email *
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
            required
          />
        </div>

        {/* rating stars */}
        <div className="md:col-span-2">
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Rating *
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                className="text-gray-400 hover:text-amber-400 focus:outline-none transition-colors"
              >
                <StarIcon className="h-8 w-8" />
              </button>
            ))}
          </div>
        </div>

        {/* review text */}
        <div className="md:col-span-2">
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Review *
          </label>
          <textarea
            className="w-full px-4 py-3 h-32 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
            required
          ></textarea>
        </div>

        {/* submit button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80 transition-all font-medium"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}
