# 🧠 Project Context & Memory Hub: Punto Conecta (Centro Digital - Asunción Nochixtlán)

> **Documento de Memoria a Largo Plazo y Especificación Arquitectónica**  
> *Versión:* 1.0.0  
> *Ubicación:* `project-context.md`  
> *Objetivo:* Actuar como el "Skill" principal y memoria persistente para el agente de IA y desarrolladores en todas las sesiones presentes y futuras.

---

## 1. 📌 Identidad y Visión del Proyecto

- **Nombre del Proyecto:** Punto Conecta — Hub Digital Nochixtlán
- **Ubicación Física:** Asunción Nochixtlán, Oaxaca, México.
- **Propósito:** Portal digital y landing page "Mobile-First" de ultra-alta velocidad que actúa como centro neurálgico de acceso a Internet de alta velocidad (Starlink) y puerta de enlace al ecosistema local de servicios digitales, deportivos y comerciales del municipio.
- **Audiencia:** Usuarios locales, visitantes y clientes que se conectan desde dispositivos móviles en el establecimiento físico o buscan servicios en Nochixtlán.
- **Enfoque de Experiencia:** Mobile-First táctil, carga instantánea (<1s), estética *Dark Mode Matte Minimalist* (lujo técnico sobrio, cero distracciones).

---

## 2. 🎨 Sistema de Diseño (Design System: Pure Matte Dark)

### 2.1 Filosofía Visual
- **Matte Black Solid:** Fondo `#000000` puro.
- **Cero resplandores (No Glow), Cero neón, Cero texturas pseudo-skueomórficas:** Se prohíben gradientes fluorescentes, sombras de colores neón o fondos con ruido/partículas.
- **Diseño Vectorial Plano & Alto Contraste:** Tarjetas con fondos mate (`#0a0a0a` / `#121212`), bordes milimétricos de precisión (`#262626` / `#333333`), e iconografía vectorial nítida.
- **Tacto "Pro" Háptico:** Microinteracciones de elevación suave, sutil inclinación 3D (tilt interactivo) y efecto *pressed* (`scale: 0.98`) al toque en pantallas móviles.

### 2.2 Paleta de Colores Oficial

| Token | Código HEX | Tailwind Class | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#000000` | `bg-black` | Fondo general de la aplicación |
| **Card Surface Base** | `#09090b` / `#0d0d0d` | `bg-zinc-950` / `bg-neutral-900` | Superficie de tarjetas y contenedores |
| **Card Surface Elevated** | `#141416` | `bg-zinc-900` | Modales y elementos interactivos elevados |
| **Border Subtle** | `#222225` | `border-zinc-800` | Separadores y bordes estáticos |
| **Border Active / Hover** | `#3f3f46` | `border-zinc-700` | Estados interactivos y tarjetas activas |
| **Text Primary** | `#fafafa` | `text-zinc-100` / `text-white` | Títulos, precios y botones principales |
| **Text Secondary** | `#a1a1aa` | `text-zinc-400` | Subtítulos y descripciones técnicas |
| **Text Muted** | `#71717a` | `text-zinc-500` | Metadatos y pie de página |
| **Accent Action (Wi-Fi)** | `#ffffff` / `#18181b` | `bg-white text-black` | Botón CTA principal de alto contraste |
| **Success / WA Indicator** | `#10b981` | `text-emerald-500` | Indicador de estado online / WhatsApp |

### 2.3 Tipografía
- **Familia:** Sistema San-Serif ultra-legible (`system-ui`, `-apple-system`, `Inter`, `Segoe UI`, `sans-serif`).
- **Métricas:**
  - `Display / Hero Title`: `text-2xl` a `text-3xl` (`font-bold`, `tracking-tight`).
  - `Card Header`: `text-lg` a `text-xl` (`font-semibold`, `tracking-tight`).
  - `Body / Descriptions`: `text-sm` (`font-normal`, `text-zinc-400`, `leading-relaxed`).
  - `Badge / Micro`: `text-xs` (`font-medium`, `uppercase`, `tracking-wider`).

---

## 3. 🗺️ Arquitectura de Enlaces y Ecosistema

### 3.1 Catálogo de Rutas Externas (Todas abren con `target="_blank" rel="noopener noreferrer"`)

| ID | Servicio | Título en Tarjeta | Icono Lucide | Enlace URL |
| :--- | :--- | :--- | :--- | :--- |
| `wifi-hero` | Conexión Starlink | "Wi-Fi Alta Velocidad" | `Wifi` / `Zap` | *Modal Interno de Pago* |
| `service-gaming` | Gaming & Computadoras | "Zona Gamer y Trámites" | `Gamepad2` | `https://control-local-oaxaca.vercel.app/` |
| `service-tactical` | Equipamiento Policial | "Uniformes y Equipo Policial" | `Shield` / `ShieldCheck` | `https://joyful-dolphin-d07913.netlify.app` |
| `service-sports` | Deportes Locales | "Liga Municipal de Básquetbol" | `Activity` / Balón Deportivo SVG | `https://liga-nochixtlan-js.vercel.app/` |

