import logo from "../../assets/img/imgBU/logoPretoSemFundo.png";

const ScreensBU = () => {
  return (
    <section className="relative bg-[#282828]">
      <div className="relative">

      <div className="bg-[#faf5f2] rounded-se-[40px] rounded-ss-[40px] ">

        <div className="grid lg:grid-cols-2 grid-cols-1 sm:p-10 p-5">
             {/* TÍTULO */}
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="md:w-20 w-14"/>
            <h2 className="montserrat-medio xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-black">Primeiros Passos</h2>
          </div>

           {/* TEXTO EXPLICATIVO */}
            <p className="montserrat-regular xl:text-base md:text-sm text-xs leading-tight lg:text-end text-black">
              O fluxo foi desenvolvido para ser <strong>direto e intuitivo, </strong> 
              reduzindo etapas e facilitando o preenchimento das informações essenciais. 
              <strong> A estrutura prioriza clareza e agilidade, </strong> 
               permitindo que o usuário conclua o processo rapidamente, com a 
               possibilidade de irritar e atualizar seus dados posteriormente.
            </p>
        </div> 

      </div>
    </div>
    </section>
  );
};

export default ScreensBU;