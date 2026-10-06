import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  onClick?: () => void;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  enableTilt = false,
  onClick,
  asAnchor = false,
  href,
  target,
  rel,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!enableTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    x.set(0);
    y.set(0);
  };

  const baseStyles = 'relative rounded-2xl bg-zinc-950 border border-zinc-800/90 transition-all duration-200 shadow-matte-sm';

  if (asAnchor && href) {
    return (
      <div style={{ perspective: enableTilt ? 800 : undefined }} className="w-full">
        <motion.a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={
            enableTilt
              ? {
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }
              : undefined
          }
          whileTap={{ scale: 0.98 }}
          className={`block ${baseStyles} hover:border-zinc-700 hover:bg-zinc-900/30 cursor-pointer select-none ${className}`}
        >
          {children}
        </motion.a>
      </div>
    );
  }

  return (
    <div style={{ perspective: enableTilt ? 800 : undefined }} className="w-full">
      <motion.div
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          enableTilt
            ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
            : undefined
        }
        whileTap={onClick ? { scale: 0.98 } : undefined}
        className={`${baseStyles} ${onClick ? 'cursor-pointer select-none' : ''} ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
