import { HeroSection } from "@/sections/home/hero-section";
import { TrustBar } from "@/sections/home/trust-bar";
import { CategoriesGrid } from "@/sections/home/categories-grid";
import { PopularCourses } from "@/sections/home/popular-courses";
import { WhyFita } from "@/sections/home/why-fita";
import { PlacementProof } from "@/sections/home/placement-proof";
import { BranchesStrip } from "@/sections/home/branches-strip";
import { TrainersPreview } from "@/sections/home/trainers-preview";
import { ReviewsPreview } from "@/sections/home/reviews-preview";
import { ResourcesPreview } from "@/sections/home/resources-preview";
import { DemoCta } from "@/sections/home/demo-cta";
import { FaqSection } from "@/sections/home/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoriesGrid />
      <PopularCourses />
      <WhyFita />
      <PlacementProof />
      <BranchesStrip />
      <TrainersPreview />
      <ReviewsPreview />
      <ResourcesPreview />
      <DemoCta />
      <FaqSection />
    </>
  );
}