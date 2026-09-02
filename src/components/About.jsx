import aboutImage from "../assets/about.png";
import AboutBlob from "./AboutBlob";
const About = () => {
  return (
    <>
      <section className=" flex flex-col gap-15 px-4 md:mt-10 md:flex-row md:gap-20 md:px-10 md:mb-20">
        {/* Left */}
        <div className="relative flex-2 font-neue text-left text-[33px] font-extrabold leading-none md:text-[60px] md:mr-20">
          <AboutBlob />
          <h1 className="relative z-10">
            We are a group of design-driven, goal-focused creators, producers,
            and designers who believe that the details make all the difference.
          </h1>
        </div>
        {/* Right */}
        <div className="relative flex-1">
          <img
            className="mb-10 w-75 rounded-3xl object-cover"
            src={aboutImage}
            alt="about image"
          />
          <p className="mr-35 font-neue text-base font-light leading-4.5 md:text-start ">
            We love to create, we love to solve, we love to collaborate, and we
            love to turn amazing ideas into reality. We're here to partner with
            you through every step of the process and know that relationships
            are the most important things we build.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
