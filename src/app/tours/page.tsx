import React from "react";
import Link from "next/link";
import { toursData, tourCategories } from "@/lib/data";

export default function ToursPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-br from-[#26658C] to-[#011C40] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#011C40]/60" />
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Our Tours</h1>
          <p className="text-xl text-[#A7EBF2]">
            Discover our wide range of tour packages
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-10 bg-[#011C40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#A7EBF2] text-[#011C40] px-6 py-2 rounded-sm">
              All Tours
            </button>
            {tourCategories.map((category) => (
              <button
                key={category}
                className="bg-[#023859] text-white px-6 py-2 rounded-sm hover:bg-[#26658C]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4 bg-[#011C40]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.map((tour) => (
              <Link href={`/tours/${tour.slug}`} key={tour.id}>
                <div className="group bg-[#023859] overflow-hidden rounded-md hover:shadow-lg hover:shadow-[#A7EBF2]/20 transition-all duration-300">
                  <div className="relative h-64 bg-[#26658C]"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-[#54ACBF] mb-4">
                      {tour.shortDescription}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">
                        ${tour.price}{" "}
                        <span className="text-[#54ACBF] text-sm font-normal">
                          / person
                        </span>
                      </span>
                      <span className="text-[#54ACBF] text-sm">
                        {tour.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
