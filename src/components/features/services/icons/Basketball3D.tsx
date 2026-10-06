import React from 'react';
import { motion } from 'framer-motion';

interface Basketball3DProps {
  isActive: boolean;
}

export const Basketball3D: React.FC<Basketball3DProps> = ({ isActive }) => {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center select-none">
      {/* Sombra de suelo reactiva al rebote (se encoge al subir y se expande en el impacto) */}
      <motion.div
        animate={
          isActive
            ? {
                scaleX: [1, 0.55, 1.25, 0.7, 1],
                scaleY: [1, 0.5, 1.15, 0.6, 1],
                opacity: [0.3, 0.12, 0.75, 0.2, 0.3],
                filter: ['blur(4px)', 'blur(6px)', 'blur(3px)', 'blur(5px)', 'blur(4px)'],
                transition: {
                  duration: 0.9,
                  times: [0, 0.3, 0.55, 0.75, 1],
                  ease: 'easeInOut',
                },
              }
            : {
                scaleX: 1,
                scaleY: 1,
                opacity: 0.3,
                filter: 'blur(4px)',
                transition: { duration: 0.3 },
              }
        }
        className="absolute -bottom-1 w-10 h-2.5 bg-orange-600 rounded-full pointer-events-none"
      />

      {/* Contenedor de rebote vertical con simulación de gravedad y squash & stretch */}
      <motion.div
        animate={
          isActive
            ? {
                y: [0, -22, 0, -9, 0],
                scaleY: [1, 1, 0.8, 1, 0.92, 1],
                scaleX: [1, 0.96, 1.12, 0.98, 1.05, 1],
                transition: {
                  y: {
                    duration: 0.9,
                    times: [0, 0.3, 0.55, 0.75, 1],
                    ease: ['easeOut', 'easeIn', 'easeOut', 'easeIn'],
                  },
                  scaleY: {
                    duration: 0.9,
                    times: [0, 0.28, 0.55, 0.72, 0.82, 1],
                    ease: 'easeInOut',
                  },
                  scaleX: {
                    duration: 0.9,
                    times: [0, 0.28, 0.55, 0.72, 0.82, 1],
                    ease: 'easeInOut',
                  },
                },
              }
            : {
                y: 0,
                scaleY: 1,
                scaleX: 1,
                transition: { duration: 0.3, ease: 'easeOut' },
              }
        }
        className="relative w-12 h-12 flex items-center justify-center"
      >
        {/* Contenedor de rotación continua ambiental */}
        <motion.div
          animate={
            isActive
              ? {
                  rotate: [0, 90, 180],
                  transition: { duration: 0.9, ease: 'linear' },
                }
              : {
                  rotate: 360,
                  transition: {
                    repeat: Infinity,
                    duration: 16,
                    ease: 'linear',
                  },
                }
          }
          className="w-full h-full flex items-center justify-center"
        >
          <svg
            viewBox="0 0 54 54"
            className="w-full h-full drop-shadow-[0_6px_8px_rgba(0,0,0,0.85)] filter"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Esfera 3D: Gradiente radial con punto de luz desplazado a (32%, 30%) */}
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

              {/* Sombra de oclusión en los bordes de la pelota */}
              <radialGradient id="ballRimShadow" cx="50%" cy="50%" r="50%">
                <stop offset="70%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#431407" stopOpacity="0.8" />
              </radialGradient>

              {/* Brillo especular superior */}
              <linearGradient id="ballHighlight" x1="16" y1="6" x2="28" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* Filtro de relieve para las costuras */}
              <filter id="seamRelief" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="0.8" stdDeviation="0.6" floodColor="#431407" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Sombra base profunda */}
            <circle cx="27" cy="27" r="23" fill="#431407" />

            {/* Esfera principal 3D con volumen de cuero texturizado */}
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

            {/* COSTURAS CLÁSICAS DE BÁSQUETBOL (Acanaladas con relieve) */}
            <g filter="url(#seamRelief)" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round">
              {/* Costura horizontal transversal */}
              <path d="M4.8 27H49.2" />

              {/* Costura vertical */}
              <path d="M27 4.8V49.2" />

              {/* Costura curva izquierda */}
              <path d="M11 11C20.5 19 20.5 35 11 43" />

              {/* Costura curva derecha */}
              <path d="M43 11C33.5 19 33.5 35 43 43" />
            </g>

            {/* Microbisel de luz en las costuras */}
            <g stroke="#fed7aa" strokeWidth="0.5" strokeOpacity="0.4" strokeLinecap="round">
              <path d="M5 26.3H49" />
              <path d="M26.3 5V49" />
              <path d="M11.5 11.5C21 19.5 21 34.5 11.5 42.5" />
              <path d="M42.5 11.5C33 19.5 33 34.5 42.5 42.5" />
            </g>

            {/* Brillo especular en el domo superior para volumen 3D */}
            <ellipse cx="20" cy="14" rx="8" ry="4.5" fill="url(#ballHighlight)" transform="rotate(-20 20 14)" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
