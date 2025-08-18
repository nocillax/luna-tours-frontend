import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface TourGalleryProps {
  gallery: string[];
  title: string;
}

const TourGallery: React.FC<TourGalleryProps> = ({ gallery, title }) => {
  // Add custom styles for Swiper
  useEffect(() => {
    // Inject custom styles for pagination bullets and navigation
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-pagination {
        position: absolute;
        display: flex;
        justify-content: center;
        gap: 8px;
        z-index: 10;
      }
      
      .custom-bullet {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--earth-light);
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .custom-bullet-active {
        opacity: 1;
        background-color: var(--earth-accent);
        transform: scale(1.2);
      }
      
      .swiper-button-prev, .swiper-button-next {
        display: flex !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="pt-16 bg-[var(--earth-darkest)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[50vh] md:h-[60vh] relative">
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            effect="fade"
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full rounded-lg overflow-hidden"
          >
            {gallery.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <Image
                    src={image}
                    alt={`${title} - image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    quality={90}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !w-12 !h-12 !rounded-full !bg-[var(--earth-darkest)]/50 hover:!bg-[var(--earth-darkest)] flex items-center justify-center cursor-pointer transition-all z-10 left-4 after:!text-[var(--earth-highlight)] after:!text-lg"></div>
          <div className="swiper-button-next !w-12 !h-12 !rounded-full !bg-[var(--earth-darkest)]/50 hover:!bg-[var(--earth-darkest)] flex items-center justify-center cursor-pointer transition-all z-10 right-4 after:!text-[var(--earth-highlight)] after:!text-lg"></div>

          {/* Custom pagination */}
          <div className="custom-pagination absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default TourGallery;
