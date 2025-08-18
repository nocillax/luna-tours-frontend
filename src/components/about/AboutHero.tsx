import Image from "next/image";

// hero banner for about page
export default function AboutHero() {
  return (
    <section className="relative h-[40vh] overflow-hidden">
      <Image
        src="/images/about/about-hero.jpg"
        alt="Luna Tours team exploring a forest"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-darkest)]/60 to-[var(--earth-darkest)]/95"></div>

      <div className="absolute inset-0 flex items-center justify-center pt-12 sm:pt-0">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--earth-highlight)] font-montserrat mb-6 uppercase">
            Our Story
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
            <span className="text-[var(--earth-accent)] text-xl">●</span>
            <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
          </div>
          <p className="text-xl text-[var(--earth-light)] max-w-2xl mx-auto font-montserrat">
            A journey of passion, exploration, and creating unforgettable
            experiences
          </p>
        </div>
      </div>
    </section>
  );
}
