import logo from "../../assets/img/imgBU/logoPretoSemFundo.png";
import paleta from "../../assets/img/imgBU/paleta.png";

export default function Tecnica() {
  return (
  <section className="w-full bg-[#171717] flex items-center justify-center">
      
    <div className="bg-[#faf5f2] w-full rounded-se-[40px] rounded-ss-[40px] sm:p-10 p-5">

      <div className="flex flex-col justify-center items-center mb-10 gap-2">
        <img src={logo} alt="logo" className="sm:w-24 w-20"/>
          <h2 className="montserrat-medio lg:text-5xl sm:text-4xl text-3xl font-bold text-[#171717]">Paleta de cores</h2>
      </div>        
    
      <div className="flex flex-row items-center pb-5">
        <div className=""> 
          <img src={paleta} alt="logo" className="w-full h-full" /> 
        </div>
      </div>

    </div>
  </section>
  )
}