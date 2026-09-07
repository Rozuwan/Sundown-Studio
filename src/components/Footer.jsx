const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black h-[75vh] md:h-[90vh] text-white px-4 py-8 md:px-10 flex flex-col justify-between font-neue z-0">

      {/* Top */}
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">

        {/* Links */}
        <div className="flex flex-col gap-3 text-4xl font-bold leading-none md:text-3xl">
          <a href="">WORK</a>
          <a href="">STUDIO</a>
          <a href="">CONTACT</a>
        </div>

        {/* Email */}
        <div className="md:w-[30%]">
          <p className="text-lg leading-tight mb-8">
            Get industry insights and creative inspiration straight to your inbox.
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-[90%] border-b border-gray-500 bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Sundown */}
      <h1 className="w-full text-[87px] md:text-[300px] leading-[0.8] font-bold text-center whitespace-nowrap">
        Sundown
      </h1>

      {/* Bottom */}
      <div className="border-t border-gray-600 pt-3 grid grid-cols-2 gap-y-2 text-sm md:flex md:justify-between md:text-base">
        <p>Copyright © Sundown Studio</p>
        <p className="text-right md:text-left">Brooklyn, NY</p>
        <a href="">Instagram</a>
        <a href="" className="text-right md:text-left">LinkedIn</a>
      </div>

    </div>
  );
};

export default Footer;