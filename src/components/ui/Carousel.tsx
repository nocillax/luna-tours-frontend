"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
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

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: function (index, className) {
            return `<span class="${className}">
              <span class="number">0${index + 1}</span>
            </span>`;
          },
        }}
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
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-xl">
                    <h1 className="text-7xl font-bold text-white mb-4">
                      {image.title}
                    </h1>
                    <div className="flex items-center space-x-2 mb-8">
                      <span className="text-orange-500 text-xl">●</span>
                      <span className="w-12 h-0.5 bg-orange-500"></span>
                    </div>
                    <p className="text-white mb-8 opacity-90">
                      {image.subtitle}
                    </p>
                    <Link
                      href={image.buttonLink}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-sm transition duration-300"
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

      {/* Custom pagination */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="swiper-pagination flex flex-col space-y-4"></div>
      </div>

      {/* Slide counter */}
      <div className="absolute left-8 bottom-8 text-white flex items-center space-x-4 z-20">
        <span className="text-5xl font-bold">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <div className="w-12 h-0.5 bg-white opacity-50"></div>
        <span className="opacity-50">
          {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
