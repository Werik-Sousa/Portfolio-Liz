import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        bg ? "bg-black/90 h-12" : "h-14"
      } bg-black fixed top-0 w-full z-30 flex items-center transition-all duration-300`}
    >
      {/* DESKTOP NAV CENTRAL */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
        <Nav />
      </div>

      {/* MOBILE NAV */}
      <div className="ml-auto pr-6 block sm:hidden">
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
