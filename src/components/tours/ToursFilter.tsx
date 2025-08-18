import React from "react";

interface ToursFilterProps {
  activeCategory: string;
  activeLocation: string | null;
  sortOption: string;
  isSortMenuOpen: boolean;
  isFilterMenuOpen: boolean;
  setActiveCategory: (category: string) => void;
  setActiveLocation: (location: string | null) => void;
  setSortOption: (option: string) => void;
  setIsSortMenuOpen: (isOpen: boolean) => void;
  setIsFilterMenuOpen: (isOpen: boolean) => void;
  locationOptions: string[];
  tourCategories: string[];
}

const ToursFilter: React.FC<ToursFilterProps> = ({
  activeCategory,
  activeLocation,
  sortOption,
  isSortMenuOpen,
  isFilterMenuOpen,
  setActiveCategory,
  setActiveLocation,
  setSortOption,
  setIsSortMenuOpen,
  setIsFilterMenuOpen,
  locationOptions,
  tourCategories,
}) => {
  return (
    <section className="top-16 z-20 py-4 bg-[var(--earth-darkest)] border-b border-[var(--earth-medium)]/30 backdrop-filter backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto">
        {/* Main controls container */}
        <div className="flex flex-col space-y-4">
          {/* First row: Categories in a compact grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 mb-8 w-full">
            <button
              onClick={() => setActiveCategory("All Tours")}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap transition-all ${
                activeCategory === "All Tours"
                  ? "bg-[var(--earth-accent)] text-[var(--earth-darkest)] font-medium"
                  : "bg-[var(--earth-dark)]/30 text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
              }`}
            >
              All Tours
            </button>

            {tourCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-2 text-sm rounded-md whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-[var(--earth-accent)] text-[var(--earth-darkest)] font-medium"
                    : "bg-[var(--earth-dark)]/30 text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Second row: Filter & Sort controls in a clean layout */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Location filter dropdown */}
            <div className="relative flex-grow sm:flex-grow-0">
              <button
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className={`flex items-center justify-between w-full sm:w-auto min-w-[170px] gap-2 px-4 py-2 text-sm rounded-md transition-all ${
                  activeLocation
                    ? "bg-[var(--earth-accent)] text-[var(--earth-darkest)] font-medium"
                    : "bg-[var(--earth-dark)]/30 text-[var(--earth-light)] hover:bg-[var(--earth-dark)]"
                }`}
              >
                <span className="truncate">
                  {activeLocation || "Filter by location"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 flex-shrink-0 transition-transform ${
                    isFilterMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isFilterMenuOpen && (
                <div className="absolute mt-2 w-full sm:w-48 py-2 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md shadow-lg z-30">
                  <button
                    onClick={() => {
                      setActiveLocation(null);
                      setIsFilterMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                  >
                    All Locations
                  </button>
                  {locationOptions.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setActiveLocation(location);
                        setIsFilterMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort options - custom dropdown to match filter style */}
            <div className="relative flex-grow sm:flex-grow-0">
              <button
                onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
                className={`flex items-center justify-between w-full sm:w-auto min-w-[170px] gap-2 px-4 py-2 text-sm rounded-md transition-all ${
                  sortOption !== "default"
                    ? "bg-[var(--earth-accent)] text-[var(--earth-darkest)] font-medium"
                    : "bg-[var(--earth-dark)]/30 text-[var(--earth-light)] hover:bg-[var(--earth-dark)]"
                }`}
              >
                <span className="truncate">
                  {sortOption === "default"
                    ? "Sort by"
                    : sortOption === "a-z"
                    ? "A to Z"
                    : sortOption === "z-a"
                    ? "Z to A"
                    : sortOption === "price-low-high"
                    ? "Price: Low to High"
                    : "Price: High to Low"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 flex-shrink-0 transition-transform ${
                    isSortMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isSortMenuOpen && (
                <div className="absolute mt-2 w-full sm:w-48 py-2 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md shadow-lg z-30">
                  <button
                    onClick={() => {
                      setSortOption("default");
                      setIsSortMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                  >
                    Sort by
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("a-z");
                      setIsSortMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                  >
                    A to Z
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("z-a");
                      setIsSortMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                  >
                    Z to A
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("price-low-high");
                      setIsSortMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("price-high-low");
                      setIsSortMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-[var(--earth-light)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-highlight)]"
                  >
                    Price: High to Low
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursFilter;
