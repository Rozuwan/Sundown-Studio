import Shape from "./Shape";

const Hero = () => {
  return (
    <>
      <section className="relative px-8 md:px-10">
        <div className="flex min-h-[60vh] flex-col justify-between border-b border-gray-300 pb-10 md:h-[65vh] md:flex-row md:items-end">
          {/* Heading */}
          <h1 className="order-1 text-right mt-10 font-neue text-7xl font-bold leading-none md:order-2 md:text-[150px] md:leading-[0.9]">
            SPACES
            <br />
            THAT
            <br />
            INSPIRE
          </h1>

          {/* Description */}
          <h3 className="order-2 mt-10  max-w-md font-neue text-3xl font-bold md:order-1 ">
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </h3>
        </div>
        <hr className="border-gray-300 p-2 " />
        <div className="absolute -bottom-32 right-0 z-10">
          <Shape />
        </div>
      </section>
    </>
  );
};

export default Hero;
