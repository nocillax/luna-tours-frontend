import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/ui/HeroCarousel";
import TourCard from "@/components/ui/TourCard";
import { carouselImages, toursData } from "@/lib/data";

export default function Home() {
  // Display only featured tours on the homepage
  const featuredTours = toursData.filter((tour) => tour.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel images={carouselImages} />

      {/* Popular Tours Section */}
      <section className="py-20 px-4 bg-[var(--earth-darkest)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[var(--earth-highlight)] uppercase text-sm tracking-widest mb-3">
              Find Your Perfect Experience
            </h2>
            <h3 className="text-4xl font-bold text-[var(--earth-light)]">
              Featured Tours
            </h3>
          </div>

          {/* Tour Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center px-6 py-3 border border-[var(--earth-accent)] text-[var(--earth-highlight)] rounded-md hover:bg-[var(--earth-accent)]/20 transition-all duration-300"
            >
              <span>View All Tours</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
