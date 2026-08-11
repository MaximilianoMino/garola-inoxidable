import { motion } from "motion/react";
import Board from "@assets/tablero_inteligente.webp";

interface Technology {
  title: string;
  description: string;
  iconGradient: string;
  iconPath: string;
}

const technologies: Technology[] = [
  {
    title: "AUTO-RESET ANTE CORTES DE ENERGÍA",
    description:
      "Ante una interrupción eléctrica, el sistema retoma automáticamente el proceso sin perder el ciclo en curso.",
    iconGradient: "from-red-600 to-red-700",
    iconPath:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "PROGRAMACIÓN AUTOMÁTICA",
    description:
      "Inicio programable por días y horarios definidos, reduciendo la intervención operativa.",
    iconGradient: "from-zinc-800 to-zinc-900",
    iconPath: "M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z",
  },
  {
    title: "SEGURIDAD DE CONFIGURACIÓN",
    description:
      "Acceso protegido mediante clave para resguardar parámetros críticos del proceso.",
    iconGradient: "from-red-600 to-red-700",
    iconPath:
      "M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM5 21v-2a7 7 0 0114 0v2",
  },
  {
    title: "CONTROL TOTAL DEL PROCESO",
    description:
      "Configuración precisa de temperaturas, tiempos y alarmas para asegurar un tratamiento térmico confiable.",
    iconGradient: "from-zinc-800 to-zinc-900",
    iconPath:
      "M12 8c-2.21 0-4 1.79-4 4m8 0a4 4 0 00-4-4m0 8v4m0-4a4 4 0 004-4m-8 0a4 4 0 004 4",
  },
  {
    title: "EXPORTACIÓN DE DATOS",
    description:
      "Registro y exportación vía USB para control de calidad, trazabilidad y auditorías.",
    iconGradient: "from-red-600 to-red-700",
    iconPath: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-3-3m3 3l3-3",
  },
];

export default function TechnologyInnovation() {
  return (
    <section className="py-24 bg-[#14171A] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-yellow-400 uppercase tracking-widest"
            >
              🏅 Sello de Buen Diseño Argentino
            </motion.span>

            <div className="border-l-4 border-red-600 pl-6 mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
              >
                Tablero <span className="text-red-600">inteligente</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-tight"
            >
              El cerebro del pasteurizador.<br />
              Diseñado para garantizar continuidad operativa, seguridad y trazabilidad
              en cada ciclo.
            </motion.p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-start group"
                >
                  <div
                    className={`shrink-0 w-12 h-12 rounded-lg bg-linear-to-br ${tech.iconGradient} flex items-center justify-center mr-4 transition-transform group-hover:scale-110 shadow-lg`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={tech.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <a
                href="/rfq"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all uppercase tracking-widest group"
              >
                Consultar por el tablero
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded overflow-hidden shadow-2xl border border-slate-700">
              <img
                src={Board.src}
                alt="Tablero de control industrial Garola"
                width={Board.width}
                height={Board.height}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-black/40 to-black/30" />

              {/* Image label */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-4 py-2 rounded-lg text-sm text-white font-semibold uppercase tracking-wide">
                Tablero inteligente Garola
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
