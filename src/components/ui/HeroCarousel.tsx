"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

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
        {images.map((image) => (
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
              <div className="absolute inset-0 bg-[#011C40]/40" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-xl">
                    <h1 className="text-7xl font-bold text-white mb-4">
                      {image.title}
                    </h1>
                    <div className="flex items-center space-x-2 mb-8">
                      <span className="text-[#A7EBF2] text-xl">●</span>
                      <span className="w-12 h-0.5 bg-[#A7EBF2]"></span>
                    </div>
                    <p className="text-white mb-8 opacity-90">
                      {image.subtitle}
                    </p>
                    <Link
                      href={image.buttonLink}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-[#A7EBF2] hover:bg-[#54ACBF] text-[#011C40] rounded-sm transition duration-300"
                    >
                      <span>{image.buttonText}</span>
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination with vertically centered active number and shifting list */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 h-60 flex items-center">
        <div className="h-32 relative flex items-center">
          {/* This container will have fixed height with absolutely positioned items that shift */}
          <div className="relative h-full w-20">
            {images.map((_, index) => {
              const isActive = activeIndex === index;

              // Position calculation - move the entire list to keep active in center
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
                    className={`flex items-center ${
                      isActive
                        ? "text-white"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    {isActive && (
                      <div className="w-16 h-0.5 bg-[#A7EBF2] mr-3"></div>
                    )}
                    <span
                      className={`font-bold ${
                        isActive ? "text-5xl" : "text-sm"
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
