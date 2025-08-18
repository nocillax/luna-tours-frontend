import Link from "next/link";

// call to action section for about page
export default function AboutCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-highlight)] mb-6 font-montserrat">
          Ready to Experience Japan with Us?
        </h2>
        <p className="text-xl text-[var(--earth-light)] mb-8 max-w-2xl mx-auto">
          Join us for an unforgettable journey through Japan's breathtaking
          landscapes and rich cultural heritage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/tours"
            className="bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] text-[var(--earth-darkest)] font-bold py-3 px-8 rounded-sm transition-colors font-montserrat"
          >
            Explore Our Tours
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[var(--earth-accent)] text-[var(--earth-accent)] hover:bg-[var(--earth-accent)]/10 font-bold py-3 px-8 rounded-sm transition-colors font-montserrat"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Background Pattern; SVG path as it is a custom shape */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
          <svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M45,-70.5C58.4,-63.5,69.7,-51.4,77.5,-37.3C85.3,-23.2,89.6,-7.2,88.3,8.7C87,24.6,80.1,40.4,69.3,52.4C58.5,64.3,43.9,72.4,28.5,76.8C13.2,81.1,-2.9,81.7,-18.4,77.8C-33.9,74,-48.8,65.7,-60.8,53.8C-72.9,41.8,-82,26.2,-85.5,9.4C-89,-7.4,-87,-25.4,-78.6,-39.2C-70.2,-52.9,-55.3,-62.4,-40.4,-68.7C-25.5,-75,-12.7,-78.2,1.4,-80.4C15.5,-82.5,31.5,-77.5,45,-70.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4">
          <svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M34.1,-59.5C43.3,-53.2,49.4,-42.5,55.8,-31.9C62.2,-21.2,68.9,-10.6,70.3,0.8C71.7,12.2,67.7,24.4,60.1,33.2C52.5,41.9,41.3,47.2,30.1,51.9C19,56.5,9.5,60.5,-0.2,60.9C-9.9,61.3,-19.8,58.1,-29.9,53.8C-40,49.6,-50.3,44.2,-56.9,35.6C-63.4,27,-66.2,15.2,-66.7,3.1C-67.1,-8.9,-65.1,-21.1,-59.2,-30.8C-53.3,-40.4,-43.4,-47.5,-33,-53.1C-22.5,-58.7,-11.2,-62.8,0.5,-63.6C12.2,-64.5,24.8,-65.9,34.1,-59.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
