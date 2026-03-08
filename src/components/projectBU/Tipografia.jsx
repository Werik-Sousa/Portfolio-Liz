import logo from "../../assets/img/imgBU/logoBrancoSemFundo.png";

export default function Tipografia() {
  return (
    <section className="relative bg-[#faf5f2] flex items-center">
      <div className="relative w-full">
        {/* CONTAINER VERMELHO */}
        <div className="bg-[#E20E17] rounded-se-[40px] rounded-ss-[40px] sm:p-10 p-5">
          
          {/* TÍTULO COM LOGO */}
          <div className="flex justify-between items-center absolute top-10 right-10">
            <h2 className="montserrat-medio xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold text-[#faf5f2]">
              Tipografia
            </h2>
            <img src={logo} alt="logo" className="w-16 md:w-20" />
          </div>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-full text-[#faf5f2]">
            
            {/* COLUNA 1 - Aa */}
            <div className="flex flex-col space-y-4 py-10 justify-end">
              <span className="montserrat-medio sm:text-[200px] lg:text-[220px] text-[130px] leading-none font-bold pt-10">
                Aa
              </span>
              <h3 className="montserrat-regular text-5xl xl:text-8xl lg:text-7xl md:text-6xl tracking-wider">
                Montserrat
              </h3>
            </div>

            {/* COLUNA 2 - TEXTOS */}
            <div className="flex flex-col space-y-8 text-end py-10 justify-end">
              <p className="montserrat-regular text-xl xl:text-5xl lg:text-4xl sm:text-3xl">
                Buscamos melhorar
              </p>
              <p className="montserrat-medio text-xl xl:text-5xl lg:text-4xl sm:text-3xl">
                Buscamos evoluir
              </p>
                <p className="montserrat-bold text-xl xl:text-5xl lg:text-4xl sm:text-3xl">
                  Buscamos facilitar
              </p>
              <p className="montserrat-bold-italic text-xl xl:text-5xl lg:text-4xl sm:text-3xl">
                  Buscamos dinamismo
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}