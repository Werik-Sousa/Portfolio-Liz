import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-2">
      <div className="max-w-7xl mx-auto px-2 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/60 font-anton uppercase tracking-wider">
        
        <span>
          © {new Date().getFullYear()} desenvolvido por <span className="text-white">WS</span>
        </span>

        <span>
          design por <span className="text-white"><a href="#home">TLS</a></span>
        </span>

      </div>
    </footer>
  );
};

export default Footer;
