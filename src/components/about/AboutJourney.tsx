import Image from "next/image";

export default function AboutJourney() {
  return (
    <section className="py-20 px-4 bg-[var(--earth-darkest)]/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--earth-highlight)] mb-12 font-montserrat">
          Our Journey
        </h2>

        <div className="space-y-16">
          {/* 2015 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square md:aspect-video w-full">
                <Image
                  src="/about/timeline-1.jpg"
                  alt="Luna Tours founding"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--earth-darkest)]/30 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-extrabold font-montserrat text-white">
                    2015
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-[var(--earth-accent)] font-montserrat">
                The Beginning
              </h3>
              <div className="h-1 w-16 bg-[var(--earth-accent)]/50 my-3"></div>
              <p className="text-[var(--earth-light)] leading-relaxed">
                Founded by three friends with a passion for Japan's cultural
                heritage and natural beauty, Luna Tours began as a small
                operation offering guided tours of Tokyo. Our first office was a
                tiny rented space in Shibuya, and our initial team consisted of
                just the three founders acting as guides, marketers, and
                planners all at once. Despite the challenges, our attention to
                detail and authentic approach quickly earned us a positive
                reputation.
              </p>
            </div>
          </div>

          {/* 2018 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square md:aspect-video w-full">
                <Image
                  src="/about/timeline-2.jpg"
                  alt="Luna Tours expansion"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--earth-darkest)]/30 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-extrabold font-montserrat text-white">
                    2018
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-left md:text-right">
              <h3 className="text-2xl font-bold text-[var(--earth-accent)] font-montserrat">
                Expanding Horizons
              </h3>
              <div className="h-1 w-16 bg-[var(--earth-accent)]/50 my-3 ml-0 mr-auto md:ml-auto md:mr-0"></div>
              <p className="text-[var(--earth-light)] leading-relaxed">
                After receiving overwhelming positive feedback, we expanded our
                offerings to include cultural journeys throughout Kyoto, Osaka,
                and rural Japan, focusing on immersive experiences. We grew our
                team to include specialized guides with expertise in different
                regions and aspects of Japanese culture. Our commitment to
                authentic experiences led to partnerships with local artisans
                and community leaders, giving our clients access to places and
                traditions rarely seen by tourists.
              </p>
            </div>
          </div>

          {/* 2020 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square md:aspect-video w-full">
                <Image
                  src="/about/timeline-3.png"
                  alt="Luna Tours virtual experiences"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--earth-darkest)]/30 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-extrabold font-montserrat text-white">
                    2020
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-[var(--earth-accent)] font-montserrat">
                Digital Transformation
              </h3>
              <div className="h-1 w-16 bg-[var(--earth-accent)]/50 my-3"></div>
              <p className="text-[var(--earth-light)] leading-relaxed">
                During global travel restrictions, we reimagined our approach by
                developing virtual tours and online experiences, bringing
                Japan's wonders to people's homes around the world. Our
                innovative virtual tea ceremonies, digital walking tours, and
                online cooking classes kept our connection with travelers alive
                while creating new ways to experience Japanese culture. This
                unexpected pivot expanded our audience and helped us refine our
                storytelling approach.
              </p>
            </div>
          </div>

          {/* Today */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square md:aspect-video w-full">
                <Image
                  src="/about/timeline-4.jpg"
                  alt="Luna Tours today"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--earth-darkest)]/30 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-extrabold font-montserrat text-white">
                    Today
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-left md:text-right">
              <h3 className="text-2xl font-bold text-[var(--earth-accent)] font-montserrat">
                Authentic Adventures
              </h3>
              <div className="h-1 w-16 bg-[var(--earth-accent)]/50 my-3 ml-0 mr-auto md:ml-auto md:mr-0"></div>
              <p className="text-[var(--earth-light)] leading-relaxed">
                Now a leading tour operator in Japan, Luna Tours offers
                unparalleled experiences combining adventure, culture, and
                sustainability, with a dedicated team of expert guides. We've
                expanded to include specialized tours focusing on culinary
                experiences, traditional crafts, hiking adventures, and historic
                journeys. Our commitment to responsible tourism has earned us
                recognition for our environmental initiatives and community
                support programs throughout Japan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
