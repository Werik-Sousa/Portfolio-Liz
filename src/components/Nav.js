import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="font-anton">
      <ul
        className="
          flex
          items-center
          whitespace-nowrap
          transition-all
          duration-300

          gap-6
          sm:gap-16
          md:gap-24
          lg:gap-32
          xl:gap-40

          text-[11px]
          sm:text-[16px]
          md:text-[18px]
          lg:text-[20px]

          tracking-[0.08em]
          md:tracking-[0.12em]
          lg:tracking-[0.15em]
        "
      >
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              activeClass={item.activeClass}
              to={item.href}
              spy
              smooth
              offset={-80}
              duration={500}
              className="
                cursor-pointer
                text-white
                transition-all
                duration-300
                hover:opacity-80
                hover:scale-110
                inline-block
              "
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
