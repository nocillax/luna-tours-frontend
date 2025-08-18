import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import ToursHero from "@/components/tours/ToursHero";
import ToursSearch from "@/components/tours/ToursSearch";
import ToursFilter from "@/components/tours/ToursFilter";
import ToursList from "@/components/tours/ToursList";
import ToursCTA from "@/components/tours/ToursCTA";
import { toursData, tourCategories, Tour } from "@/lib/data";

// props type
interface ToursPageProps {
  tours: Tour[];
  categories: string[];
}

// locations from data
const locationOptions = ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"];

export default function ToursPage({ tours, categories }: ToursPageProps) {
  // filters state
  const [activeCategory, setActiveCategory] = useState<string>("All Tours");
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>("default");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [filteredTours, setFilteredTours] = useState(tours);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // reset all filters
  const resetFilters = () => {
    setActiveCategory("All Tours");
    setActiveLocation(null);
    setSortOption("default");
    setSearchTerm("");
  };

  // filter and sort tours
  useEffect(() => {
    let result = [...tours];

    // search filter
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

    // category filter
    if (activeCategory !== "All Tours") {
      result = result.filter((tour) => tour.category === activeCategory);
    }

    // location filter
    if (activeLocation) {
      result = result.filter((tour) =>
        tour.locations.some((loc) =>
          loc.toLowerCase().includes(activeLocation.toLowerCase())
        )
      );
    }

    // sort options
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
        // default sorting
        break;
    }

    setFilteredTours(result);
  }, [activeCategory, activeLocation, sortOption, searchTerm, tours]);

  return (
    <div className="min-h-screen">
      {/* hero banner */}
      <ToursHero />
      {/* filters section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          {/* controls container */}
          <div className="flex flex-col space-y-4">
            {/* search box */}
            <ToursSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            {/* filters and sorting */}
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
      {/* tours list */}
      <ToursList filteredTours={filteredTours} resetFilters={resetFilters} />
      {/* sign up */}
      <ToursCTA />
    </div>
  );
}

// get data at build time
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tours: toursData,
      categories: tourCategories,
    },
    // update every hour
    revalidate: 3600,
  };
};
