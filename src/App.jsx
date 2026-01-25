import { lazy, Suspense } from "react";
import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import AvailabilityBadge from "./components/AvailabilityBadge";

// Lazy load below-the-fold components for code splitting
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

// Lazy load CustomCursor - only needed on desktop with hover support
const CustomCursor = lazy(() => import("./components/CustomCursor"));

// Check if device has hover capability (desktop)
const hasHover = typeof window !== 'undefined' && 
  window.matchMedia('(hover: hover)').matches && 
  window.innerWidth >= 768;

// Lightweight loading skeleton with fixed dimensions to prevent CLS
const SectionLoader = () => (
  <div 
    className="min-h-[400px] flex items-center justify-center"
    style={{ contain: 'layout' }}
  >
    <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <>
      {/* Lazy load cursor only on desktop devices */}
      {hasHover && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
      <BlurBackground />
      <Navbar />
      <AvailabilityBadge />
      <main 
        className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10"
        style={{ contain: 'layout' }}
      >
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App