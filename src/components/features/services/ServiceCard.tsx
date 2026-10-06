import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ServiceItem } from '@/context/types';
import { ExternalLink } from '@/components/ui/Icons';
import {
  GamerController3D,
  TacticalShield3D,
  Basketball3D,
} from './icons';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

// Configuración de temas e iluminación específica por servicio
interface ServiceTheme {
  accentColor: string;
  borderColorActive: string;
  glowShadow: string;
  categoryColor: string;
  tagClass: string;
  iconBgClass: string;
}

const SERVICE_THEMES: Record<string, ServiceTheme> = {
  gaming: {
    accentColor: '#a855f7', // Morado gaming
    borderColorActive: 'rgba(168, 85, 247, 0.65)',
    glowShadow: '0 0 24px -4px rgba(168, 85, 247, 0.22), 0 8px 24px -4px rgba(0, 0, 0, 0.9)',
    categoryColor: 'text-purple-400',
    tagClass: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
    iconBgClass: 'bg-purple-950/20 border-purple-900/30',
  },
  police: {
    accentColor: '#3b82f6', // Azul táctico
    borderColorActive: 'rgba(59, 130, 246, 0.65)',
    glowShadow: '0 0 24px -4px rgba(59, 130, 246, 0.22), 0 8px 24px -4px rgba(0, 0, 0, 0.9)',
    categoryColor: 'text-blue-400',
    tagClass: 'border-blue-500/30 text-blue-300 bg-blue-950/40',
    iconBgClass: 'bg-blue-950/20 border-blue-900/30',
  },
  sports: {
    accentColor: '#f97316', // Naranja básquetbol
    borderColorActive: 'rgba(249, 115, 22, 0.65)',
    glowShadow: '0 0 24px -4px rgba(249, 115, 22, 0.22), 0 8px 24px -4px rgba(0, 0, 0, 0.9)',
    categoryColor: 'text-orange-400',
    tagClass: 'border-orange-500/30 text-orange-300 bg-orange-950/40',
    iconBgClass: 'bg-orange-950/20 border-orange-900/30',
  },
};

/**
 * [SKILL: Interactive Pseudo-3D Service Card]
 * Tarjeta interactiva con físicas avanzadas de Framer Motion, soporte whileHover y whileTap,
 * iconos Claymorphic/3D multicapa con animaciones diferenciadas y bordes luminosos reactivos.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const theme = SERVICE_THEMES[service.id] || {
    accentColor: '#ffffff',
    borderColorActive: 'rgba(255, 255, 255, 0.5)',
    glowShadow: '0 0 20px -4px rgba(255, 255, 255, 0.15)',
    categoryColor: 'text-zinc-400',
    tagClass: 'border-zinc-800 text-zinc-400 bg-zinc-900',
    iconBgClass: 'bg-zinc-900 border-zinc-800',
  };

  // Motion values para tilt 3D táctil reactivo al puntero / mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 320, damping: 26 });
  const mouseYSpring = useSpring(y, { stiffness: 320, damping: 26 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsActive(false);
  };

  // Renderizado del icono según su física y estilo 3D
  const render3DIcon = () => {
    switch (service.iconName) {
      case 'gamepad':
        return <GamerController3D isActive={isActive} />;
      case 'shield':
        return <TacticalShield3D isActive={isActive} />;
      case 'basketball':
        return <Basketball3D isActive={isActive} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.12 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 850 }}
      className="w-full"
    >
      <motion.a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          borderColor: isActive ? theme.borderColorActive : 'rgba(39, 39, 42, 0.85)',
          boxShadow: isActive ? theme.glowShadow : '0 4px 12px 0 rgba(0, 0, 0, 0.7)',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setTimeout(() => setIsActive(false), 800)}
        whileHover={{ scale: 1.015, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative block w-full rounded-2xl bg-zinc-950/85 backdrop-blur-sm border p-5 transition-colors duration-300 cursor-pointer select-none overflow-hidden"
      >
        {/* Sutil resplandor de fondo coloreado en el borde superior derecho */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-20 group-active:opacity-25"
          style={{
            background: `radial-gradient(circle, ${theme.accentColor} 0%, transparent 70%)`,
          }}
        />

        <div className="relative flex items-center justify-between gap-4 z-10">
          {/* Lado Izquierdo: Icono 3D con físicas interactivas */}
          <div className="flex items-center space-x-3.5 min-w-0">
            <div
              className={`flex-shrink-0 w-14 h-14 rounded-2xl ${theme.iconBgClass} border flex items-center justify-center transition-all duration-300 shadow-inner`}
            >
              {render3DIcon()}
            </div>

            {/* Contenido Textual */}
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider font-mono ${theme.categoryColor}`}
                >
                  {service.category}
                </span>
                {service.tag && (
                  <span
                    className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border ${theme.tagClass}`}
                  >
                    {service.tag}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate group-hover:text-zinc-100 mt-0.5">
                {service.title}
              </h3>

              <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* Lado Derecho: Indicador de Enlace Externo interactivo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <motion.div
              animate={
                isActive
                  ? {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: theme.borderColorActive,
                      color: '#ffffff',
                    }
                  : {
                      backgroundColor: 'rgba(24, 24, 27, 0.8)',
                      borderColor: 'rgba(39, 39, 42, 1)',
                      color: 'rgba(161, 161, 170, 1)',
                    }
              }
              transition={{ duration: 0.3 }}
              className="w-9 h-9 rounded-xl border flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};
