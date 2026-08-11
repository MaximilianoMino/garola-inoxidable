// src/data/content.ts

// Imágenes de servicios
import dairyImage from "@assets/tina.webp";
import foodImage from "@assets/pasteurizador-calostro.webp";
import specialImage from "@assets/prensa.webp";

export const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "tambos", label: "Tambos y crianza" },
  { id: "lacteos", label: "Industria láctea" },
  { id: "alimenticia", label: "Industria alimenticia" },
  { id: "especiales", label: "Proyectos especiales" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

// ─── SERVICIOS / SECTORES ──────────────────────────────
export const SERVICES = [
  {
    id: "lacteos",
    title: "Industria láctea",
    description:
      "Equipamiento desarrollado para los procesos de elaboración y manejo de productos lácteos. Pasteurizadores, tinas queseras, prensas y más.",
    image: dairyImage,
    tags: ["Pasteurizadores", "Tinas", "Prensas"],
  },
  {
    id: "tambos",
    title: "Equipamiento para tambos",
    description:
      "Soluciones prácticas pensadas para el trabajo diario en el tambo. VitalMilk, DualTech, enfriadores y silos.",
    image: foodImage,
    tags: ["VitalMilk", "DualTech", "Enfriadores"],
  },
  {
    id: "alimenticia",
    title: "Industria alimenticia",
    description:
      "Fabricación de equipos en acero inoxidable para distintos procesos de la industria alimenticia, incluyendo chacinados, bebidas y cocinas industriales.",
    image: specialImage,
    tags: ["Túneles", "Fermentadores", "Cocinas"],
  },
  {
    id: "especiales",
    title: "Proyectos especiales",
    description:
      "Desarrollos específicos en acero inoxidable adaptados a necesidades particulares de cada cliente. Tanques, estructuras y desarrollos a medida.",
    image: specialImage,
    tags: ["Tanques", "Estructuras", "Arquitectura"],
  },
];
