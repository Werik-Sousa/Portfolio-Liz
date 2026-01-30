import React from "react";
import { projectsGrid } from "../data";
import ScrollReveal from "../components/animations/ScrollReveal";
import link from "../assets/img/link.png";


const Projects = () => {
  return (
    <section id="projetos" className="bg-black md:p-10 sm:p-6 p-4">
      <div className="w-full max-w-7xl mx-auto space-y-6">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="font-anton uppercase text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-blue-800">
            os trampos que já trampei
            <span className="inline-block ml-3 -translate-y-2 sm:-translate-y-4 md:-translate-y-6 text-4xl lg:text-5xl">
              <a
                href="../Cubes"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition"
              >✶</a>
            </span>
          </h2>
        </div>

        {projectsGrid.map((project, index) => {
        const reverse = index % 2 !== 0;

        return (
          <ScrollReveal
            key={project.id}
            direction={reverse ? "right" : "left"}
            delay={index * 120} // 🔥 delay progressivo
          >
            <div
              className="bg-zinc-900 rounded-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full"
            >
              {/* IMAGES */}
              <div
                className={`grid grid-cols-2 md:col-span-8 ${
                  reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                {project.images.map((img, i) => (
                  <div key={i} className="w-full h-full overflow-hidden">
                    <img
                      src={img}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500 overflow-hidden"
                    />
                  </div>
                ))}
              </div>

              {/* INFO */}
              <div
                className={`text-white flex flex-col justify-between h-full md:col-span-4 ${
                  reverse
                    ? "md:order-1 items-end text-right"
                    : "md:order-2 items-start text-left"
                }`}
              >
                <div className="mx-4 md:mx-0 mt-0 md:mt-4">
                  <h3 className="roboto-600 text-2xl leading-none">
                    {project.title}
                  </h3>
                  <span className="block text-sm opacity-60 mt-1">
                    {project.year}
                  </span>
                </div>

                <a
                  href={project.link}
                  className={`m-4 hover:opacity-70 hover:scale-110 transition-all duration-300 ${
                    reverse ? "self-start" : "self-end"
                  }`}
                >
                  <img src={link} alt="link icon" className="inline w-8" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
      </div>
    </section>
  );
};

export default Projects;
