import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-10 pt-6 pb-8 border-t border-zinc-900 text-center">
      <p className="text-xs font-medium text-zinc-400 tracking-tight">
        {SITE_CONFIG.footer.text}
      </p>
      <p className="text-[11px] text-zinc-600 mt-1 font-mono">
        © {SITE_CONFIG.footer.year} • Acceso Libre & Red Comunitaria
      </p>
    </footer>
  );
};
