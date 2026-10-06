export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  iconName: 'gamepad' | 'shield' | 'basketball';
  tag?: string;
}

export interface WifiHeroConfig {
  badge: string;
  speedIndicator: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  ctaText: string;
}

export interface PaymentModalConfig {
  clabe: string;
  bankName: string;
  beneficiary: string;
  amount: string;
  whatsappPhone: string;
  whatsappMessage: string;
  counterNotice: string;
}

export interface FooterConfig {
  text: string;
  subtext: string;
  year: number;
}

export interface ProjectMemory {
  name: string;
  location: string;
  tagline: string;
  wifiHero: WifiHeroConfig;
  paymentModal: PaymentModalConfig;
  servicesTitle: string;
  services: ServiceItem[];
  footer: FooterConfig;
}
