import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, ArrowRight } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useProjectMemory } from '@/context/ProjectContext';

interface WifiHeroCardProps {
  onOpenModal: () => void;
}

export const WifiHeroCard: React.FC<WifiHeroCardProps> = ({ onOpenModal }) => {
  const { memory } = useProjectMemory();
  const { wifiHero } = memory;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className="relative group rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 p-6 sm:p-7 shadow-matte-md overflow-hidden">
        {/* Subtle Matte corner indicator */}
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20">
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-zinc-700 rounded-tr-xl" />
        </div>

        {/* Top Badges / Status Bar */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
          {/* Badge Satelital Starlink */}
          <Badge dot={true}>
            <span className="tracking-wide">{wifiHero.badge}</span>
          </Badge>

          {/* Speed Indicator */}
          <div className="inline-flex items-center space-x-1.5 text-xs text-zinc-400 font-mono">
            <Zap className="w-3.5 h-3.5 text-zinc-300" />
            <span>{wifiHero.speedIndicator}</span>
          </div>
        </div>

        {/* Main Icon & Title Area */}
        <div className="flex items-start space-x-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shadow-matte-sm"
          >
            <Wifi className="w-7 h-7 text-white stroke-[2.2]" />
          </motion.div>

          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {wifiHero.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-zinc-300 font-medium">
              {wifiHero.subtitle}
            </p>
          </div>
        </div>

        {/* Specs highlights */}
        <div className="grid grid-cols-3 gap-2 py-3.5 my-4 border-y border-zinc-900/90 text-center">
          <div className="px-2 py-1 bg-black/60 rounded-xl border border-zinc-900">
            <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Latencia</div>
            <div className="text-xs font-mono font-bold text-zinc-200 mt-0.5">&lt; 35 ms</div>
          </div>
          <div className="px-2 py-1 bg-black/60 rounded-xl border border-zinc-900">
            <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Vigencia</div>
            <div className="text-xs font-bold text-zinc-200 mt-0.5">24 Horas</div>
          </div>
          <div className="px-2 py-1 bg-black/60 rounded-xl border border-zinc-900">
            <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Dispositivos</div>
            <div className="text-xs font-bold text-zinc-200 mt-0.5">Ilimitado</div>
          </div>
        </div>

        {/* Action Bottom Section */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Tarifa fija</span>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl sm:text-3xl font-black text-white">{wifiHero.price}</span>
              <span className="text-xs text-zinc-400 font-medium">/ 24 hrs</span>
            </div>
          </div>

          {/* Botón Obtener Clave */}
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenModal}
            className="flex-1 max-w-[200px]"
          >
            <span>{wifiHero.ctaText}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
