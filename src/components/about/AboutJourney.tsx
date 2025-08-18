import Image from "next/image";

// timeline showing company history with images
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[var(--earth-accent)] text-[var(--earth-darkest)] px-3 py-1 font-bold">
                  2015
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/70 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-[var(--earth-accent)] text-[var(--earth-darkest)] px-3 py-1 font-bold">
                  2018
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[var(--earth-accent)] text-[var(--earth-darkest)] px-3 py-1 font-bold">
                  2020
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-[var(--earth-accent)] font-montserrat">
                Digital Transformation
              </h3>
              <div className="h-1 w-16 bg-[var(--earth-accent)]/50 my-3"></div>
              <p className="text-[var(--earth-light)] leading-relaxed">
                When global travel paused, we pivoted to create virtual
                experiences and digital content that allowed people to
                experience Japan from their homes. This challenge sparked
                innovation in how we present Japanese culture and connect people
                to it, leading to online workshops with artisans, virtual tours,
                and educational content that reached a global audience.
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/70 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-[var(--earth-accent)] text-[var(--earth-darkest)] px-3 py-1 font-bold">
                  Today
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-left md:text-right">
              <h3 className="text-2xl font-bold text-[var(--earth-accent)] font-montserrat">
                Where We Are Now
              </h3>
              <div className="h-1 w-16 bg-[var(--earth-accent)]/50 my-3 ml-0 mr-auto md:ml-auto md:mr-0"></div>
              <p className="text-[var(--earth-light)] leading-relaxed">
                Today, Luna Tours is recognized as a leader in experiential
                travel in Japan. We've built a diverse team of passionate
                experts who create unforgettable journeys. Our approach combines
                cultural immersion, adventure, and sustainability. We continue
                to innovate and expand our offerings while staying true to our
                core values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
