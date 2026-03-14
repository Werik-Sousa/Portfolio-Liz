import React from "react";
import logo from "../assets/img/logoTransparente.png"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-1">
      <div className="max-w-7xl mx-auto px-2 flex flex-row justify-between items-center gap-2 text-sm text-white/60 font-anton uppercase tracking-wider">
        
        <a
            href="https://portfoliowerik.netlify.app/"
            target="_blank"
            rel="noreferrer">
        <span className="flex items-center gap-2">
           © {new Date().getFullYear()} desenvolvido por <img
            src={logo}
            alt="Imagem ampliada"
            className="
              max-w-[3vw] 
              max-h-[3vh] 
              object-contain
            "  />
        </span>
        </a>

        <span>
          design por <span className="text-white"><a href="#home">TLS</a>✶</span>
        </span>

      </div>
    </footer>
  );
};

export default Footer;
