import { Zap } from '../ui/Icons';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-4 flex items-center justify-between border-b border-zinc-900 mb-6">
      <div className="flex items-center space-x-2.5">
        <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <Zap className="w-4 h-4 text-zinc-100 fill-current" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-white uppercase">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-[10px] text-zinc-400 font-medium">
            {SITE_CONFIG.location}
          </p>
        </div>
      </div>

      {/* Online indicator */}
      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-850">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-mono text-zinc-400">Starlink Online</span>
      </div>
    </header>
  );
};
