import React from "react";
import Image from "next/image";

const ToursHero: React.FC = () => {
  return (
    <section className="relative h-[40vh] overflow-hidden">
      <Image
        src="/japan-landscape.jpg"
        alt="Japanese tours"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-darkest)]/60 to-[var(--earth-darkest)]/90"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--earth-highlight)] font-montserrat mb-6 uppercase">
            {" "}
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
};

export default ToursHero;
