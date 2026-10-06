import React from 'react';
import {
  Wifi,
  Zap,
  Gamepad2,
  Shield,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  X,
  Signal,
  ArrowRight,
  Sparkles,
  Smartphone,
  CreditCard,
  Building2,
  Lock,
} from 'lucide-react';

// Custom clean vector basketball icon (minimalist high-contrast SVG)
export const BasketballIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-6 h-6",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Basketball outer circle */}
    <circle cx="12" cy="12" r="10" />
    {/* Horizontal line */}
    <line x1="2" y1="12" x2="22" y2="12" />
    {/* Vertical line */}
    <line x1="12" y1="2" x2="12" y2="22" />
    {/* Curved ribs */}
    <path d="M4.93 4.93c4.24 4.24 4.24 9.9 0 14.14" />
    <path d="M19.07 4.93c-4.24 4.24-4.24 9.9 0 14.14" />
  </svg>
);

// WhatsApp clean vector icon
export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-5 h-5",
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9.5 9.5c.3-.3.8-.3 1.1 0l1 1c.3.3.3.8 0 1.1l-.5.5c.5 1 1.4 1.9 2.4 2.4l.5-.5c.3-.3.8-.3 1.1 0l1 1c.3.3.3.8 0 1.1-.5.5-1.2.7-1.9.4-2.5-1.1-4.5-3.1-5.6-5.6-.3-.7-.1-1.4.4-1.9z" />
  </svg>
);

export {
  Wifi,
  Zap,
  Gamepad2,
  Shield,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  X,
  Signal,
  ArrowRight,
  Sparkles,
  Smartphone,
  CreditCard,
  Building2,
  Lock,
};
