import card from "../../assets/img/imgBU/Gif - Cartão - Bilhete Único.gif";

const GifCard = () => {
  return (
    <section className="relative w-full h-screen">

      {/* IMAGEM FULL */}
      <img
        src={card}
        alt="Bilhete Único"
        className="w-full h-full object-cover"
      />

    </section>
  );
};

export default GifCard;