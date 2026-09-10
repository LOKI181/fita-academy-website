import { HeroSection } from "@/sections/home/hero-section";
import { TrustBar } from "@/sections/home/trust-bar";
import { CategoriesGrid } from "@/sections/home/categories-grid";
import { PopularCourses } from "@/sections/home/popular-courses";
import { WhyFita } from "@/sections/home/why-fita";
import { CareerJourney } from "@/sections/home/career-journey";
import { PlacementProof } from "@/sections/home/placement-proof";
import { BranchesStrip } from "@/sections/home/branches-strip";
import { TrainersPreview } from "@/sections/home/trainers-preview";
import { ReviewsPreview } from "@/sections/home/reviews-preview";
import { ResourcesPreview } from "@/sections/home/resources-preview";
import { InstagramSection } from "@/sections/home/instagram-section";
import { DemoCta } from "@/sections/home/demo-cta";
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
      <CategoriesGrid />
      <PopularCourses />
      <WhyFita />
      <CareerJourney />
      <PlacementProof />
      <BranchesStrip />
      <TrainersPreview />
      <ReviewsPreview />
      <ResourcesPreview />
      <InstagramSection />
      <DemoCta />
      <FaqSection />
    </>
  );
}