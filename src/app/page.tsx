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
      <section className="py-20 px-4 bg-[#011C40]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white uppercase text-sm tracking-widest mb-3">
              Find Your Perfect Experience
            </h2>
            <h3 className="text-white text-4xl font-bold uppercase mb-2">
              POPULAR TOURS
            </h3>
            <div className="w-24 h-0.5 bg-[#A7EBF2] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#A7EBF2] hover:bg-[#54ACBF] text-[#011C40] rounded-sm transition duration-300"
            >
              <span>View All Tours</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative h-[600px] bg-[#26658C]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#011C40]/80 to-[#011C40]/30"></div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-white text-5xl font-bold uppercase mb-8">
                TRAVEL AND
                <br />
                INSPIRE YOUR
                <br />
                LIFE
              </h2>

              <button className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full transition duration-300">
                <div className="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#54ACBF]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Tours Section */}
      <section className="py-16 px-4 bg-[#011C40]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-bold uppercase mb-2">
              FIND YOUR PERFECT TOUR
            </h2>
            <div className="w-24 h-0.5 bg-[#A7EBF2] mx-auto"></div>
          </div>

          <div className="bg-[#26658C] p-8 rounded-md">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label
                  htmlFor="destination"
                  className="block text-white mb-2 text-sm"
                >
                  Destination
                </label>
                <select
                  id="destination"
                  className="w-full bg-[#023859] border border-[#26658C] text-white py-3 px-4 rounded-md focus:ring-[#A7EBF2] focus:border-[#A7EBF2]"
                >
                  <option value="">Select Destination</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="kyoto">Kyoto</option>
                  <option value="osaka">Osaka</option>
                  <option value="hokkaido">Hokkaido</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="tour-type"
                  className="block text-white mb-2 text-sm"
                >
                  Tour Type
                </label>
                <select
                  id="tour-type"
                  className="w-full bg-[#023859] border border-[#26658C] text-white py-3 px-4 rounded-md focus:ring-[#A7EBF2] focus:border-[#A7EBF2]"
                >
                  <option value="">Select Tour Type</option>
                  <option value="cultural">Cultural Tour</option>
                  <option value="adventure">Adventure Tour</option>
                  <option value="city">City Exploration</option>
                  <option value="nature">Nature Tour</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-white mb-2 text-sm">
                  When
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full bg-[#023859] border border-[#26658C] text-white py-3 px-4 rounded-md focus:ring-[#A7EBF2] focus:border-[#A7EBF2]"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-[#A7EBF2] hover:bg-[#54ACBF] text-[#011C40] py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
                >
                  <span>Search Tours</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
