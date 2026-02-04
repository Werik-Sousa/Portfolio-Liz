import { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon";

import cubeImg from "../assets/img/cube.png";
import fundo from "../assets/img/fundo.png";
import bgMusic from "../assets/audio/seEuNaoTeCantar.mp3";


export default function PhysicsCubes() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // =====================
// 🎵 BACKGROUND MUSIC
// =====================
const audio = new Audio(bgMusic);
audio.loop = true;
audio.volume = 0.4; // volume de 0 a 1

// tenta autoplay
const tryPlay = () => {
  audio.play().catch(() => {
    // navegador bloqueou — espera interação
    const resume = () => {
      audio.play();
      window.removeEventListener("click", resume);
    };
    window.addEventListener("click", resume);
  });
};

tryPlay();


    // =====================
    // CONFIG
    // =====================
    const BOX_SIZE = 1.4;
    const BOX_HALF = BOX_SIZE / 2;

    const SPACING = BOX_SIZE * 1.15;
    const FILL_HEIGHT_RATIO = 0.5;

    let pixelRatio = Math.min(window.devicePixelRatio, 2);
    let multiplier = 80;

    // =====================
    // PHYSICS
    // =====================
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);
    world.solver.iterations = 20;

    const ground = new CANNON.Body({ mass: 0 });
    ground.addShape(new CANNON.Plane());
    ground.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.addBody(ground);

    // =====================
    // THREE
    // =====================
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -50, 50);
    camera.position.set(0, 0, 10);
    scene.add(camera);

    // luzes 
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const light = new THREE.DirectionalLight(0xffffff, 0.6);
    light.position.set(10, 10, 10);
    scene.add(light);

    // geometria
    const geometry = new THREE.BoxGeometry(BOX_SIZE, BOX_SIZE, BOX_SIZE);

    // TEXTURA
    const textureLoader = new THREE.TextureLoader();
    const cubeTexture = textureLoader.load(cubeImg);
    cubeTexture.colorSpace = THREE.SRGBColorSpace;
    cubeTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    cubeTexture.wrapS = THREE.RepeatWrapping;
    cubeTexture.wrapT = THREE.RepeatWrapping;

    //quanto MAIOR o número, MENOR a imagem aparece no cubo
    cubeTexture.repeat.set(2, 2); 


    let physicsBoxes = [];
    let meshes = [];

    const clearBoxes = () => {
      meshes.forEach((m) => {
        scene.remove(m);
        m.material.dispose();
      });
      meshes = [];

      physicsBoxes.forEach((b) => world.removeBody(b));
      physicsBoxes = [];
    };

    const rand = (a, b) => a + Math.random() * (b - a);

    const buildBoxesToFillHalfScreen = () => {
      clearBoxes();

      const halfWorldW = window.innerWidth / multiplier;
      const halfWorldH = window.innerHeight / multiplier;

      const visibleW = halfWorldW * 2;
      const visibleH = halfWorldH * 2;

      const targetH = visibleH * FILL_HEIGHT_RATIO;

      const cols = Math.max(4, Math.floor(visibleW / SPACING));
      const rows = Math.max(2, Math.floor(targetH / SPACING));
      const N = cols * rows;

      const groundY = -halfWorldH + BOX_HALF;
      ground.position.y = groundY;

      const startX = -((cols - 1) * SPACING) / 2;
      const startY = groundY + BOX_HALF;

      for (let i = 0; i < N; i++) {
        const c = i % cols;
        const r = Math.floor(i / cols);

        const x = startX + c * SPACING + rand(-0.08 * BOX_SIZE, 0.08 * BOX_SIZE);
        const y = startY + r * SPACING + rand(0.0, 0.2 * BOX_SIZE);
        const z = rand(-0.2, 0.2);

        const body = new CANNON.Body({
          mass: 1,
          shape: new CANNON.Box(new CANNON.Vec3(BOX_HALF, BOX_HALF, BOX_HALF)),
          position: new CANNON.Vec3(x, y, z),
        });

        body.angularVelocity.set(rand(-4, 4), rand(-4, 4), rand(-4, 4));
        body.angularDamping = 0.4;

        world.addBody(body);
        physicsBoxes.push(body);

        // cor da textura
        const tintColors = [0x2fff00, 0xff7b12, 0xffffff];

        const material = new THREE.MeshStandardMaterial({
          map: cubeTexture,
          color: tintColors[Math.floor(Math.random() * tintColors.length)],
          roughness: 0.85,
          metalness: 0.05,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData.body = body;
        scene.add(mesh);
        meshes.push(mesh);
      }
    };

    // =====================
    // RESIZE
    // =====================
    const onResize = () => {
      pixelRatio = Math.min(window.devicePixelRatio, 2);
      multiplier = Math.max(60, window.innerWidth / 10);

      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera.left = -window.innerWidth / multiplier;
      camera.right = window.innerWidth / multiplier;
      camera.top = window.innerHeight / multiplier;
      camera.bottom = -window.innerHeight / multiplier;
      camera.updateProjectionMatrix();

      buildBoxesToFillHalfScreen();
    };

    window.addEventListener("resize", onResize);
    onResize();

    // =====================
    // CLICK IMPULSE
    // =====================
    const onClick = () => {
      physicsBoxes.forEach((b) => {
        b.applyImpulse(
          new CANNON.Vec3((Math.random() - 0.5) * 6, Math.random() * 5, 0),
          b.position
        );
      });
    };
    window.addEventListener("click", onClick);

    // =====================
    // HOVER PUSH
    // =====================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const HOVER_MAX_DIST = BOX_SIZE * 3.2;
    const HOVER_FORCE = 0.9;
    const HOVER_UP = 0.15;

    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // =====================
    // ANIMATE
    // =====================
    let animationId;
    const animate = () => {
      world.step(1 / 60);

      meshes.forEach((mesh) => {
        mesh.position.copy(mesh.userData.body.position);
        mesh.quaternion.copy(mesh.userData.body.quaternion);
      });

      // hover: detecta e empurra
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(meshes, false);

      if (hits.length) {
        const hoveredMesh = hits[0].object;
        const body = hoveredMesh.userData.body;
        const p = hits[0].point;

        const dx = body.position.x - p.x;
        const dy = body.position.y - p.y;
        const dz = body.position.z - p.z;

        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist > 0.0001 && dist < HOVER_MAX_DIST) {
          const nx = dx / dist;
          const ny = dy / dist;
          const nz = dz / dist;

          const t = 1 - dist / HOVER_MAX_DIST;
          const strength = HOVER_FORCE * t;

          body.applyImpulse(
            new CANNON.Vec3(nx * strength, ny * strength + HOVER_UP, nz * strength),
            body.position
          );
        }
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // =====================
    // CLEANUP
    // =====================
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("mousemove", onMouseMove);

      audio.pause();
      audio.currentTime = 0;

      clearBoxes();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
     <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",

        backgroundImage: 
        `url(${fundo}), radial-gradient(ellipse at center, #000 40%, #031b03 65%, #052b05 80%, #063d06 100%)    `,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition:"center center, center",
        backgroundSize: "lg:800px sm:500px, cover", 
      }}
    >

    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />

    {/* CSS da animação */}
    <style>{`
      @keyframes ledPulse {
        0%   { opacity: .35; filter: blur(0px) saturate(1.1); }
        50%  { opacity: .85; filter: blur(1px) saturate(1.5); }
        100% { opacity: .35; filter: blur(0px) saturate(1.1); }
      }
      .ledSide {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 28px;              /* largura do “LED” */
        pointer-events: none;
        animation: ledPulse 1.6s ease-in-out infinite;
      }
      .ledLeft {
        left: 0;
        box-shadow:
          inset 18px 0 22px rgba(47, 255, 0, 0.35),
          inset 6px 0 10px rgba(47, 255, 0, 0.55),
          0 0 22px rgba(47, 255, 0, 0.35);
      }
      .ledRight {
        right: 0;
        box-shadow:
          inset -18px 0 22px rgba(47, 255, 0, 0.35),
          inset -6px 0 10px rgba(47, 255, 0, 0.55),
          0 0 22px rgba(47, 255, 0, 0.35);
      }
    `}</style>

    {/* LED esquerdo/direito */}
    <div className="ledSide ledLeft" />
    <div className="ledSide ledRight" />
  </div>
);

}
