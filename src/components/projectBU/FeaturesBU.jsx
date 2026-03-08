import logo from "../../assets/img/imgBU/logoPretoSemFundo.png";

const FeaturesBU = () => {

  const features = [
    "Layout Intuitivo",
    "NFC para Registro de Cartão",
    "Consulta de Saldo",
    "Pagamento Confirmado na Hora",
    "Registro de Mais de um Cartão",
    "Consulta Historico de Transações",
    "Validação de Crédito via NFC",
    "Acesso Offline ao Mapa do Metrô",
    "Pedido de Cartão APP -> SpTrans",
    "Passagem Virtual: QR Code",
    "Sem Valor Mínimo de Recarga",
    "Central de Ajuda/Dúvidas"
  ];

  return (
    <section className="relative bg-[#E20E17]">
      <div className="relative">

      <div className="bg-[#faf5f2] rounded-se-[40px] rounded-ss-[40px] sm:p-10 p-5">

        <div className="grid lg:grid-cols-2 grid-cols-1 mb-20">
             {/* TÍTULO */}
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="md:w-20 w-16"/>
            <h2 className="montserrat-medio xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-black">Funcionalidades</h2>
          </div>

           {/* TEXTO EXPLICATIVO */}
            <p className="montserrat-regular xl:text-base md:text-sm text-xs leading-tight lg:text-end text-black">
              O processo envolveu múltiplas etapas simultâneas e iterativa, sem seguir uma sequência rígida. Pesquisa, definição de fluxos, construção da identidade e desenvolvimento da interface evoluíram em paralelo, permitindo ajustes contínuos e refinamento da experiência ao longo do projeto. 
              <strong> 4 etapas do projeto foram criadas.</strong>
            </p>
        </div> 

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 justify-center mb-10">

          {features.map((f, i) => (
            <span
              key={i}
              className="montserrat-bold xl:text-lg lg:text-base text-sm
               bg-[#E20E17] text-white text-center px-6 py-4 rounded-full mb-4"
            >
              {f}
            </span>
          ))}

        </div>

      </div>
    </div>
    </section>
  );
};

export default FeaturesBU;