import logo from "../../assets/img/imgBU/logoBrancoSemFundo.png";
import IV from "../../assets/img/imgBU/identidadeVisual.png";

const VisualIdentity = () => {
  return (
    <section className="relative bg-[#faf5f2]">
      <div className="relative">

      <div className="bg-[#171717] rounded-se-[40px] rounded-ss-[40px] ">

        <div className="grid lg:grid-cols-2 grid-cols-1 mb-10 sm:p-10 p-5">
             {/* TÍTULO */}
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="md:w-20 w-14"/>
            <h2 className="montserrat-medio xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#faf5f2]">Identidade Visual</h2>
          </div>

            <p className="montserrat-regular xl:text-base sm:text-sm text-xs  leading-tight lg:text-end text-[#faf5f2]">
              O rebranding do logo foi desenvolvido com o objetivo de preservar a essência e o 
              reconhecimento da <strong>marca original, </strong>trazendo uma abordagem mais simples, moderna e versátil. A nova construção mantém a 
              ideia central do símbolo, mas com os traços mais limpos e equilibrados, garantindo maior elegibilidade em diferentes 
              escalas e contextos.
            </p>
        </div> 

        <div className="flex flex-row lg:flex-col items-start lg:items-center"> 
            <img src={IV} alt="logo" className="w-full h-full" /> 
        </div>


      </div>
    </div>
    </section>
  );
};

export default VisualIdentity;