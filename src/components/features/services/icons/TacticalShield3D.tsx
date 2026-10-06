import React from 'react';
import { motion } from 'framer-motion';

interface TacticalShield3DProps {
  isActive?: boolean;
  className?: string;
}

/**
 * [SKILL: 3D Tactical Shield - Infinite Ambient Glint & Float]
 * Aspecto metálico con levitación infinita y destello de luz (Shine/Glint)
 * que barre periódicamente en bucle infinito desde que el componente monta.
 */
export const TacticalShield3D: React.FC<TacticalShield3DProps> = ({
  isActive = false,
  className = "w-20 h-20 sm:w-22 sm:h-22",
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Sombra de profundidad táctica con pulso infinito */}
      <motion.div
        animate={
          isActive
            ? {
                opacity: 0.9,
                scale: 1.35,
                filter: 'blur(10px)',
              }
            : {
                opacity: [0.3, 0.7, 0.3],
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
        className="absolute -bottom-2 w-14 h-4 bg-blue-600 rounded-full pointer-events-none"
      />

      {/* Contenedor del escudo con levitación continua */}
      <motion.div
        animate={
          isActive
            ? {
                scale: 1.15,
                y: -6,
                transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] },
              }
            : {
                scale: 1,
                y: [-4, 4, -4],
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
                scale: { duration: 0.3 },
              }
        }
        className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_14px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            viewBox="0 0 52 56"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="shieldChromeOuter" x1="6" y1="4" x2="46" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              <linearGradient id="shieldSteelInner" x1="12" y1="8" x2="40" y2="46" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="40%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="starMetalGrad" x1="26" y1="18" x2="26" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="45%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>

            {/* Capa 1: Sombra base biselada */}
            <path
              d="M26 5L45 10V27C45 39.8 36.8 49 26 53C15.2 49 7 39.8 7 27V10L26 5Z"
              fill="#050914"
            />

            {/* Capa 2: Borde exterior de acero cromado pulido */}
            <path
              d="M26 3L44 8V26C44 38.5 36 47.5 26 51C16 47.5 8 38.5 8 26V8L26 3Z"
              fill="url(#shieldChromeOuter)"
              stroke="#60a5fa"
              strokeWidth="0.8"
            />

            {/* Capa 3: Bisel metálico intermedio */}
            <path
              d="M26 6L41 10.5V25.5C41 36.5 34 44.5 26 48C18 44.5 11 36.5 11 25.5V10.5L26 6Z"
              fill="#1e293b"
              stroke="#94a3b8"
              strokeWidth="0.6"
            />

            {/* Capa 4: Campo táctico central */}
            <path
              d="M26 8L39 12V25C39 34.5 33 42 26 45.2C19 42 13 34.5 13 25V12L26 8Z"
              fill="url(#shieldSteelInner)"
            />

            {/* Capa 5: División táctica biselada de luz y sombra */}
            <path
              d="M26 8V45.2C33 42 39 34.5 39 25V12L26 8Z"
              fill="#ffffff"
              fillOpacity="0.06"
            />

            {/* Capa 6: Estrella policial de alto relieve */}
            <path
              d="M26 18L28.2 23.5L34 23.9L29.5 27.8L30.9 33.5L26 30.5L21.1 33.5L22.5 27.8L18 23.9L23.8 23.5L26 18Z"
              fill="url(#starMetalGrad)"
              stroke="#dbeafe"
              strokeWidth="0.8"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.85))"
            />

            <circle cx="26" cy="26" r="2.2" fill="#ffffff" opacity="0.95" />

            {/* Remaches de acero en esquinas */}
            <circle cx="14" cy="14" r="1.3" fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
            <circle cx="38" cy="14" r="1.3" fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
          </svg>

          {/* EFECTO DE BARRIDO DE LUZ (SHINE / GLINT) PERIÓDICO INFINITO */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]"
            style={{
              clipPath: 'polygon(50% 5%, 85% 15%, 85% 50%, 50% 92%, 15% 50%, 15% 15%)',
            }}
          >
            <motion.div
              animate={{
                left: ['-110%', '140%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.0,
                repeatDelay: 1.6,
                ease: 'easeInOut',
              }}
              className="absolute top-0 bottom-0 w-10 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{
                filter: 'blur(2px)',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
