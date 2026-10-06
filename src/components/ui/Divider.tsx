import React from 'react';

export interface DividerProps {
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ label, className = '' }) => {
  if (!label) {
    return <hr className={`border-zinc-800 my-4 ${className}`} />;
  }

  return (
    <div className={`flex items-center space-x-3 my-5 ${className}`}>
      <span className="h-px bg-zinc-800 flex-1" />
      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 text-center px-1">
        {label}
      </span>
      <span className="h-px bg-zinc-800 flex-1" />
    </div>
  );
};
