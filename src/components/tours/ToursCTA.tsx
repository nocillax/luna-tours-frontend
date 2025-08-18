import React from "react";
import Image from "next/image";

const ToursCTA: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[var(--earth-darkest)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/pattern-japanese.jpg"
          alt="Japanese pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-highlight)] mb-6">
          Can't find what you're looking for?
        </h2>
        <p className="text-[var(--earth-light)] mb-8">
          Our travel experts can create a custom itinerary tailored just for
          you. Let us know your interests and preferences.
        </p>
        <button className="px-8 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-medium)] hover:text-[var(--earth-accent)] transition-all duration-300 shadow-lg">
          Contact Us For Custom Tours
        </button>
      </div>
    </section>
  );
};

export default ToursCTA;
