import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <header className="px-8">
        <nav className="mx-auto max-w-7xl flex justify-between items-center py-7 ">
          <img src={logo} alt="logo" />

          <div className=" flex gap-5 font-neue text-lg font-medium  ">
            <a
              className="border px-4 py-2 rounded-3xl border-gray-400"
              href="#"
            >
              Work
            </a>
            <a
              className="border px-4 py-2 rounded-3xl border-gray-400"
              href="#"
            >
              Studio
            </a>
            <a
              className="border px-4 py-2 rounded-3xl border-gray-400"
              href="#"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
