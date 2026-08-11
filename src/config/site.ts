// Site configuration
export const SITE = {
  title: "GAROLA INOXIDABLE",
  description:
    "Ingeniería, desarrollo y fabricación de equipamiento en acero inoxidable para la industria láctea y alimenticia. Más de 40 años de experiencia en el rubro respaldan cada desarrollo.",
  // TODO: Verificar dominio definitivo con el cliente
  url: "https://www.garolainoxidable.com.ar",
  author: "GAROLA INOXIDABLE",
} as const;

export const NAVIGATION = [
  { name: "INICIO", href: "/" },
  { name: "QUIÉNES SOMOS", href: "/nosotros" },
  { name: "SECTORES", href: "/#solutions" },
  { name: "PRODUCTOS", href: "/#products" },
  { name: "BLOG", href: "/blog" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/garolainoxidablelv/?hl=es-la",
  facebook: "https://www.facebook.com/Garolainoxidables/",
  whatsApp: "https://wa.me/5493533683977",
  maps: "https://maps.app.goo.gl/o6YurUGP8q3QVWad6",
  gmail: "mailto:garolainoxidable@gmail.com",
} as const;
