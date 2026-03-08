import logo from "../../assets/img/imgBU/logoBrancoSemFundo.png";

import mood from "../../assets/img/imgBU/mood/mood1.jpeg";
import mood2 from "../../assets/img/imgBU/mood/mood2.jpeg";
import mood3 from "../../assets/img/imgBU/mood/mood3.jpeg";
import mood4 from "../../assets/img/imgBU/mood/mood4.jpeg";
import mood5 from "../../assets/img/imgBU/mood/mood5.jpeg";
import mood6 from "../../assets/img/imgBU/mood/mood6.jpeg";
import mood7 from "../../assets/img/imgBU/mood/mood7.jpeg";

export default function MoodBoard() {
  return (
    <section className="w-full bg-[#faf5f2] flex items-center justify-center">
      <div className="bg-[#E20E17] w-full rounded-se-[40px] rounded-ss-[40px] sm:p-10 p-5 gap-10 text-white">
        
        {/* LOGO E TÍTULO */}
        <div className="flex flex-col justify-center items-center mb-10 gap-2">
          <img src={logo} alt="logo" className="sm:w-28 w-24"/>
          <h2 className="montserrat-medio lg:text-5xl md:text-4xl text-3xl font-bold">Moodboard</h2>
        </div>

        {/* CONTAINER FLEX PRINCIPAL */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full mb-10">
          
          {/* COLUNA 1 - Imagens verticais (mood7 e mood) */}
          <div className="flex flex-col gap-4 w-full md:w-2/5">
            <div className="relative group overflow-hidden rounded-2xl">
              <img src={mood7} alt="Sinalização" className="w-full h-48 md:h-64 object-cover " />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img src={mood} alt="Dois prédios" className="w-full h-64 md:h-70 object-cover " />
            </div>
          </div>

          {/* COLUNA 2 - Imagens verticais (mood2 e mood4) */}
          <div className="flex flex-col gap-4 w-full md:w-1/5">
            <div className="relative group overflow-hidden rounded-2xl">
              <img src={mood2} alt="MASP" className="w-full h-64 md:h-72 object-cover " />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img src={mood4} alt="Trem" className="w-full h-48 md:h-56 object-cover " />
            </div>
          </div>

          {/* COLUNA 3 - Composição mista (mood5, mood6 lado a lado + mood3 abaixo) */}
          <div className="flex flex-col gap-4 w-full md:w-2/5">
            {/* Linha superior com 2 imagens lado a lado */}
            <div className="flex gap-4">
              <div className="relative group overflow-hidden rounded-2xl w-1/2">
                <img src={mood5} alt="Bilhete Único" className="w-full h-40 md:h-48 object-cover" />
              </div>
              <div className="relative group overflow-hidden rounded-2xl w-1/2">
                <img src={mood6} alt="MASP" className="w-full h-40 md:h-48 object-cover" />
              </div>
            </div>
            {/* Imagem abaixo ocupando toda largura */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img src={mood3} alt="Um Museu" className="w-full h-72 md:h-80 object-cover" />
            </div>
          </div>
        </div>

        {/* TEXTO DESCRITIVO */}
        <div className="montserrat-regular xl:text-base md:text-sm text-xs text-center max-w-4xl mx-auto leading-relaxed">
          <p>
            O moodboard foi construído a partir de elementos da cidade de <strong>São Paulo</strong>, incorporando referências
            visuais já reconhecidas no cotidiano urbano. Arquitetura modernista, sinalizações, mapas de metrô e a tipografia urbana
            serviram como base para construir uma <strong>identidade conectada ao contexto real do usuário</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}