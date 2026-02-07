import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section
      id="solutions"
      className="py-24 bg-dark relative border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:justify-between md:items-end border-l-4 border-red-600 pl-6">
          <div>
            <span className="text-red-500 font-mono uppercase tracking-widest font-semibold text-sm">
              Nuestras Divisiones
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 uppercase tracking-tight">
              Sectores Industriales
            </h2>
            <p className="mt-4 max-w-md text-slate-400 font-light leading-relaxed">
              Soluciones específicas según el tipo de industria.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="group relative h-[500px] border border-slate-800 bg-[#1a1f24] overflow-hidden rounded-xl shadow-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image.src}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-1 bg-red-600 mb-6 transition-all duration-500 group-hover:w-24"></div>

                  <h3 className="text-3xl font-bold text-white mb-3 uppercase leading-none tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 border border-red-900/50 px-2 py-1 bg-red-900/10 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/capabilities"
                    className="inline-flex items-center gap-2 text-white font-mono uppercase tracking-widest text-sm font-bold group/btn hover:text-red-500 transition-colors"
                  >
                    Ver Detalles
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
