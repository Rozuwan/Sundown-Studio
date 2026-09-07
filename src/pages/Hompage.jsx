import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import About from "../components/About";
import FeaturedProject from "../components/FeaturedProject";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SliderText from "../components/SliderText";
import Video from "../components/Video";
import Project from "../components/Project";

const Homepage = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.22,
        smoothWheel: true,
        wheelMultiplier: 1,
      },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main className="bg-background overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Video />
      <SliderText />
      <About />
      <FeaturedProject />
      <Project />
    </main>
  );
};

export default Homepage;