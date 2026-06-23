"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "motion/react";

const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };

export default function ReportCover3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse position → rotation
  const rawRotateX = useTransform(mouseY, [-200, 200], [12, -12]);
  const rawRotateY = useTransform(mouseX, [-200, 200], [-12, 12]);
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  // Glow intensity
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 25 });

  // Dynamic glow that shifts with tilt
  const glowX = useSpring(useTransform(mouseX, [-200, 200], [-20, 20]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-200, 200], [-15, 15]), springConfig);

  // Multi-layer box shadow
  const boxShadow = useMotionTemplate`
    ${glowX}px ${glowY}px 60px rgba(217, 4, 41, ${glowOpacity}),
    0px 0px 80px rgba(217, 4, 41, ${glowOpacity}),
    0px 0px 120px rgba(33, 44, 98, ${glowOpacity}),
    0px 20px 60px rgba(0, 0, 0, 0.4)
  `;

  // Shine highlight position
  const shineX = useSpring(useTransform(mouseX, [-200, 200], [20, 80]), springConfig);
  const shineY = useSpring(useTransform(mouseY, [-200, 200], [20, 80]), springConfig);
  const shineGradient = useMotionTemplate`radial-gradient(
    300px circle at ${shineX}% ${shineY}%,
    rgba(255, 255, 255, 0.12),
    transparent 60%
  )`;

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
    glowOpacity.set(0.35);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    glowOpacity.set(0);
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Aura / energy background glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217,4,41,0.15) 0%, rgba(33,44,98,0.08) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating energy particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + ((i + 1) % 3) * 2,
            background: i % 2 === 0 ? "rgba(217,4,41,0.6)" : "rgba(255,255,255,0.4)",
            filter: "blur(1px)",
          }}
          animate={{
            x: [
              Math.cos((i * Math.PI * 2) / 6) * 140,
              Math.cos(((i + 1) * Math.PI * 2) / 6) * 160,
              Math.cos(((i + 2) * Math.PI * 2) / 6) * 140,
            ],
            y: [
              Math.sin((i * Math.PI * 2) / 6) * 180,
              Math.sin(((i + 1) * Math.PI * 2) / 6) * 200,
              Math.sin(((i + 2) * Math.PI * 2) / 6) * 180,
            ],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 6 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* 3D Book container with floating animation */}
      <motion.div
        className="relative"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 1200,
        }}
      >
        {/* Book shadow on "ground" */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          style={{
            width: "80%",
            height: "20px",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.35), transparent 70%)",
            filter: "blur(12px)",
            transformStyle: "preserve-3d",
            transform: "rotateX(90deg) translateZ(-20px)",
          }}
        />

        {/* Main book wrapper with glow */}
        <motion.div
          className="relative rounded-xl overflow-hidden"
          style={{
            boxShadow,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front cover */}
          <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <Image
              src="/okladka-A4.webp"
              alt="Okładka raportu Pokolenie, którego nie ma"
              width={340}
              height={480}
              className="block rounded-xl"
              style={{ transform: "translateZ(6px)", width: "auto", height: "auto" }}
              priority
            />

            {/* Shine overlay */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: shineGradient,
                transform: "translateZ(7px)",
              }}
            />

            {/* Edge highlight */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                transform: "translateZ(7px)",
              }}
            />
          </div>

          {/* Book spine (right side for perspective) */}
          <div
            className="absolute top-0 right-0 h-full"
            style={{
              width: "14px",
              background: "linear-gradient(to right, #1a1a3a, #0e0e28)",
              transform: "rotateY(90deg) translateZ(7px)",
              transformOrigin: "right center",
            }}
          />

          {/* Book bottom edge */}
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "14px",
              background: "linear-gradient(to bottom, #f0f0f0, #d0d0d0)",
              transform: "rotateX(-90deg) translateZ(7px)",
              transformOrigin: "bottom center",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
