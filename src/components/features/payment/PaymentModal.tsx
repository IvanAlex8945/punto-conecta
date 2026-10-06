import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Copy,
  Check,
  Building2,
  WhatsAppIcon,
  Lock,
  Zap,
} from '@/components/ui/Icons';
import { UsePaymentModalReturn } from '@/hooks/usePaymentModal';

interface PaymentModalProps {
  modalState: UsePaymentModalReturn;
}

/**
 * [SKILL: Modal de Pago SPEI Real - Mercado Pago & WhatsApp]
 * Modal con glassmorphism oscuro, microinteracción de copiado de CLABE
 * con feedback "¡Copiado!" y botón directo a WhatsApp para validación.
 */
export const PaymentModal: React.FC<PaymentModalProps> = ({ modalState }) => {
  const { isOpen, isCopied, closeModal, copyClabe } = modalState;

  // URL exacta de WhatsApp con mensaje precargado
  const whatsappUrl = `https://wa.me/529511198303?text=Hola%2C%20ya%20transfer%C3%AD%20los%20%2450%20pesos%20a%20Mercado%20Pago%20para%20el%20Wi-Fi.%20Aqu%C3%AD%20est%C3%A1%20mi%20comprobante.`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Fondo Glassmorphism oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Contenedor del Modal con animación de entrada suave */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-md bg-[#111111]/95 border-t sm:border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.98)] backdrop-blur-xl z-10 overflow-hidden"
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3
                    id="payment-modal-title"
                    className="text-lg font-black text-white tracking-tight"
                  >
                    Acceso Wi-Fi por 24 Horas
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    Internet Starlink de ultra-alta velocidad
                  </p>
                </div>
              </div>

              {/* Botón Cerrar */}
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors active:scale-90"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tarjeta de Monto a Pagar */}
            <div className="mt-4 p-3.5 bg-black/60 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                  Monto a pagar
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  $50 MXN
                </span>
              </div>
            </div>

            {/* Instrucciones de Transferencia SPEI */}
            <div className="mt-4">
              <p className="text-xs font-medium text-zinc-300 leading-relaxed mb-3">
                Realiza una transferencia SPEI desde cualquier banco con los siguientes datos:
              </p>

              {/* Tarjeta con Datos Bancarios */}
              <div className="rounded-2xl bg-black/80 border border-white/10 p-4 space-y-3.5">
                {/* Banco & Beneficiario */}
                <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block">
                      Banco
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      Mercado Pago
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block">
                      Beneficiario
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-200 truncate block mt-0.5" title="Ivan Ulises Alexandres Reyes">
                      Ivan Ulises Alexandres Reyes
                    </span>
                  </div>
                </div>

                {/* CLABE con Microinteracción Pro de Copiado */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                      CLABE Interbancaria (18 dígitos)
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono">SPEI Sin comisión</span>
                  </div>

                  <div className="relative flex items-center justify-between bg-zinc-950 rounded-xl border border-white/10 p-2.5 sm:p-3">
                    <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white select-all">
                      722969014122996481
                    </span>

                    {/* Botón de Copiado con feedback animado */}
                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      onClick={copyClabe}
                      className={`ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        isCopied
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                      }`}
                      aria-label="Copiar número CLABE"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Separador y Paso 2: Validación por WhatsApp */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-xs font-semibold text-zinc-300 mb-3">
                Paso 2: Envía tu comprobante para recibir la contraseña.
              </p>

              {/* Botón Grande y Vibrante a WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm sm:text-base tracking-tight transition-colors duration-150 shadow-[0_8px_20px_-4px_rgba(37,211,102,0.4)]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-black" />
                <span>Enviar Comprobante por WhatsApp</span>
              </motion.a>
            </div>

            {/* Nota de Seguridad */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 font-mono">
              <Lock className="w-3 h-3 text-zinc-500" />
              <span>Conexión directa • Soporte local Nochixtlán</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