### 3.2 Datos de Configuración de Pagos y Contacto
- **Tarifa Wi-Fi:** `$50 MXN` (Acceso ilimitado todo el día).
- **CLABE Interbancaria por Defecto:** `012 610 015489723456` (Configurable en `src/config/siteConfig.ts`).
- **Banco / Titular:** `BBVA / Centro Digital Nochixtlán`.
- **WhatsApp Oficial:** `+52 951 000 0000` (Enlace directo a API con mensaje predeterminado: *"Hola, acabo de transferir $50 para la clave de Wi-Fi de alta velocidad en Punto Conecta"*).
- **Alternativa Física:** *"Pago en efectivo disponible directamente en mostrador."*

---

## 4. 🧩 Arquitectura Modular & Habilidades ("Skills") de Código

El proyecto sigue una estructura desacoplada:

```
punto-conecta/
├── project-context.md               # [ESTE ARCHIVO] Memoria permanente y contexto
├── index.html                       # HTML5 con viewport optimizado para móviles
├── package.json                     # Vite + React + Tailwind + Framer Motion + Lucide
├── tailwind.config.js               # Paleta personalizada mate, sin blur ni glow
├── postcss.config.js
├── vite.config.ts
├── src/
│   ├── main.tsx                     # Entrypoint
│   ├── App.tsx                      # Layout principal Mobile-First
│   ├── config/
│   │   └── siteConfig.ts            # Fuente de verdad: Links, CLABE, WhatsApp, Precios
│   ├── hooks/
│   │   └── usePaymentModal.ts       # [SKILL 1]: Lógica desacoplada del modal de pago
│   ├── components/
│   │   ├── hero/
│   │   │   └── WifiHeroCard.tsx     # Tarjeta principal Wi-Fi Starlink
│   │   ├── modal/
│   │   │   └── PaymentModal.tsx     # Modal interactivo con copiado de CLABE y enlace WA
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx      # [SKILL 2]: Tarjeta individual con micro-animaciones
│   │   │   └── ServicesSection.tsx  # Lista vertical de servicios del ecosistema
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Barra superior con estado en vivo y ubicación
│   │   │   └── Footer.tsx           # Footer minimalista oficial
│   │   └── ui/
│   │       ├── Badge.tsx            # Pill minimalista mate
│   │       └── Icons.tsx            # Iconografía curada Lucide y custom basketball SVG
│   └── styles/
│       └── index.css                # Directivas Tailwind y reseteo táctil
```

### 4.1 Skill: `usePaymentModal` (Hook de Estado de Pago)
- Gestiona:
  - Estado `isOpen`: Booleano para visibilidad del modal.
  - Acción `copyClabe()`: Copia al portapapeles con feedback temporal (tooltip "Copiado").
  - Generador de enlace WhatsApp con texto preconfigurado codificado en URI.
  - Accesibilidad: Cierre con tecla `Escape`, bloqueo de scroll de fondo y focus trap básico.

### 4.2 Skill: `ServiceCard` (Tarjeta Reactiva con Animación Dinámica)
- Renderiza tarjetas individuales con:
  - Enlaces seguros `target="_blank"` y `rel="noopener noreferrer"`.
  - Animación Framer Motion: Tilt 3D reactivo al puntero o toque, elevación suave sin glow.
  - Microinteracción de icono: Rotación sutil o pulso en hover/active.
  - Flecha indicadora de navegación externa que reacciona al toque.

---

## 5. ⚙️ Reglas de Comportamiento para Futuras Sesiones

1. **Lectura Obligatoria:** En cada nueva sesión de desarrollo, el agente debe verificar o releer `project-context.md` para mantener coherencia en colores, tipografía, textos y enlaces.
2. **Preservación del Tema Mate:** Queda estrictamente prohibido introducir gradientes fluorescentes, colores RGB neón, sombras difusas de color tipo "cyberpunk" o efectos de cristal esmerilado que rompan el negro mate puro.
3. **Optimización Mobile:** Todo nuevo componente debe diseñarse pensando primero en anchos de pantalla de `360px` a `430px`, antes de expandirse a pantallas de escritorio (`max-w-md mx-auto`).
4. **Respeto a la Identidad Regional:** Mantener visible la referencia geográfica "Asunción Nochixtlán" para dar confianza al usuario local.
