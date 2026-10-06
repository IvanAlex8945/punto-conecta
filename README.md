# Punto Conecta — Hub Digital (Asunción Nochixtlán)

Landing Page & Hub Digital "Mobile-First" construida con **React**, **Tailwind CSS**, **Framer Motion** y **Lucide-React**. Diseñada bajo un estilo **Pure Matte Dark Mode** (sin resplandores, sin luces de neón, diseño vectorial plano y microinteracciones táctiles 3D fluidas).

---

## ⚡ Características Principales

1. **Memoria y Contexto a Largo Plazo:**
   - [`project-context.md`](file:///d:/punto-conecta/project-context.md): Documento maestro de reglas, rutas, paleta de colores y arquitectura.
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

---

## 📁 Estructura del Proyecto

```
punto-conecta/
├── project-context.md               # Memoria a largo plazo y arquitectura del agente
├── vercel.json                      # Configuración de despliegue en Vercel
├── package.json                     # Scripts y dependencias
├── tailwind.config.js               # Paleta matte pura y sombras sin glow
├── src/
│   ├── main.tsx                     # Entrypoint React
│   ├── App.tsx                      # Orquestador del Layout
│   ├── config/
│   │   └── siteConfig.ts            # Configuración de enlaces, CLABE y WhatsApp
│   ├── hooks/
│   │   └── usePaymentModal.ts       # [Skill]: Gestión del modal de pago
│   ├── components/
│   │   ├── hero/
│   │   │   └── WifiHeroCard.tsx     # Hero Starlink de alta velocidad
│   │   ├── modal/
│   │   │   └── PaymentModal.tsx     # Modal interactivo con pasos de pago
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx      # [Skill]: Tarjeta con microinteracción 3D
│   │   │   └── ServicesSection.tsx  # Separador y contenedor de servicios
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Barra superior con estado Starlink
│   │   │   └── Footer.tsx           # Footer oficial Nochixtlán
│   │   └── ui/
│   │       └── Icons.tsx            # Lucide y vectores optimizados
│   └── styles/
│       └── index.css                # Base Tailwind sin parpadeos táctiles
```
