import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust the value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div
      className={`w-full md:px-24 px-6 z-20 text-white border-b border-white md:border-primary-color transition-[border]  duration-[1s] py-8 ${
        scrolled
          ? "fixed bg-primary-color md:border-white lg:border-white "
          : ""
      }`}
    >
      <div className="w-full md:flex justify-between items-center">
        <div className=" w-full md:w-1/3 lg:w-1/2 ">
          <h3 className="text-3xl uppercase ">
            Apoorv<span className="text-accent">.</span>
          </h3>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none float-right relative top-[-35px]  "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <Navbar menuOpen={menuOpen} />
      </div>
    </div>
  );
};

export default Header;
