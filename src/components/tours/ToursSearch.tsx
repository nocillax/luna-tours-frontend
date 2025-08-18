import React from "react";

interface ToursSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ToursSearch: React.FC<ToursSearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="w-full mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tours by name, location, or activity..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-12 rounded-lg bg-[var(--earth-dark)]/20 border border-[var(--earth-medium)]/30 text-[var(--earth-light)] placeholder-[var(--earth-light)]/60 focus:outline-none focus:ring-1 focus:ring-[var(--earth-accent)]/50 focus:border-[var(--earth-accent)]"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[var(--earth-light)]/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--earth-light)]/70 hover:text-[var(--earth-light)]"
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
        )}
      </div>
    </div>
  );
};

export default ToursSearch;
