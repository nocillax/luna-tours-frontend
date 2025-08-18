import React from "react";
import Link from "next/link";

interface TourBookingCardProps {
  price: number;
  toggleBookingForm: () => void;
}

export default function TourBookingCard({
  price,
  toggleBookingForm,
}: TourBookingCardProps) {
  return (
    <div className="w-full lg:w-auto">
      {/* pricing card */}
      <div className="bg-[var(--earth-dark)]/30 py-6 px-12 rounded-lg border border-[var(--earth-medium)]/20">
        <div className="flex justify-between items-center mb-6">
          <span className="text-3xl font-bold text-[var(--earth-highlight)]">
            ${price}
          </span>
          <span className="text-[var(--earth-light)]">/person</span>
        </div>
        <div className="space-y-3">
          {/* book button */}
          <button
            onClick={toggleBookingForm}
            className="w-full py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/50 transition-all font-extrabold"
          >
            Book Now
          </button>

          {/* contact link */}
          <Link
            href="/contact"
            className="block w-full text-center py-3 border border-[var(--earth-accent)] text-[var(--earth-accent)] rounded-md hover:bg-[var(--earth-accent)]/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
