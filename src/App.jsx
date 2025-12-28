import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import  Skills from "./components/Skills";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import AvailabilityBadge from "./components/AvailabilityBadge";

const App = () => {
  return (
    <>
      <CustomCursor/>
      <BlurBackground/>
      <Navbar/>
      <AvailabilityBadge/>
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <HeroSection/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </>
  
  )
}

export default App