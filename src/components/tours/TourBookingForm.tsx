import React, { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface TourBookingFormProps {
  showBookingForm: boolean;
  setShowBookingForm: (show: boolean) => void;
  handleBookingSubmit: (e: React.FormEvent) => void;
}

export default function TourBookingForm({
  showBookingForm,
  setShowBookingForm,
  handleBookingSubmit,
}: TourBookingFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  if (!showBookingForm) return null;

  return (
    <div
      ref={formRef}
      className="mb-12 bg-[var(--earth-dark)]/30 p-6 rounded-lg border border-[var(--earth-medium)]/20"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-[var(--earth-light)]">
          Book this Tour
        </h3>
        {/* close button */}
        <button
          onClick={() => setShowBookingForm(false)}
          className="text-[var(--earth-light)]/70 hover:text-[var(--earth-light)]"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <form
        onSubmit={handleBookingSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* name field */}
        <div>
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Full Name *
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

        {/* phone field */}
        <div>
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Phone
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
          />
        </div>

        {/* date picker */}
        <div>
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Date *
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
            required
          />
        </div>

        {/* people count */}
        <div>
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Number of People *
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
            required
          />
        </div>

        {/* special requests */}
        <div className="md:col-span-2">
          <label className="block text-[var(--earth-light)] mb-2 text-sm">
            Special Requests
          </label>
          <textarea className="w-full px-4 py-3 h-24 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"></textarea>
        </div>

        {/* submit button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/90 transition-all font-extrabold"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}
