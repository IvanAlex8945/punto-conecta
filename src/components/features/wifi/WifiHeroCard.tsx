import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useProjectMemory } from '@/context/ProjectContext';
import { WifiSignal3D } from './WifiSignal3D';

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
      <div className="relative group rounded-3xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all duration-300 p-6 sm:p-7 shadow-[0_22px_40px_-10px_rgba(0,0,0,0.95),0_8px_16px_-4px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Subtle corner indicator */}
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20">
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-zinc-600 rounded-tr-xl" />
        </div>

        {/* Top Badges / Status Bar */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
          {/* Badge Satelital Starlink */}
          <Badge dot={true} className="bg-black/60 border-white/10">
            <span className="tracking-wide text-zinc-200">{wifiHero.badge}</span>
          </Badge>

          {/* Speed Indicator */}
          <div className="inline-flex items-center space-x-1.5 text-xs text-zinc-400 font-mono">
            <Zap className="w-3.5 h-3.5 text-zinc-300" />
            <span>{wifiHero.speedIndicator}</span>
          </div>
        </div>

        {/* Main Icon & Title Area */}
        <div className="flex items-start space-x-4 mb-4">
          {/* Contenedor del ícono Wi-Fi con animación secuencial 3D */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black/80 border border-white/10 flex items-center justify-center shadow-[0_6px_14px_-2px_rgba(0,0,0,0.9)]"
          >
            <WifiSignal3D size={32} />
          </motion.div>

          <div className="flex-1">
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
              style={{
                textShadow: '1px 1px 0px #27272a, 2px 2px 0px #18181b, 3px 4px 6px rgba(0,0,0,0.9)',
              }}
            >
              {wifiHero.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-zinc-300 font-medium">
              {wifiHero.subtitle}
            </p>
          </div>
        </div>

        {/* Specs highlights */}
        <div className="grid grid-cols-3 gap-2 py-3.5 my-4 border-y border-white/5 text-center">
          <div className="px-2 py-1.5 bg-black/70 rounded-xl border border-white/5">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Latencia</div>
            <div className="text-xs font-mono font-bold text-zinc-200 mt-0.5">&lt; 35 ms</div>
          </div>
          <div className="px-2 py-1.5 bg-black/70 rounded-xl border border-white/5">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Vigencia</div>
            <div className="text-xs font-bold text-zinc-200 mt-0.5">24 Horas</div>
          </div>
          <div className="px-2 py-1.5 bg-black/70 rounded-xl border border-white/5">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Dispositivos</div>
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
