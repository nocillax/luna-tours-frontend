import { EyeIcon, HeartIcon, UserGroupIcon } from "@heroicons/react/24/outline";

// show company values in a grid with icons
export default function AboutValues() {
  return (
    <section className="py-20 px-4 bg-[var(--earth-darkest)]/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--earth-highlight)] mb-12 font-montserrat">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Value 1 - Authenticity */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--earth-accent)]/20 mb-4">
              <EyeIcon className="w-8 h-8 text-[var(--earth-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--earth-highlight)] mb-3 font-montserrat">
              Authenticity
            </h3>
            <p className="text-[var(--earth-light)]">
              We go beyond typical tourist experiences to provide genuine
              connections with Japan's culture, people, and landscapes.
            </p>
          </div>

          {/* Value 2 - Sustainability */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--earth-accent)]/20 mb-4">
              <HeartIcon className="w-8 h-8 text-[var(--earth-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--earth-highlight)] mb-3 font-montserrat">
              Sustainability
            </h3>
            <p className="text-[var(--earth-light)]">
              We're committed to responsible tourism practices that preserve
              Japan's natural beauty and support local communities.
            </p>
          </div>

          {/* Value 3 - Community */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--earth-accent)]/20 mb-4">
              <UserGroupIcon className="w-8 h-8 text-[var(--earth-accent)]" />
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
