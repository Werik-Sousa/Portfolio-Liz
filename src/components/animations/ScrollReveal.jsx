import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  direction = "left",
  delay = 0,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const translateFrom =
    direction === "left"
      ? "-translate-x-24"
      : "translate-x-24";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${visible
          ? "opacity-100 translate-x-0 scale-100"
          : `opacity-0 ${translateFrom} scale-95`}
      `}
    >
      {/* OVERSHOOT */}
      <div
        className={`
          transition-transform duration-300 ease-out
          ${visible ? "translate-x-[5px]" : ""}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;
