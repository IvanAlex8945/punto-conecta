import React from 'react';
import { Header } from './components/layout/Header';
import { WifiHeroCard } from './components/hero/WifiHeroCard';
import { ServicesSection } from './components/services/ServicesSection';
import { Footer } from './components/layout/Footer';
import { PaymentModal } from './components/modal/PaymentModal';
import { usePaymentModal } from './hooks/usePaymentModal';

export const App: React.FC = () => {
  // [SKILL]: Desacoplamiento del estado del modal mediante custom hook
  const paymentModalState = usePaymentModal();

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between selection:bg-zinc-800">
      {/* Contenedor Mobile-First centrado en pantallas más anchas */}
      <main className="w-full max-w-md mx-auto px-4 sm:px-5 flex-1 flex flex-col">
        {/* Header superior */}
        <Header />

        {/* Sección A: El Gancho Principal (Starlink Wi-Fi) */}
        <WifiHeroCard onOpenModal={paymentModalState.openModal} />

        {/* Sección B: Ecosistema Local (Tarjetas de Servicios) */}
        <ServicesSection />

        {/* Sección C: Footer Simple */}
        <Footer />
      </main>

      {/* Modal Interno de Pago / Obtención de Clave */}
      <PaymentModal modalState={paymentModalState} />
    </div>
  );
};

export default App;
