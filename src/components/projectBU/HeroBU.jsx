import heroImg from "../../assets/img/imgBU/bilheteÚnico.gif";
import logo from "../../assets/img/imgBU/logoPretoSemFundo.png";

const HeroBU = () => {
  return (
    <section className="relative w-full h-screen">

      {/* IMAGEM FULL */}
      <img
        src={heroImg}
        alt="Bilhete Único"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-6 left-4 ">
        <img
          src={logo}
          alt="logo"
          className="xl:w-32 lg:w-30 md:w-28 sm:w-24 w-20"
        />
      </div>

      <div className="absolute top-8 right-8 text-black" >
        <p className="hidden md:block montserrat-medio text-end mt-2 xl:text-[30px] lg:text-[25px] md:text-[20px]">
            UX/UI Design<br/>Rebranding Visual<br/>Aplicativo
        </p>
      </div>

    </section>
  );
};

export default HeroBU;