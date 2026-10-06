import React from 'react';
import { useProjectMemory } from '@/context/ProjectContext';

export const Footer: React.FC = () => {
  const { memory } = useProjectMemory();

  return (
    <footer className="w-full mt-10 pt-6 pb-8 border-t border-zinc-900 text-center">
      <p className="text-xs font-medium text-zinc-400 tracking-tight">
        {memory.footer.text}
      </p>
      <p className="text-[11px] text-zinc-600 mt-1 font-mono">
        © {memory.footer.year} • Acceso Libre & Red Comunitaria
      </p>
    </footer>
  );
};
