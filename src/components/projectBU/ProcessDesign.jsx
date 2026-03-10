import logo from "../../assets/img/imgBU/logoPretoSemFundo.png";
import regua from "../../assets/img/imgBU/regua.png"


const ProcessDesign = () => {
  return (
    <section className="relative bg-[#E20E17]">
      <div className="relative">
        {/* CONTAINER BRANCO */}
        <div className="bg-[#faf5f2] rounded-se-[40px] rounded-ss-[40px] sm:p-10 p-5">
          
          <div className="grid lg:grid-cols-2 grid-cols-1">
             {/* TÍTULO */}
          <div className="flex items-center mb-4 gap-2 lg:absolute top-14 right-8">
            <h2 className="montserrat-medio xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-black">Processo de design</h2>
            <img src={logo} alt="logo" className="md:w-20 w-16"/>
          </div>

           {/* TEXTO EXPLICATIVO */}
          <p className="montserrat-regular xl:text-base md:text-sm text-xs leading-tight text-black mb-10">
            O processo envolveu múltiplas etapas simultâneas e iterativa, sem seguir uma sequência rígida. Pesquisa, definição de fluxos, construção da identidade e desenvolvimento da interface evoluíram em paralelo, permitindo ajustes contínuos e refinamento da experiência ao longo do projeto. 
            <strong> 4 etapas do projeto foram criadas.</strong>
          </p>

        </div>  

          {/* ETAPAS */}
        <div className="flex flex-row lg:flex-col items-start lg:items-center">
            <div className="hidden lg:block lg:mb-2 mb-0"> 
                <img src={regua} alt="logo" className="w-full" /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessDesign;