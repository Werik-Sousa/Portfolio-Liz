import heroImg from "../../assets/img/imgBU/gifTelaCadastro.gif";

const ScreensGif = () => {
  return (
    <section className="relative w-full h-screen">
      {/* IMAGEM FULL */}
      <img
        src={heroImg}
        alt="Bilhete Único"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default ScreensGif;