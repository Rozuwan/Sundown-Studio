import { useState } from "react";
import logo from "../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const links = ["Work", "Studio", "Contact"];
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className="px-8">
        <nav className="mx-auto max-w-8xl flex justify-between items-center py-7 ">
          {/* logo */}
          <img src={logo} alt="logo" className="w-28 md:w-36" />
          {/* links */}
          <div className=" hidden font-neue text-lg font-medium  md:flex gap-4 lg:gap-5 ">
            {links.map((link) => {
              return (
                <a
                  key={link}
                  href={`${link}`}
                  className="border px-4 py-2 rounded-3xl border-gray-400"
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* menu btn */}
          <button
            onClick={() => {
              setOpenMenu(!OpenMenu);
            }}
            className="md:hidden rounded-3xl border border-gray-400 px-3 py-2 flex gap-1 items-center active:scale-95 "
          >
            <IoMenu size={20} /> Menu
          </button>
        </nav>
        {/* mobile toggle menu */}
         {OpenMenu && (
        <div className="md:hidden">
          <div className="mt-2 flex flex-col items-end gap-3 p-4 ">
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
        </div>
      )}
      </header>
    </>
  );
};

export default Navbar;
