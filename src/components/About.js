import React from "react";
import imagem from "../assets/img/about.jpeg";

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
      <div className="w-screen">
        <img
          src={imagem}
          alt="Sobre mim"
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="container mx-auto px-4 py-8">
        <span className="hidden sm:block md:flex flex-col justify-end items-end text-rightfont-anton font-bold text-5xl text-red-600">✶</span>
        <div className="max-w-3xl mx-auto text-white text-center md:text-left">
          <h1 className="mb-4 font-anton font-medium uppercase text-3xl text-center">
            Bacharel em Design & eterna aprediz
          </h1>
          <p className="mb-4 leading-relaxed text-center">
            Inquieta desde a infância, promovida a paixão pelo multidisciplinar e pelo experimentalismo. 
            Na mesma linha minha pira é provar de tudo um pouco e me desenvolveram o máximo, e assim colecionar experiências 
            fazendo parte de projetos que vão desde criação de aplicativos para celulares, até o desenvolvimento de chave de carro. 
            Bebendo de todas as fontes, a moda, a música e filmes fazem parte de quem eu sou, navegando 
            também sempre entre o digital e analógico, sempre me conectar com novas ferramentas, tentando práticas de 3D e motion, e me
            arriscando com cêramicas, costura e ourivesaria.
          </p>
        </div>
        <span className="hidden sm:block hifont-anton mx-8 font-bold text-5xl text-red-600">✶</span>
      </div>

    </section>
  );
};

export default About;
