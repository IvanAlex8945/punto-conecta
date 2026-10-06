import React from 'react';
import { motion } from 'framer-motion';

interface WifiIcon3DProps {
  className?: string;
  size?: number;
}

/**
 * [SKILL: 3D Claymorphic Out of Bounds Wi-Fi Icon]
 * Ícono de Wi-Fi estilo 3D/Claymorphism con volumen esférico y tubular,
 * posicionado para romper los límites de la tarjeta con animación secuencial
 * infinita "Buscando señal Starlink" (Punto -> Onda 1 -> Onda 2 -> Onda 3).
 */
export const WifiIcon3D: React.FC<WifiIcon3DProps> = ({
  className = "w-20 h-20 sm:w-22 sm:h-22",
}) => {
  const cycleDuration = 2.4;

  // Secuencia infinita de Starlink Search
  const dotAnimation = {
    opacity: [0.35, 1, 0.5, 0.35],
    scale: [0.92, 1.25, 1.02, 0.92],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.22, 0.45, 1],
    },
  };

  const wave1Animation = {
    opacity: [0.2, 0.2, 1, 0.45, 0.2],
    scale: [0.96, 0.96, 1.05, 1.0, 0.96],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.2, 0.42, 0.68, 1],
    },
  };

  const wave2Animation = {
    opacity: [0.2, 0.2, 1, 0.45, 0.2],
    scale: [0.96, 0.96, 1.05, 1.0, 0.96],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.38, 0.6, 0.85, 1],
    },
  };

  const wave3Animation = {
    opacity: [0.2, 0.2, 1, 0.45, 0.2],
    scale: [0.96, 0.96, 1.06, 1.0, 0.96],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.56, 0.78, 0.95, 1],
    },
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Sombra de neón cian/esmeralda satelital en la base */}
      <motion.div
        animate={{
          opacity: [0.35, 0.75, 0.35],
          scale: [0.9, 1.25, 0.9],
          filter: ['blur(6px)', 'blur(10px)', 'blur(6px)'],
        }}
        transition={{
          repeat: Infinity,
          duration: cycleDuration,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-2 w-14 h-4 bg-cyan-500 rounded-full pointer-events-none"
      />

      {/* Contenedor del ícono con levitación constante en el aire */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
          rotate: [-1, 1.5, -1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.2,
          ease: 'easeInOut',
        }}
        className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.92)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]"
      >
        <svg
          viewBox="0 0 56 56"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente Claymorphic 3D para el punto base */}
            <radialGradient id="wifiDotClayGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e0f2fe" />
              <stop offset="70%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0369a1" />
            </radialGradient>

            {/* Gradiente Claymorphic 3D para las ondas */}
            <linearGradient id="wifiWaveClayGrad" x1="10" y1="8" x2="46" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e0f2fe" />
              <stop offset="60%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Sombra de oclusión en las ondas */}
            <filter id="wifiClayDepth" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* Sombra base profunda del conjunto */}
          <g opacity="0.6">
            <circle cx="28" cy="45" r="4.5" fill="#02131e" />
            <path d="M19 35C24 30.5 32 30.5 37 35" stroke="#02131e" strokeWidth="5" strokeLinecap="round" />
            <path d="M12 26C21 17.5 35 17.5 44 26" stroke="#02131e" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M5 17C18 4.5 38 4.5 51 17" stroke="#02131e" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* 1. PUNTO BASE (Perla 3D Claymorphic) */}
          <motion.g animate={dotAnimation} filter="url(#wifiClayDepth)">
            {/* Esfera base */}
            <circle cx="28" cy="44" r="4.2" fill="url(#wifiDotClayGrad)" stroke="#38bdf8" strokeWidth="0.8" />
            {/* Brillo especular superior */}
            <circle cx="26.8" cy="42.8" r="1.3" fill="#ffffff" opacity="0.9" />
          </motion.g>

          {/* 2. ONDA 1 (Tubo Curvo 3D Inferior) */}
          <motion.g animate={wave1Animation} filter="url(#wifiClayDepth)">
            <path
              d="M19.5 34C24.3 29.8 31.7 29.8 36.5 34"
              stroke="url(#wifiWaveClayGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Brillo especular de cresta */}
            <path
              d="M21 33C25 29.8 31 29.8 35 33"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.8"
            />
          </motion.g>

          {/* 3. ONDA 2 (Tubo Curvo 3D Medio) */}
          <motion.g animate={wave2Animation} filter="url(#wifiClayDepth)">
            <path
              d="M13 25C21.5 17 34.5 17 43 25"
              stroke="url(#wifiWaveClayGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Brillo especular de cresta */}
            <path
              d="M15 23.8C22.8 16.5 33.2 16.5 41 23.8"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.8"
            />
          </motion.g>

          {/* 4. ONDA 3 (Tubo Curvo 3D Superior - Enlace Orbital) */}
          <motion.g animate={wave3Animation} filter="url(#wifiClayDepth)">
            <path
              d="M6.5 16C18.8 4 37.2 4 49.5 16"
              stroke="url(#wifiWaveClayGrad)"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            {/* Brillo especular de cresta */}
            <path
              d="M9 14.8C20.2 3.8 35.8 3.8 47 14.8"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};
