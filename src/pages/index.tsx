import { GetStaticProps } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedTours from "@/components/home/FeaturedTours";
import AboutJapan from "@/components/home/AboutJapan";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { carouselImages, toursData, Tour } from "@/lib/data";
import { CarouselImage } from "@/lib/data";

// Define types for our props
interface HomePageProps {
  featuredTours: Tour[];
  carouselImages: CarouselImage[];
}

export default function HomePage({
  featuredTours,
  carouselImages,
}: HomePageProps) {
  return (
    <div className="bg-[var(--background)]">
      {/* Hero Carousel */}
      <HeroCarousel images={carouselImages} />

      {/* Featured Tours Section */}
      <FeaturedTours featuredTours={featuredTours} />

      {/* About Japan Section */}
      <AboutJapan />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
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
