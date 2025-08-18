import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import ToursHero from "@/components/tours/ToursHero";
import ToursSearch from "@/components/tours/ToursSearch";
import ToursFilter from "@/components/tours/ToursFilter";
import ToursList from "@/components/tours/ToursList";
import ToursCTA from "@/components/tours/ToursCTA";
import { toursData, tourCategories, Tour } from "@/lib/data";

// Props type
interface ToursPageProps {
  tours: Tour[];
  categories: string[];
}

// Location options derived from tour data
const locationOptions = ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"];

export default function ToursPage({ tours, categories }: ToursPageProps) {
  // State for filtering and sorting
  const [activeCategory, setActiveCategory] = useState<string>("All Tours");
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>("default");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [filteredTours, setFilteredTours] = useState(tours);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Reset filters function
  const resetFilters = () => {
    setActiveCategory("All Tours");
    setActiveLocation(null);
    setSortOption("default");
    setSearchTerm("");
  };

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    let result = [...tours];

    // Apply search filter if there's a search term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        (tour) =>
          tour.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          tour.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          tour.shortDescription.toLowerCase().includes(lowerCaseSearchTerm) ||
          tour.locations.some((loc) =>
            loc.toLowerCase().includes(lowerCaseSearchTerm)
          )
      );
    }

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
  }, [activeCategory, activeLocation, sortOption, searchTerm, tours]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ToursHero />

      {/* Filter and Sort Controls */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          {/* Main controls container */}
          <div className="flex flex-col space-y-4">
            {/* Search component */}
            <ToursSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            {/* Filter components */}
            <ToursFilter
              activeCategory={activeCategory}
              activeLocation={activeLocation}
              sortOption={sortOption}
              isSortMenuOpen={isSortMenuOpen}
              isFilterMenuOpen={isFilterMenuOpen}
              setActiveCategory={setActiveCategory}
              setActiveLocation={setActiveLocation}
              setSortOption={setSortOption}
              setIsSortMenuOpen={setIsSortMenuOpen}
              setIsFilterMenuOpen={setIsFilterMenuOpen}
              locationOptions={locationOptions}
              tourCategories={categories}
            />
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <ToursList filteredTours={filteredTours} resetFilters={resetFilters} />

      {/* Newsletter/CTA Section */}
      <ToursCTA />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real app, this would fetch data from an API
  return {
    props: {
      tours: toursData,
      categories: tourCategories,
    },
    // Revalidate every hour
    revalidate: 3600,
  };
};
