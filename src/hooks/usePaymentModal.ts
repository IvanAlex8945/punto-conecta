import { useState, useCallback, useEffect } from 'react';
import { PaymentModalConfig } from '@/context/types';
import { INITIAL_PROJECT_MEMORY } from '@/context/projectMemory';

export interface UsePaymentModalReturn {
  isOpen: boolean;
  isCopied: boolean;
  openModal: () => void;
  closeModal: () => void;
  copyClabe: () => Promise<boolean>;
  getWhatsAppUrl: () => string;
  config: PaymentModalConfig;
}

/**
 * [SKILL: Payment Modal State Management]
 * Hook desacoplado para la orquestación del estado del modal de pago de Wi-Fi.
 * Administra apertura, cierre, copiado de CLABE con fallback móvil y enlace directo a WhatsApp.
 */
export function usePaymentModal(customConfig?: PaymentModalConfig): UsePaymentModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const config = customConfig || INITIAL_PROJECT_MEMORY.paymentModal;

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Bloqueo de scroll cuando el modal está activo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Soporte de tecla Escape para accesibilidad
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  // Copiado seguro al portapapeles con compatibilidad para navegadores móviles
  const copyClabe = useCallback(async (): Promise<boolean> => {
    const cleanClabe = config.clabe.replace(/\s+/g, '');
    
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(cleanClabe);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = cleanClabe;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
      return true;
    } catch (err) {
      console.error('Error al copiar CLABE:', err);
      return false;
    }
  }, [config.clabe]);

  // Generador de enlace a WhatsApp con mensaje codificado
  const getWhatsAppUrl = useCallback((): string => {
    const phone = config.whatsappPhone;
    const text = encodeURIComponent(config.whatsappMessage);
    return `https://wa.me/${phone}?text=${text}`;
  }, [config.whatsappPhone, config.whatsappMessage]);

  return {
    isOpen,
    isCopied,
    openModal,
    closeModal,
    copyClabe,
    getWhatsAppUrl,
    config,
  };
}
