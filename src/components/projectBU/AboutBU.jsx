import logo from "../../assets/img/imgBU/logoBrancoSemFundo.png";

export default function About() {
  return (
    <section className="w-full bg-[#faf5f2] flex items-center justify-center">
      
      <div className="bg-[#E20E17] w-full rounded-se-[40px] rounded-ss-[40px] sm:p-10 p-5 grid grid-cols-1 lg:grid-cols-3 gap-10 text-[#faf5f2]">
        <div className="flex flex-col gap-2">

          <div className="flex items-center mb-4 gap-2">
            <img src={logo} alt="logo" className="md:w-20 w-14"/>
            <h2 className="montserrat-medio lg:text-5xl sm:text-4xl text-3xl font-bold">Sobre</h2>
          </div>

          <p className="montserrat-regular xl:text-xl sm:text-lg text-base">
            O Bilhete Único é um aplicativo dedicado à mobilidade urbana,
            facilitando consulta de créditos, recargas e muito mais.
          </p>

          <p className="montserrat-medio xl:text-xl sm:text-lg text-base">
            <strong>Este é um projeto fictício, desenvolvido em grupo para fins acadêmicos.</strong>
          </p>
        </div>

        <div className="flex flex-col gap-4">

          <h3 className="montserrat-regular xl:text-lg text-base uppercase tracking-wider">
            Problema
          </h3>

          <p className="montserrat-regular xl:text-base sm:text-sm text-xs leading-relaxed">
            A atual experiência digital do Bilhete Único é fragmentada e pouco intuitiva.
            Os aplicativos disponíveis apresentam instabilidade, interfaces desatualizadas
            e limitações funcionais, dificultando ações básicas como recarga e validação
            de créditos.

            Em um serviço utilizado diariamente por milhões de pessoas, essas fricções
            comprometem a eficiência da mobilidade urbana.
          </p>

        </div>

        <div className="montserrat-regular flex flex-col gap-4">

          <h3 className="montserrat-regular xl:text-xl text-lg uppercase tracking-wider">
            Solução
          </h3>

          <p className="leading-relaxed xl:text-base sm:text-sm text-xs">
            O aplicativo centraliza todas as funcionalidades em uma única experiência
            simples e eficiente. Integrando recarga instantânea, validação via NFC,
            QR Code como passagem virtual e gerenciamento completo do cartão.

            Reduzindo etapas e oferecendo uma experiência mais fluida para o usuário.
          </p>

        </div>
      </div>


    </section>
  )
}