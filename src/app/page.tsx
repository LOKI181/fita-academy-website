import { HeroSection } from "@/sections/home/hero-section";
import { TrustBar } from "@/sections/home/trust-bar";
import { CategoriesGrid } from "@/sections/home/categories-grid";
import { PopularCourses } from "@/sections/home/popular-courses";
import { WhyFita } from "@/sections/home/why-fita";
import { CareerJourney } from "@/sections/home/career-journey";
import { PlacementProof } from "@/sections/home/placement-proof";
import { PremiumTrainers } from "@/sections/home/premium-trainers";
import { NetworkBranches } from "@/sections/home/network-branches";
import { PremiumCta } from "@/sections/home/premium-cta";
import { LocalBusinessJsonLd } from "@/components/json-ld/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HeroSection />
      <TrustBar />
      <WhyFita />
      <CategoriesGrid />
      <PopularCourses />
      <CareerJourney />
      <PlacementProof />
      <PremiumTrainers />
      <NetworkBranches />
      <PremiumCta />
    </>
  );
}
