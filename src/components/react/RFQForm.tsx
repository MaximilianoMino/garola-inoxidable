import { useState, useEffect } from "react";
import * as Label from "@radix-ui/react-label";

export default function RFQForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function isValidPhone(value: string): boolean {
    const normalized = value.replace(/[^\d+]/g, "");
    if (normalized.length === 0) return true;
    return /^\+?\d{8,15}$/.test(normalized);
  }

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const phone = ((formData.get("phone") as string) ?? "").trim();

    if (!phone) {
      setPhoneError("Este campo es obligatorio");
      return;
    }

    if (!isValidPhone(phone)) {
      setPhoneError("Ingresá un número válido (ej: +54 9 3533 45-7796)");
      return;
    }
    setPhoneError(null);

    setIsSubmitting(true);
    setToast(null);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: phone,
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setToast({ type: "error", message: data.error || "Error al enviar." });
      } else {
        setToast({
          type: "success",
          message: "¡Consulta enviada! Nos comunicamos en menos de 24hs.",
        });
        form.reset();
      }
    } catch (err) {
      setToast({ type: "error", message: "Error de conexión." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-24 right-6 z-50 flex items-center gap-0 overflow-hidden backdrop-blur-md shadow-xl transition-all animate-slideIn ${
            toast.type === "success"
              ? "bg-[#1a1f24]/90 text-green-400"
              : "bg-[#1a1f24]/90 text-red-400"
          }`}
        >
          <div
            className={`w-1 h-full min-h-[48px] ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
          ></div>
          <span className="text-sm font-medium px-4 py-3">{toast.message}</span>
        </div>
      )}

      <form
        className="space-y-8"
        id="rfq-form"
        onSubmit={handleSubmit}
        name="consulta-garola"
      >
        {/* Honeypot */}
        <div
          className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10"
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Header */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">
            Consulta comercial
          </h2>
          <p className="text-sm text-[#B9BAB6]">
            Complete el formulario y nuestro equipo se pondrá en contacto.
          </p>
        </div>

        {/* Nombre y Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root
              htmlFor="name"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase"
            >
              Nombre <span className="text-[#F80000]">*</span>
            </Label.Root>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Juan Pérez"
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000]"
            />
          </div>

          <div>
            <Label.Root
              htmlFor="company"
              className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase"
            >
              Empresa <span className="text-[#F80000]">*</span>
            </Label.Root>
            <input
              type="text"
              id="company"
              name="company"
              required
              placeholder="Empresa S.A."
              className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label.Root
            htmlFor="email"
            className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase"
          >
            Email <span className="text-[#F80000]">*</span>
          </Label.Root>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="contacto@empresa.com"
            className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000]"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <Label.Root
            htmlFor="phone"
            className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase"
          >
            WhatsApp <span className="text-[#F80000]">*</span>
          </Label.Root>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="+54 9 3533 45-7796"
            className={`w-full px-4 py-3 bg-[#14171A] border rounded text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] ${
              phoneError ? "border-red-500" : "border-[#B9BAB6]/30"
            }`}
            onChange={() => phoneError && setPhoneError(null)}
          />
          {phoneError && (
            <p className="text-red-500 text-xs mt-2">{phoneError}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <Label.Root
            htmlFor="message"
            className="block text-sm font-semibold text-[#F0ECEC] mb-2 uppercase"
          >
            Mensaje <span className="text-[#F80000]">*</span>
          </Label.Root>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Describa brevemente su consulta o necesidad."
            className="w-full px-4 py-3 bg-[#14171A] border border-[#B9BAB6]/30 rounded text-white placeholder-[#B9BAB6] focus:outline-none focus:ring-2 focus:ring-[#F80000] resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full lg:w-1/2 bg-[#F80000] hover:bg-[#dc2626] disabled:bg-[#B9BAB6]
                       text-white px-8 py-4 font-bold uppercase tracking-widest
                       shadow-lg transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar consulta"}
          </button>

          <p className="text-xs text-[#B9BAB6] text-center mt-4">
            Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </form>
    </>
  );
}
