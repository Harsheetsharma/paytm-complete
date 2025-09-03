"use client";
import { useEffect, useState } from "react";
import { FeaturesSection } from "../components/minicomponents/FeaturesSection";
import { StatsSection } from "../components/minicomponents/StatsSection";
import { Header } from "../components/minicomponents/HeaderSection";
import { HeroSection } from "../components/minicomponents/HeroSection";
import { ServicesGridSection } from "../components/minicomponents/ServicesGridSection";
import { TestimonialsSection } from "../components/minicomponents/TestimonialsSection";
import { TrustSection } from "../components/minicomponents/TrustSection";
import { CtaSection } from "../components/minicomponents/CtaSection";
import { FooterSection } from "../components/minicomponents/FooterSection";
import { X } from "lucide-react";

export default function PaytmHomepage() {
  const [showWarning, setShowWarning] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  useEffect(() => {
    setAnimate(true);
    window.scrollTo(0, 0);
    const timers = [
      setTimeout(() => {
        setShowHeader(true);
      }, 100),
      setTimeout(() => {
        setShowHero(true);
      }, 400),
      setTimeout(() => setShowStats(true), 700),
    ];
    return () => timers.forEach((time) => clearTimeout(time));
  }, []);

  function handleWarningTransition() {
    setIsClosing(true);
    setTimeout(() => setShowWarning(false), 300); // Match the duration with CSS transition
  }

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-[1500ms] ease-out transform will-change-auto  ${animate ? "opacity-100" : "opacity-0"}`}
    >
      {/* Step 2: Conditionally show warning */}
      {showWarning && (
        <div
          className={`relative bg-yellow-300 text-black text-center py-3 px-4 font-semibold shadow-md z-50 transition-all duration-300 ease-in-out 
        ${isClosing ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          ⚠️ This is a demo app built for educational purposes only. Do NOT use
          real money or personal data. This is NOT affiliated with Paytm or any
          bank.
          {/* Step 3: Close button */}
          <button
            onClick={handleWarningTransition}
            className="absolute sm:right-4 sm:top-1/2 right-2 top-3 transform -translate-y-1/2 text-black hover:text-red-700"
          >
            <X size={18} />
          </button>
        </div>
      )}
      {/* Header */}
      <Header showHeader={showHeader}></Header>

      {/* Hero Section */}
      <HeroSection showHero={showHero}></HeroSection>

      {/* Stats Section */}
      <StatsSection showStats={showStats}></StatsSection>

      {/* Features Section */}
      <FeaturesSection></FeaturesSection>

      {/* Services Grid */}
      <ServicesGridSection></ServicesGridSection>

      {/* Testimonials Section */}
      <TestimonialsSection></TestimonialsSection>

      {/* Trust Section */}
      <TrustSection></TrustSection>

      {/* CTA Section */}
      <CtaSection></CtaSection>

      {/* Footer */}
      <FooterSection></FooterSection>
    </div>
  );
}
