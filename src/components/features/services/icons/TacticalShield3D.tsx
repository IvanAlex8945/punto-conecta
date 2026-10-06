import React from 'react';
import { motion } from 'framer-motion';

interface TacticalShield3DProps {
  isActive: boolean;
}

export const TacticalShield3D: React.FC<TacticalShield3DProps> = ({ isActive }) => {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center select-none">
      {/* Sombra de profundidad táctica */}
      <motion.div
        animate={
          isActive
            ? {
                opacity: 0.7,
                scale: 1.2,
                filter: 'blur(7px)',
              }
            : {
                opacity: 0.25,
                scale: 0.95,
                filter: 'blur(4px)',
              }
        }
        transition={{ duration: 0.3 }}
        className="absolute -bottom-1 w-9 h-3 bg-blue-500 rounded-full pointer-events-none"
      />

      {/* Contenedor principal del escudo con escala hacia el frente */}
      <motion.div
        animate={
          isActive
            ? {
                scale: 1.15,
                y: -3,
                transition: { duration: 0.28, ease: [0.34, 1.56, 0.64, 1] },
              }
            : {
                scale: 1,
                y: 0,
                transition: { duration: 0.3, ease: 'easeOut' },
              }
        }
        className="relative w-12 h-12 flex items-center justify-center"
      >
        {/* Contenedor relativo para el SVG y el efecto de destello de luz (Shine/Glint) */}
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            viewBox="0 0 52 56"
            className="w-full h-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.9)] filter"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradiente metálico plateado / acero cromado para el marco exterior */}
              <linearGradient id="shieldChromeOuter" x1="6" y1="4" x2="46" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="25%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              {/* Gradiente de acero táctico profundo interior */}
              <linearGradient id="shieldSteelInner" x1="12" y1="8" x2="40" y2="46" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="40%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              {/* Gradiente metálico para la estrella / estrella policial */}
              <linearGradient id="starMetalGrad" x1="26" y1="18" x2="26" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="45%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>

              {/* Clip path para restringir el efecto de luz Glint exactamente al contorno del escudo */}
              <clipPath id="shieldContourClip">
                <path d="M26 3L44 8V26C44 38.5 36 47.5 26 51C16 47.5 8 38.5 8 26V8L26 3Z" />
              </clipPath>
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

            {/* Capa 5: División táctica geométrica biselada (luz y sombra 3D) */}
            <path
              d="M26 8V45.2C33 42 39 34.5 39 25V12L26 8Z"
              fill="#ffffff"
              fillOpacity="0.05"
            />

            {/* Capa 6: Estrella / Insignia policial de alto relieve */}
            {/* Estrella biselada central */}
            <path
              d="M26 18L28.2 23.5L34 23.9L29.5 27.8L30.9 33.5L26 30.5L21.1 33.5L22.5 27.8L18 23.9L23.8 23.5L26 18Z"
              fill="url(#starMetalGrad)"
              stroke="#dbeafe"
              strokeWidth="0.8"
              filter="drop-shadow(0 2px 3px rgba(0,0,0,0.8))"
            />

            {/* Centro de la insignia con halo de relieve */}
            <circle cx="26" cy="26" r="2.2" fill="#ffffff" opacity="0.9" />

            {/* Remaches de acero en las esquinas superiores */}
            <circle cx="14" cy="14" r="1.2" fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
            <circle cx="38" cy="14" r="1.2" fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
          </svg>

          {/* EFECTO DE BARRIDO DE LUZ (SHINE / GLINT EFFECT) CON CSS PURO / FRAMER */}
          {/* Contenedor enmascarado exactamente con el contorno del escudo */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]"
            style={{
              clipPath: 'polygon(50% 5%, 85% 15%, 85% 50%, 50% 92%, 15% 50%, 15% 15%)',
            }}
          >
            <motion.div
              animate={
                isActive
                  ? {
                      left: ['-100%', '130%'],
                      transition: {
                        duration: 0.65,
                        ease: 'easeInOut',
                      },
                    }
                  : {
                      left: '-100%',
                    }
              }
              className="absolute top-0 bottom-0 w-8 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/50 to-transparent"
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
