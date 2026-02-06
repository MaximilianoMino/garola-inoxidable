import { motion } from "motion/react";
import { Target, Flag, CheckCircle } from "lucide-react";
import aboutImage from "@assets/about-us.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#14171A] relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-red-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-4 border-red-600 pl-6">
              <span className="text-red-500 font-mono uppercase tracking-widest font-semibold text-sm">
                Nuestra Esencia
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tight">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
                Innovación y precisión en cada proyecto desde 1998.
              </p>
            </div>

            <div className="pl-6">
              <h2 className="text-xl font-semibold text-slate-300 tracking-tight">
                Excelencia en ingeniería industrial
              </h2>
              <div className="mb-12 mt-2">
                <p className="text-md text-slate-400 font-regular mb-1 leading-relaxed">
                  Garola Inoxidable es una empresa argentina especializada en el
                  diseño, fabricación e instalación de equipamiento industrial
                  en acero inoxidable. Con más de 25 años de trayectoria, nos
                  consolidamos como referentes en la industria láctea, cervecera
                  y de bebidas.
                </p>
                <p className="text-md text-slate-400 font-regular mb-1 leading-relaxed">
                  Nuestro compromiso con la calidad se refleja en cada proyecto.
                  Utilizamos exclusivamente acero AISI 304 y 316, garantizando
                  durabilidad, higiene y cumplimiento de las normativas
                  internacionales más exigentes.
                </p>
                <p className="text-md text-slate-400 font-regular mb-1 leading-relaxed">
                  La incorporación de tecnología HMI en nuestros sistemas de
                  control nos posiciona a la vanguardia de la automatización
                  industrial, ofreciendo soluciones inteligentes que optimizan
                  procesos y reducen tiempos de operación.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-[#1a1f24] p-6 rounded-lg border-l-2 border-red-600 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Flag className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                    Misión
                  </h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Proveer soluciones industriales de máxima calidad técnica.
                </p>
              </div>
              <div className="bg-[#1a1f24] p-6 rounded-lg border-l-2 border-slate-600 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-slate-300" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                    Visión
                  </h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Ser líderes en innovación y tecnología industrial.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] border-2 border-slate-800 p-2 bg-[#1a1f24]/50"
          >
            {/* Decoración esquinas */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 -mt-1 -ml-1"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 -mb-1 -mr-1"></div>

            <img
              src={aboutImage.src}
              alt="Sobre Nosotros - Taller Garola"
              className="w-full h-full object-fit grayscale hover:grayscale-0 transition-all duration-700 filter brightness-90 contrast-125"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
