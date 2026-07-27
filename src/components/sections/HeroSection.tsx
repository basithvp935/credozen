"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, Variants } from "framer-motion";

/* ──────────────────────────────────────────────
   Framer variants
────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: -25 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

/* ──────────────────────────────────────────────
   Floating Particle (DOM)
────────────────────────────────────────────── */
function Particle({ x, y, size, dur, delay }: { x: number; y: number; size: number; dur: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`, top: `${y}%`, width: size, height: size,
        background: "radial-gradient(circle,rgba(160,60,230,0.8) 0%,rgba(90,20,180,0.3) 60%,transparent 100%)",
        filter: "blur(1px)"
      }}
      animate={{ y: [0, -28, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.35, 1] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
const PARTICLES = [
  { x: 8, y: 18, size: 5, dur: 4.2, delay: 0 },
  { x: 87, y: 14, size: 4, dur: 5.5, delay: 1 },
  { x: 75, y: 75, size: 7, dur: 3.8, delay: 0.5 },
  { x: 18, y: 80, size: 4, dur: 6, delay: 2 },
  { x: 54, y: 9, size: 3, dur: 4.8, delay: 1.5 },
  { x: 93, y: 54, size: 6, dur: 5, delay: 0.8 },
  { x: 4, y: 55, size: 4, dur: 4, delay: 2.3 },
  { x: 40, y: 91, size: 5, dur: 5.2, delay: 1.2 },
];

/* ──────────────────────────────────────────────
   3D Round Brilliant Diamond Canvas
────────────────────────────────────────────── */
function Diamond3DCanvas({ size = 520 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const SCALE = size * 0.36;

    // Mouse tracking for interactive rotation
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    // --- Geometry Construction ---
    const baseVertices: { x: number, y: number, z: number, r: number, a: number }[] = [];

    const R_TABLE = 0.45, H_TABLE = -0.4;
    const R_CROWN = 0.85, H_CROWN = -0.15;
    const R_GIRDLE = 1.0, H_GIRDLE = 0.0;
    const R_PAV = 0.45, H_PAV = 0.45;
    const H_CULET = 0.9;

    for (let i = 0; i < 8; i++) baseVertices.push({ r: R_TABLE, y: H_TABLE, a: i * Math.PI * 2 / 8, x: 0, z: 0 });
    for (let i = 0; i < 16; i++) baseVertices.push({ r: R_CROWN, y: H_CROWN, a: i * Math.PI * 2 / 16, x: 0, z: 0 });
    for (let i = 0; i < 16; i++) baseVertices.push({ r: R_GIRDLE, y: H_GIRDLE, a: i * Math.PI * 2 / 16, x: 0, z: 0 });
    for (let i = 0; i < 8; i++) baseVertices.push({ r: R_PAV, y: H_PAV, a: (i + 0.5) * Math.PI * 2 / 8, x: 0, z: 0 });
    baseVertices.push({ r: 0, y: H_CULET, a: 0, x: 0, z: 0 });

    baseVertices.forEach(p => {
      p.x = p.r * Math.cos(p.a);
      p.z = p.r * Math.sin(p.a);
    });

    // --- Bubble (Sphere) Target Vertices ---
    const targetSphereVertices: { x: number, y: number, z: number, r: number, a: number }[] = [];
    const R_SPHERE = 0.85;

    // 8 table -> squeeze near North Pole
    for (let i = 0; i < 8; i++) targetSphereVertices.push({ r: 0.15, y: R_SPHERE * -0.95, a: i * Math.PI * 2 / 8, x: 0, z: 0 });
    // 16 crown
    for (let i = 0; i < 16; i++) targetSphereVertices.push({ r: R_SPHERE * 0.75, y: R_SPHERE * -0.5, a: i * Math.PI * 2 / 16, x: 0, z: 0 });
    // 16 girdle (equator)
    for (let i = 0; i < 16; i++) targetSphereVertices.push({ r: R_SPHERE, y: 0, a: i * Math.PI * 2 / 16, x: 0, z: 0 });
    // 8 pavilion
    for (let i = 0; i < 8; i++) targetSphereVertices.push({ r: R_SPHERE * 0.75, y: R_SPHERE * 0.5, a: (i + 0.5) * Math.PI * 2 / 8, x: 0, z: 0 });
    // 1 culet (South Pole)
    targetSphereVertices.push({ r: 0, y: R_SPHERE, a: 0, x: 0, z: 0 });

    targetSphereVertices.forEach(p => {
      p.x = p.r * Math.cos(p.a);
      p.z = p.r * Math.sin(p.a);
    });

    const baseFaces: { indices: number[] }[] = [];
    baseFaces.push({ indices: [0, 1, 2, 3, 4, 5, 6, 7] });
    for (let i = 0; i < 8; i++) {
      const t1 = i, t2 = (i + 1) % 8;
      const c1 = 8 + 2 * i, c2 = 8 + 2 * i + 1, c3 = 8 + (2 * i + 2) % 16;
      baseFaces.push({ indices: [t1, c1, c2] });
      baseFaces.push({ indices: [t1, c2, t2] });
      baseFaces.push({ indices: [t2, c2, c3] });
    }
    for (let i = 0; i < 16; i++) {
      const c1 = 8 + i, c2 = 8 + (i + 1) % 16;
      const g1 = 24 + i, g2 = 24 + (i + 1) % 16;
      baseFaces.push({ indices: [c1, g1, g2] });
      baseFaces.push({ indices: [c1, g2, c2] });
    }
    for (let i = 0; i < 8; i++) {
      const p1 = 40 + i, p2 = 40 + (i + 1) % 8;
      const g1 = 24 + 2 * i, g2 = 24 + 2 * i + 1, g3 = 24 + (2 * i + 2) % 16;
      baseFaces.push({ indices: [p1, g1, g2] });
      baseFaces.push({ indices: [p1, g2, g3] });
      baseFaces.push({ indices: [p1, g3, p2] });
    }
    const culet = 48;
    for (let i = 0; i < 8; i++) {
      const p1 = 40 + i, p2 = 40 + (i + 1) % 8;
      baseFaces.push({ indices: [culet, p1, p2] });
    }

    baseFaces.forEach(face => {
      const v0 = baseVertices[face.indices[0]];
      const v1 = baseVertices[face.indices[1]];
      const v2 = baseVertices[face.indices[2]];
      const nx = (v1.y - v0.y) * (v2.z - v0.z) - (v1.z - v0.z) * (v2.y - v0.y);
      const ny = (v1.z - v0.z) * (v2.x - v0.x) - (v1.x - v0.x) * (v2.z - v0.z);
      const nz = (v1.x - v0.x) * (v2.y - v0.y) - (v1.y - v0.y) * (v2.x - v0.x);
      let fcx = 0, fcy = 0, fcz = 0;
      face.indices.forEach(idx => {
        fcx += baseVertices[idx].x; fcy += baseVertices[idx].y; fcz += baseVertices[idx].z;
      });
      fcx /= face.indices.length; fcy /= face.indices.length; fcz /= face.indices.length;
      if (nx * fcx + ny * fcy + nz * fcz < 0) face.indices.reverse();
    });

    const lights = [
      { x: 1, y: -1, z: 1, color: [255, 255, 255], power: 60 },
      { x: -1, y: 0.5, z: 1, color: [120, 220, 255], power: 30 },
      { x: 0.5, y: 1, z: 0.5, color: [255, 100, 255], power: 45 },
      { x: -0.5, y: -1, z: -0.5, color: [255, 255, 120], power: 25 }
    ].map(l => {
      const len = Math.sqrt(l.x * l.x + l.y * l.y + l.z * l.z);
      return { ...l, x: l.x / len, y: l.y / len, z: l.z / len };
    });

    const particles = Array.from({ length: 45 }, () => {
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(2 * Math.random() - 1);
      const r = 1.3 + Math.random() * 0.9;
      return {
        basePos: { x: r * Math.sin(b) * Math.cos(a), y: r * Math.cos(b), z: r * Math.sin(b) * Math.sin(a) },
        size: Math.random() * 1.5 + 0.5,
      };
    });

    const t0 = performance.now();
    let currRotX = 0.2;
    let currRotY = 0;

    // --- Render Loop ---
    function render(now: number) {
      ctx.clearRect(0, 0, size, size);
      const t = (now - t0) / 1000;

      // --- Morphing Timeline ---
      let currentMorph = 0;
      const period = t % 9; // exactly 9 seconds total loop

      if (period < 3) {
        currentMorph = 0; // Hold Diamond Phase for 3s
      } else if (period < 4.5) {
        const p = (period - 3) / 1.5;
        currentMorph = 0.5 - 0.5 * Math.cos(p * Math.PI); // Butter-smooth 1.5s transition to Bubble
      } else if (period < 7.5) {
        currentMorph = 1; // Hold Bubble Phase for 3s
      } else {
        const p = (period - 7.5) / 1.5;
        currentMorph = 0.5 + 0.5 * Math.cos(p * Math.PI); // Butter-smooth 1.5s transition to Diamond
      }

      // Background Ambient Glow
      const glowR = size * 0.48;
      const glowGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      glowGradient.addColorStop(0, `hsla(${(t * 25) % 360}, 75%, 45%, 0.18)`);
      glowGradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, size, size);

      // Smooth interactive rotation
      const targetRotX = 0.2 + mouseRef.current.y * 0.5;
      const targetRotY = t * 0.35 + mouseRef.current.x * Math.PI * 0.8;
      currRotX += (targetRotX - currRotX) * 0.08;
      currRotY += (targetRotY - currRotY) * 0.08;

      const cosX = Math.cos(currRotX), sinX = Math.sin(currRotX);
      const cosY = Math.cos(currRotY), sinY = Math.sin(currRotY);

      const rotate = (v: { x: number, y: number, z: number }) => {
        const y1 = v.y * cosX - v.z * sinX;
        const z1 = v.y * sinX + v.z * cosX;
        const x2 = v.x * cosY + z1 * sinY;
        const z2 = -v.x * sinY + z1 * cosY;
        return { x: x2, y: y1, z: z2 };
      };

      const rotatedVertices = baseVertices.map((bv, i) => {
        const sv = targetSphereVertices[i];

        // Add organic liquid wobble to the sphere vertices
        let sx = sv.x;
        let sy = sv.y;
        let sz = sv.z;
        if (currentMorph > 0) {
          const wobble = Math.sin(t * 3 + bv.y * 8) * 0.08 * currentMorph;
          sx += wobble * Math.cos(sv.a || 0);
          sy += wobble * 0.5;
          sz += wobble * Math.sin(sv.a || 0);
        }

        const mx = bv.x * (1 - currentMorph) + sx * currentMorph;
        const my = bv.y * (1 - currentMorph) + sy * currentMorph;
        const mz = bv.z * (1 - currentMorph) + sz * currentMorph;

        return rotate({ x: mx, y: my, z: mz });
      });
      const renderItems: any[] = [];

      // Process Faces
      baseFaces.forEach(face => {
        const pts = face.indices.map(i => rotatedVertices[i]);
        const v0 = pts[0], v1 = pts[1], v2 = pts[2];

        const nx = (v1.y - v0.y) * (v2.z - v0.z) - (v1.z - v0.z) * (v2.y - v0.y);
        const ny = (v1.z - v0.z) * (v2.x - v0.x) - (v1.x - v0.x) * (v2.z - v0.z);
        const nz = (v1.x - v0.x) * (v2.y - v0.y) - (v1.y - v0.y) * (v2.x - v0.x);
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz);

        let fcz = 0;
        pts.forEach(p => fcz += p.z);
        fcz /= pts.length;

        renderItems.push({ type: 'face', z: fcz, pts, n: { x: nx / len, y: ny / len, z: nz / len } });
      });

      // Process Particles
      particles.forEach(p => {
        const rp = rotate(p.basePos);
        renderItems.push({ type: 'particle', z: rp.z, pos: rp, size: p.size });
      });

      // Sort back to front
      renderItems.sort((a, b) => a.z - b.z);

      // Draw Sequence
      renderItems.forEach(item => {
        if (item.type === 'particle') {
          const px = cx + item.pos.x * SCALE;
          const py = cy + item.pos.y * SCALE;
          ctx.beginPath();
          ctx.arc(px, py, item.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + ((item.z + 1.5) / 3) * 0.6})`;
          ctx.fill();

        } else {
          // DIAMOND FACES
          const face = item;
          const isFront = face.n.z > 0;

          ctx.beginPath();
          face.pts.forEach((p: any, i: number) => {
            const px = cx + p.x * SCALE;
            const py = cy + p.y * SCALE;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          });
          ctx.closePath();

          if (!isFront) {
            const hue = (face.n.x * 120 + face.n.y * 120 + t * 40) % 360;
            const alpha = 0.12 * (1 - currentMorph) + 0.05 * currentMorph; // Bubble has lighter backfaces
            ctx.fillStyle = `hsla(${hue}, 90%, 65%, ${alpha})`;
            ctx.fill();
            ctx.strokeStyle = `hsla(${hue}, 90%, 75%, ${alpha + 0.05})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          } else {
            const fillR = 18 * (1 - currentMorph) + 120 * currentMorph;
            const fillG = 12 * (1 - currentMorph) + 210 * currentMorph;
            const fillB = 35 * (1 - currentMorph) + 255 * currentMorph;
            const fillA = 0.45 * (1 - currentMorph) + 0.10 * currentMorph; // Bubble is more transparent
            ctx.fillStyle = `rgba(${fillR}, ${fillG}, ${fillB}, ${fillA})`;
            ctx.fill();

            let totalEdgeShine = 0;
            lights.forEach(L => {
              const dotNL = face.n.x * L.x + face.n.y * L.y + face.n.z * L.z;
              if (dotNL > 0) {
                const rz = 2 * dotNL * face.n.z - L.z;
                const spec = Math.pow(Math.max(0, rz), L.power);
                if (spec > 0.02) {
                  // Bubble has more colorful specular highlights
                  const sR = L.color[0] * (1 - currentMorph) + 255 * currentMorph;
                  const sG = L.color[1] * (1 - currentMorph) + 200 * currentMorph;
                  const sB = L.color[2];
                  ctx.fillStyle = `rgba(${sR}, ${sG}, ${sB}, ${spec * 0.85})`;
                  ctx.fill();
                  totalEdgeShine = Math.max(totalEdgeShine, spec);
                }
              } else {
                const rz = 2 * (-dotNL) * face.n.z + L.z;
                const spec = Math.pow(Math.max(0, rz), L.power * 0.5);
                if (spec > 0.02) {
                  ctx.fillStyle = `rgba(${L.color[0]}, ${L.color[1]}, ${L.color[2]}, ${spec * 0.4})`;
                  ctx.fill();
                }
              }
            });

            // Iridescent stroke for bubble
            const baseAlpha = (0.15 + totalEdgeShine * 0.85);
            const bubbleAlpha = (0.3 + totalEdgeShine * 0.7);
            const alpha = baseAlpha * (1 - currentMorph) + bubbleAlpha * currentMorph;

            // Chromatic hue calculation mapped dynamically
            const irR = Math.sin(t * 2 + face.n.x * 3) * 50 + 200;
            const irG = Math.sin(t * 2.3 + face.n.y * 3) * 50 + 150;
            const irB = Math.sin(t * 2.6 + face.n.z * 3) * 50 + 255;

            const finalR = 255 * (1 - currentMorph) + irR * currentMorph;
            const finalG = 255 * (1 - currentMorph) + irG * currentMorph;
            const finalB = 255 * (1 - currentMorph) + irB * currentMorph;

            ctx.strokeStyle = `rgba(${finalR}, ${finalG}, ${finalB}, ${alpha})`;
            ctx.lineWidth = 1.0 + currentMorph * 0.5;
            ctx.stroke();
          }
        }
      });

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, [size]);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
}

/* ──────────────────────────────────────────────
   Animated Counter Component
────────────────────────────────────────────── */
function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo for a very satisfying slow-down at the end
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * to));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ──────────────────────────────────────────────
   HeroSection
────────────────────────────────────────────── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spX = useSpring(rawX, { stiffness: 48, damping: 18 });
  const spY = useSpring(rawY, { stiffness: 48, damping: 18 });
  const blobX = useTransform(spX, [-1, 1], [-28, 28]);
  const blobY = useTransform(spY, [-1, 1], [-18, 18]);
  const textX = useTransform(spX, [-1, 1], [7, -7]);
  const textY = useTransform(spY, [-1, 1], [3, -3]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
      id="home"
    >
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.030]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat", backgroundSize: "256px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div className="absolute"
          style={{
            width: 700, height: 700, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(120,30,220,0.18) 0%,transparent 70%)",
            top: "-14%", right: "-8%"
          }}
          animate={{ scale: [1, 1.09, 1], opacity: [0.58, 1, 0.58] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute"
          style={{
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(25,55,210,0.10) 0%,transparent 70%)",
            bottom: "4%", left: "-4%"
          }}
          animate={{ scale: [1, 1.13, 1], opacity: [0.40, 0.88, 0.40] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* Main */}
      <motion.div
        className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10 pt-32 pb-20"
      >
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-0 w-full min-h-[60vh]">

          {/* LEFT — Text */}
          <motion.div style={{ x: textX, y: textY }} className="flex-1 flex flex-col justify-center xl:pr-8">

            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 mb-8 self-start">
              <span className="px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase rounded-full"
                style={{ background: "rgba(244,119,33,0.14)", border: "1px solid rgba(244,119,33,0.36)", color: "#f47721" }}>
                IT Solutions
              </span>
              <motion.div className="w-2 h-2 rounded-full bg-[#f47721]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }} />
            </motion.div>

            {/* Enhanced Hero Heading */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-5 select-none">
              {/* Line 1 & 2: Transform Your Business */}
              <div style={{ perspective: "1000px", overflow: "hidden" }}>
                <motion.h1 
                  variants={wordVariants}
                  className="font-sans text-[2.6rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.35rem] xl:text-[5rem] font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.14] block"
                >
                  Transform Your<br />
                  Business
                </motion.h1>
              </div>

              {/* Line 3: Through Strategic */}
              <div style={{ perspective: "1000px", overflow: "visible", paddingTop: "0.1em" }}>
                <motion.div 
                  variants={wordVariants}
                  className="font-sans text-[2.6rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.35rem] xl:text-[5rem] font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.14] flex flex-wrap items-center gap-x-3 sm:gap-x-4"
                >
                  <span>Through</span>
                  <span className="relative inline-flex flex-col items-start mt-1 sm:mt-0">
                    {/* Pulsing ambient aura */}
                    <span className="absolute -inset-1 sm:-inset-2 rounded-3xl bg-[#f47721]/20 dark:bg-[#f47721]/30 blur-2xl pointer-events-none animate-pulse"></span>

                    {/* Gradient Word */}
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#f47721] via-[#ffa24c] to-[#e65c00] font-bold pb-1 sm:pb-0">
                      Strategic
                    </span>

                    {/* Animated curved line underneath */}
                    <motion.svg
                      className="w-full h-3 sm:h-4 mt-0.5 overflow-visible text-[#f47721] drop-shadow-[0_2px_10px_rgba(244,119,33,0.5)]"
                      viewBox="0 0 240 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <motion.path
                        d="M 3 13 C 75 2, 165 2, 237 13"
                        stroke="url(#orange_grad)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.1, delay: 0.8, ease: "easeInOut" }}
                      />
                      <defs>
                        <linearGradient id="orange_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f47721" />
                          <stop offset="50%" stopColor="#ffab5e" />
                          <stop offset="100%" stopColor="#e55a00" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>



            <motion.div custom={2.0} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-8 sm:gap-12 md:gap-14 mt-12 sm:mt-14">
              {[{ to: 200, suffix: "+", label: "Projects" }, { to: 98, suffix: "%", label: "Satisfaction" }, { to: 12, suffix: "+", label: "Years" }].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-4xl sm:text-[2.75rem] lg:text-[3rem] font-light tracking-tight text-[#f47721] dark:text-[#ff8833] leading-none">
                    <AnimatedCounter to={s.to} suffix={s.suffix} />
                  </span>
                  <span className="text-xs sm:text-[13.5px] uppercase tracking-[0.19em] font-medium text-slate-500 dark:text-white/50 mt-2 sm:mt-2.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Diamond & Text */}
          <div className="flex-1 flex flex-col items-center justify-center relative xl:items-end">

            {/* 3D Animation Section */}
            <div className="relative flex justify-center items-center w-full xl:justify-end -mt-8 xl:-mt-16">
              {/* Ambient halo */}
              <motion.div className="absolute rounded-full pointer-events-none"
                style={{
                  width: 420, height: 420,
                  background: "radial-gradient(circle,rgba(120,30,220,0.22) 0%,rgba(60,12,160,0.08) 55%,transparent 75%)",
                  filter: "blur(58px)"
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.48, 0.92, 0.48] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Ground shadow */}
              <motion.div className="absolute pointer-events-none"
                style={{
                  width: 250, height: 32, bottom: "-2%", borderRadius: "50%",
                  background: "radial-gradient(ellipse,rgba(90,0,180,0.45) 0%,transparent 70%)",
                  filter: "blur(22px)"
                }}
                animate={{ scaleX: [1, 0.84, 1], opacity: [0.32, 0.60, 0.32] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Parallax wrapper */}
              <motion.div style={{ x: blobX, y: blobY }}
                initial={{ opacity: 0, scale: 0.45 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                {/* Float */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                  <Diamond3DCanvas size={390} />
                </motion.div>
              </motion.div>
            </div>

            {/* Text Section */}
            <div className="w-full max-w-md mt-4 xl:mt-6 flex flex-col items-start text-left z-10 xl:pr-10">
              <motion.div custom={1.1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5 sm:mb-6 overflow-hidden w-full">
                <motion.div className="h-px w-full"
                  style={{ background: "linear-gradient(90deg,rgba(160,50,220,0.8),transparent)" }}
                  initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }} />
              </motion.div>

              <motion.p custom={1.4} variants={fadeUp} initial="hidden" animate="visible"
                className="text-base md:text-[1.05rem] leading-relaxed mb-8 sm:mb-9 font-light text-slate-600 dark:text-white/55">
                We craft powerful digital experiences — transforming ideas into
                intelligent, user-centric technology solutions.
              </motion.p>

              <motion.div custom={1.7} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap w-full justify-start items-center gap-3.5 sm:gap-4">
                <motion.a href="#about"
                  className="relative group inline-flex justify-center items-center gap-2.5 px-7 py-3.5 font-semibold text-xs sm:text-[13px] tracking-wider uppercase overflow-hidden rounded-full text-white whitespace-nowrap"
                  style={{ background: "#f47721" }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <span className="relative z-10">Explore Work</span>
                  <motion.span className="relative z-10 text-base leading-none"
                    animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                  <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{ background: "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.14) 50%,transparent 60%)", backgroundSize: "200% 100%" }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }} />
                </motion.a>
                <motion.a href="#contact"
                  className="inline-flex justify-center items-center gap-2.5 px-7 py-3.5 font-semibold text-xs sm:text-[13px] tracking-wider uppercase rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-white/70 whitespace-nowrap"
                  style={{ background: "rgba(150,150,150,0.04)" }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(160,50,220,0.6)" }}
                  whileTap={{ scale: 0.97 }}>
                  Get in Touch
                </motion.a>
              </motion.div>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div custom={2.5} variants={fadeUp} initial="hidden" animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 dark:text-white/25">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-slate-500 dark:bg-white/60 rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Corner meta */}
      <div className="absolute top-36 right-8 hidden xl:flex flex-col items-end gap-1 z-10 pointer-events-none" style={{ opacity: 0.25 }}>
        {["CREDOZEN", "©2024", "v2.0"].map((t, i) => (
          <motion.span key={t} custom={2 + i * 0.2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-900 dark:text-white">{t}</motion.span>
        ))}
      </div>

      {/* Watermark */}
      <motion.div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
        <span className="text-[12vw] font-black tracking-tighter uppercase leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.028)" }}>
          CREDOZEN
        </span>
      </motion.div>
    </section>
  );
}