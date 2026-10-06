import React from 'react';
import { motion } from 'framer-motion';

interface GamerController3DProps {
  isActive: boolean;
}

export const GamerController3D: React.FC<GamerController3DProps> = ({ isActive }) => {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center select-none">
      {/* Sombra de color neón sutil debajo en hover/tap */}
      <motion.div
        animate={
          isActive
            ? {
                opacity: 0.8,
                scale: 1.25,
                filter: 'blur(8px)',
              }
            : {
                opacity: 0.2,
                scale: 0.9,
                filter: 'blur(4px)',
              }
        }
        transition={{ duration: 0.3 }}
        className="absolute -bottom-1 w-10 h-3 bg-purple-500 rounded-full pointer-events-none"
      />

      {/* Contenedor del control con físicas de flotación ambiental e interacción */}
      <motion.div
        animate={
          isActive
            ? {
                y: -4,
                scale: 1.1,
                rotate: [0, -15, 15, -8, 6, 0],
                transition: {
                  rotate: { duration: 0.6, ease: 'easeInOut' },
                  scale: { duration: 0.25, ease: 'easeOut' },
                  y: { duration: 0.25, ease: 'easeOut' },
                },
              }
            : {
                scale: 1,
                rotate: 0,
                y: [-2, 2, -2],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                  },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.3 },
                },
              }
        }
        className="relative w-12 h-12 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 56 46"
          className="w-full h-full drop-shadow-[0_6px_8px_rgba(0,0,0,0.85)] filter"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente Claymorphic 3D para el cuerpo del control */}
            <linearGradient id="gamerBodyGrad" x1="10" y1="4" x2="46" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b2d54" />
              <stop offset="35%" stopColor="#22163b" />
              <stop offset="100%" stopColor="#120b22" />
            </linearGradient>

            {/* Borde biselado superior con luz especular */}
            <linearGradient id="gamerHighlight" x1="28" y1="4" x2="28" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b2d54" stopOpacity="0" />
            </linearGradient>

            {/* Gradiente para los grips inferiores */}
            <radialGradient id="gamerGripLeft" cx="12" cy="30" r="14" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0f071d" />
            </radialGradient>

            {/* Gradiente de D-Pad */}
            <linearGradient id="dpadGrad" x1="14" y1="16" x2="22" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2e273e" />
              <stop offset="100%" stopColor="#120f1a" />
            </linearGradient>

            {/* Sombra claymórfica interna */}
            <filter id="clayInnerGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#c084fc" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Sombra base profunda del cuerpo */}
          <path
            d="M17 9C12 9 6 15 5 25C4 35 7 42 12 43C16 44 20 38 23 32C25 30 31 30 33 32C36 38 40 44 44 43C49 42 52 35 51 25C50 15 44 9 39 9H17Z"
            fill="#090511"
          />

          {/* Cuerpo principal 3D Claymorphic */}
          <path
            d="M16 8C11 8 6 14 5 24C4 33 7 40 12 41C16 42 19.5 36.5 22.5 31C24.5 29 31.5 29 33.5 31C36.5 36.5 40 42 44 41C49 40 52 33 51 24C50 14 45 8 40 8H16Z"
            fill="url(#gamerBodyGrad)"
            stroke="#581c87"
            strokeWidth="1.2"
          />

          {/* Brillo especular superior del cuerpo */}
          <path
            d="M16 9C12 9 8 13.5 7 21C11 17 19 14 28 14C37 14 45 17 49 21C48 13.5 44 9 40 9H16Z"
            fill="url(#gamerHighlight)"
          />

          {/* Bumpers superiores L1 / R1 */}
          <rect x="13" y="5" width="10" height="3.5" rx="1.75" fill="#581c87" stroke="#9333ea" strokeWidth="0.6" />
          <rect x="33" y="5" width="10" height="3.5" rx="1.75" fill="#581c87" stroke="#9333ea" strokeWidth="0.6" />

          {/* D-Pad izquierdo con bisel */}
          <g filter="url(#clayInnerGlow)">
            {/* Cruz D-pad */}
            <path
              d="M18 16H15V19H12V22H15V25H18V22H21V19H18V16Z"
              fill="url(#dpadGrad)"
              stroke="#6b21a8"
              strokeWidth="0.8"
            />
            {/* Núcleo D-pad */}
            <circle cx="16.5" cy="20.5" r="1.5" fill="#1e1829" />
          </g>

          {/* Botones frontales derechos (A, B, X, Y) estilo Clay 3D */}
          <g>
            {/* Y (Arriba - Amarillo) */}
            <circle cx="39" cy="16.5" r="2.2" fill="#eab308" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
            {/* X (Izquierda - Azul) */}
            <circle cx="35" cy="20.5" r="2.2" fill="#3b82f6" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
            {/* B (Derecha - Rojo) */}
            <circle cx="43" cy="20.5" r="2.2" fill="#ef4444" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
            {/* A (Abajo - Verde) */}
            <circle cx="39" cy="24.5" r="2.2" fill="#10b981" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
          </g>

          {/* Thumbsticks análogos con relieve */}
          {/* Stick izquierdo */}
          <circle cx="21" cy="27" r="4.2" fill="#140e21" stroke="#3b2554" strokeWidth="1" />
          <circle cx="21" cy="26.5" r="3" fill="#2d1c44" />
          <circle cx="20.3" cy="25.8" r="1" fill="#7e22ce" opacity="0.6" />

          {/* Stick derecho */}
          <circle cx="33" cy="27" r="4.2" fill="#140e21" stroke="#3b2554" strokeWidth="1" />
          <circle cx="33" cy="26.5" r="3" fill="#2d1c44" />
          <circle cx="32.3" cy="25.8" r="1" fill="#7e22ce" opacity="0.6" />

          {/* LED / Logo central iluminado */}
          <circle cx="27" cy="18" r="1.8" fill="#c084fc" filter="drop-shadow(0 0 3px #a855f7)" />
        </svg>
      </motion.div>
    </div>
  );
};
