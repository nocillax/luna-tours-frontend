import { GetStaticProps } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedTours from "@/components/home/FeaturedTours";
import AboutJapan from "@/components/home/AboutJapan";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { carouselImages, toursData, Tour } from "@/lib/data";
import { CarouselImage } from "@/lib/data";

// props type
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
      {/* carousel */}
      <HeroCarousel images={carouselImages} />

      {/* featured tours */}
      <FeaturedTours featuredTours={featuredTours} />

      {/* about japan */}
      <AboutJapan />

      {/* reviews */}
      <Testimonials />

      {/* signup */}
      <Newsletter />
    </div>
  );
}

// get data at build time
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  // grab featured tours
  const featuredTours = toursData.filter((tour) => tour.featured).slice(0, 4);

  return {
    props: {
      featuredTours,
      carouselImages,
    },
    // refresh every minute
    revalidate: 60,
  };
};
