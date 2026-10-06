import React from 'react';
import { motion } from 'framer-motion';

interface WifiSignal3DProps {
  className?: string;
  size?: number;
}

/**
 * [SKILL: Animated Sequential Starlink Wi-Fi Signal]
 * Ícono de Wi-Fi multicapa personalizado con animación secuencial "Buscando Señal".
 * El punto base y las 3 ondas irradian sucesivamente en un bucle continuo (Starlink Search).
 */
export const WifiSignal3D: React.FC<WifiSignal3DProps> = ({
  className = "w-10 h-10",
  size = 40,
}) => {
  const cycleDuration = 2.0;

  // Variantes secuenciales para la emisión de ondas
  const dotAnimation = {
    opacity: [0.3, 1, 0.4, 0.3],
    scale: [0.95, 1.25, 1.05, 0.95],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.45, 1],
    },
  };

  const wave1Animation = {
    opacity: [0.2, 0.2, 1, 0.4, 0.2],
    scale: [0.98, 0.98, 1.04, 1.0, 0.98],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.18, 0.38, 0.65, 1],
    },
  };

  const wave2Animation = {
    opacity: [0.2, 0.2, 1, 0.4, 0.2],
    scale: [0.98, 0.98, 1.04, 1.0, 0.98],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.36, 0.58, 0.85, 1],
    },
  };

  const wave3Animation = {
    opacity: [0.2, 0.2, 1, 0.35, 0.2],
    scale: [0.98, 0.98, 1.04, 1.0, 0.98],
    transition: {
      duration: cycleDuration,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.55, 0.78, 0.95, 1],
    },
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Sombra proyectada profunda */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Gradiente de señal Starlink de alto contraste */}
          <linearGradient id="wifiSignalGrad" x1="14" y1="3" x2="14" y2="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e4e4e7" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>

          {/* Sombra de relieve interior */}
          <filter id="wifiRelief" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* 1. Punto Base (Transmisor Satelital) */}
        <motion.circle
          cx="14"
          cy="22.5"
          r="2.2"
          fill="url(#wifiSignalGrad)"
          filter="url(#wifiRelief)"
          animate={dotAnimation}
        />

        {/* 2. Onda 1 (Arco Inferior / Señal Corta) */}
        <motion.path
          d="M9.8 17.8C12.1 15.8 15.9 15.8 18.2 17.8"
          stroke="url(#wifiSignalGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          filter="url(#wifiRelief)"
          animate={wave1Animation}
        />

        {/* 3. Onda 2 (Arco Medio / Alcance Intermedio) */}
        <motion.path
          d="M6.2 13.5C10.5 9.8 17.5 9.8 21.8 13.5"
          stroke="url(#wifiSignalGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          filter="url(#wifiRelief)"
          animate={wave2Animation}
        />

        {/* 4. Onda 3 (Arco Superior / Enlace Orbital Starlink) */}
        <motion.path
          d="M2.5 9.2C8.8 4.2 19.2 4.2 25.5 9.2"
          stroke="url(#wifiSignalGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          filter="url(#wifiRelief)"
          animate={wave3Animation}
        />
      </svg>
    </div>
  );
};
