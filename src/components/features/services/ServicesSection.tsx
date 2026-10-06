import React from 'react';
import { useProjectMemory } from '@/context/ProjectContext';
import { ServiceCard } from './ServiceCard';
import { Divider } from '@/components/ui/Divider';

export const ServicesSection: React.FC = () => {
  const { memory } = useProjectMemory();
  const { services, servicesTitle } = memory;

  return (
    <section className="w-full mt-7">
      {/* Separador limpio minimalista */}
      <Divider label={servicesTitle} />

      {/* 3 Tarjetas apiladas verticalmente */}
      <div className="space-y-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};
