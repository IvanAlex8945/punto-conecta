import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useProjectMemory } from '@/context/ProjectContext';
import { WifiIcon3D } from './WifiIcon3D';

interface WifiHeroCardProps {
  onOpenModal: () => void;
}

export const WifiHeroCard: React.FC<WifiHeroCardProps> = ({ onOpenModal }) => {
  const { memory } = useProjectMemory();
  const { wifiHero } = memory;
  const [isPressed, setIsPressed] = useState(false);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPressed(true);

    // Retardo intencional de 350ms para retroalimentación táctil antes de desplegar modal
    setTimeout(() => {
      onOpenModal();
      setIsPressed(false);
    }, 350);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-visible pt-4"
    >
      <motion.div
        animate={isPressed ? { scale: 0.98, y: 2 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.15 }}
        className="relative group rounded-3xl bg-[#111111] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 p-6 sm:p-7 shadow-[0_24px_45px_-10px_rgba(0,0,0,0.98),0_8px_18px_-4px_rgba(0,0,0,0.9)] overflow-visible"
      >
        {/* ELEMENTO OUT OF BOUNDS: Ícono Wi-Fi 3D flotando fuera de la caja */}
        <div className="absolute -top-7 -left-3 sm:-top-8 sm:-left-5 z-20 pointer-events-none">
          <WifiIcon3D />
        </div>

        {/* Resplandor sutil satelital en la esquina */}
        <div
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
          }}
        />

        {/* Top Badges / Status Bar (con margen izquierdo para el ícono Out of Bounds) */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pl-16 sm:pl-20">
          {/* Badge Satelital Starlink */}
          <Badge dot={true} className="bg-black/80 border-cyan-500/30 text-cyan-300">
            <span className="tracking-wide text-[11px] font-mono">{wifiHero.badge}</span>
          </Badge>

          {/* Speed Indicator */}
          <div className="inline-flex items-center space-x-1.5 text-xs text-zinc-400 font-mono">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-zinc-300">{wifiHero.speedIndicator}</span>
          </div>
        </div>

        {/* Main Title Area (con padding para no chocar con el ícono flotante) */}
        <div className="pl-16 sm:pl-20 mb-4">
          <h2
            className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight"
            style={{
              textShadow: '1px 1px 0px #27272a, 2px 2px 0px #18181b, 3px 3px 0px #09090b, 4px 5px 8px rgba(0,0,0,0.9)',
            }}
          >
            {wifiHero.title}
          </h2>
          <p className="mt-1 text-sm sm:text-base text-zinc-300 font-medium">
            {wifiHero.subtitle}
          </p>
        </div>

        {/* Specs highlights */}
        <div className="grid grid-cols-3 gap-2 py-3.5 my-4 border-y border-white/5 text-center">
          <div className="px-2 py-1.5 bg-black/70 rounded-xl border border-white/5">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Latencia</div>
            <div className="text-xs font-mono font-bold text-cyan-300 mt-0.5">&lt; 35 ms</div>
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

          {/* Botón Obtener Clave con respuesta háptica controlada */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleCtaClick}
            className="flex-1 max-w-[200px]"
          >
            <span>{wifiHero.ctaText}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
};
