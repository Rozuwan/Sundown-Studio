import logo from "../assets/logo.svg";
const Navbar = () => {
  const links = ["Work", "Studio", "Contact"];
  return (
    <>
      <header className="px-8">
        <nav className="mx-auto max-w-8xl flex justify-between items-center py-7 ">
          <img src={logo} alt="logo" />
          <div className=" flex gap-5 font-neue text-lg font-medium  ">
            {links.map((link) => {
             return <a
                key={link}
                href=""
                className="border px-4 py-2 rounded-3xl border-gray-400"
              >
                {link}
              </a>;
            })}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
