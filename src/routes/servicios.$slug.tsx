import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site-data";
import { PageHero } from "./servicios.index";

import type { Service } from "@/lib/site-data";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} | IKROL` },
        { name: "description", content: service.intro },
        { property: "og:title", content: `${service.name} — IKROL` },
        { property: "og:description", content: service.intro },
        { property: "og:image", content: service.hero },
        { property: "twitter:image", content: service.hero },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-bold">Servicio no encontrado</h1>
      <Link to="/servicios" className="btn-brand mt-6 inline-flex">Ver todos los servicios</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Servicio" title={service.name} subtitle={service.intro} image={service.hero} />

      <section className="section-py container-page">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Qué incluye este servicio</h2>
            </div>
            <ul className="space-y-4">
              {service.features.map((f: string) => (
                <li key={f} className="flex gap-4 p-5 rounded-xl bg-secondary/50 border">
                  <div className="h-6 w-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "var(--brand)" }}>
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 text-2xl md:text-3xl font-bold">Beneficios para tu operación</h2>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {service.benefits.map((b: { title: string; description: string }) => (
                <div key={b.title} className="p-6 rounded-xl border bg-card">
                  <div className="h-2 w-10 rounded-full mb-4" style={{ background: "var(--brand)" }} />
                  <h3 className="font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl p-8 text-white" style={{ background: "var(--gradient-navy)" }}>
              <h3 className="text-xl font-bold">¿Necesitas una cotización?</h3>
              <p className="mt-3 text-sm text-white/70">
                Cuéntanos los detalles de tu embarque y un especialista te contactará en menos de 24 horas.
              </p>
              <Link to="/contacto" className="btn-brand mt-6 w-full">
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-white/50 uppercase tracking-wider">Otros servicios</p>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link to="/servicios/$slug" params={{ slug: o.slug }} className="flex items-center gap-3 text-sm text-white/80 hover:text-brand">
                        <o.icon className="h-4 w-4 text-brand" />
                        {o.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
