# 🧠 Project Context & Memory Hub: Punto Conecta (Centro Digital - Asunción Nochixtlán)

> **Documento de Memoria a Largo Plazo y Especificación Arquitectónica**  
> *Versión:* 2.0.0 (Refactor Arquitectura Modular Escalable React / Next.js)  
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
- **Familia:** Sistema Sans-Serif ultra-legible (`system-ui`, `-apple-system`, `Inter`, `Segoe UI`, `sans-serif`).
- **Métricas:**
  - `Display / Hero Title`: `text-2xl` a `text-3xl` (`font-bold`, `tracking-tight`).
  - `Card Header`: `text-lg` a `text-xl` (`font-semibold`, `tracking-tight`).
  - `Body / Descriptions`: `text-sm` (`font-normal`, `text-zinc-400`, `leading-relaxed`).
  - `Badge / Micro`: `text-xs` (`font-medium`, `uppercase`, `tracking-wider`).

---

## 3. 🗺️ Arquitectura de Enlaces y Ecosistema

### 3.1 Catálogo de Rutas Externas (Todas abren con `target="_blank" rel="noopener noreferrer"`)

| ID | Servicio | Título en Tarjeta | Icono Vectorial | Enlace URL |
| :--- | :--- | :--- | :--- | :--- |
| `wifi-hero` | Conexión Starlink | "Wi-Fi Alta Velocidad" | `Wifi` / `Zap` | *Modal Interno de Pago* |
| `service-gaming` | Gaming & Computadoras | "Zona Gamer y Trámites" | `Gamepad2` (`/assets/gamepad.svg`) | `https://control-local-oaxaca.vercel.app/` |
| `service-tactical` | Equipamiento Policial | "Uniformes y Equipo Policial" | `ShieldCheck` (`/assets/shield.svg`) | `https://joyful-dolphin-d07913.netlify.app` |
| `service-sports` | Deportes Locales | "Liga Municipal de Básquetbol" | Balón SVG (`/assets/basketball.svg`) | `https://liga-nochixtlan-js.vercel.app/` |

### 3.2 Datos de Configuración de Pagos y Contacto (En `/src/context`)
- **Tarifa Wi-Fi:** `$50 MXN` (Acceso ilimitado por 24 horas).
- **CLABE Interbancaria SPEI:** `722969014122996481`.
- **Banco:** `Mercado Pago`.
- **Beneficiario:** `Ivan Ulises Alexandres Reyes`.
- **WhatsApp Oficial de Validación:** `+52 951 119 8303` (URL: `https://wa.me/529511198303?text=Hola%2C%20ya%20transfer%C3%AD%20los%20%2450%20pesos%20a%20Mercado%20Pago%20para%20el%20Wi-Fi.%20Aqu%C3%AD%20est%C3%A1%20mi%20comprobante.`).
- **Alternativa Física:** *"Pago en efectivo disponible directamente en mostrador."*

---

## 4. 🏗️ Arquitectura de Carpetas Profesional & Escalable (React / Next.js)

El proyecto implementa la siguiente estructura estricta y desacoplada con alias de importación `@/*`:

```
punto-conecta/
├── project-context.md                    # [ESTE ARCHIVO] Memoria permanente y contexto
├── index.html                            # HTML5 con viewport móvil y preconnect
├── package.json                          # Vite + React 18 + Tailwind + Framer Motion + Lucide
├── tsconfig.json                         # Configuración TypeScript con paths "@/*": ["src/*"]
├── vite.config.ts                        # Configuración Vite con alias "@": path.resolve("./src")
├── tailwind.config.js                    # Paleta matte pura y sombras sin resplandor
├── postcss.config.js                     # Tailwind + Autoprefixer
├── vercel.json                           # Reglas de despliegue y caché estática en Vercel
│
├── public/
│   └── assets/                           # [PUBLIC ASSETS]: Iconos vectoriales limpios
│       ├── basketball.svg                # Balón de básquetbol plano de alto contraste
│       ├── gamepad.svg                   # Control gamer vectorial
│       ├── shield.svg                    # Escudo táctico de seguridad
│       ├── starlink.svg                  # Conexión satelital Starlink
│       └── whatsapp.svg                  # Icono de mensajería WhatsApp
│
└── src/
    ├── main.tsx                          # Punto de entrada de la aplicación
    ├── App.tsx                           # Layout orquestador con ProjectProvider
    │
    ├── components/
    │   ├── ui/                           # [UI]: Elementos reutilizables y primitivas visuales
    │   │   ├── Button.tsx                # Botón táctil con variantes (primary, secondary, etc.)
    │   │   ├── Card.tsx                  # Tarjeta genérica con tilt 3D y modos div/anchor
    │   │   ├── Badge.tsx                 # Pill de estado (online, categorías, tags)
    │   │   ├── Divider.tsx               # Separador minimalista con etiqueta central
    │   │   ├── Icons.tsx                 # Iconografía unificada (Lucide + vectores)
    │   │   └── index.ts                  # Barrel export de componentes UI
    │   │
    │   └── features/                     # [FEATURES]: Lógica de negocio y vistas específicas
    │       ├── wifi/
    │       │   └── WifiHeroCard.tsx      # Lógica y tarjeta superior Starlink
    │       ├── payment/
    │       │   └── PaymentModal.tsx      # Modal de pago con CLABE y enlace WhatsApp
    │       ├── services/
    │       │   ├── icons/                # Iconos multicapa Claymorphic / 3D
    │       │   │   ├── GamerController3D.tsx  # Físicas de flotación y rotación en Z
    │       │   │   ├── TacticalShield3D.tsx   # Acabado metálico y barrido de luz (Glint)
    │       │   │   ├── Basketball3D.tsx       # Rebote gravitatorio y squash & stretch
    │       │   │   └── index.ts
    │       │   ├── ServiceCard.tsx       # Tarjeta con bordes luminosos y físicas 3D
    │       │   └── ServicesSection.tsx   # Contenedor vertical de servicios del ecosistema
    │       ├── layout/
    │       │   ├── Header.tsx            # Header superior con badge Starlink
    │       │   └── Footer.tsx            # Footer oficial Nochixtlán
    │       └── index.ts                  # Barrel export de componentes de features
    │
    ├── hooks/                            # [HOOKS]: Lógica reactiva y estado desacoplado
    │   └── usePaymentModal.ts            # Hook para gestión del modal de pago (Skill 1)
    │
    ├── context/                          # [CONTEXT]: Memoria del proyecto y estado global
    │   ├── types.ts                      # Tipos de datos de la memoria y servicios
    │   ├── projectMemory.ts              # Fuente de verdad inicial persistente
    │   └── ProjectContext.tsx            # Contexto y Provider con hook useProjectMemory
    │
    └── styles/                           # [STYLES]: Configuración global de Tailwind
        ├── globals.css                   # Directivas Tailwind y estilos de base oscura
        └── index.css                     # Importador de estilos globales
```

