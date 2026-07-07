import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { PageHero } from "./servicios.index";

export const Route = createFileRoute("/servicios/$slug")({
  // Return only the serializable slug — the Service object carries a Lucide
  // `icon` (a function component) that can't be serialized into the SSR
  // hydration payload, which crashes the router with "Invariant failed".
  // The full service is looked up from the static `services` array (available
  // on both server and client) wherever it's needed.
  loader: ({ params }): { slug: string } => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const service = services.find((s) => s.slug === loaderData.slug);
    if (!service) return {};
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
  const { slug } = Route.useLoaderData();
  const service = services.find((s) => s.slug === slug)!;
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Servicio" title={service.name} subtitle={service.intro} image={service.hero} />

      <section className="section-py container-page">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-[#5cbdb9]" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <span className="meta-mono">Alcance</span>
                <h2 className="mt-1 font-display text-3xl md:text-4xl italic text-white truncate">Qué incluye este servicio</h2>
              </div>
            </div>

            <ul className="border-t border-white/10">
              {service.features.map((f: string, i: number) => (
                <li key={f} className="grid grid-cols-[50px_minmax(0,1fr)] items-baseline gap-4 py-5 border-b border-white/10">
                  <span className="meta-mono">0{i + 1}</span>
                  <span className="text-white/85 font-light text-lg leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-20">
              <span className="eyebrow">Beneficios</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-white leading-[0.95]">
                Por qué elegir <span className="italic text-[#5cbdb9]">IKROL.</span>
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {service.benefits.map((b: { title: string; description: string }, i: number) => (
                <div key={b.title} className="bento-tile p-6 min-h-[220px] flex flex-col justify-between">
                  <span className="meta-mono">0{i + 1}</span>
                  <div>
                    <h3 className="font-display italic text-2xl text-white">{b.title}</h3>
                    <p className="mt-3 text-sm text-white/60 font-light leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 bento-tile p-8" style={{ background: "linear-gradient(160deg, #123054 0%, #0c2340 100%)" }}>
              <span className="eyebrow">Cotización</span>
              <h3 className="mt-4 font-display italic text-3xl text-white leading-tight">¿Listo para mover<br />este embarque?</h3>
              <p className="mt-4 text-sm text-white/60 font-light">
                Un especialista te contactará en menos de 24 horas con propuesta técnica y económica.
              </p>
              <Link to="/contacto" className="btn-brand mt-8 w-full">
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="hairline mt-10 mb-6" />
              <p className="meta-mono">Otros servicios</p>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to="/servicios/$slug" params={{ slug: o.slug }} className="flex items-center gap-3 text-white/70 hover:text-[#5cbdb9] transition-colors group">
                      <o.icon className="h-4 w-4 text-[#5cbdb9] shrink-0" strokeWidth={1.5} />
                      <span className="font-display italic text-lg">{o.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

