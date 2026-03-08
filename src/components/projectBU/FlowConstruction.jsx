import logo from "../../assets/img/imgBU/logoBrancoSemFundo.png";
import fluxo from "../../assets/img/imgBU/fluxo.png";

export default function FlowConstruction() {
  return (
    <section className="relative bg-[#faf5f2]">
      <div className="relative">
        {/* CONTAINER BRANCO */}
        <div className="bg-[#282828] rounded-se-[40px] rounded-ss-[40px]">
          
          <div className="grid lg:grid-cols-2 grid-cols-1 sm:p-10 p-5">
             {/* TÍTULO */}
          <div className="flex items-center mb-4 gap-2 lg:absolute top-14 right-8">
            <h2 className="montserrat-medio xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-[#faf5f2]">Construção dos Fluxos</h2>
            <img src={logo} alt="logo" className="md:w-20 w-16"/>
          </div>

           {/* TEXTO EXPLICATIVO */}
          <p className="montserrat-regular xl:text-base md:text-sm text-xs leading-tight text-[#faf5f2] mb-10">
            Estruturando para agilidade, o fluxo conduz o usuário pelas principais ações, como consultar saldo, 
            recarregar e validar créditos de forma Clara e direta, tornando a experiência mais eficiente para o usuário no dia a dia.
          </p>

        </div> 

        <div className="flex flex-row lg:flex-col items-start lg:items-center">
            <div className="lg:mb-2 mb-0"> 
                <img src={fluxo} alt="logo" className="w-full" /> 
            </div>
          </div> 

        </div>
      </div>
    </section>
  )
}