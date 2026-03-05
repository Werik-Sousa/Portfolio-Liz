import gif from "../assets/img/gif.gif"
import gif2 from "../assets/img/gif2.gif"

export default function ProjetoFBC() {
  return (
    <section className="overflow-hidden">
      
    <div className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        
        <img
          src={gif2}
          alt="Gif secundário"
          className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />

        <img
          src={gif}
          alt="Gif principal"
          className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />

      </div>
      
    </div>
    </section>
  );
}