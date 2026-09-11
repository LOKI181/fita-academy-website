import { HeroSection } from "@/sections/home/hero-section";
import { TrustBar } from "@/sections/home/trust-bar";
import { ServiceTags } from "@/sections/home/service-tags";
import { AboutFita } from "@/sections/home/about-fita";
import { CategoriesGrid } from "@/sections/home/categories-grid";
import { PopularCourses } from "@/sections/home/popular-courses";
import { WhyFita } from "@/sections/home/why-fita";
import { HowWeWork } from "@/sections/home/how-we-work";
import { CareerJourney } from "@/sections/home/career-journey";
import { PlacementProof } from "@/sections/home/placement-proof";
import { EditorialSuccessStories } from "@/components/shared/editorial-success-stories";
import { PremiumTrainers } from "@/sections/home/premium-trainers";
import { TeamStats } from "@/sections/home/team-stats";
import { NetworkBranches } from "@/sections/home/network-branches";
import { InstagramSection } from "@/sections/home/instagram-section";
import { PremiumCta } from "@/sections/home/premium-cta";
import { FaqSection } from "@/sections/home/faq-section";
import { LocalBusinessJsonLd } from "@/components/json-ld/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HeroSection />
      <TrustBar />
      <ServiceTags />
      <AboutFita />
      <WhyFita />
      <HowWeWork />
      <CategoriesGrid />
      <PopularCourses />
      <CareerJourney />
      <PlacementProof />
      <EditorialSuccessStories />
      <PremiumTrainers />
      <TeamStats />
      <NetworkBranches />
      <InstagramSection />
      <PremiumCta />
      <FaqSection />
    </>
  );
}