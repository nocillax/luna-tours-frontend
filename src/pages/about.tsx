import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutJourney from "@/components/about/AboutJourney";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--earth-darkest)]">
      {/* banner */}
      <AboutHero />

      {/* mission */}
      <AboutMission />

      {/* company history */}
      <AboutJourney />

      {/* team members */}
      <AboutTeam />

      {/* values */}
      <AboutValues />

      {/* customer reviews */}
      <AboutTestimonials />

      {/* signup section */}
      <AboutCTA />
    </main>
  );
}
