import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Copy,
  Check,
  Building2,
  WhatsAppIcon,
  CreditCard,
  Lock,
} from '../ui/Icons';
import { UsePaymentModalReturn } from '../../hooks/usePaymentModal';

interface PaymentModalProps {
  modalState: UsePaymentModalReturn;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ modalState }) => {
  const { isOpen, isCopied, closeModal, copyClabe, getWhatsAppUrl, config } = modalState;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop mate sólido puro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-none"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ y: '100%', opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-md bg-zinc-950 border-t sm:border border-zinc-800 rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-zinc-100">
                  <CreditCard className="w-4 h-4 text-zinc-200" />
                </div>
                <div>
                  <h3 id="modal-title" className="text-base font-bold text-white tracking-tight">
                    Acceso Wi-Fi Starlink
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Pase de conexión ilimitada por 24 hrs
                  </p>
                </div>
              </div>

              {/* Botón Cerrar */}
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors active:scale-95"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Precio / Resumen */}
            <div className="mt-4 p-3 bg-zinc-900/60 rounded-xl border border-zinc-800/60 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-zinc-300">Conexión Inmediata</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-400 mr-1.5">Total a transferir:</span>
                <span className="text-base font-extrabold text-white tracking-tight">{config.amount}</span>
              </div>
            </div>

            {/* Pasos de Pago */}
            <div className="mt-5 space-y-4">
              {/* Paso 1: Transferencia CLABE */}
              <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Paso 1: Transfiere $50 a la CLABE
                  </span>
                  <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-zinc-400" />
                    {config.bankName}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between bg-black rounded-lg border border-zinc-800 p-2.5">
                  <div className="font-mono text-sm tracking-wider text-zinc-100 select-all font-medium">
                    {config.clabe}
                  </div>
                  <button
                    onClick={copyClabe}
                    className={`ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 active:scale-95 ${
                      isCopied
                        ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/40'
                        : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copiada</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                
                <p className="mt-2 text-[11px] text-zinc-500">
                  Beneficiario: <strong className="text-zinc-400 font-medium">{config.beneficiary}</strong>
                </p>
              </div>

              {/* Paso 2: Envío de Comprobante WhatsApp */}
              <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                  Paso 2: Envía captura al WhatsApp
                </span>
                
                <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                  Envía el comprobante de transferencia y recibe de inmediato tu código personal de acceso Starlink.
                </p>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors active:scale-98 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enviar Captura por WhatsApp</span>
                </a>
              </div>

              {/* Nota de Pago en Mostrador */}
              <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-3 text-center">
                <p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  <span>({config.counterNotice})</span>
                </p>
              </div>
            </div>

            {/* Footer modal seguro */}
            <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
              <Lock className="w-3 h-3 text-zinc-500" />
              <span>Transacción segura directa • Centro Digital Nochixtlán</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
