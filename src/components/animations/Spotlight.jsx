import { useEffect, useRef, useState } from "react";

const Spotlight = ({
  baseRadius = 140,
  holdRadius = 320,
  glow = "rgba(59, 130, 246, 0.18)", // azul sutil
  fade = "rgba(0, 0, 0, 0.0)",
}) => {
  const raf = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [isDown, setIsDown] = useState(false);
  const [style, setStyle] = useState({
    backgroundImage: `radial-gradient(circle ${baseRadius}px at 50% 50%, ${glow}, ${fade} 60%)`,
  });

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.14);
      current.current.y = lerp(current.current.y, target.current.y, 0.14);

      const r = isDown ? holdRadius : baseRadius;

      setStyle({
        backgroundImage: `radial-gradient(circle ${r}px at ${current.current.x}px ${current.current.y}px, ${glow}, ${fade} 60%)`,
      });

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [isDown, baseRadius, holdRadius, glow, fade]);

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const y = e.clientY ?? (e.touches && e.touches[0]?.clientY);
      if (typeof x !== "number" || typeof y !== "number") return;
      target.current = { x, y };
    };

    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // mobile
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);

      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen"
      style={style}
    />
  );
};

export default Spotlight;
