// Site configuration
export const SITE = {
  title: "GAROLA INOXIDABLE",
  description:
    "Especialistas en el diseño, fabricación y mantenimiento de equipamiento industrial. Trabajamos bajo los más altos estándares de calidad con materiales certificados, brindando soluciones para la industria láctea, alimenticia y proyectos a medida.",
  url: "https://yourdomain.com",
  author: "GAROLA INOXIDABLE",
} as const;

export const NAVIGATION = [
  { name: "INICIO", href: "/" },
  { name: "SOBRE NOSOTROS", href: "/#about" },
  { name: "PRODUCTOS", href: "/#products" },
  { name: "SOLUCIONES", href: "/#solutions" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACTO", href: "/rfq" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/garola-inoxidable",
  instagram: "https://instagram.com/garolainox",
  facebook: "https://facebook.com/garolainox",
  whatsApp: "https://wa.me/5493533457796",
  maps: "https://goo.gl/maps/your-location",
  gmail: "mailto:info@garola-inox.com",
} as const;
