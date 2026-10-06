# Punto Conecta — Hub Digital (Asunción Nochixtlán)

Landing Page & Hub Digital "Mobile-First" construida con **React**, **Tailwind CSS**, **Framer Motion** y **Lucide-React**. Diseñada bajo un estilo **Pure Matte Dark Mode** con una arquitectura modular y profesional escalable apta para React y Next.js.

---

## ⚡ Características Principales

1. **Memoria y Contexto a Largo Plazo:**
   - [`project-context.md`](file:///d:/punto-conecta/project-context.md): Documento maestro de reglas, rutas, paleta de colores y arquitectura.
   - `/src/context/`: Contexto React (`ProjectContext.tsx`, `projectMemory.ts`, `types.ts`) para distribución de la memoria y configuración del proyecto.
2. **Gancho Wi-Fi Starlink:**
   - Tarjeta destacada con especificaciones técnicas, precio diario ($50 MXN) y botón de acción.
   - **Modal interno de pago:** Flujo paso a paso con copiado instantáneo de CLABE al portapapeles y botón directo de comprobante a WhatsApp con mensaje preconfigurado.
3. **Ecosistema Local de Servicios:**
   - Tarjetas apiladas verticalmente con microinteracción de tilt 3D y animaciones dinámicas en cada icono:
     - **Zona Gamer y Trámites** (`Gamepad2` con balanceo interactivo) -> [control-local-oaxaca.vercel.app](https://control-local-oaxaca.vercel.app/)
     - **Uniformes y Equipo Policial** (`ShieldCheck` con pulso táctico) -> [joyful-dolphin-d07913.netlify.app](https://joyful-dolphin-d07913.netlify.app)
     - **Liga Municipal de Básquetbol** (Balón SVG deportivo con rotación fluida) -> [liga-nochixtlan-js.vercel.app](https://liga-nochixtlan-js.vercel.app/)
4. **Diseño Mobile-First:**
   - Diseñado y optimizado para la experiencia táctil en smartphones (`max-w-md mx-auto`), escalable con elegancia a pantallas grandes.
5. **Listo para Vercel:**
   - Incluye configuración de compilación optimizada con Vite y [`vercel.json`](file:///d:/punto-conecta/vercel.json).

---

## 📁 Arquitectura de Carpetas Refactorizada

```
punto-conecta/
├── project-context.md                    # Memoria permanente y contexto del proyecto
├── vercel.json                           # Configuración para despliegue en Vercel
├── package.json                          # Scripts y dependencias
├── tsconfig.json                         # Alias de rutas "@/*"
├── vite.config.ts                        # Configuración de Vite con alias "@"
│
├── public/
│   └── assets/                           # Iconos vectoriales limpios
│       ├── basketball.svg
│       ├── gamepad.svg
│       ├── shield.svg
│       ├── starlink.svg
│       └── whatsapp.svg
│
└── src/
    ├── main.tsx                          # Entrypoint
    ├── App.tsx                           # Layout principal envuelto en ProjectProvider
    │
    ├── components/
    │   ├── ui/                           # Elementos reutilizables y primitivas visuales
    │   │   ├── Button.tsx                # Botón táctil reutilizable
    │   │   ├── Card.tsx                  # Tarjeta genérica con tilt 3D y modo anchor
    │   │   ├── Badge.tsx                 # Pill de estado
    │   │   ├── Divider.tsx               # Separador con etiqueta
    │   │   ├── Icons.tsx                 # Iconografía unificada
    │   │   └── index.ts                  # Barrel export
    │   │
    │   └── features/                     # Lógica de negocio y vistas específicas
    │       ├── wifi/
    │       │   └── WifiHeroCard.tsx      # Tarjeta superior Wi-Fi Starlink
    │       ├── payment/
    │       │   └── PaymentModal.tsx      # Modal de pago con CLABE y WhatsApp
    │       ├── services/
    │       │   ├── ServiceCard.tsx       # Tarjetas interactivas de servicios
    │       │   └── ServicesSection.tsx   # Contenedor de servicios
    │       ├── layout/
    │       │   ├── Header.tsx            # Header superior
    │       │   └── Footer.tsx            # Footer oficial
    │       └── index.ts                  # Barrel export
    │
    ├── hooks/                            # Hooks personalizados desacoplados
    │   └── usePaymentModal.ts            # Estado del modal de pago
    │
    ├── context/                          # Memoria y estado global del proyecto
    │   ├── types.ts                      # Tipos de la memoria
    │   ├── projectMemory.ts              # Estado inicial sincronizado con el contexto
    │   └── ProjectContext.tsx            # Provider y hook useProjectMemory
    │
    └── styles/                           # Configuración global de Tailwind
        ├── globals.css                   # Estilos base y tema mate puro
        └── index.css                     # Importador de estilos
```

---

## 🚀 Comandos Rápidos

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción (TypeScript + Vite)
npm run build

# Previsualizar build de producción
npm run preview
```
