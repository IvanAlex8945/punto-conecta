import React from 'react';
import { useProjectMemory } from '@/context/ProjectContext';
import { ServiceCard } from './ServiceCard';
import { Divider } from '@/components/ui/Divider';

export const ServicesSection: React.FC = () => {
  const { memory } = useProjectMemory();
  const { services, servicesTitle } = memory;

  return (
    <section className="w-full mt-8 overflow-visible">
      {/* Separador limpio minimalista */}
      <Divider label={servicesTitle} className="mb-6" />

      {/* 3 Tarjetas apiladas verticalmente con holgura para elementos Out of Bounds */}
      <div className="space-y-6 sm:space-y-7 overflow-visible">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};
