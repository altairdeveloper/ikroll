import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { contactInfo, services, contactoFondoImage } from "@/lib/site-data";
import { PageHero } from "./servicios.index";

export const Route = createFileRoute("/contacto")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contacto | IKROL — Solicita tu cotización" },
      { name: "description", content: "Contáctanos por teléfono, email o WhatsApp. Solicita una cotización personalizada para tu operación de comercio exterior con IKROL." },
      { property: "og:title", content: "Contacto — IKROL" },
      { property: "og:description", content: "Solicita cotización o asesoría para tu operación logística." },
    ],
  }),
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  apellido: z.string().trim().min(2, "Ingresa tu apellido").max(80),
  email: z.string().trim().email("Email inválido").max(200),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  telefono: z.string().trim().max(30).optional().or(z.literal("")),
  servicio: z.string().trim().max(100).optional().or(z.literal("")),
  peso: z.string().trim().max(60).optional().or(z.literal("")),
  medidas: z.string().trim().max(120).optional().or(z.literal("")),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más").max(1500),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    // Compose WhatsApp fallback link
    const msg = `Hola IKROL, soy ${result.data.nombre} ${result.data.apellido} (${result.data.email}).\nServicio: ${result.data.servicio || "General"}\nPeso: ${result.data.peso || "N/D"}\nMedidas: ${result.data.medidas || "N/D"}\n\n${result.data.mensaje}`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={<>Un embarque. <span className="italic text-[#5cbdb9]">Un ejecutivo dedicado.</span></>}
        subtitle="Cuéntanos qué mueves. Un especialista de IKROL responderá con una propuesta técnica en menos de 24 horas."
      />

      <section className="relative overflow-hidden section-py">
        <img src={contactoFondoImage} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-[0.07]" />
        <div className="absolute inset-0 bg-[#0c2340]/88" />
        <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: Phone, label: "Teléfono", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g,"")}` },
              { icon: Mail, label: "Correo", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Chatea con un asesor", href: `https://wa.me/${contactInfo.whatsapp}` },
              { icon: MapPin, label: "Ubicación", value: contactInfo.address },
            ].map((c, i) => (
              <a key={c.label} href={c.href} className="bento-tile block p-6 group">
                <div className="flex items-start gap-5">
                  <span className="meta-mono w-6 shrink-0 pt-2">0{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="meta-mono">{c.label}</div>
                    <div className="mt-2 font-display italic text-2xl text-white group-hover:text-[#5cbdb9] transition-colors truncate">{c.value}</div>
                  </div>
                  <c.icon className="h-5 w-5 text-[#5cbdb9] shrink-0 mt-2" strokeWidth={1.5} />
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="bento-tile p-8 md:p-12">
              {sent ? (
                <div className="text-center py-16">
                  <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center bg-[#5cbdb9]">
                    <CheckCircle2 className="h-8 w-8 text-[#0c2340]" />
                  </div>
                  <h3 className="mt-8 font-display text-4xl italic text-white">¡Gracias por escribirnos!</h3>
                  <p className="mt-3 text-white/60 font-light">Te redirigimos a WhatsApp para completar la solicitud. Un especialista te responderá en breve.</p>
                  <button onClick={() => setSent(false)} className="btn-brand mt-8">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <span className="eyebrow">Formulario</span>
                  <div className="hairline" />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nombre" name="nombre" error={errors.nombre} required />
                    <Field label="Apellido" name="apellido" error={errors.apellido} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" error={errors.email} required />
                    <Field label="Teléfono" name="telefono" type="tel" error={errors.telefono} />
                  </div>
                  <Field label="Empresa" name="empresa" error={errors.empresa} />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Peso de la mercancía" name="peso" error={errors.peso} />
                    <Field label="Medidas de la mercancía" name="medidas" error={errors.medidas} />
                  </div>
                  <div>
                    <label className="meta-mono block mb-2">Servicio de interés</label>
                    <select name="servicio" className="w-full h-12 px-3 rounded-none bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#5cbdb9] font-light">
                      <option value="" className="bg-[#0c2340]">Selecciona un servicio</option>
                      {services.map((s) => <option key={s.slug} value={s.name} className="bg-[#0c2340]">{s.name}</option>)}
                      <option value="Otro" className="bg-[#0c2340]">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="meta-mono block mb-2">Descripción *</label>
                    <textarea name="mensaje" rows={4} required className="w-full px-0 py-2 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#5cbdb9] font-light resize-none" placeholder="Origen, destino, tipo de carga..." />
                    {errors.mensaje && <p className="mt-1 text-xs text-destructive">{errors.mensaje}</p>}
                  </div>
                  <button type="submit" className="btn-brand w-full mt-4">
                    Enviar solicitud <Send className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-white/40 text-center font-light">
                    Al enviar aceptas ser contactado por un asesor de IKROL.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error, required }: { label: string; name: string; type?: string; error?: string; required?: boolean }) {
  return (
    <div>
      <label className="meta-mono block mb-2">{label} {required && "*"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full h-12 px-0 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#5cbdb9] font-light"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

