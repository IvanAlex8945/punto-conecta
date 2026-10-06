import { ProjectMemory } from './types';

/**
 * Fuente de Verdad y Memoria Inicial del Proyecto.
 * Sincronizado con project-context.md con los datos reales de Mercado Pago SPEI.
 */
export const INITIAL_PROJECT_MEMORY: ProjectMemory = {
  name: "Punto Conecta",
  location: "Asunción Nochixtlán",
  tagline: "Centro Digital & Acceso Starlink",

  wifiHero: {
    badge: "Conexión Satelital Starlink",
    speedIndicator: "Hasta 250 Mbps",
    title: "Wi-Fi Alta Velocidad",
    subtitle: "Conéctate todo el día por $50.",
    price: "$50",
    period: "Pase Diario",
    ctaText: "Obtener Clave",
  },

  paymentModal: {
    clabe: "722969014122996481",
    bankName: "Mercado Pago",
    beneficiary: "Ivan Ulises Alexandres Reyes",
    amount: "$50 MXN",
    whatsappPhone: "529511198303",
    whatsappMessage: "Hola, ya transferí los $50 pesos a Mercado Pago para el Wi-Fi. Aquí está mi comprobante.",
    counterNotice: "Pago en efectivo disponible en mostrador",
  },

  servicesTitle: "Explora nuestros servicios",
  services: [
    {
      id: "gaming",
      title: "Zona Gamer y Trámites",
      category: "Gaming & Computadoras",
      description: "Renta de consolas, PCs para videojuegos e impresión y trámites digitales.",
      url: "https://control-local-oaxaca.vercel.app/",
      iconName: "gamepad",
      tag: "En línea",
    },
    {
      id: "police",
      title: "Uniformes y Equipo Policial",
      category: "Equipamiento Táctico",
      description: "Catálogo de uniformes, calzado táctico y accesorios oficiales de seguridad.",
      url: "https://joyful-dolphin-d07913.netlify.app",
      iconName: "shield",
      tag: "Catálogo",
    },
    {
      id: "sports",
      title: "Liga Municipal de Básquetbol",
      category: "Deportes",
      description: "Rol de juegos, estadísticas, tabla de posiciones y noticias de la liga.",
      url: "https://liga-nochixtlan-js.vercel.app/",
      iconName: "basketball",
      tag: "Torneo Activo",
    },
  ],

  footer: {
    text: "Centro Digital - Asunción Nochixtlán",
    subtext: "Conectando nuestra comunidad con tecnología de vanguardia",
    year: new Date().getFullYear(),
  },
};
