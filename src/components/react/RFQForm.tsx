import { useState } from "react";
import * as Label from "@radix-ui/react-label";

export default function RFQForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // TODO: Integrar con EmailJS o backend
    console.log("Formulario enviado:", data);

    // Simular delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("¡Gracias por su consulta! Nos comunicaremos en menos de 24 horas.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <form
      className="space-y-8"
      id="rfq-form"
      onSubmit={handleSubmit}
      name="contacto-garola"
    >
      {/* Información Personal */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-tight border-b border-[#B9BAB6]/20 pb-3">
          Información de Contacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root
              htmlFor="nombre"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
            >
              Nombre <span className="text-[#F80000]">*</span>
            </Label.Root>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all"
              placeholder="Juan Pérez"
            />
          </div>

          <div>
            <Label.Root
              htmlFor="empresa"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
            >
              Empresa <span className="text-[#F80000]">*</span>
            </Label.Root>
            <input
              type="text"
              id="empresa"
              name="empresa"
              required
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all"
              placeholder="Lácteos del Sur S.A."
            />
          </div>

          <div>
            <Label.Root
              htmlFor="email"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
            >
              Email <span className="text-[#F80000]">*</span>
            </Label.Root>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all"
              placeholder="contacto@empresa.com"
            />
          </div>

          <div>
            <Label.Root
              htmlFor="telefono"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
            >
              Teléfono <span className="text-[#F80000]">*</span>
            </Label.Root>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              required
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all"
              placeholder="+54 9 3533 XX-XXXX"
            />
          </div>
        </div>
      </div>

      {/* Información del Proyecto */}
      <div className="pt-6 border-t border-[#B9BAB6]/20">
        <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-tight border-b border-[#B9BAB6]/20 pb-3">
          Detalles del Proyecto
        </h2>
        <div className="space-y-6">
          <div>
            <Label.Root
              htmlFor="sector"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
            >
              Sector Industrial <span className="text-[#F80000]">*</span>
            </Label.Root>
            <select
              id="sector"
              name="sector"
              required
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23B9BAB6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
            >
              <option value="">Seleccione un sector</option>
              <option value="lacteos">Industria Láctea</option>
              <option value="tambo">Tambo</option>
              <option value="alimenticia">Industria Alimenticia</option>
              <option value="cervecera">Cervecería / Bebidas</option>
              <option value="arquitectura">Arquitectura / Construcción</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <Label.Root
              htmlFor="producto"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
            >
              Producto de Interés
            </Label.Root>
            <select
              id="producto"
              name="producto"
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23B9BAB6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
            >
              <option value="">Seleccione un producto (opcional)</option>
              <option value="vitamilk">
                Vita Milk (Pasteurizador Guachera)
              </option>
              <option value="dualtech">
                Dualtech (Pasteurizador Calostro)
              </option>
              <option value="pasteurizador-htst">Pasteurizador HTST</option>
              <option value="enfriador">Enfriador de Placas</option>
              <option value="tanque">Tanque de Almacenamiento</option>
              <option value="mezclador">Mezclador Industrial</option>
              <option value="barandas">Barandas / Arquitectura</option>
              <option value="personalizado">Proyecto Personalizado</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label.Root
                htmlFor="capacidad"
                className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
              >
                Capacidad Estimada
              </Label.Root>
              <input
                type="text"
                id="capacidad"
                name="capacidad"
                className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all"
                placeholder="ej: 500 litros"
              />
            </div>

            <div>
              <Label.Root
                htmlFor="plazo"
                className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
              >
                Plazo de Implementación
              </Label.Root>
              <select
                id="plazo"
                name="plazo"
                className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23B9BAB6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="">Seleccione plazo</option>
                <option value="urgente">Urgente (menos de 1 mes)</option>
                <option value="1-3-meses">1-3 meses</option>
                <option value="3-6-meses">3-6 meses</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <Label.Root
              htmlFor="mensaje"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase tracking-wide"
            >
              Consulta / Requerimientos Específicos{" "}
              <span className="text-[#F80000]">*</span>
            </Label.Root>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={6}
              required
              placeholder="Describa sus necesidades específicas, requisitos técnicos, condiciones del proyecto o cualquier información relevante para su cotización..."
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded-lg text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] focus:border-transparent transition-all resize-none"
            />
          </div>
        </div>
      </div>

      {/* Botón de Envío */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#F80000] hover:bg-[#dc2626] disabled:bg-[#B9BAB6] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-[#F80000]/30 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center space-x-3"
        >
          <span>{isSubmitting ? "Enviando..." : "Solicitar Cotización"}</span>
          {!isSubmitting && (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          )}
        </button>
        <p className="text-xs text-[#B9BAB6] text-center mt-4">
          Nos comprometemos a responder en menos de 24 horas hábiles.
        </p>
      </div>
    </form>
  );
}
