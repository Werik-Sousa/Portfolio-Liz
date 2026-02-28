import React from "react";
import imagem from "../assets/img/about.jpeg";
import video from "../assets/img/media.mp4";


const About = () => {
  return (
    <section id="about" className="bg-black overflow-hidden">
      
      {/* TITLE */}
      <div className="container mx-auto px-4 pt-8">
        <span className="font-anton font-bold text-5xl text-red-600">✶</span>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-anton uppercase text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-red-600">
            um tequinho sobre mim
          </h2>
        </div>
      </div>

      {/* IMAGE — FULL WIDTH */}
      <div className="w-screen sm:block hidden">
        <img
          src={imagem}
          alt="Sobre mim"
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* viceo — only sm */}
      <div className="w-screen sm:hidden">
      <video
        src={video}
        className="w-full h-[200px] object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      </div>

      {/* TEXT */}
      <div className="container mx-auto px-4 py-8">
        <span className="hidden sm:block md:flex flex-col justify-end items-end text-rightfont-anton font-bold text-5xl text-red-600">✶</span>
        <div className="max-w-3xl mx-auto text-white text-center md:text-left">
          <h1 className="mb-4 font-anton font-medium uppercase text-3xl text-center">
            Bacharel em Design & eterna aprendiz
          </h1>
          <p className="mb-4 leading-relaxed text-center">
            Inquieta desde a infância, sou movida a paixão pelo multidisciplinar e pelo experimentalismo.
            Minha pira é provar de tudo um pouco e me desenvolver ao máximo, 
            e assim coleciono experiências fazendo parte de projetos que vão desde a criação de aplicativos para celular, até o desenvolvimento de chaves de carro.
            Bebendo de todas as fontes, a moda, a música e os filmes fazem parte de quem eu sou, navegando também sempre entre o digital e o analógico, 
            busco sempre me conectar com novas ferramentas, testando práticas de 3D e motion, 
            e me arriscando com cerâmica, costura e ourivesaria.
          </p>
        </div>
        <span className="hidden sm:block hifont-anton mx-8 font-bold text-5xl text-red-600">✶</span>
      </div>

    </section>
  );
};

export default About;
