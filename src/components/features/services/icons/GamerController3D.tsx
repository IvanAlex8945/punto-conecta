import React from 'react';
import { motion } from 'framer-motion';

interface GamerController3DProps {
  isActive?: boolean;
  className?: string;
}

/**
 * [SKILL: 3D Gamer Controller - Infinite Ambient Levitation]
 * Levita y balancea suavemente de forma continua e infinita por defecto al montar.
 * En interacción (hover/tap) acelera su rotación e intensidad de neón.
 */
export const GamerController3D: React.FC<GamerController3DProps> = ({
  isActive = false,
  className = "w-20 h-20 sm:w-22 sm:h-22",
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Sombra de neón morada con pulso infinito por defecto */}
      <motion.div
        animate={
          isActive
            ? {
                opacity: 0.9,
                scale: 1.35,
                filter: 'blur(10px)',
              }
            : {
                opacity: [0.35, 0.75, 0.35],
                scale: [0.95, 1.2, 0.95],
                filter: ['blur(5px)', 'blur(8px)', 'blur(5px)'],
              }
        }
        transition={
          isActive
            ? { duration: 0.25 }
            : {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 2.2,
                ease: 'easeInOut',
              }
        }
        className="absolute -bottom-2 w-14 h-4 bg-purple-500 rounded-full pointer-events-none"
      />

      {/* Contenedor del control: Levitación continua e infinita */}
      <motion.div
        animate={
          isActive
            ? {
                y: -6,
                scale: 1.15,
                rotate: [0, -18, 18, -10, 8, 0],
                transition: {
                  rotate: { duration: 0.6, ease: 'easeInOut' },
                  scale: { duration: 0.2 },
                  y: { duration: 0.2 },
                },
              }
            : {
                scale: 1,
                y: [-6, 6, -6],
                rotate: [-3.5, 3.5, -3.5],
              }
        }
        transition={
          isActive
            ? undefined
            : {
                y: {
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 2.2,
                  ease: 'easeInOut',
                },
                rotate: {
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 2.8,
                  ease: 'easeInOut',
                },
              }
        }
        className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.92)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]"
      >
        <svg
          viewBox="0 0 56 46"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gamerBodyGrad" x1="10" y1="4" x2="46" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#433261" />
              <stop offset="35%" stopColor="#271943" />
              <stop offset="100%" stopColor="#120a22" />
            </linearGradient>

            <linearGradient id="gamerHighlight" x1="28" y1="4" x2="28" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b2d54" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="dpadGrad" x1="14" y1="16" x2="22" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#332a47" />
              <stop offset="100%" stopColor="#14101d" />
            </linearGradient>

            <filter id="clayInnerGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#c084fc" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Sombra base */}
          <path
            d="M17 9C12 9 6 15 5 25C4 35 7 42 12 43C16 44 20 38 23 32C25 30 31 30 33 32C36 38 40 44 44 43C49 42 52 35 51 25C50 15 44 9 39 9H17Z"
            fill="#090511"
          />

          {/* Cuerpo 3D Claymorphic */}
          <path
            d="M16 8C11 8 6 14 5 24C4 33 7 40 12 41C16 42 19.5 36.5 22.5 31C24.5 29 31.5 29 33.5 31C36.5 36.5 40 42 44 41C49 40 52 33 51 24C50 14 45 8 40 8H16Z"
            fill="url(#gamerBodyGrad)"
            stroke="#6b21a8"
            strokeWidth="1.2"
          />

          {/* Brillo superior */}
          <path
            d="M16 9C12 9 8 13.5 7 21C11 17 19 14 28 14C37 14 45 17 49 21C48 13.5 44 9 40 9H16Z"
            fill="url(#gamerHighlight)"
          />

          {/* Bumpers L1/R1 */}
          <rect x="13" y="5" width="10" height="3.5" rx="1.75" fill="#581c87" stroke="#9333ea" strokeWidth="0.8" />
          <rect x="33" y="5" width="10" height="3.5" rx="1.75" fill="#581c87" stroke="#9333ea" strokeWidth="0.8" />

          {/* D-Pad */}
          <g filter="url(#clayInnerGlow)">
            <path
              d="M18 16H15V19H12V22H15V25H18V22H21V19H18V16Z"
              fill="url(#dpadGrad)"
              stroke="#7e22ce"
              strokeWidth="0.8"
            />
            <circle cx="16.5" cy="20.5" r="1.5" fill="#1e1829" />
          </g>

          {/* Botones A/B/X/Y */}
          <g>
            <circle cx="39" cy="16.5" r="2.2" fill="#eab308" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
            <circle cx="35" cy="20.5" r="2.2" fill="#3b82f6" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
            <circle cx="43" cy="20.5" r="2.2" fill="#ef4444" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
            <circle cx="39" cy="24.5" r="2.2" fill="#10b981" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.6))" />
          </g>

          {/* Sticks */}
          <circle cx="21" cy="27" r="4.2" fill="#140e21" stroke="#3b2554" strokeWidth="1" />
          <circle cx="21" cy="26.5" r="3" fill="#2d1c44" />
          <circle cx="20.3" cy="25.8" r="1" fill="#9333ea" opacity="0.7" />

          <circle cx="33" cy="27" r="4.2" fill="#140e21" stroke="#3b2554" strokeWidth="1" />
          <circle cx="33" cy="26.5" r="3" fill="#2d1c44" />
          <circle cx="32.3" cy="25.8" r="1" fill="#9333ea" opacity="0.7" />

          {/* Logo central con resplandor */}
          <circle cx="27" cy="18" r="1.8" fill="#d8b4fe" filter="drop-shadow(0 0 4px #a855f7)" />
        </svg>
      </motion.div>
    </div>
  );
};
