import HeroSection from "@/components/sections/HeroSection";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import AboutSection from "@/components/sections/AboutSection";
import AwardsSection from "@/components/sections/AwardsSection";
import TeamPreviewSection from "@/components/sections/TeamPreviewSection";
import CTASection from "@/components/sections/CTASection";
import MembersSection from "@/components/sections/MembersSection";

export default function HomePage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <HeroSection />

      {/* Practice Areas */}
      <PracticeAreasSection />

      {/* Our Firm / Distinction */}
      <AwardsSection />

      {/* Founder's Message */}
      <AboutSection />
      {/* Our Partners */}
      <TeamPreviewSection />
      <MembersSection />
      {/* CTA */}
      <CTASection />
    </div>
  );
}