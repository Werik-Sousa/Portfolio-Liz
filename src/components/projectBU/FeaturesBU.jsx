import { useState, useEffect } from "react";
import logo from "../../assets/img/imgBU/logoPretoSemFundo.png";

const FeaturesBU = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint do Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determinar quantos itens mostrar
  const visibleFeatures = () => {
    if (!isMobile) return features; // Desktop: mostra todos
    if (showAllMobile) return features; // Mobile com "Mostrar mais": mostra todos
    return features.slice(0, 5); // Mobile inicial: mostra apenas 5
  };

  const toggleShowMore = () => {
    setShowAllMobile(!showAllMobile);
  };

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
              Definimos as melhores qualidades encontradas em aplicativos semelhantes e estudamos a possibilidade de aplicação <strong>garantindo que a nossa 
              criação estaria embasada no uso de tecnologias existentes</strong> aproximando o projeto ideal para a realidade em que vivemos
            </p>
          </div> 

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 justify-center mb-4">
            {visibleFeatures().map((f, i) => (
              <span
                key={i}
                className="montserrat-bold xl:text-lg lg:text-base text-sm
                  bg-[#E20E17] text-white text-center px-6 py-4 rounded-full mb-4"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Botão "Mostrar mais" - só aparece no mobile quando não está expandido */}
          {isMobile && !showAllMobile && features.length > 5 && (
            <div className="flex justify-center mt-2">
              <button
                onClick={toggleShowMore}
                className="montserrat-bold bg-white text-[#E20E17] px-8 py-3 rounded-full 
                  text-sm hover:bg-gray-100 transition-colors duration-300
                  shadow-md hover:shadow-lg"
              >
                Mostrar mais
              </button>
            </div>
          )}

          {/* Botão "Mostrar menos" */}
          {isMobile && showAllMobile && features.length > 5 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleShowMore}
                className="montserrat-bold bg-white text-[#E20E17] px-8 py-3 rounded-full 
                  text-sm hover:bg-gray-100 transition-colors duration-300
                  shadow-md hover:shadow-lg"
              >
                Mostrar menos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBU;