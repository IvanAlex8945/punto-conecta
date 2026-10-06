import React from 'react';
import { motion } from 'framer-motion';

interface Basketball3DProps {
  isActive?: boolean;
  className?: string;
}

/**
 * [SKILL: 3D Basketball - Constant Infinite Gravity Bounce & Squash]
 * Rebota constantemente por defecto simulando gravedad y deformación física
 * Squash & Stretch al impactar el suelo, con rotación continua sobre su eje.
 */
export const Basketball3D: React.FC<Basketball3DProps> = ({
  isActive = false,
  className = "w-20 h-20 sm:w-22 sm:h-22",
}) => {
  const bounceDuration = 1.7;

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Sombra de suelo sincronizada con el rebote constante infinito */}
      <motion.div
        animate={{
          scaleX: [1.25, 0.6, 1.35, 0.75, 1.25],
          scaleY: [1.15, 0.55, 1.25, 0.65, 1.15],
          opacity: [0.75, 0.18, 0.85, 0.25, 0.75],
          filter: ['blur(3px)', 'blur(6px)', 'blur(2.5px)', 'blur(5px)', 'blur(3px)'],
        }}
        transition={{
          repeat: Infinity,
          duration: bounceDuration,
          times: [0, 0.35, 0.6, 0.8, 1],
          ease: 'easeInOut',
        }}
        className="absolute -bottom-2 w-14 h-3.5 bg-orange-600 rounded-full pointer-events-none"
      />

      {/* Contenedor de rebote vertical constante con física de gravedad */}
      <motion.div
        animate={
          isActive
            ? {
                y: [0, -28, 0, -12, 0],
                scaleY: [1, 1, 0.75, 1, 0.88, 1],
                scaleX: [1, 0.95, 1.18, 0.98, 1.08, 1],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 1.4,
                    times: [0, 0.35, 0.6, 0.8, 1],
                    ease: ['easeOut', 'easeIn', 'easeOut', 'easeIn'],
                  },
                  scaleY: {
                    repeat: Infinity,
                    duration: 1.4,
                    times: [0, 0.28, 0.6, 0.75, 0.88, 1],
                    ease: 'easeInOut',
                  },
                  scaleX: {
                    repeat: Infinity,
                    duration: 1.4,
                    times: [0, 0.28, 0.6, 0.75, 0.88, 1],
                    ease: 'easeInOut',
                  },
                },
              }
            : {
                y: [0, -22, 0, -8, 0],
                scaleY: [1, 1, 0.78, 1, 0.9, 1],
                scaleX: [1, 0.96, 1.15, 0.98, 1.06, 1],
              }
        }
        transition={
          isActive
            ? undefined
            : {
                y: {
                  repeat: Infinity,
                  duration: bounceDuration,
                  times: [0, 0.35, 0.6, 0.8, 1],
                  ease: ['easeOut', 'easeIn', 'easeOut', 'easeIn'],
                },
                scaleY: {
                  repeat: Infinity,
                  duration: bounceDuration,
                  times: [0, 0.28, 0.6, 0.75, 0.88, 1],
                  ease: 'easeInOut',
                },
                scaleX: {
                  repeat: Infinity,
                  duration: bounceDuration,
                  times: [0, 0.28, 0.6, 0.75, 0.88, 1],
                  ease: 'easeInOut',
                },
              }
        }
        className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_14px_20px_rgba(0,0,0,0.92)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.85)]"
      >
        {/* Contenedor de rotación continua infinita sobre su eje */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <svg
            viewBox="0 0 54 54"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="ballSphereGrad"
                cx="32%"
                cy="30%"
                r="65%"
                fx="32%"
                fy="30%"
              >
                <stop offset="0%" stopColor="#fdba74" />
                <stop offset="25%" stopColor="#fb923c" />
                <stop offset="60%" stopColor="#ea580c" />
                <stop offset="85%" stopColor="#c2410c" />
                <stop offset="100%" stopColor="#7c2d12" />
              </radialGradient>

              <radialGradient id="ballRimShadow" cx="50%" cy="50%" r="50%">
                <stop offset="70%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#431407" stopOpacity="0.8" />
              </radialGradient>

              <linearGradient id="ballHighlight" x1="16" y1="6" x2="28" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              <filter id="seamRelief" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="0.8" stdDeviation="0.6" floodColor="#431407" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Sombra base profunda */}
            <circle cx="27" cy="27" r="23" fill="#431407" />

            {/* Esfera principal 3D */}
            <circle
              cx="27"
              cy="27"
              r="22.5"
              fill="url(#ballSphereGrad)"
              stroke="#7c2d12"
              strokeWidth="0.8"
            />

            {/* Oclusión de borde esférico */}
            <circle cx="27" cy="27" r="22.5" fill="url(#ballRimShadow)" />

            {/* COSTURAS CLÁSICAS DE BÁSQUETBOL */}
            <g filter="url(#seamRelief)" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4.8 27H49.2" />
              <path d="M27 4.8V49.2" />
              <path d="M11 11C20.5 19 20.5 35 11 43" />
              <path d="M43 11C33.5 19 33.5 35 43 43" />
            </g>

            {/* Microbisel de luz en costuras */}
            <g stroke="#fed7aa" strokeWidth="0.5" strokeOpacity="0.4" strokeLinecap="round">
              <path d="M5 26.3H49" />
              <path d="M26.3 5V49" />
              <path d="M11.5 11.5C21 19.5 21 34.5 11.5 42.5" />
              <path d="M42.5 11.5C33 19.5 33 34.5 42.5 42.5" />
            </g>

            {/* Brillo especular superior */}
            <ellipse cx="20" cy="14" rx="8" ry="4.5" fill="url(#ballHighlight)" transform="rotate(-20 20 14)" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
