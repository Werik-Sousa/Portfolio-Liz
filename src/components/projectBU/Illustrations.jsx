import { useState } from "react";
import logo from "../../assets/img/imgBU/logoPretoSemFundo.png"
import ilu from "../../assets/img/imgBU/Gif - Ilustrações - BIlhete Único 1.gif";
import ponte from "../../assets/img/imgBU/ponteE.png";
import sesc from "../../assets/img/imgBU/sesc.png";
import av from "../../assets/img/imgBU/avPaulista.png";

const Illustrations = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: ponte, alt: "Ponte Estaiada" },
    { src: sesc, alt: "Sesc" },
    { src: av, alt: "Avenida Paulista" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-[#faf5f2]">
      <div className="relative">
        <div className="bg-[#faf5f2]">
          {/* TÍTULO COM GIF */}
          <div className="block lg:hidden grid lg:grid-cols-2 grid-cols-1 sm:p-10 p-5">
             {/* TÍTULO */}
          <div className="flex items-center mb-4 gap-2 lg:absolute top-14 right-8">
            <img src={logo} alt="logo" className="md:w-20 w-16"/>
            <h2 className="montserrat-medio xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-[#171717]">Nossas Ilustrações</h2>
          </div>

           {/* TEXTO EXPLICATIVO */}
          <p className="montserrat-regular xl:text-base md:text-sm text-xs leading-tight text-[#171717] mb-10">
            Estruturando para agilidade, o fluxo conduz o usuário pelas principais ações, como consultar saldo, 
            recarregar e validar créditos de forma Clara e direta, tornando a experiência mais eficiente para o usuário no dia a dia.
          </p>

        </div> 
          <div className="hidden lg:block mb-10">
            <img src={ilu} alt="logo" className="w-full"/>
          </div>

          {/* DESKTOP: 3 IMAGENS */}
          <div className="hidden md:grid grid-cols-3 gap-4 pb-10 px-10 justify-center">
            <img src={ponte} alt="ilustração ponte" className="w-full h-auto object-cover" />
            <img src={sesc} alt="ilustração sesc" className="w-full h-auto object-cover" />
            <img src={av} alt="ilustração avenida" className="w-full h-auto object-cover" />
          </div>

          {/* MOBILE: CARROSSEL COM 1 IMAGEM */}
          <div className="md:hidden relative p-6">
            <div className="relative flex justify-center items-center">
              {/* IMAGEM ATUAL */}
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].alt} 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />

              {/* BOTÃO ANTERIOR */}
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                aria-label="Imagem anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* BOTÃO PRÓXIMO */}
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                aria-label="Próxima imagem"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* INDICADORES */}
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentImage ? "bg-[#E20E17] w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Illustrations;