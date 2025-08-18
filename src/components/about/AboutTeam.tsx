import Image from "next/image";

export default function AboutTeam() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--earth-highlight)] mb-12 font-montserrat">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-[var(--earth-dark)]/20 rounded-lg overflow-hidden group">
            <div className="relative h-80">
              <Image
                src="/about/team-1.jpg"
                alt="Dennis Hale - Founder & CEO"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[var(--earth-highlight)] font-montserrat">
                Dennis Hale
              </h3>
              <p className="text-[var(--earth-accent)] mb-4">Founder & CEO</p>
              <p className="text-[var(--earth-light)]">
                With over 15 years in tourism and a deep connection to Japan's
                traditional culture, Dennis leads our company with vision and
                passion.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-[var(--earth-dark)]/20 rounded-lg overflow-hidden group">
            <div className="relative h-80">
              <Image
                src="/about/team-2.jpg"
                alt="Jessica Austin - Head Guide"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[var(--earth-highlight)] font-montserrat">
                Jessica Austin
              </h3>
              <p className="text-[var(--earth-accent)] mb-4">Head Guide</p>
              <p className="text-[var(--earth-light)]">
                A certified mountain guide and cultural expert, Jessica creates
                unforgettable experiences that blend adventure with deep
                cultural insights.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-[var(--earth-dark)]/20 rounded-lg overflow-hidden group">
            <div className="relative h-80">
              <Image
                src="/about/team-3.jpg"
                alt="Mei Nakamura - Cultural Experience Director"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[var(--earth-highlight)] font-montserrat">
                Mei Nakamura
              </h3>
              <p className="text-[var(--earth-accent)] mb-4">
                Cultural Experience Director
              </p>
              <p className="text-[var(--earth-light)]">
                With a background in anthropology and traditional arts, Mei
                designs our cultural immersion programs and builds relationships
                with local artisans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
