import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import About from "../components/About";
import FeaturedProject from "../components/FeaturedProject";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SliderText from "../components/SliderText";
import Video from "../components/Video";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Homepage = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
      },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
  <>
    <main className="relative z-10 overflow-x-hidden">
      <div className="bg-background">
        <Navbar />
        <Hero />
        <Video />
        <SliderText />
        <About />
        <FeaturedProject />
        <Project />
      </div>

      <div className="h-[75vh] md:h-[90vh]" />
    </main>
    <Footer />
  </>
);
};

export default Homepage;