import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-[var(--earth-darkest)] bg-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-extrabold mb-6">
            Stay Updated
          </h2>
          <p className="mb-8 text-lg">
            Subscribe to our newsletter for travel tips, new tour announcements,
            and exclusive promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] flex-grow max-w-md"
            />
            <button className="bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] hover:text-[var(--earth-accent)] text-[var(--earth-darkest)] font-bold py-3 px-8 rounded-md transition duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
