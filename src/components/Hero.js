import React from "react";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section id="home" className="lg:h-[85vh] flex items-center bg-white py-28 md:py-38 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center h-full pt-8">

          {/* LEFT — NAME */}
          <div className="font-anton flex-1 flex flex-col justify-center items-center sm:items-start text-black text-center sm:text-left">
            <h1
              className="
                font-anton
                uppercase
                text-black
                text-5xl
                leading-tight
                sm:text-7xl
                sm:leading-[1]
                md:text-8xl
                md:leading-[0.95]
                lg:text-8xl
                lg:leading-[0.95]
                font-bold"
              >
                TASSIA<br />
                LIZ<span className="font-bold inline-block ml-3
                 -translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:text-7xl text-5xl md:text-6xl">  <a
                href="../Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition"
              >✶ </a></span><br />
                SCHEINER.
              </h1>

              {/* SOCIAL — MOBILE ONLY */}
              <div className="mt-6 sm:hidden">
                <Socials />
              </div>
            </div>

          {/* RIGHT — TEXT (DESKTOP ONLY) */}
          <div className=" hidden sm:flex flex-1 flex-col justify-end items-end text-right text-gray-800 h-full">
            <p className="roboto-600 uppercase lg:text-xl md:text-lg sm:text-sm ">
              Se você está aqui, a gente<br/> deve ser curioso igual.<br/> Então aproveita o momento<br/> e dá um bizu em alguns dos <br/> meus projetos
            </p>

            {/* SOCIAL — DESKTOP */}
            <div>
              <Socials />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
