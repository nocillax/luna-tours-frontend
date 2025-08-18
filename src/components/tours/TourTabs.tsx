import React from "react";

interface TourTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TourTabs({ activeTab, setActiveTab }: TourTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-0 border-b border-[var(--earth-medium)]/30 mb-8">
      {/* about tab */}
      <button
        className={`px-4 sm:px-6 py-3 font-medium text-sm whitespace-nowrap flex-grow sm:flex-grow-0 ${
          activeTab === "about"
            ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
            : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
        }`}
        onClick={() => setActiveTab("about")}
      >
        About
      </button>

      {/* itinerary tab */}
      <button
        className={`px-4 sm:px-6 py-3 font-medium text-sm whitespace-nowrap flex-grow sm:flex-grow-0 ${
          activeTab === "itinerary"
            ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
            : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
        }`}
        onClick={() => setActiveTab("itinerary")}
      >
        Itinerary
      </button>

      {/* services tab */}
      <button
        className={`px-4 sm:px-6 py-3 font-medium text-sm whitespace-nowrap flex-grow sm:flex-grow-0 ${
          activeTab === "services"
            ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
            : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
        }`}
        onClick={() => setActiveTab("services")}
      >
        Included/Excluded
      </button>

      {/* reviews tab */}
      <button
        className={`px-4 sm:px-6 py-3 font-medium text-sm whitespace-nowrap flex-grow sm:flex-grow-0 ${
          activeTab === "reviews"
            ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
            : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
        }`}
        onClick={() => setActiveTab("reviews")}
      >
        Reviews
      </button>
    </div>
  );
}
