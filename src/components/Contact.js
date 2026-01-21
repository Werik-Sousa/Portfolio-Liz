import React from "react";

import insta from "../assets/img/contact/instagram.jpeg";
import be from "../assets/img/contact/behance.jpeg";
import link from "../assets/img/contact/linkedin.jpeg";

const Contact = () => {
  return (
    <section id="contact" className="bg-black md:p-10 sm:p-6 p-4 ">
      <div className="w-full max-w-7xl mx-auto space-y-6">

        {/* TITLE */}
        <div className="text-center"> 
          <h2 className="font-anton uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-purple-900">
            <span className="inline-block text-3xl md:text-4xl lg:text-5xl">
              ✶
            </span> quer me pagar pra criar<span className="inline-block ml-3 text-3xl md:text-4xl lg:text-5xl">
              ✶
            </span><br/> algo legal?</h2>
            <h3 className="font-anton uppercase text-white sm:text-2xl md:text-3xl leading-relaxed max-w-2xl mx-auto">
              eu que não vou te impedir </h3>
        </div>
                {/* DESCRIPTION */}
        <p className="text-center text-gray-400 mx-auto text-sm sm:text-lg">
          Preencha o formulário aqui em baixo ou entre em contato comigo pelas minhas redes
        </p>
        
        {/* FORM */}
        <form className="max-w-xl mx-auto space-y-6 pt-6">
          <input
            type="text"
            placeholder="SEU NOME:"
            className="
              w-full 
              bg-white 
              text-black 
              px-4 
              py-4  
              font-bold 
              rounded-md 
              focus:outline-none
            "
          />

          <input
            type="email"
            placeholder="SEU E-MAIL:"
            className="
              w-full 
              bg-white 
              text-black 
              px-4 
              py-4  
              font-bold 
              rounded-md 
              focus:outline-none
            "
          />

          <textarea
            placeholder="SUAS IDEIAS:"
            rows="5"
            className="
              w-full 
              bg-white 
              text-black 
              px-4 
              py-4  
              font-bold 
              rounded-md 
              resize-none 
              focus:outline-none
            "
          />
          <button
            type="submit"
            className="
              w-full
              bg-purple-900
              text-black
              font-anton
              uppercase
              py-4
              rounded-md
              hover:bg-green-500
              transition
              duration-300
              tracking-wider
            "
          >
            enviar <span className="inline-block ml-3 text-2xl">
              ✶
            </span>
          </button>
        </form>

       {/* SOCIALS */}
        <div className="flex justify-center items-center gap-8">
          <a href="https://www.behance.net/tassiascheiner/moodboards" target="_blank"
              rel="noopener noreferrer" className="hover:opacity-70 transition">
            <img
              src={be}
              alt="Behance"
              className="w-10 h-10 rounded-md object-contain"
            />
          </a>

          <a href="https://www.linkedin.com/in/t%C3%A1ssia-liz-scheiner-4a826833b/" target="_blank"
            rel="noopener noreferrer" className="hover:opacity-70 transition">
            <img
              src={link}
              alt="LinkedIn"
              className="w-10 h-10 rounded-md object-contain"
            />
          </a>

          <a href="https://www.instagram.com/tassia.liz/" target="_blank"
            rel="noopener noreferrer" className="hover:opacity-70 transition">
            <img
              src={insta}
              alt="Instagram"
              className="w-10 h-10 rounded-md object-contain"
            />
          </a>
        </div>
    </div>
    </section>
  );
};

export default Contact;