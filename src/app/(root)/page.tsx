import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import LessonSection from "@/components/sections/LessonSection";
import OfferSection from "@/components/sections/OfferSection";
import QuoteSection from "@/components/sections/QuoteSection";
import RecentBlogsSection from "@/components/sections/RecentBlogsSection";
import RequireSection from "@/components/sections/RequireSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <LessonSection />
        <OfferSection />
        <RequireSection />
        <QuoteSection />
        <ReviewsSection />
        <RecentBlogsSection />
        <ContactSection />
    </>
  );
}