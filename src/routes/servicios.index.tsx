import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/servicios/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Servicios de logística internacional | IKROL" },
      { name: "description", content: "Conoce los servicios de IKROL: flete marítimo, aéreo, terrestre, carga sobredimensionada, despacho aduanal y seguro de mercancías." },
      { property: "og:title", content: "Servicios IKROL — Logística integral" },
      { property: "og:description", content: "Soluciones marítimas, aéreas, terrestres y de comercio exterior." },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones logísticas de extremo a extremo"
        subtitle="Un aliado estratégico que gestiona todos los eslabones de tu cadena de suministro: transporte multimodal, aduanas y aseguramiento."
      />

      <section className="section-py container-page">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicios/$slug"
              params={{ slug: s.slug }}
              className="card-elevated group overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={s.hero} alt={s.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.14 0.04 240 / 0.7), transparent 60%)" }} />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
                  <s.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold">{s.name}</h3>
                <p className="mt-3 text-muted-foreground flex-1">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-deep)" }}>
                  Ver detalle <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden -mt-20 pt-32 pb-20 md:pb-28">
      {image ? (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.14 0.04 240 / 0.9) 0%, oklch(0.14 0.04 240 / 0.65) 100%)" }} />
        </>
      ) : (
        <div className="absolute inset-0" style={{ background: "var(--gradient-navy)" }} />
      )}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--brand) 0%, transparent 40%)" }} />
      <div className="container-page relative z-10 pt-16">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">{eyebrow}</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-white/75 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
