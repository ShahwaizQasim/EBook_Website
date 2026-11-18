import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Homepage Sections
import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import WhyPublishing from "@/components/sections/WhyPublishing";
import DarkEditorial from "@/components/sections/DarkEditorial";
import GhostwritingServicesCarousel from "@/components/sections/GhostwritingServicesCarousel";
import BookPortfolio from "@/components/sections/BookPortfolio";
import PublishingProcess from "@/components/sections/PublishingProcess";
import AdditionalServices from "@/components/sections/AdditionalServices";
import Testimonials from "@/components/sections/Testimonials";
import BookGenres from "@/components/sections/BookGenres";
import Distribution from "@/components/sections/Distribution";
import PublishingBenefits from "@/components/sections/PublishingBenefits";
import InquiryForm from "@/components/sections/InquiryForm";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* Top Utility Bar & Navigation Header with Active Links & Dropdown */}
      <UtilityBar />
      <Header />

      <main id="main-content">
        {/* 1. Premium Hero Section */}
        <Hero />

        {/* 2. Trusted Publishing / Brand Highlights */}
        <TrustStats />

        {/* 3. Why Choose Our Company */}
        <WhyPublishing />

        {/* 4. Dark Editorial Feature: The Internet Is Full of Promises */}
        <DarkEditorial />

        {/* 5. Professional Ghostwriting Services Carousel (Matches Screenshot 2) */}
        <GhostwritingServicesCarousel />

        {/* 6. Book Portfolio Carousel (Matches Screenshot 1) */}
        <BookPortfolio />

        {/* 7. Our 6-Step Book Creation Process */}
        <PublishingProcess />

        {/* 8. Additional Publishing and Marketing Services */}
        <AdditionalServices />

        {/* 9. Client Testimonials Carousel */}
        <Testimonials />

        {/* 10. Book Genres We Cover */}
        <BookGenres />

        {/* 11. Global Publishing Distribution & Benefits */}
        <Distribution />
        <PublishingBenefits />

        {/* 12. Interactive Publishing Inquiry Form */}
        <InquiryForm />

        {/* 13. Frequently Asked Questions */}
        <FAQ />

        {/* 14. Strong Final Call-to-Action */}
        <FinalCTA />
      </main>

      {/* 15. Professional Multi-Column Footer */}
      <Footer />
    </>
  );
}
