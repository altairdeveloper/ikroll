import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { contactInfo, services } from "@/lib/site-data";
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
    const msg = `Hola IKROL, soy ${result.data.nombre} ${result.data.apellido} (${result.data.email}).\nServicio: ${result.data.servicio || "General"}\n\n${result.data.mensaje}`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos listos para impulsar tu negocio"
        subtitle="Cuéntanos en qué servicio estás interesado y pronto nos pondremos en contacto contigo."
      />

      <section className="section-py container-page">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Teléfono", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g,"")}` },
              { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Chatea con un asesor", href: `https://wa.me/${contactInfo.whatsapp}` },
              { icon: MapPin, label: "Ubicación", value: contactInfo.address },
            ].map((c) => (
              <a key={c.label} href={c.href} className={`block p-6 rounded-2xl border bg-card ${c.href ? "hover:border-brand transition-colors" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                    <c.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
                    <div className="mt-1 font-semibold">{c.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border bg-card p-8 md:p-10 shadow-sm">
              {sent ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center" style={{ background: "var(--brand)" }}>
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">¡Gracias por contactarnos!</h3>
                  <p className="mt-2 text-muted-foreground">Te redirigimos a WhatsApp para completar tu solicitud. Un especialista responderá en breve.</p>
                  <button onClick={() => setSent(false)} className="btn-brand mt-6">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nombre" name="nombre" error={errors.nombre} required />
                    <Field label="Apellido" name="apellido" error={errors.apellido} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" error={errors.email} required />
                    <Field label="Teléfono" name="telefono" type="tel" error={errors.telefono} />
                  </div>
                  <Field label="Empresa" name="empresa" error={errors.empresa} />
                  <div>
                    <label className="text-sm font-medium">Servicio de interés</label>
                    <select name="servicio" className="mt-2 w-full h-11 px-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-brand">
                      <option value="">Selecciona un servicio</option>
                      {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Descripción del servicio *</label>
                    <textarea name="mensaje" rows={5} required className="mt-2 w-full px-3 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Cuéntanos sobre tu embarque, origen, destino, tipo de carga..." />
                    {errors.mensaje && <p className="mt-1 text-xs text-destructive">{errors.mensaje}</p>}
                  </div>
                  <button type="submit" className="btn-brand w-full">
                    Enviar solicitud <Send className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar aceptas ser contactado por un asesor de IKROL.
                  </p>
                </form>
              )}
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
      <label className="text-sm font-medium">{label} {required && "*"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full h-11 px-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-brand"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
