# README.md - Landing Garola Inoxidable

## 📋 Índice

- [Resumen del Proyecto](#resumen-del-proyecto)
- [Estado Actual](#estado-actual)
- [Información del Cliente](#información-del-cliente)
- [Especificaciones de Diseño](#especificaciones-de-diseño)
- [Estructura de la Landing](#estructura-de-la-landing)
- [Cambios Solicitados](#cambios-solicitados)
- [Workflow de Desarrollo](#workflow-de-desarrollo)
- [Assets y Recursos](#assets-y-recursos)
- [Stack Técnico](#stack-técnico)
- [Deploy](#deploy)
- [Próximos Pasos](#próximos-pasos)

---

## 🎯 Resumen del Proyecto

**Cliente:** Garola Inoxidable  
**Tipo:** Landing page corporativa  
**Industria:** Fabricación de equipamiento industrial en acero inoxidable  
**Mercado:** B2B (industria láctea, tambos, alimenticia)  
**Objetivo:** Presentación institucional + catálogo de productos + generación de leads

**Decisión de diseño aprobada:** Opción 3 (fondo oscuro, estética tecnológica/industrial)

---

## 📊 Estado Actual

### ✅ Completado

- [x] Análisis de briefing
- [x] Revisión de manual de marca
- [x] Análisis de referencias (Famiq, Bauducco)
- [x] Definición de estructura de secciones
- [x] Feedback del cliente recibido
- [x] Estrategia de desarrollo definida

### 🔄 En Proceso

- [ ] Wireframe final actualizado con cambios del cliente
- [ ] Validación del wireframe por parte del cliente

### ⏳ Pendiente

- [ ] Diseño visual en Figma
- [ ] Desarrollo frontend
- [ ] Integración de funcionalidades
- [ ] Deploy a producción

**Timeline estimado:** 8-11 días hábiles desde aprobación de wireframe

---

## 👤 Información del Cliente

### Datos de Contacto

- **Empresa:** Garola Inoxidable
- **Email:** garolainoxidable@hotmail.com
- **Teléfono:** +54 9 3533 45-7796
- **Ubicación:** Chacabuco 486, Las Varillas, Córdoba, Argentina
- **Instagram:** @garolainoxidablelv
- **Dominio:** garolainoxidable.com.ar

### Redes Sociales (pendiente obtener URLs completas)

- [ ] Facebook
- [ ] Instagram: @garolainoxidablelv
- [ ] Google Maps
- [ ] Gmail: garolainoxidable@hotmail.com

### Perfil de Negocio

**Misión:**  
Desarrollar y ofrecer soluciones en acero inoxidable para la industria alimenticia, láctea y cervecera que sean innovadoras, seguras y sostenibles, concebidas bajo criterios de simplicidad, robustez y funcionalidad.

**Visión:**  
Ser reconocidos como un referente nacional e internacional en el desarrollo de tecnologías y soluciones en acero inoxidable para la industria alimenticia, láctea y cervecera.

**Valores:**

- Funcionalidad real
- Simplicidad y robustez
- Innovación con criterio
- Calidad y seguridad
- Compromiso con personas, animales y ambiente
- Relación de cooperación
- Mejora continua

---

## 🎨 Especificaciones de Diseño

### Identidad Visual

**Paleta de Colores:**

```
Primary Red:    #F80000
Dark Gray:      #323031
Light Beige:    #F0ECEC
Secondary Blue: #333C4D
Secondary Green:#074434
Neutral Gray:   #B9BAB6
```

**Tipografías:**

- **Títulos:** Hussar Bold
- **Subtítulos:** Open Sans
- **Cuerpo:** Lato

**Iconografía:** Iconos sólidos, estilo industrial

**Estilo Fotográfico:**

- Reflejos y degradados metalizados
- Fotos de equipamiento industrial
- Alta calidad, profesionales

**Personalidad de Marca (escala 1-5):**

- Geométrico: 5/5 (líneas rectas, orden)
- Sobrio: 5/5 (tonos oscuros, calma)
- Tecnológico: 5/5 (limpio, futurista)
- Exclusivo: 5/5 (premium, nicho)

### Animaciones y Efectos

- Zoom en imágenes al hover
- Transiciones suaves entre secciones
- Menús desplegables
- Overlay gradiente en cards
- Efectos metalizados en bordes

---

## 🏗️ Estructura de la Landing

### Secciones (en orden)

#### 1. **Hero**

```
- Logo Garola (SVG)
- Certificaciones arriba derecha: AISI 304/316BL | ISO 9001:2015
- Texto principal: "Especialistas en el diseño, fabricación y
  mantenimiento de equipamiento industrial. Trabajamos bajo los
  más altos estándares de calidad con materiales certificados,
  brindando soluciones para la industria láctea, alimenticia y
  proyectos a medida."
- CTA primario: [NUESTROS PRODUCTOS →] (rojo #F80000)
- CTA secundario: [CONTACTANOS] (outline blanco)
- Fondo: Foto equipamiento industrial + overlay oscuro 80%
```

#### 2. **Sectores Industriales**

```
3 Cards (horizontal en desktop, vertical en mobile):

Card 1 - LÁCTEOS:
- Pasteurizadores VitaMilk
- Tanques de proceso
- Enfriadores
[VER PRODUCTOS →]

Card 2 - TAMBO:
- Sistemas Dualtech
- Equipos de ordeño
- Refrigeración
[VER PRODUCTOS →]

Card 3 - TRABAJOS ESPECIALES:
- Arquitectura
- Barandas inoxidables
- Proyectos a medida
[CONSULTAR →]
```

#### 3. **Tablero de Control Inteligente** (Fondo oscuro #323031)

```
Layout 2 columnas (60/40):

Izquierda:
- Tag rojo: "TECNOLOGÍA 4.0"
- Título: "TABLERO DE CONTROL INTELIGENTE"
- Features con iconos:
  ⟲ AUTO-RESET INTELIGENTE
  ⏰ AUTOARRANQUE PROGRAMABLE
  ⚡ EFICIENCIA ENERGÉTICA
  🔐 INTERFAZ INTUITIVA
- [CONTACTAR] (botón rojo)

Derecha:
- Mockup tablero HMI (foto real)
- Stats flotantes:
  24/7 | Operación continua
  ±0.1°C | Precisión térmica
  IP65 | Protección industrial
```

#### 4. **Catálogo Destacado**

```
Carousel/Galería rotativa:
- 8 productos
- Auto-scroll cada 5 segundos
- Navegación manual (flechas + dots)
- 3 visibles en desktop, 1 en mobile

Productos:
1. VITA MILK 500L
2. DUALTECH CALOSTRO
3. PASTEURIZADOR HTST
4. ENFRIADOR DE PLACAS
5. TANQUE FERMENTADOR
6. MEZCLADOR INDUSTRIAL
7. SILO ALMACENAMIENTO
8. LAVADORA DE BALDES

Cada card:
- Foto producto
- Categoría (LÁCTEOS | TAMBO | ESPECIAL)
- Nombre
- Capacidad/specs
- [Ver ficha técnica →]
```

#### 5. **Sobre Nosotros**

```
Layout 2 columnas (50/50):

Izquierda: Foto taller/planta

Derecha:
- Tag: "INGENIERÍA INDUSTRIAL"
- Secciones:
  • Sobre Nosotros (párrafo intro)
  • Misión
  • Visión
- Stats: 25+ años | ISO 9001 | 100% nacional
- [CONOCER MÁS →]
```

#### 6. **Blog Técnico**

```
Grid 3 posts:
- Imagen destacada
- Categoría (MANTENIMIENTO | INNOVACIÓN | GUÍA)
- Fecha
- Título
- Extracto
- [Leer más →]

[VER TODO EL BLOG →]
```

#### 7. **FAQ**

```
Accordion con 5 preguntas:
1. ¿Qué materiales utilizan?
2. ¿Hacen proyectos a medida?
3. ¿Cuál es el tiempo de entrega?
4. ¿Ofrecen servicio de mantenimiento?
5. ¿Trabajan en todo el país?
```

#### 8. **Contacto**

```
Layout 2 columnas:

Izquierda (fondo rojo):
- Logo blanco
- Datos de contacto
- Horarios
- Mapa Google Maps (embed)

Derecha (formulario):
- Nombre
- Email
- Teléfono
- Mensaje
[ENVIAR CONSULTA]
```

#### 9. **Footer** (Fondo oscuro #323031)

```
3 columnas:

GAROLA INOXIDABLE
- Dirección
- Teléfono
- Email
- Redes: Facebook | Instagram | Maps | Gmail

NAVEGACIÓN
- Inicio
- Productos
- Sobre Nosotros
- Blog
- Contacto

PRODUCTOS
- Lácteos
- Tambo
- Trabajos Especiales

Copyright: "© 2026 GAROLA INOXIDABLE - Todos los derechos reservados"
```

#### 10. **Botón Flotante WhatsApp**

```
- Posición: fixed bottom-right
- Número: +54 9 3533 45-7796
- Mensaje predefinido: "Hola, necesito información sobre..."
- Icono verde #25D366
- Pulse animation
- Tooltip: "Consultanos por WhatsApp"
```

---

## 📝 Cambios Solicitados (Último Feedback del Cliente)

### Modificaciones

1. ✅ **Hero:** Logo SVG en vez de texto "GAROLA INOXIDABLE"
2. ✅ **Hero:** Nuevo copy largo (proporcionado por cliente)
3. ✅ **Sectores:** Eliminar "Cervezas/Bebidas" → Solo Lácteos | Tambo | Trabajos Especiales
4. ✅ **Tablero:** Cambiar botón "Descargar ficha técnica" → "Contactar"
5. ✅ **Catálogo:** Cambiar grid estático → Carousel/galería rotativa con más imágenes
6. ✅ **Footer:** Cambiar "GAROLAINOX" → "GAROLA INOXIDABLE"

### Adiciones

7. ✅ **Global:** Botón flotante WhatsApp (+54 9 3533 45-7796)
8. ✅ **Sobre Nosotros:** Agregar secciones Misión + Visión (copiar de opción 2)
9. ✅ **Blog:** Agregar página/sección de blog técnico
10. ✅ **Footer:** Agregar iconos Facebook, Instagram, Google Maps, Gmail

---

## 🔄 Workflow de Desarrollo

### Fase 1: Diseño y Validación (2-3 días)

```
☐ Actualizar wireframe Figma con 9 cambios
☐ Exportar wireframe v2 a PDF
☐ Enviar email de validación al cliente
☐ Esperar aprobación (24-48hs)
```

### Fase 2: Assets y Contenido (1 día)

```
☐ Solicitar logo SVG al cliente
☐ Organizar fotos productos del Drive
☐ Seleccionar 8 fotos para carousel
☐ Optimizar imágenes para web (WebP)
☐ Obtener links redes sociales completos
```

### Fase 3: Desarrollo Frontend (5-6 días)

```
☐ Setup proyecto (Next.js 14 + Tailwind)
☐ Configurar colores y tipografías
☐ Desarrollar Hero
☐ Desarrollar Sectores Industriales
☐ Desarrollar Tablero de Control
☐ Desarrollar Carousel de productos
☐ Desarrollar Sobre Nosotros
☐ Desarrollar Blog
☐ Desarrollar FAQ
☐ Desarrollar Formulario de Contacto
☐ Desarrollar Footer
☐ Implementar botón flotante WhatsApp
☐ Responsive mobile/tablet
☐ Animaciones y transiciones
☐ Testing cross-browser
```

### Fase 4: Integración y Deploy (1-2 días)

```
☐ Configurar formulario de contacto (EmailJS/Formspree)
☐ Conectar WhatsApp con mensaje predefinido
☐ Setup dominio garolainoxidable.com.ar
☐ Deploy a Vercel
☐ Testing en producción
☐ Optimización de performance
```

### Fase 5: Entrega Final

```
☐ Preparar documentación para cliente
☐ Video walkthrough del sitio
☐ Enviar entrega final con accesos
☐ Primera ronda de ajustes
```

---

## 📦 Assets y Recursos

### Documentos Proporcionados

La documentación del proyecto vive en `docs/` (ver `docs/README.md`):

```
/docs
  ├── README.md              ← índice
  ├── proyecto/              ← este documento + guía del cliente
  ├── disenos/               ← diseños/wireframes (PNG)
  ├── fichas-tecnicas/       ← copias de referencia de los PDFs de productos
  └── referencias/
      ├── Manual de Identidad Visual GI.pdf   (PENDIENTE)
      ├── briefing web_ garola inoxidables.pdf (PENDIENTE)
      ├── Dualtech Electrico.pdf
      ├── Tablero inteligente.pdf
      ├── vital milk Estandar Electrico.pdf
      ├── vital milk Estandar GAS.pdf
      ├── vital milk Premium Electrico.pdf
      └── vital milk Premium GAS.pdf
```

> Nota: las fichas técnicas servidas en la web están en `public/fichas_tecnicas/` y NO deben moverse (las URLs de Contentful apuntan ahí).

### Estructura de Assets Necesaria

```
/assets
  /brand
    ├── logo-garola.svg (PENDIENTE)
    ├── logo-garola-white.svg (PENDIENTE)
    └── manual-marca.pdf (✓)

  /images
    /productos
      /lacteos
        ├── vitamilk-300.jpg
        ├── vitamilk-500.jpg
        ├── vitamilk-1000.jpg
        └── ...
      /tambo
        ├── dualtech.jpg
        └── ...
      /especiales
        ├── barandas.jpg
        └── ...
    /general
      ├── hero-background.jpg
      ├── taller.jpg
      └── ...
    /tablero
      └── hmi-control.jpg

  /icons
    └── (iconos sólidos industriales)
```

### Fotos Requeridas

**Mínimo necesario:**

- 1 foto hero (equipamiento industrial)
- 3 fotos sectores (lácteos, tambo, especiales)
- 1 foto tablero HMI
- 8 fotos productos para carousel
- 1 foto taller/planta (sobre nosotros)
- 3 fotos blog (placeholder)

**Estado:** PENDIENTE organizar desde Drive del cliente

---

## 🛠️ Stack Técnico

### Frontend

```
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
Animaciones: Framer Motion
Carousel: Embla Carousel / Swiper.js
Forms: React Hook Form
Icons: Lucide React
```

### Backend/Servicios

```
Formulario: EmailJS o Formspree
Analytics: Google Analytics (opcional)
Hosting: Vercel
Dominio: garolainoxidable.com.ar
```

### Dependencias Principales

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "embla-carousel-react": "^8.0.0",
    "react-hook-form": "^7.49.0",
    "lucide-react": "^0.300.0"
  }
}
```

### Configuración Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        garola: {
          red: "#F80000",
          dark: "#323031",
          light: "#F0ECEC",
          "secondary-blue": "#333C4D",
          "secondary-green": "#074434",
          gray: "#B9BAB6",
        },
      },
      fontFamily: {
        hussar: ["Hussar Bold", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
};
```

---

## 🚀 Deploy

### Configuración Vercel

```bash
# 1. Conectar repo GitHub
# 2. Configurar proyecto:
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install

# 3. Variables de entorno:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxx
NEXT_PUBLIC_EMAILJS_USER_ID=xxx
```

### Dominio

```
Dominio principal: garolainoxidable.com.ar
DNS: Configurar A records en proveedor del dominio
SSL: Automático via Vercel
```

### Performance Target

```
Lighthouse Scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95
```

---

## 📋 Próximos Pasos

### Inmediato (Esta semana)

1. [ ] Actualizar wireframe Figma con cambios del cliente
2. [ ] Enviar wireframe v2 para validación
3. [ ] Solicitar logo SVG y fotos faltantes
4. [ ] Obtener URLs completas de redes sociales

### Corto Plazo (Próxima semana)

5. [ ] Recibir aprobación del wireframe
6. [ ] Comenzar desarrollo con OpenCode.ai o manualmente
7. [ ] Primera versión funcionando en local

### Mediano Plazo (2 semanas)

8. [ ] Deploy a staging para revisión del cliente
9. [ ] Ajustes según feedback
10. [ ] Deploy a producción
11. [ ] Capacitación al cliente (si es necesario)

## 📌 Notas Importantes

### Decisiones de Diseño Clave

1. **Fondo oscuro elegido** porque transmite tecnología y premium (opción 3)
2. **Tablero de Control como hero secundario** porque es el diferencial técnico
3. **Carousel en lugar de grid** para mostrar más productos sin saturar
4. **WhatsApp flotante** porque el cliente quiere contacto directo e inmediato

### Consideraciones Técnicas

- **No usar localStorage/sessionStorage** en artifacts (restricción de Claude.ai)
- **Todas las fotos deben optimizarse** a WebP antes de subir
- **El carousel debe ser accesible** (teclado + screen readers)
- **Formulario debe tener validación** client-side y server-side

### Riesgos Identificados

⚠️ **Fotos de productos:** Cliente aún no proporcionó todas las necesarias  
⚠️ **Logo SVG:** Pendiente de recibir del cliente  
⚠️ **URLs redes sociales:** Faltan links completos de Facebook y Maps  
⚠️ **Timeline apretado:** Cliente puede solicitar cambios que retrasen entrega

---

## 📄 Historial de Cambios

### v0.1 - 2026-02-04

- README inicial creado
- Documentación de estructura completa
- Registro de feedback del cliente
- Definición de workflow

---

**Última actualización:** 04 de Febrero, 2026  
**Estado del proyecto:** En fase de diseño (wireframe)  
**Próximo hito:** Aprobación de wireframe por cliente
