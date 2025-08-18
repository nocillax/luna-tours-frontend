import React, { useRef } from "react";

interface TourReviewFormProps {
  showReviewForm: boolean;
  setShowReviewForm: (show: boolean) => void;
  handleReviewSubmit: (e: React.FormEvent) => void;
}

const TourReviewForm: React.FC<TourReviewFormProps> = ({
  showReviewForm,
  setShowReviewForm,
  handleReviewSubmit,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  if (!showReviewForm) return null;

  return (
    <div
      ref={formRef}
      className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg mb-8 border border-[var(--earth-medium)]/20"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[var(--earth-light)]">
          Write a Review
        </h3>
        <button
          onClick={() => setShowReviewForm(false)}
          className="text-[var(--earth-light)]/70 hover:text-[var(--earth-light)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form
        onSubmit={handleReviewSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Review *
          </label>
          <textarea
            className="w-full px-4 py-3 h-32 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
            required
          ></textarea>
        </div>
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
};

export default TourReviewForm;
