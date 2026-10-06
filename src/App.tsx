import React from 'react';
import { ProjectProvider } from '@/context/ProjectContext';
import {
  Header,
  WifiHeroCard,
  ServicesSection,
  Footer,
  PaymentModal,
} from '@/components/features';
import { usePaymentModal } from '@/hooks/usePaymentModal';

const HubContent: React.FC = () => {
  // [Skill: Hook desacoplado de estado del modal]
  const paymentModalState = usePaymentModal();

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between selection:bg-zinc-800 overflow-x-hidden">
      {/* Contenedor Mobile-First centrado con padding protegido para Out of Bounds UI */}
      <main className="w-full max-w-md mx-auto px-4 sm:px-6 flex-1 flex flex-col overflow-visible">
        {/* Header superior */}
        <Header />

        {/* Sección A: El Gancho Principal (Starlink Wi-Fi con animación secuencial) */}
        <WifiHeroCard onOpenModal={paymentModalState.openModal} />

        {/* Sección B: Ecosistema Local (Tarjetas Out of Bounds) */}
        <ServicesSection />

        {/* Sección C: Footer Simple */}
        <Footer />
      </main>

      {/* Modal Interno de Pago */}
      <PaymentModal modalState={paymentModalState} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ProjectProvider>
      <HubContent />
    </ProjectProvider>
  );
};

export default App;
