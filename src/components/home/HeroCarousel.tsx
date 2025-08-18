"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type CarouselImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

interface HeroCarouselProps {
  images: CarouselImage[];
}

// hero carousel for homepage with image slides and custom pagination
export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  // go to a specific slide when clicking on pagination numbers
  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  // reset refs array when images change
  useEffect(() => {
    titleRefs.current = titleRefs.current.slice(0, images.length);
  }, [images]);

  // function to calculate text size and ensure consistent height
  const adjustTitleHeight = () => {
    // first pass: find the tallest title height
    let maxHeight = 0;
    titleRefs.current.forEach((ref) => {
      if (ref) {
        // reset any previous scaling to get true height
        ref.style.fontSize = "";
        const height = ref.scrollHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      }
    });

    // second pass: set height for all titles and adjust font size if needed
    titleRefs.current.forEach((ref) => {
      if (ref) {
        // set fixed height to ensure alignment
        ref.style.height = `${maxHeight}px`;

        // check if text overflows 2 lines and adjust font size if needed
        const lineHeight = parseInt(window.getComputedStyle(ref).lineHeight);
        const twoLinesHeight = lineHeight * 2;

        if (ref.scrollHeight > twoLinesHeight) {
          // text overflows 2 lines, reduce font size
          const scaleFactor = twoLinesHeight / ref.scrollHeight;
          const currentSize = parseInt(window.getComputedStyle(ref).fontSize);
          ref.style.fontSize = `${currentSize * scaleFactor}px`;
        }
      }
    });
  };

  // apply height adjustment when swiper updates or window resizes
  useEffect(() => {
    if (titleRefs.current.length > 0) {
      adjustTitleHeight();

      const handleResize = () => {
        adjustTitleHeight();
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [activeIndex, swiperInstance]);

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
                quality={90} // Increase quality from the default 75
                sizes="100vw" // Tell Next.js this image takes the full viewport width
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-darkest)]/15 via-[var(--earth-darkest)]/40 to-[var(--earth-darkest)]/90" />

              <div className="absolute inset-x-0 bottom-0 h-3/4 flex flex-col justify-end pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    {/* Title container with fixed height and alignment */}
                    <div className="title-container min-h-[160px] flex flex-col justify-start">
                      <h1
                        ref={(el) => {
                          titleRefs.current[idx] = el;
                        }}
                        className="font-montserrat text-6xl sm:text-7xl md:text-8xl font-extrabold text-[var(--earth-highlight)] mb-6 leading-tight uppercase tracking-tight overflow-hidden"
                      >
                        {image.title}
                      </h1>
                    </div>

                    <div className="flex items-center space-x-2 mb-8">
                      <span className="text-[var(--earth-accent)] text-xl">
                        ●
                      </span>
                      <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
                    </div>

                    {/* Fixed height for subtitle to maintain button positioning */}
                    <p className="font-montserrat text-[var(--earth-highlight)] mb-10 text-lg md:text-xl max-w-2xl line-clamp-2 h-16 font-medium">
                      {image.subtitle}
                    </p>

                    <Link
                      href={image.buttonLink}
                      className="font-montserrat inline-flex items-center space-x-3 px-8 py-4 bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] hover:text-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-sm transition duration-300 font-bold text-lg"
                    >
                      <span>{image.buttonText}</span>
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom pagination with vertically centered active number and list shifting*/}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 h-60 flex items-center">
        <div className="h-32 relative flex items-center">
          {/* This container has a fixed height with absolutely positioned items that shift */}
          <div className="relative h-full w-20">
            {images.map((_, index) => {
              const isActive = activeIndex === index;

              // calculate position adjustments for pagination numbers
              // move the entire list to keep active in center
              // First, center every item vertically
              // Then offset based on index position relative to active index
              const position = `absolute right-0 transform translate-y-${
                (index - activeIndex) * 12
              } ${isActive ? "translate-y-0" : ""}`;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${position}`}
                  style={{
                    top: "50%",
                    transform: `translateY(-50%) translateY(${
                      (index - activeIndex) * 3
                    }rem)`,
                    opacity: isActive
                      ? 1
                      : 0.4 + (1 / (Math.abs(index - activeIndex) + 1)) * 0.4,
                  }}
                >
                  <button
                    onClick={() => goToSlide(index)}
                    className={`flex items-center font-montserrat ${
                      isActive
                        ? "text-[var(--earth-highlight)]"
                        : "text-[var(--earth-highlight)]/40 hover:text-[var(--earth-highlight)]/60"
                    }`}
                  >
                    {isActive && (
                      <div className="w-16 h-0.5 bg-[var(--earth-accent)] mr-3"></div>
                    )}
                    <span
                      className={`font-bold ${
                        isActive
                          ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                          : "text-xs sm:text-sm"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
