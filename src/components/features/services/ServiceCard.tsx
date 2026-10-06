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

interface ServiceTheme {
  accentColor: string;
  borderColorActive: string;
  glowShadow: string;
  categoryColor: string;
  tagClass: string;
}

const SERVICE_THEMES: Record<string, ServiceTheme> = {
  gaming: {
    accentColor: '#a855f7', // Morado gaming
    borderColorActive: 'rgba(168, 85, 247, 0.7)',
    glowShadow: '0 24px 38px -6px rgba(0, 0, 0, 0.95), 0 0 20px -3px rgba(168, 85, 247, 0.25)',
    categoryColor: 'text-purple-400',
    tagClass: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
  },
  police: {
    accentColor: '#3b82f6', // Azul táctico
    borderColorActive: 'rgba(59, 130, 246, 0.7)',
    glowShadow: '0 24px 38px -6px rgba(0, 0, 0, 0.95), 0 0 20px -3px rgba(59, 130, 246, 0.25)',
    categoryColor: 'text-blue-400',
    tagClass: 'border-blue-500/30 text-blue-300 bg-blue-950/40',
  },
  sports: {
    accentColor: '#f97316', // Naranja básquetbol
    borderColorActive: 'rgba(249, 115, 22, 0.7)',
    glowShadow: '0 24px 38px -6px rgba(0, 0, 0, 0.95), 0 0 20px -3px rgba(249, 115, 22, 0.25)',
    categoryColor: 'text-orange-400',
    tagClass: 'border-orange-500/30 text-orange-300 bg-orange-950/40',
  },
};

/**
 * [SKILL: Out of Bounds 3D Service Card]
 * Tarjeta interactiva sin caja interior. Los íconos 3D tienen posicionamiento absoluto
 * y sobresalen fuera del borde superior izquierdo, con levitación constante.
 * Título con relieve 3D apilado en text-shadow que se presiona al interactuar.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const theme = SERVICE_THEMES[service.id] || {
    accentColor: '#ffffff',
    borderColorActive: 'rgba(255, 255, 255, 0.5)',
    glowShadow: '0 24px 38px -6px rgba(0, 0, 0, 0.95)',
    categoryColor: 'text-zinc-400',
    tagClass: 'border-white/10 text-zinc-400 bg-black',
  };

  // Tilt 3D reactivo al cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsActive(false);
  };

  // Renderizado del ícono fuera de la caja
  const renderOutOfBoundsIcon = () => {
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.12 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 900 }}
      className="relative w-full overflow-visible pt-4"
    >
      <motion.a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          borderColor: isActive ? theme.borderColorActive : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isActive
            ? theme.glowShadow
            : '0 20px 36px -8px rgba(0, 0, 0, 0.95), 0 8px 14px -4px rgba(0, 0, 0, 0.9)',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setTimeout(() => setIsActive(false), 900)}
        whileHover={{ scale: 1.012, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative block w-full rounded-2xl bg-[#111111] border transition-colors duration-300 cursor-pointer select-none overflow-visible p-5 pl-20 sm:pl-24"
      >
        {/* ELEMENTO OUT OF BOUNDS: Ícono flotante 3D suspendido rompiendo la esquina superior izquierda */}
        <div
          className="absolute -top-7 -left-3 sm:-top-8 sm:-left-5 z-20 pointer-events-none"
        >
          {renderOutOfBoundsIcon()}
        </div>

        {/* Resplandor sutil temático al interactuar */}
        <div
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-20 group-active:opacity-25"
          style={{
            background: `radial-gradient(circle, ${theme.accentColor} 0%, transparent 70%)`,
          }}
        />

        {/* Contenido Principal de la Tarjeta */}
        <div className="relative flex items-center justify-between gap-3 z-10">
          <div className="min-w-0 flex-1">
            {/* Categoría y Tag */}
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

            {/* Título con Efecto de Relieve 3D Flotante apilado en text-shadow */}
            <motion.h3
              animate={
                isActive
                  ? {
                      x: 1.5,
                      y: 1.5,
                      transition: { duration: 0.15 },
                    }
                  : {
                      x: 0,
                      y: 0,
                      transition: { duration: 0.2 },
                    }
              }
              style={{
                textShadow: isActive
                  ? '1px 1px 0px #1c1c1f, 1.5px 1.5px 0px #09090b, 2px 3px 5px rgba(0,0,0,0.95)'
                  : '1px 1px 0px #27272a, 2px 2px 0px #18181b, 3px 3px 0px #09090b, 4px 5px 8px rgba(0,0,0,0.9)',
              }}
              className="text-base sm:text-lg font-black text-white tracking-tight truncate group-hover:text-zinc-100 mt-1 transition-all"
            >
              {service.title}
            </motion.h3>

            {/* Descripción */}
            <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Indicador de Enlace Externo */}
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
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'rgba(161, 161, 170, 1)',
                    }
              }
              transition={{ duration: 0.3 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};
