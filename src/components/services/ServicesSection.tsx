import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  const { services, servicesTitle } = SITE_CONFIG;

  return (
    <section className="w-full mt-7">
      {/* Separador limpio minimalista con título de sección */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="h-px bg-zinc-800 flex-1" />
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 text-center px-1">
          {servicesTitle}
        </h2>
        <span className="h-px bg-zinc-800 flex-1" />
      </div>

      {/* 3 Tarjetas apiladas verticalmente */}
      <div className="space-y-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};
