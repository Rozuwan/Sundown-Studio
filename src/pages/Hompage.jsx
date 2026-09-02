import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SliderText from "../components/SliderText";
import Video from "../components/Video";

const Homepage = () => {
  return (
    <>
      <main className="bg-background overflow-x-hidden relative ">
        <Navbar />
        <Hero />
        <Video />
        <SliderText />
        <About />
      </main>
    </>
  );
};

export default Homepage;
