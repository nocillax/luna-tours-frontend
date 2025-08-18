import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutJapan() {
  return (
    <section className="py-16 bg-[var(--earth-darkest)] bg-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* text content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold font-montserrat mb-6">
              Discover the Beauty of Japan
            </h2>
            <p className="mb-6 text-lg">
              Japan is a land of striking contrasts, where ancient traditions
              harmoniously coexist with cutting-edge technology. From the
              bustling streets of Tokyo to the serene temples of Kyoto, Japan
              offers a unique blend of cultural experiences.
            </p>
            <p className="mb-6 text-lg">
              Our carefully crafted tours take you on a journey through Japan's
              most iconic destinations, revealing hidden gems and offering
              authentic experiences that go beyond the typical tourist trail.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[var(--earth-accent)] hover:text-[var(--earth-accent)] hover:bg-[var(--earth-medium)] text-[var(--earth-darkest)] font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Learn About Us
            </Link>
          </div>

          {/* image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/japan-landscape.jpg"
                alt="Japanese landscape with Mount Fuji"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
