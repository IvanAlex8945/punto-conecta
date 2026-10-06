import React from 'react';
import { Zap } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';
import { useProjectMemory } from '@/context/ProjectContext';

export const Header: React.FC = () => {
  const { memory } = useProjectMemory();

  return (
    <header className="w-full py-4 flex items-center justify-between border-b border-zinc-900 mb-6">
      <div className="flex items-center space-x-2.5">
        <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <Zap className="w-4 h-4 text-zinc-100 fill-current" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-white uppercase">
            {memory.name}
          </h1>
          <p className="text-[10px] text-zinc-400 font-medium">
            {memory.location}
          </p>
        </div>
      </div>

      {/* Online indicator */}
      <Badge dot={true} variant="outline" className="font-mono text-[11px]">
        Starlink Online
      </Badge>
    </header>
  );
};
