import React from "react";
import Link from "next/link";

export default function TourNotFound() {
  return (
    <div className="min-h-screen bg-[var(--earth-darkest)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl text-[var(--earth-highlight)] mb-4">
          Tour Not Found
        </h1>
        <p className="text-[var(--earth-light)] mb-8">
          The tour you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/tours"
          className="px-6 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80"
        >
          Browse All Tours
        </Link>
      </div>
    </div>
  );
}
