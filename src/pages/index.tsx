import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/ui/HeroCarousel";
import TourCard from "@/components/ui/TourCard";
import { carouselImages, toursData } from "@/lib/data";

// Define types for our props
interface HomePageProps {
  featuredTours: any[]; // Replace with proper type from your types.ts
  carouselImages: any[]; // Replace with proper type from your types.ts
}

export default function HomePage({
  featuredTours,
  carouselImages,
}: HomePageProps) {
  // Get featured tours - we're moving this to getStaticProps

  return (
    <div className="bg-[var(--background)]">
      {/* Hero Carousel */}
      <HeroCarousel images={carouselImages} />

      {/* Featured Tours Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-extrabold mb-8 text-center">
            Popular Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-block hover:text-[var(--earth-accent)] bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] text-[var(--earth-darkest)] font-bold py-3 px-8 rounded-md transition duration-300"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Japan Section */}
      <section className="py-16 bg-[var(--earth-darkest)] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-extrabold font-montserrat  mb-6">
                Discover the Beauty of Japan
              </h2>
              <p className="mb-6 text-lg">
                Japan is a land of striking contrasts, where ancient traditions
                harmoniously coexist with cutting-edge technology. From the
                bustling streets of Tokyo to the serene temples of Kyoto, Japan
                offers a unique blend of cultural experiences.
              </p>
              <p className="mb-6 text-lg">
                Our carefully crafted tours take you on a journey through
                Japan's most iconic destinations, revealing hidden gems and
                offering authentic experiences that go beyond the typical
                tourist trail.
              </p>
              <Link
                href="/about"
                className="inline-block bg-[var(--earth-accent)] hover:text-[var(--earth-accent)] hover:bg-[var(--earth-medium)] text-[var(--earth-darkest)] font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/japan-landscape.jpg"
                  alt="Japanese landscape with Mount Fuji"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-extrabold mb-12 text-center">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[var(--earth-dark)]/30 p-8 rounded-lg shadow-md border border-[var(--earth-light)] relative">
              <div className="text-[var(--earth-accent)] text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="mt-4 mb-6 text-[var(--earth-highlight)]">
                Our tour of Kyoto was absolutely magical. The guide was
                knowledgeable and took us to temples that weren't crowded with
                tourists. It was like stepping back in time!
              </p>
              <div className="flex items-center mt-4">
                <div className="h-12 w-12 rounded-full bg-[var(--earth-accent)] flex items-center justify-center text-[var(--earth-darkest)] font-bold border-1 border-[var(--earth-light)]">
                  SM
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-sm text-gray-600">
                    Kyoto Cultural Journey
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[var(--earth-dark)]/30 p-8 rounded-lg shadow-md border border-[var(--earth-light)] relative">
              <div className="text-[var(--earth-accent)] text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="mt-4 mb-6 text-[var(--earth-highlight)]">
                The Tokyo Explorer tour was the perfect balance of traditional
                and modern Japan. We got to see all the major highlights while
                still having time to explore on our own. Highly recommended!
              </p>
              <div className="flex items-center mt-4">
                <div className="h-12 w-12 rounded-full bg-[var(--earth-accent)] flex items-center justify-center text-[var(--earth-darkest)] font-bold border-1 border-[var(--earth-light)]">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">James D.</h4>
                  <p className="text-sm text-gray-600">Tokyo Explorer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[var(--earth-dark)]/30 p-8 rounded-lg shadow-md border border-[var(--earth-light)] relative">
              <div className="text-[var(--earth-accent)] text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="mt-4 mb-6 text-[var(--earth-highlight)]">
                Climbing Mount Fuji was a bucket list item for me, and Luna
                Tours made it happen seamlessly. Our guide ensured we were safe
                and comfortable throughout the journey. The sunrise view was
                unforgettable!
              </p>
              <div className="flex items-center mt-4">
                <div className="h-12 w-12 rounded-full bg-[var(--earth-accent)] flex items-center justify-center text-[var(--earth-darkest)] font-bold border-1 border-[var(--earth-light)]">
                  EL
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Emma L.</h4>
                  <p className="text-sm text-gray-600">Mount Fuji Adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[var(--earth-darkest)] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-montserrat font-extrabold mb-6">
              Stay Updated
            </h2>
            <p className="mb-8 text-lg">
              Subscribe to our newsletter for travel tips, new tour
              announcements, and exclusive promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] flex-grow max-w-md"
              />
              <button className="bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] hover:text-[var(--earth-accent)] text-[var(--earth-darkest)] font-bold py-3 px-8 rounded-md transition duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add getStaticProps to fetch data at build time
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  // Get featured tours
  const featuredToursCount = 4;
  const featuredTours = toursData
    .filter((tour) => tour.featured)
    .slice(0, featuredToursCount);

  return {
    props: {
      featuredTours,
      carouselImages,
    },
    // Optionally add revalidation
    revalidate: 60, // In seconds
  };
};
