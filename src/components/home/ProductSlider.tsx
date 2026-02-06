import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PRODUCTS } from "@/data/content";

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % PRODUCTS.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + PRODUCTS.length) % PRODUCTS.length);

  // Calcular índice del siguiente producto para mostrar la previsualización
  const nextIndex = (current + 1) % PRODUCTS.length;

  return (
    <section
      id="products"
      className="py-24 bg-[#14171A] border-b border-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-6">
          <div className="border-l-4 border-red-600 pl-6">
            <span className="text-red-500 font-mono uppercase tracking-widest font-semibold text-sm">
              Nuestra Tecnología
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Catálogo <span className="text-red-600">Destacado</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              onClick={prev}
              className="p-4 border border-slate-700 text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all rounded-none"
              aria-label="Anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-4 border border-slate-700 text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all rounded-none"
              aria-label="Siguiente"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Área del Slider */}
        <div className="relative h-[550px] w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Producto Principal (2 columnas en desktop) */}
              <div className="md:col-span-2 relative overflow-hidden group border border-slate-800 bg-[#1a1f24]">
                <img
                  src={PRODUCTS[current].image.src}
                  alt={PRODUCTS[current].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Info del Producto Principal */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-white bg-red-600 font-bold uppercase tracking-widest">
                      {PRODUCTS[current].cat}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">
                      {PRODUCTS[current].title}
                    </h3>
                    <div className="h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out mb-6"></div>

                    <a
                      href="/products"
                      className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-mono uppercase tracking-widest text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    >
                      Ver Ficha Técnica <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Previsualización Siguiente Producto (1 columna, hidden en mobile si se desea, pero útil mostrarlo) */}
              <div
                className="hidden md:block relative overflow-hidden group border border-slate-800 cursor-pointer"
                onClick={next}
              >
                <img
                  src={PRODUCTS[nextIndex].image.src}
                  alt={PRODUCTS[nextIndex].title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 border-2 border-transparent group-hover:border-red-600/30 transition-colors m-4">
                  <span className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-2">
                    Siguiente
                  </span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                    {PRODUCTS[nextIndex].title}
                  </h4>
                  <div className="mt-4 w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores de progreso */}
        <div className="flex gap-2 mt-8 justify-center md:justify-start">
          {PRODUCTS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 transition-all duration-300 ${idx === current ? "w-12 bg-red-600" : "w-4 bg-slate-700"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
