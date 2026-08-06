import MarqueeRaw from "react-fast-marquee";

const Marquee = MarqueeRaw.default;

const items = ["ENVIRONMENTS", "EXPERIENCES", "CONTENT"];

const SliderText = () => {
  return (
    <Marquee 
    autoFill 
    speed={250} 
    gradient={false}
     gap="24px">
      {items.map((text) => (
        <div
         key={text} 
         className="flex shrink-0 items-center gap-6 py-20"
         >
          <h1 
          className="font-neue text-6xl font-bold md:text-[138px] "
          >
            {text}
          </h1>
          <div 
          className="h-7 w-7 rounded-full bg-primary mr-5 md:h-18 md:w-18 md:mr-8"
           />
        </div>
      ))}
    </Marquee>
  );
};

export default SliderText;