import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '@/context/types';
import {
  Gamepad2,
  ShieldCheck,
  BasketballIcon,
  ExternalLink,
} from '@/components/ui/Icons';
import { Card } from '@/components/ui/Card';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

/**
 * [SKILL: Service Card Renderer & Dynamic Micro-Interactions]
 * Renderiza tarjetas de servicio con respuesta táctil 3D utilizando el Card base,
 * y comportamiento dinámico personalizado por cada tipo de icono.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Renderizador del icono con animación dinámica según el tipo de servicio
  const renderDynamicIcon = () => {
    switch (service.iconName) {
      case 'gamepad':
        return (
          <motion.div
            animate={
              isHovered
                ? {
                    rotate: [0, -12, 10, -6, 0],
                    scale: [1, 1.15, 1.1],
                    transition: { duration: 0.5, ease: 'easeInOut' },
                  }
                : { rotate: 0, scale: 1 }
            }
            className="text-zinc-200"
          >
            <Gamepad2 className="w-6 h-6 stroke-[2]" />
          </motion.div>
        );

      case 'shield':
        return (
          <motion.div
            animate={
              isHovered
                ? {
                    scale: [1, 1.18, 1.12],
                    y: [0, -2, 0],
                    transition: { duration: 0.4, ease: 'easeOut' },
                  }
                : { scale: 1, y: 0 }
            }
            className="text-zinc-200"
          >
            <ShieldCheck className="w-6 h-6 stroke-[2]" />
          </motion.div>
        );

      case 'basketball':
        return (
          <motion.div
            animate={
              isHovered
                ? {
                    rotate: [0, 45, 90, 180],
                    scale: [1, 1.14, 1.08],
                    y: [0, -4, 0],
                    transition: { duration: 0.6, ease: 'easeOut' },
                  }
                : { rotate: 0, scale: 1, y: 0 }
            }
            className="text-zinc-200"
          >
            <BasketballIcon className="w-6 h-6" size={24} />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.15 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        asAnchor={true}
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        enableTilt={true}
        className="group p-5"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Lado Izquierdo: Icono dinámico en contenedor mate */}
          <div className="flex items-center space-x-3.5 min-w-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 flex items-center justify-center transition-colors duration-200">
              {renderDynamicIcon()}
            </div>

            {/* Contenido Textual */}
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  {service.category}
                </span>
                {service.tag && (
                  <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {service.tag}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate group-hover:text-zinc-100 mt-0.5">
                {service.title}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                {service.description}
              </p>
            </div>
          </div>

          {/* Lado Derecho: Indicador de Enlace Externo táctil */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-xl bg-zinc-900/80 border border-zinc-800 group-hover:border-zinc-700 group-hover:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-all duration-200">
              <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
