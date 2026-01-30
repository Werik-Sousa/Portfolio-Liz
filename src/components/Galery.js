import React, { useState } from "react";
import ScrollFadeUp from "../components/animations/ScrollFadeUp";

// IMAGENS
import poster1 from "../assets/img/galery/poster1.webp";
import poster2 from "../assets/img/galery/poster2.webp";
import poster3 from "../assets/img/galery/poster3.webp";
import poster4 from "../assets/img/galery/poster4.webp";
import poster5 from "../assets/img/galery/poster5.webp";
import poster6 from "../assets/img/galery/poster6.webp";

const images = [
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
];

const Galery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="posters" className="bg-black py-12">
      <div className="w-full px-4 max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center"> 
          <h2 className="font-anton uppercase text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-yellow-400">além da correria</h2>
  
          <h2 className="font-anton uppercase text-2xl sm:text-4xl lg:text-5xl font-bold mb-10 text-yellow-400">
            <span className="inline-block ml-3 -translate-y-2 sm:-translate-y-3 md:-translate-y-4 text-2xl sm:text-4xl lg:text-5xl">✶ 
          </span> acho tempo pra gracinha<span className="inline-block ml-3 -translate-y-2 sm:-translate-y-3 md:-translate-y-4 text-2xl sm:text-4xl lg:text-5xl">✶</span> 
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <ScrollFadeUp key={index} delay={index * 0.08}>
            <button
              onClick={() => setSelectedImage(img)}
              className="
              group relative overflow-hidden aspect-[6/5] bg-black
              [perspective:400px]
            "
            >
              <img
                src={img}
                alt={`Poster ${index + 1}`}
                className="
                w-full h-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-105
                sm:group-hover:[transform:rotateX(8deg)_rotateY(-8deg)_scale(1.06)]
              "
              />
            </button>
          </ScrollFadeUp>
        ))}
      </div>
        </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition"
          >
            ✕
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="
              max-w-[90vw] 
              max-h-[90vh] 
              object-contain
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Galery;
