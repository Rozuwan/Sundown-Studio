import { useState } from "react";
import logo from "../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const links = ["Work", "Studio", "Contact"];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className="px-8">
        <nav className="mx-auto max-w-full flex justify-between items-center py-9 ">
          {/* logo */}
          <a href="/">
            <img src={logo} alt="logo" className="w-36 cursor-pointer" />
          </a>
          {/* nav links */}
          <div className="hidden gap-4 font-neue text-lg font-medium md:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative overflow-hidden rounded-full border border-gray-400 px-4 py-2"
              >
                {/* Animated Background */}
                <span className="absolute inset-0 translate-y-full bg-black transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                {/* Text */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {link}
                </span>
              </a>
            ))}
          </div>

          {/* menu btn */}
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className="md:hidden rounded-3xl border border-gray-400 px-3 py-2 flex gap-1 items-center active:scale-95 "
          >
            <IoMenu size={20} /> Menu
          </button>
        </nav>

        {/* mobile toggle menu */}
        {openMenu && (
          <div className="md:hidden flex flex-col items-end gap-3 p-3 ">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpenMenu(false)}
                className="font-neue hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
