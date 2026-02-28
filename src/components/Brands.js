import React, { useEffect, useRef } from "react";

const words = [
  "OUSADIA",
  "DINAMISMO",
  "REFERÊNCIA",
  "FLEXIBILIDADE",
  "DESIGN",
];

const Brands = () => {
  const trackRef = useRef(null);
  const xRef = useRef(0);

  useEffect(() => {
    let animationId;

    const animate = () => {
      xRef.current -= 0.4; // velocidade da animação

      if (trackRef.current) {
        const width = trackRef.current.scrollWidth / 3.5;

        if (Math.abs(xRef.current) >= width) {
          xRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <div className="w-full py-4">
        <div
          ref={trackRef}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          {[...words, ...words].map((word, index) => (
            <React.Fragment key={index}>
              <span className="mx-12 font-anton font-bold text-base sm:text-xl tracking-widest uppercase text-black">
                {word}
              </span>

              {/* separador * */}
              <span className="text-black font-bold text-lg">✶</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
