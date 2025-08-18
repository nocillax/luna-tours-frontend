export default function AboutValues() {
  return (
    <section className="py-20 px-4 bg-[var(--earth-darkest)]/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--earth-highlight)] mb-12 font-montserrat">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Value 1 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--earth-accent)]/20 mb-4">
              <svg
                className="w-8 h-8 text-[var(--earth-accent)]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--earth-highlight)] mb-3 font-montserrat">
              Authenticity
            </h3>
            <p className="text-[var(--earth-light)]">
              We go beyond typical tourist experiences to provide genuine
              connections with Japan's culture, people, and landscapes.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--earth-accent)]/20 mb-4">
              <svg
                className="w-8 h-8 text-[var(--earth-accent)]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--earth-highlight)] mb-3 font-montserrat">
              Sustainability
            </h3>
            <p className="text-[var(--earth-light)]">
              We're committed to responsible tourism practices that preserve
              Japan's natural beauty and support local communities.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--earth-accent)]/20 mb-4">
              <svg
                className="w-8 h-8 text-[var(--earth-accent)]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--earth-highlight)] mb-3 font-montserrat">
              Community
            </h3>
            <p className="text-[var(--earth-light)]">
              We build meaningful relationships with local communities,
              supporting traditional crafts and providing economic
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
