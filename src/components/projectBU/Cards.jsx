import logo from "../../assets/img/imgBU/logoBrancoSemFundo.png";
import cards from "../../assets/img/imgBU/cards.png";

export default function Cards() {
  return (
    <section className="w-full bg-[#faf5f2] flex items-center justify-center">
      
      <div className="bg-[#282828] w-full rounded-se-[40px] rounded-ss-[40px] sm:p-10 p-5 ">

          <div className="flex flex-col justify-center items-center mb-10 gap-2">
            <img src={logo} alt="logo" className="sm:w-24 w-20"/>
            <h2 className="montserrat-medio lg:text-5xl md:text-4xl text-3xl  font-bold text-[#faf5f2]">Os Cartões</h2>
          </div>

          <div className="montserrat-regular xl:text-xl lg:text-lg md:text-base text-sm px-10 text-center text-[#faf5f2]">
            <p>Os cartões foram desenhados mantendo a estrutura original, preservando familiaridade e facilidade de identificação. 
              A atualização visual incorpora uma nova paleta de cores e <strong>ilustrações inspiradas na cidade de São Paulo. </strong> 
              Além disso, houve aprimoramento na hierarquia e legibilidade das informações, garantindo melhor vezes 
              visualização dos dados no uso cotidiano.</p>
          </div>

        <div className="flex flex-row lg:flex-col items-start lg:items-center">
          <div className="p-0"> 
            <img src={cards} alt="logo" className="w-full" /> 
          </div>
        </div>


         </div>
    </section>
  )
}