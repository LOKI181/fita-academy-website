import { HeroSection } from "@/sections/home/hero-section";
import { TrustBar } from "@/sections/home/trust-bar";
import { CategoriesGrid } from "@/sections/home/categories-grid";
import { PopularCourses } from "@/sections/home/popular-courses";
import { WhyFita } from "@/sections/home/why-fita";
import { CareerJourney } from "@/sections/home/career-journey";
import { PlacementProof } from "@/sections/home/placement-proof";
import { EditorialSuccessStories } from "@/components/shared/editorial-success-stories";
import { PremiumTrainers } from "@/sections/home/premium-trainers";
import { NetworkBranches } from "@/sections/home/network-branches";
import { ResourcesPreview } from "@/sections/home/resources-preview";
import { EditorialTypography } from "@/sections/home/editorial-typography";
import { PremiumCta } from "@/sections/home/premium-cta";
import { FaqSection } from "@/sections/home/faq-section";
import { CareerAssistantSection } from "@/sections/home/career-assistant-section";
import { LocalBusinessJsonLd } from "@/components/json-ld/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HeroSection />
      <TrustBar />
      <CareerAssistantSection />
      <WhyFita />
      <CategoriesGrid />
      <PopularCourses />
      <CareerJourney />
      <PlacementProof />
      <EditorialSuccessStories />
      <PremiumTrainers />
      <NetworkBranches />
      <EditorialTypography />
      <ResourcesPreview />
      <PremiumCta />
      <FaqSection />
    </>
  );
}
