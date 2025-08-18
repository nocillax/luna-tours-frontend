import React from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface ToursSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ToursSearch({
  searchTerm,
  setSearchTerm,
}: ToursSearchProps) {
  return (
    <div className="w-full mb-4">
      <div className="relative">
        {/* search input */}
        <input
          type="text"
          placeholder="Search tours by name, location, or activity..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-12 rounded-lg bg-[var(--earth-dark)]/20 border border-[var(--earth-medium)]/30 text-[var(--earth-light)] placeholder-[var(--earth-light)]/60 focus:outline-none focus:ring-1 focus:ring-[var(--earth-accent)]/50 focus:border-[var(--earth-accent)]"
        />
        {/* search icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-[var(--earth-light)]/70" />
        </div>
        {/* clear button */}
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--earth-light)]/70 hover:text-[var(--earth-light)]"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
