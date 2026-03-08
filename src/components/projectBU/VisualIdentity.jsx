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

           {/* TEXTO EXPLICATIVO */}
            <p className="montserrat-regular xl:text-base sm:text-sm text-xs  leading-tight lg:text-end text-[#faf5f2]">
              O fluxo foi desenvolvido para ser <strong>direto e intuitivo, </strong> 
              reduzindo etapas e facilitando o preenchimento das informações essenciais. 
              <strong> A estrutura prioriza clareza e agilidade, </strong> 
               permitindo que o usuário conclua o processo rapidamente, com a 
               possibilidade de irritar e atualizar seus dados posteriormente.
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