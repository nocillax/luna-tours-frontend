import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  tour: string;
  initials: string;
}

// testimonial data
const testimonials: Testimonial[] = [
  {
    quote:
      "Our tour of Kyoto was absolutely magical. The guide was knowledgeable and took us to temples that weren't crowded with tourists. It was like stepping back in time!",
    author: "Sarah M.",
    tour: "Kyoto Cultural Journey",
    initials: "SM",
  },
  {
    quote:
      "The Tokyo Explorer tour was the perfect balance of traditional and modern Japan. We got to see all the major highlights while still having time to explore on our own. Highly recommended!",
    author: "James D.",
    tour: "Tokyo Explorer",
    initials: "JD",
  },
  {
    quote:
      "Climbing Mount Fuji was a bucket list item for me, and Luna Tours made it happen seamlessly. Our guide ensured we were safe and comfortable throughout the journey. The sunrise view was unforgettable!",
    author: "Emma L.",
    tour: "Mount Fuji Adventure",
    initials: "EL",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-extrabold mb-12 text-center">
          What Our Travelers Say
        </h2>

        {/* testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--earth-dark)]/20 p-8 rounded-lg shadow-md border border-[var(--earth-light)] relative"
            >
              <div className="text-[var(--earth-accent)] text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="mt-4 mb-6 text-[var(--earth-highlight)]">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-4">
                <div className="h-12 w-12 rounded-full bg-[var(--earth-accent)] flex items-center justify-center text-[var(--earth-darkest)] font-bold border-1 border-[var(--earth-light)]">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-[var(--earth-accent)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[var(--earth-light)]">
                    {testimonial.tour}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
