import { useState } from "react";
import logo from "../../assets/img/imgBU/logoPretoSemFundo.png";
import telaP from "../../assets/img/imgBU/telaP.png";
import telaP2 from "../../assets/img/imgBU/telaP2.png";
import telaP3 from "../../assets/img/imgBU/telaP3.png";
import telaMapa from "../../assets/img/imgBU/telaMapa.png";
import telaCartao from "../../assets/img/imgBU/telaCartao.png";
import telaInicial from "../../assets/img/imgBU/telaInicial.png";

const MainScreens = () => {
  const [telaAtual, setTelaAtual] = useState("inicial"); // inicial, mapa, cartao, mais

  const renderConteudo = () => {
    switch(telaAtual) {
      case "mapa":
        return (
          <div className="flex justify-center">
            <img 
              src={telaMapa} 
              alt="tela do mapa" 
              className="w-[320px] max-w-[375px] h-auto rounded-2xl"
            />
          </div>
        );
      
      case "cartao":
        return (
          <div className="flex justify-center">
            <img 
              src={telaCartao} 
              alt="tela de cartões" 
              className="w-[320px] max-w-[375px] h-auto rounded-2xl"
            />
          </div>
        );
      
      case "mais":
        return (
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <img 
              src={telaP} 
              alt="tela de recarga 1" 
              className="w-[300px]  h-auto rounded-2xl"
            />
            <img 
              src={telaP2} 
              alt="tela de recarga 2" 
              className="w-[275px] h-auto rounded-2xl"
            />
            <img 
              src={telaP3} 
              alt="tela de recarga 3" 
              className="w-[260px] h-auto rounded-2xl"
            />
          </div>
        );
      
      default: // inicial
        return (
          <div className="relative flex flex-wrap gap-4 mt-6 justify-center">
            <img 
              src={telaInicial} 
              alt="tela inicial do aplicativo" 
              className="w-[280px] h-auto rounded-2xl"
            />
            
            {/* ÁREAS CLICÁVEIS na tela inicial */}
            <>
              {/* ÁREA DO MAPA */}
              <button 
                onClick={() => setTelaAtual("mapa")}
                className="absolute bottom-[2%] xl:right-[41%] lg:right-[37%] md:right-[32%] sm:right-[26%] right-[22%] xl:w-[4%]
                lg:w-[6%] w-[13%] h-[8%] cursor-pointer hover:bg-[#E20E17]/20 rounded-lg transition-all"
                title="Abrir mapa"
                aria-label="Abrir mapa"
              />

              {/* ÁREA DO CARTÃO */}
              <button 
                onClick={() => setTelaAtual("cartao")}
                className="absolute bottom-[2%] xl:left-[51%] lg:left-[53%] md:left-[49%] sm:left-[53%] left-[54%] lg:w-[4%] w-[10%] h-[8%] cursor-pointer hover:bg-[#E20E17]/20 rounded-lg transition-all"
                title="Abrir cartões"
                aria-label="Abrir cartões"
              />

              {/* ÁREA DO BOTÃO + */}
              <button 
                onClick={() => setTelaAtual("mais")}
                className="absolute bottom-[5%] left-[48%] w-[4%] h-[8%] cursor-pointer hover:bg-[#E20E17]/20 rounded-full transition-all"
                title="Abrir recarga/passagem"
                aria-label="Abrir recarga/passagem"
              />
            </>
          </div>
        );
    }
  };

  const handleVoltar = () => {
    setTelaAtual("inicial");
  };

  return (
    <section className="relative bg-[#faf5f2]">
      <div className="relative">
        {/* CONTAINER BRANCO */}
        <div className="bg-[#faf5f2] sm:p-10 p-5">
          
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* TÍTULO */}
            <div className="flex items-center mb-4 gap-2 lg:absolute top-14 right-8">
              <h2 className="montserrat-medio xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-black">Principais Telas</h2>
              <img src={logo} alt="logo" className="md:w-20 w-14"/>
            </div>

            {/* TEXTO EXPLICATIVO */}
            <p className="montserrat-regular xl:text-base md:text-sm text-xs leading-tight text-black mb-10">
              A tela inicial concentra as <strong>principais funcionalidades </strong> do aplicativo, 
              reunindo em um único ambiente as funções mais relevantes para o <strong>dia a dia </strong> do usuário. Nela é possível consultar saldo, 
              visualizar o histórico de transações, realizar recargas, 
              adquirir passagens unitárias e acessar o mapa da CPTM, garantindo rapidez e praticidade na rotina de deslocamento.
            </p>
          </div>  

          {/* ÁREA DAS TELAS */}
          <div className="flex flex-col items-center justify-center relative">
            {/* BOTÃO HOME CIRCULAR - aparece apenas quando não está na tela inicial */}
            {telaAtual !== "inicial" && (
              <button 
                onClick={handleVoltar}
                className="absolute top-0 left-0 z-10 bg-[#E20E17] hover:bg-[#b00c14] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-105"
                title="Voltar para tela inicial"
                aria-label="Voltar para tela inicial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </button>
            )}

            {/* CONTEÚDO RENDERIZADO */}
            <div className="w-full mt-8">
              {renderConteudo()}
            </div>

            {/* LEGENDA DAS INTERAÇÕES (só aparece na tela inicial) */}
            {telaAtual === "inicial" && (
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#E20E17]/30 rounded-full"></div>
                  <span className="text-sm">Clique no menu para interagir</span>
                </div>                
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreens;