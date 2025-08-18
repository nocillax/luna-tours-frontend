"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TourCard from "@/components/ui/TourCard";
import { toursData, tourCategories } from "@/lib/data";

// Location options derived from tour data
const locationOptions = ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"];

export default function ToursPage() {
  // State for filtering and sorting
  const [activeCategory, setActiveCategory] = useState<string>("All Tours");
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>("default");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [filteredTours, setFilteredTours] = useState(toursData);

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    let result = [...toursData];

    // Apply category filter
    if (activeCategory !== "All Tours") {
      result = result.filter((tour) => tour.category === activeCategory);
    }

    // Apply location filter
    if (activeLocation) {
      result = result.filter((tour) =>
        tour.locations.some((loc) =>
          loc.toLowerCase().includes(activeLocation.toLowerCase())
        )
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Keep default order
        break;
    }

    setFilteredTours(result);
  }, [activeCategory, activeLocation, sortOption]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/japan-landscape.jpg"
          alt="Japanese tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-darkest)]/60 to-[var(--earth-darkest)]/90"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--earth-highlight)] font-montserrat mb-6 uppercase">
              {" "}
              Explore Japan
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
              <span className="text-[var(--earth-accent)] text-xl">●</span>
              <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
            </div>
            <p className="text-xl text-[var(--earth-light)] max-w-2xl mx-auto font-montserrat">
              Discover the perfect blend of tradition and innovation across the
              land of the rising sun
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Sort Controls */}
      <section className="sticky top-16 z-20 py-4 px-4 bg-[var(--earth-darkest)] border-b border-[var(--earth-medium)]/30 backdrop-filter backdrop-blur-sm bg-opacity-95">
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
                      : "bg-[var(--earth-dark)]/50 text-[var(--earth-light)] hover:bg-[var(--earth-dark)]"
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
                      : "bg-[var(--earth-dark)]/50 text-[var(--earth-light)] hover:bg-[var(--earth-dark)]"
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

      {/* Tours Grid */}
      <section className="py-12 px-4 bg-[var(--earth-darkest)]">
        <div className="max-w-7xl mx-auto">
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-[var(--earth-light)] mb-4">
                No tours found matching your criteria
              </div>
              <button
                onClick={() => {
                  setActiveCategory("All Tours");
                  setActiveLocation(null);
                  setSortOption("default");
                }}
                className="px-6 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-16 px-4 bg-[var(--earth-darkest)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/pattern-japanese.jpg"
            alt="Japanese pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-highlight)] mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-[var(--earth-light)] mb-8">
            Our travel experts can create a custom itinerary tailored just for
            you. Let us know your interests and preferences.
          </p>
          <button className="px-8 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/90 transition-all duration-300 shadow-lg">
            Contact Us For Custom Tours
          </button>
        </div>
      </section>
    </div>
  );
}
