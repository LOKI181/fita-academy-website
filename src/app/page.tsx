import { HeroSection } from "@/sections/home/hero-section";
import { TrustBar } from "@/sections/home/trust-bar";
import { ServiceTags } from "@/sections/home/service-tags";
import { CategoriesGrid } from "@/sections/home/categories-grid";
import { PopularCourses } from "@/sections/home/popular-courses";
import { WhyFita } from "@/sections/home/why-fita";
import { CareerJourney } from "@/sections/home/career-journey";
import { PlacementProof } from "@/sections/home/placement-proof";
import { CompanyMarquee } from "@/components/shared/company-marquee";
import { EditorialSuccessStories } from "@/components/shared/editorial-success-stories";
import { PremiumTrainers } from "@/sections/home/premium-trainers";
import { TeamStats } from "@/sections/home/team-stats";
import { NetworkBranches } from "@/sections/home/network-branches";
import { EditorialTypography } from "@/sections/home/editorial-typography";
import { PremiumCta } from "@/sections/home/premium-cta";
import { FaqSection } from "@/sections/home/faq-section";
import { LocalBusinessJsonLd } from "@/components/json-ld/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HeroSection />
      <CompanyMarquee />
      <TrustBar />
      <ServiceTags />
      <WhyFita />
      <TeamStats />
      <CategoriesGrid />
      <PopularCourses />
      <CareerJourney />
      <PlacementProof />
      <EditorialSuccessStories />
      <PremiumTrainers />
      <NetworkBranches />
      <EditorialTypography />
      <PremiumCta />
      <FaqSection />
    </>
  );
}
