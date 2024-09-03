import { useState, useEffect, useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ menuOpen }) => {
  /*list of navigation link, wrapped inside useMemo hook 
  to prevent creating an array on each time the link is clicked and renders a page.*/
  const navLink = useMemo(
    () => [
      { key: "nav-1", name: "home", path: "home" },
      { key: "nav-2", name: "about", path: "about" },
      { key: "nav-3", name: "projects", path: "projects" },
      { key: "nav-4", name: "achievements", path: "achievements" },
      { key: "nav-5", name: "contacts", path: "contacts" },
    ],
    []
  );

  //to get active link
  const [activeLink, setActiveLink] = useState("home");

  // Update activeLink based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements based on navLink paths
      const sections = navLink.map((link) =>
        document.getElementById(link.path)
      );

      // Calculate the current scroll position plus half of the viewport height
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section that is currently in view
      const currentSection = sections.find(
        (section) =>
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.clientHeight > scrollPosition
      );

      // Update the active link based on the current section true or not
      if (currentSection) {
        setActiveLink(currentSection.id);
      }
    };

    // Add event listener for the scrolling page
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll function once to the active link is set
    handleScroll();

    // Cleanup function to remove the event listener after moved to different section
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLink]); // Dependency array

  return (
    <nav
      className={` md:w-2/3 lg:w-1/2 mt-2 md:mt-0 flex md:justify-between md:h-auto  overflow-hidden transition-all duration-300 flex-col md:flex-row ${
        menuOpen ? "h-[170px] " : "h-[0px] "
      }`}
    >
      {/* Hamburger Icon */}

      {navLink.map((item) => (
        <ScrollLink
          to={item.path}
          key={item.key}
          smooth={true}
          duration={800}
          className={`  capitalize font-medium hover:text-accent transition-all cursor-pointer p-1 ${
            activeLink === item.path
              ? "text-accent border-b-2 border-accent"
              : "text-white"
          }`}
          onClick={() => setActiveLink(item.path)} // Correctly update the active link
          spy={true} // Ensure the scroll behavior is linked to active section
        >
          {item.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Navbar;