---

## 5. 🧩 Habilidades ("Skills") de Componentes y Hooks

### 5.1 Skill: `/hooks/usePaymentModal.ts`
- Administra el estado abierto/cerrado del modal.
- Bloquea el scroll del fondo (`body.style.overflow = 'hidden'`) mientras está activo.
- Soporta cierre con tecla `Escape`.
- Copiado seguro de la CLABE al portapapeles con fallback para navegadores móviles restringidos.
- Genera el enlace directo a la API de WhatsApp con mensaje precodificado.

### 5.2 Skill: `/components/features/services/ServiceCard.tsx` (Out of Bounds UI & Retardo Intencional)
- **Diseño Out of Bounds:** Se eliminaron los contenedores cuadrados interiores. Los íconos 3D (+40% de tamaño) tienen `position: absolute` y sobresalen del borde superior izquierdo (`-top-7 -left-3 sm:-top-8 sm:-left-5`), con `overflow-visible` y animaciones ambientales infinitas.
- **Animaciones Ambientales Infinitas por Defecto:** Los íconos 3D ejecutan sus animaciones continuas en bucle infinito desde que montan (`repeat: Infinity`):
  - **Zona Gamer:** Levitación senoidal en Y (`y: [-6, 6, -6]`) y pulso de neón morado continuo.
  - **Equipamiento Policial:** Levitación en Y y barrido de destello de luz (*Shine/Glint*) periódico cada 3.6s.
  - **Básquetbol:** Rebote gravitatorio constante con deformación *Squash & Stretch* (`scaleY: 0.78`, `scaleX: 1.15`) y giro continuo de 360°.
- **Texto 3D Flotante con Presión Mecánica:** Capas sólidas apiladas de `text-shadow`. Al interactuar, el texto se comprime físicamente (`translate(2px, 2px)`).
- **Experiencia de Clic con Retardo Intencional (400ms):**
  - Previene doble clic y fallas de navegación móvil.
  - Al pulsar (`whileTap={{ scale: 0.95 }}`), se ejecuta `e.preventDefault()`, se activa la animación de impacto físico por 400ms y posteriormente se ejecuta `window.open(url, '_blank')`.

### 5.3 Skill: `/components/features/wifi/WifiIcon3D.tsx` & `WifiHeroCard.tsx` (Wi-Fi Out of Bounds 3D & Cobertura Local)
- Ícono Wi-Fi estilo Claymorphic 3D en posición `absolute -top-7 -left-3 sm:-top-8 sm:-left-5` rompiendo el contenedor principal.
- Animación secuencial infinita "Buscando señal Starlink" que enciende cíclicamente las ondas (Punto -> Onda 1 -> Onda 2 -> Onda 3) en bucle perpetuo con pulso cian/esmeralda.
- **Aviso de Cobertura Local (Soft Alert):** Fila sutil en `bg-black/60 border border-white/5` con ícono `MapPin` y texto `"📍 Cobertura exclusiva en el local y 20m a la redonda."` en `text-xs text-zinc-400`.

### 5.4 Skill: `/context/ProjectContext.tsx`
- Distribuye la memoria del proyecto a todos los componentes hijos sin prop drilling.
- Permite actualizaciones reactivas en caliente de la memoria y la configuración.

---

## 6. ⚙️ Reglas de Comportamiento para Futuras Sesiones

1. **Lectura Obligatoria:** En cada nueva sesión de desarrollo, verificar o releer `project-context.md` para mantener coherencia en la arquitectura, paleta de colores, rutas y tipografía.
2. **Preservación del Tema Mate con Acentos Reactivos:** Mantener el fondo negro mate puro; las iluminaciones temáticas solo se activan sutilmente en bordes al interactuar con las tarjetas.
3. **Respeto a la Arquitectura:** Nuevos componentes primitivos deben colocarse en `/components/ui`, y componentes con lógica de negocio o de dominio en `/components/features`.
4. **Optimización Mobile:** Todo cambio debe probarse prioritariamente en viewport móvil (`max-w-md mx-auto`) con respuesta al toque.
