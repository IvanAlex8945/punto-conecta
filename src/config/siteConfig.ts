export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  iconName: 'gamepad' | 'shield' | 'basketball';
  tag?: string;
}

export const SITE_CONFIG = {
  name: "Punto Conecta",
  location: "Asunción Nochixtlán",
  tagline: "Centro Digital & Acceso Starlink",
  
  // Conexión Wi-Fi Principal
  wifiHero: {
    badge: "Conexión Satelital Starlink",
    speedIndicator: "Hasta 250 Mbps",
    title: "Wi-Fi Alta Velocidad",
    subtitle: "Conéctate todo el día por $50.",
    price: "$50",
    period: "Pase Diario",
    ctaText: "Obtener Clave",
  },

  // Datos para el Modal de Pago
  paymentModal: {
    clabe: "012 610 015489723456",
    bankName: "BBVA México",
    beneficiary: "Centro Digital Nochixtlán",
    amount: "$50.00 MXN",
    // WhatsApp número (formato internacional para API)
    whatsappPhone: "529511234567",
    whatsappMessage: "Hola, acabo de transferir $50 para solicitar la clave de Wi-Fi de alta velocidad en Punto Conecta.",
    counterNotice: "Pago en efectivo disponible en mostrador",
  },

  // Ecosistema de Servicios
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
  ] as ServiceItem[],

  footer: {
    text: "Centro Digital - Asunción Nochixtlán",
    subtext: "Conectando nuestra comunidad con tecnología de vanguardia",
    year: new Date().getFullYear(),
  }
};
