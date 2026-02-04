import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from 'astro:assets';
import { ArrowLeft, ArrowRight, Factory, Tag } from 'lucide-react';

// Importar imágenes existentes para usarlas como productos destacados
import product1 from '@assets/photo-1558494949-ef010cbdcc31.jpg'; // Ejemplo de tanque/equipo
import product2 from '@assets/photo-1559839734-2b71ea197ec2.jpg'; // Ejemplo de equipo
import product3 from '@assets/photo-1565043589221-1a6fd9ae45c7.jpg'; // Ejemplo de equipo
import product4 from '@assets/photo-1558618666-fcd25c85cd64.jpg'; // Ejemplo de equipo
import product5 from '@assets/photo-1542838132-92c53300491e.jpg'; // Ejemplo de equipo
import product6 from '@assets/photo-1563013544-824ae1b704d3.jpg'; // Ejemplo de equipo

interface FeaturedProduct {
  id: number;
  title: string;
  category: string;
  image: any; // Astro asset type
}

const featuredProducts: FeaturedProduct[] = [
  { id: 1, title: "Tanque Vertical 5000L", category: "Lácteo", image: product1 },
  { id: 2, title: "Pasteurizador HTST", category: "Lácteo", image: product2 },
  { id: 3, title: "Fermentador 2000L", category: "Cervecería", image: product3 },
  { id: 4, title: "Intercambiador Placas", category: "Alimenticia", image: product4 },
  { id: 5, title: "Tolva de Recepción", category: "Trabajos Especiales", image: product5 },
  { id: 6, title: "Mesa de Trabajo Reforzada", category: "Trabajos Especiales", image: product6 },
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function ProductSlider() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;
    
    // Manejar el loop infinito
    if (newPage > featuredProducts.length - 1) {
      newPage = 0;
    } else if (newPage < 0) {
      newPage = featuredProducts.length - 1;
    }
    
    setPage([newPage, newDirection]);
  };

  const currentProduct = useMemo(() => featuredProducts[page], [page]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8 px-4 sm:px-0">
        <h3 className="text-3xl font-bold text-white uppercase tracking-tight">
          Catálogo <span className="text-red-600">Destacado</span>
        </h3>
        <a href="/products" className="text-sm font-semibold text-slate-400 hover:text-red-600 transition-colors flex items-center">
          VER TODO EL CATÁLOGO 
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      {/* Slider Container */}
      <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-2xl border border-slate-800 bg-[#1a1f24]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentProduct.id}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col lg:flex-row p-8"
          >
            {/* Imagen (Izquierda) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={currentProduct.image.src}
                  alt={currentProduct.title}
                  class="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Factory className="w-3 h-3" /> {currentProduct.category}
                </div>
              </div>
            </div>
            
            {/* Contenido (Derecha) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:pl-10 text-white">
              <Tag className="w-6 h-6 text-red-600 mb-2" />
              <h4 className="text-3xl font-bold mb-3 uppercase tracking-tight">{currentProduct.title}</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Este modelo destacado combina la robustez del acero inoxidable con las últimas tecnologías de fabricación. Perfecto para procesos de alta exigencia.
              </p>
              <div className='flex gap-3'>
                <a href='/rfq' className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded transition-colors uppercase">
                  Ver detalles
                </a>
                <div className='flex items-center text-sm text-slate-400'>
                    Producto {currentProduct.id} de {featuredProducts.length}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de Navegación */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-[#1a1f24] text-white hover:bg-red-600 transition-colors shadow-lg border border-slate-700"
          aria-label="Previous product"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-[#1a1f24] text-white hover:bg-red-600 transition-colors shadow-lg border border-slate-700"
          aria-label="Next product"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
