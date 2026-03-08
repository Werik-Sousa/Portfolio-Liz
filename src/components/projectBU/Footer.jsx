import final from "../../assets/img/imgBU/final.png";

export default function Footer() {
  return (
    <section className="w-full bg-[#E20E17] flex items-center justify-center">
  
        <div className="flex flex-row lg:flex-col items-start lg:items-center">
          <div className="lg:mb-2 mb-0"> 
            <img src={final} alt="logo" className="w-full" /> 
          </div>
        </div>

    </section>
  )
}