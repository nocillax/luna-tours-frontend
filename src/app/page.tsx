import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/ui/Carousel";
import { carouselImages, toursData } from "@/lib/data";

export default function Home() {
  // Display only featured tours on the homepage
  const featuredTours = toursData.filter((tour) => tour.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel images={carouselImages} />

      {/* Popular Tours Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white uppercase text-sm tracking-widest mb-3">
              Наиболее востребованные туры
            </h2>
            <h3 className="text-white text-4xl font-bold uppercase mb-2">
              ПОПУЛЯРНЫЕ ТУРЫ
            </h3>
            <div className="w-24 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTours.map((tour, index) => (
              <div key={tour.id} className="group relative overflow-hidden">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src={tour.coverImage}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h4 className="text-xl font-bold uppercase mb-2">
                      ТУР №{index + 1}
                    </h4>
                    <p className="text-sm text-white/70">
                      THE MOST POPULAR TOURS
                    </p>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="block mt-4 uppercase text-xs tracking-wider"
                    >
                      Узнать подробнее →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-background.jpg"
            alt="Travel Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        </div>

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
                    className="h-6 w-6 text-orange-500"
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
                <span>Смотреть видео</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Tours Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-bold uppercase mb-2">
              FIND YOUR PERFECT TOUR
            </h2>
            <div className="w-24 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="bg-zinc-800 p-8 rounded-md">
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
                  className="w-full bg-zinc-700 border border-zinc-600 text-white py-3 px-4 rounded-md focus:ring-orange-500 focus:border-orange-500"
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
                  className="w-full bg-zinc-700 border border-zinc-600 text-white py-3 px-4 rounded-md focus:ring-orange-500 focus:border-orange-500"
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
                  className="w-full bg-zinc-700 border border-zinc-600 text-white py-3 px-4 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
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
