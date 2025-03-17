import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import LessonSection from "@/components/sections/LessonSection";
import OfferSection from "@/components/sections/OfferSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <LessonSection />
        <OfferSection />
        <ReviewsSection />
    </>
  );
}