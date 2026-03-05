import React from "react";
//import { Link } from "react-router-dom";
import gif1 from "../assets/img/imgBU/Gif - Mockup Animado - Bilhete Único 1.gif";
import gif2 from "../assets/img/imgBU/Gif - Mockup Animado - Bilhete Único 2.gif";
import gif3 from "../assets/img/imgBU/Gif - Ilustrações - BIlhete Único 1.gif";
import gif4 from "../assets/img/imgBU/Gif - Cartão - Bilhete Único.gif";


import primeira from "../assets/img/imgBU/primeira.png";
import segunda from "../assets/img/imgBU/segunda.png";
import terceira from "../assets/img/imgBU/terceiro.png";
import final from "../assets/img/imgBU/final.png"

const ProjectBU = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="">

        <div className="h-[100vh]">
          <img
            src={gif1}
            alt="Bilhete Único"
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div>
          <img
            src={primeira}
            alt="Bilhete Único"
            className="rounded-xl object-cover w-full"
          />
        </div>

        <div>
          <img
            src={gif2}
            alt="Bilhete Único"
            className="rounded-lg object-cover w-full h-[100vh]"
          />
        </div>

        <div>
          <img
            src={segunda}
            alt="Bilhete Único"
            className="rounded-lx object-cover w-full"
          />
        </div>

        <div>
          <img
            src={gif3}
            alt="Bilhete Único"
            className="rounded-lx object-cover w-full"
          />
        </div>

        <div>
          <img
            src={terceira}
            alt="Bilhete Único"
            className="rounded-lx object-cover w-full"
          />
        </div>

        <div>
          <img
            src={gif4}
            alt="Bilhete Único"
            className="rounded-lx object-cover w-full"
          />
        </div>

        <div>
          <img
            src={final}
            alt="Bilhete Único"
            className="rounded-lx object-cover w-full"
          />
        </div>

      </section>
    </div>
  );
};

export default ProjectBU;