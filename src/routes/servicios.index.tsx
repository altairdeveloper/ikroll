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
        eyebrow="Índice de servicios"
        title={<>Seis líneas.<br /><span className="italic text-[#5cbdb9]">Una operación.</span></>}
        subtitle="Un aliado estratégico que gestiona cada eslabón de la cadena: transporte multimodal, aduanas y aseguramiento de mercancías."
      />

      <section className="section-py container-page">
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/servicios/$slug"
              params={{ slug: s.slug }}
              className="bento-tile group overflow-hidden flex flex-col min-h-[420px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={s.hero} alt={s.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340] via-[#0c2340]/50 to-transparent" />
                <span className="absolute top-5 left-6 meta-mono">0{i + 1}</span>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/25 backdrop-blur flex items-center justify-center">
                  <s.icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-4xl md:text-5xl italic text-white leading-[0.95] group-hover:text-[#5cbdb9] transition-colors">
                  {s.name}
                </h3>
                <p className="mt-4 text-white/65 flex-1 font-light">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#5cbdb9]">
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

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: React.ReactNode; subtitle?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24 border-b border-white/5">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c2340]/70 via-[#0c2340]/85 to-[#0c2340]" />
        </>
      )}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#5cbdb9] opacity-10 blur-[160px]" />
      <div className="container-page relative z-10">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 font-display text-white text-5xl md:text-8xl leading-[0.9] max-w-4xl tracking-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}

