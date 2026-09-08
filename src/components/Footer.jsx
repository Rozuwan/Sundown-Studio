// example source :https://github.com/olivierlarose/sticky-footer
const Footer = () => {
  return (
    <div
      className="relative h-[75vh] md:h-[90vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[75vh] md:h-[90vh] bg-black text-white overflow-hidden font-neue">
        {/* Orange Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-65 bg-primary blur-[80px] animate-footer-blob1 -top-20 -left-10" />
          <div className="absolute w-full h-50 bg-primary blur-[80px] animate-footer-blob2 -top-10 -right-10" />
        </div>

        {/* Footer Content */}
        <div className="absolute bottom-0 left-0 w-full h-full px-4 py-8 md:px-10 flex flex-col justify-between">
          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:justify-between">
            <div className="flex flex-col gap-3 text-4xl font-bold leading-none md:text-3xl">
              <a href="">WORK</a>
              <a href="">STUDIO</a>
              <a href="">CONTACT</a>
            </div>

            <div className="md:w-[30%]">
              <p className="text-lg leading-tight mb-8">
                Get industry insights and creative inspiration straight to your
                inbox.
              </p>
              <input
                type="email"
                placeholder="Email Address"
                className="w-[90%] border-b border-gray-300 bg-transparent outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          <h1 className="relative z-10 w-full text-[87px] md:text-[300px] leading-[0.8] font-bold text-center whitespace-nowrap">
            Sundown
          </h1>

          <div className="relative z-10 border-t border-gray-600 pt-3 grid grid-cols-2 gap-y-2 text-sm md:flex md:justify-between md:text-base">
            <p>Copyright © Sundown Studio</p>
            <p className="text-right md:text-left">Brooklyn, NY</p>
            <a href="https://github.com/Rozuwan" target="_blank">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/rozuwan/"
              target="_blank"
              className="text-right md:text-left"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
