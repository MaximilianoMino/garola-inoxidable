// src/data/content.ts

// Imágenes de productos
import product1 from "@assets/photo-1558494949-ef010cbdcc31.jpg";
import product2 from "@assets/photo-1559839734-2b71ea197ec2.jpg";
import product3 from "@assets/photo-1565043589221-1a6fd9ae45c7.jpg";
import product4 from "@assets/photo-1558618666-fcd25c85cd64.jpg";
import product5 from "@assets/photo-1542838132-92c53300491e.jpg";

// Imágenes de servicios
import dairyImage from "@assets/tina.jpeg";
import foodImage from "@assets/pasteurizador-calostro.jpeg";
import specialImage from "@assets/lavadora-baldes.jpeg";

export const PRODUCTS = [
  { id: 1, title: "Vita Milk 5000", cat: "Lácteos", image: product1 },
  { id: 2, title: "Tanque Fermentador", cat: "Industria", image: product2 },
  { id: 3, title: "Pasteurizador HTST", cat: "Procesos", image: product3 },
  { id: 4, title: "Silo Industrial", cat: "Gran Capacidad", image: product4 },
  { id: 5, title: "Cisterna Térmica", cat: "Transporte", image: product5 },
];

export const SERVICES = [
  {
    id: "dairy",
    title: "Lácteos",
    description:
      "Equipos de enfriamiento y almacenamiento de alta eficiencia. Máxima higiene y control térmico garantizado.",
    image: dairyImage,
    tags: ["Enfriadores", "Silos", "Pasteurizadores"],
  },
  {
    id: "food",
    title: "Tambo",
    description:
      "Soluciones de proceso sanitario para bebidas y alimentos. Cumplimiento de normativas internacionales.",
    image: foodImage,
    tags: ["Tanques", "Mezcladores", "Cañerías"],
  },
  {
    id: "special",
    title: "Trabajos Especiales",
    description:
      "Desarrollos a medida, arquitectura metálica y soluciones personalizadas para proyectos complejos.",
    image: specialImage,
    tags: ["Arquitectura", "Diseño a Medida", "Estructuras"],
  },
];
