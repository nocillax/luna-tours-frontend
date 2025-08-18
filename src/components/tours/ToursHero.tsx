import React from "react";
import Image from "next/image";

export default function ToursHero() {
  return (
    <section className="relative h-[40vh] overflow-hidden">
      {/* hero image */}
      <Image
        src="/images/japan-landscape.jpg"
        alt="Japanese tours"
        fill
        className="object-cover"
        priority
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-darkest)]/60 to-[var(--earth-darkest)]/90"></div>

      {/* hero content */}
      <div className="absolute inset-0 flex items-center justify-center pt-12 sm:pt-0">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--earth-highlight)] font-montserrat mb-6 uppercase">
            Explore Japan
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
            <span className="text-[var(--earth-accent)] text-xl">●</span>
            <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
          </div>
          <p className="text-xl text-[var(--earth-light)] max-w-2xl mx-auto font-montserrat">
            Discover the perfect blend of tradition and innovation across the
            land of the rising sun
          </p>
        </div>
      </div>
    </section>
  );
}
