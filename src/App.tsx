import { useState, useEffect } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import HowToOrder from "./components/HowToOrder";
import Contact from "./components/Contact";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden relative select-none">
      {/* Premium Header */}
      <Header />

      {/* Main content body */}
      <main className="flex-grow">
        {/* Full Screen Hero Section */}
        <Hero />

        {/* About brand Section */}
        <About />

        {/* Elegant Grid Offer Cards */}
        <Offer />

        {/* Pinterest Masonry Gallery */}
        <Gallery />

        {/* Timeline Order Guidelines */}
        <HowToOrder />

        {/* Luxury Client feedback */}
        <Testimonials />

        {/* Booking Inquiry & Map location */}
        <Contact />

        {/* Grand ending Call To Action */}
        <CtaSection />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand-accent hover:bg-brand-dark text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:animate-bounce" />
        </button>
      )}

      {/* Floating Sparkles decorative cursor effect or corner highlights */}
      <div className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-accent/40 blur-sm pointer-events-none z-50 animate-ping" />
    </div>
  );
}
