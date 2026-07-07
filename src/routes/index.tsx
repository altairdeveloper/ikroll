import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Ship, Plane, Truck, Package, FileCheck2, ShieldCheck, Anchor, Globe2 } from "lucide-react";
import { services, heroImage, maritimoImage, aereoImage, terrestreImage, contactInfo, coverage } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "IKROL — Logística internacional editorial | Marítimo, aéreo, terrestre" },
      { name: "description", content: "IKROL. Más de 20 años moviendo comercio exterior mexicano por mar, aire y tierra. Despacho aduanal, carga sobredimensionada y seguros integrales." },
      { property: "og:title", content: "IKROL — Moviendo el mundo, sin costuras" },
      { property: "og:description", content: "Logística multimodal premium desde México hacia el mundo." },
      { property: "og:image", content: heroImage },
      { property: "twitter:image", content: heroImage },
    ],
  }),
});

const serviceIcons: Record<string, typeof Ship> = {
  "flete-maritimo": Ship,
  "flete-aereo": Plane,
  "transporte-terrestre": Truck,
  "carga-sobredimensionada": Package,
  "despacho-aduanal": FileCheck2,
  "seguro-de-mercancias": ShieldCheck,
};

function HomePage() {
  const [maritimo, aereo, terrestre, sobredim, aduanal, seguros] = services;

  return (
    <>
      {/* ─────────── HERO BENTO ─────────── */}
      <section className="container-page pt-10 md:pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">

          {/* HERO — 8x2 */}
          <div className="md:col-span-8 md:row-span-2 bento-tile p-8 md:p-14 flex flex-col justify-between min-h-[520px] animate-fade-up">
            <div className="relative z-10">
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5cbdb9]" />
                Logística Internacional · Est. México
              </span>
              <h1 className="mt-8 text-[3.4rem] sm:text-7xl md:text-[7.5rem] font-display leading-[0.88] tracking-tight text-white">
                Moviendo el mundo<br />
                <span className="italic text-[#5cbdb9]">sin costuras.</span>
              </h1>
            </div>
            <div className="relative z-10 mt-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p className="max-w-sm text-base md:text-lg font-light text-white/75 leading-relaxed">
                Puerta de entrada mexicana para carga marítima, aérea y terrestre. Un solo aliado para toda tu cadena de suministro global.
              </p>
              <Link to="/contacto" className="btn-brand w-fit">
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#2d8a9e] opacity-30 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>

          {/* MARITIMO — 4x1 */}
          <ServiceTile
            slug={maritimo.slug}
            name={maritimo.name}
            desc="Contenedor completo, LCL y carga refrigerada por los principales puertos del mundo."
            index="01"
            icon={Ship}
            tone="tide-soft"
          />

          {/* AEREO — 4x1 */}
          <ServiceTile
            slug={aereo.slug}
            name={aereo.name}
            desc="Salidas frecuentes para carga urgente, perecedera y de alto valor."
            index="02"
            icon={Plane}
            tone="ink"
          />

          {/* SOBREDIMENSIONADA — 5 wide, image + stats */}
          <div className="md:col-span-5 bento-tile min-h-[280px] p-8 flex flex-col justify-between text-[#0c2340]" style={{ background: "#f5f3ee" }}>
            <div className="flex items-start justify-between">
              <span className="meta-mono" style={{ color: "#0c2340", opacity: 0.5 }}>04 / Project Cargo</span>
              <Link to="/servicios/$slug" params={{ slug: sobredim.slug }} className="opacity-60 hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
            <h3 className="font-display text-4xl md:text-5xl leading-[0.95] italic">
              Carga sobre-<br />dimensionada
            </h3>
            <div className="flex items-center gap-8">
              <div>
                <p className="font-display text-3xl">32</p>
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mt-1">Estados MX</p>
              </div>
              <div className="h-8 w-px bg-[#0c2340]/15" />
              <div>
                <p className="font-display text-3xl">24/7</p>
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mt-1">Monitoreo</p>
              </div>
              <div className="h-8 w-px bg-[#0c2340]/15" />
              <div>
                <p className="font-display text-3xl">20+</p>
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mt-1">Años</p>
              </div>
            </div>
          </div>

          {/* SEGUROS / ADUANAL — 4 wide brand */}
          <Link to="/servicios/$slug" params={{ slug: aduanal.slug }} className="md:col-span-4 bento-tile p-8 min-h-[280px] flex flex-col justify-between text-[#0c2340] group" style={{ background: "#5cbdb9", borderColor: "transparent" }}>
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold">Cobertura Total</p>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="font-display text-4xl md:text-5xl leading-[0.95]">
                Despacho aduanal<br /><span className="italic">& seguros.</span>
              </h3>
              <div className="mt-6 flex -space-x-2">
                {[0.15, 0.28, 0.42, 0.56].map((o, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#5cbdb9]" style={{ background: `rgba(12,35,64,${o})` }} />
                ))}
              </div>
            </div>
          </Link>

          {/* IKROL BRAND MARK — 3 wide */}
          <div className="md:col-span-3 bento-tile p-8 min-h-[240px] flex flex-col items-center justify-center text-center">
            <Anchor className="h-6 w-6 text-[#5cbdb9] mb-3" strokeWidth={1.2} />
            <div className="font-display text-5xl italic tracking-tighter text-white">IKROL</div>
            <div className="meta-mono mt-2">Logistics Group</div>
            <div className="hairline my-5" />
            <p className="text-xs font-light italic text-white/50">Creando conexiones globales</p>
          </div>

          {/* GROUND — 5 wide with image */}
          <Link to="/servicios/$slug" params={{ slug: terrestre.slug }} className="md:col-span-5 bento-tile min-h-[240px] group relative overflow-hidden">
            <img src={terrestreImage} alt="Transporte terrestre IKROL" className="absolute inset-0 h-full w-full object-cover grayscale opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340] via-[#0c2340]/70 to-transparent" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="meta-mono">03 / Ground Fleet</span>
                <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center">
                  <Truck className="h-4 w-4 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-4xl italic text-white leading-[0.95]">Transporte terrestre</h3>
                <p className="text-sm text-white/70 mt-2 max-w-xs">Cross-border MX · US · CA con seguimiento GPS 24/7 en los 32 estados.</p>
              </div>
            </div>
          </Link>

          {/* SEGUROS small */}
          <Link to="/servicios/$slug" params={{ slug: seguros.slug }} className="md:col-span-4 bento-tile p-8 min-h-[240px] flex flex-col justify-between group hover:bg-[rgba(45,138,158,0.25)]">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <ShieldCheck className="h-4 w-4 text-[#5cbdb9]" strokeWidth={1.5} />
              </div>
              <span className="meta-mono">06</span>
            </div>
            <div>
              <h3 className="font-display text-3xl italic text-white group-hover:text-[#5cbdb9] transition-colors">Seguro de mercancías</h3>
              <p className="text-sm text-white/60 mt-2">Pólizas ICC A · B · C con aseguradoras de primer nivel.</p>
            </div>
          </Link>

        </div>
      </section>

      {/* ─────────── PORT / TRUST STRIP ─────────── */}
      <section className="border-y border-white/5 py-8 overflow-hidden">
        <div className="container-page flex items-center gap-6 mb-6">
          <span className="meta-mono shrink-0">Corredores activos</span>
          <div className="hairline" />
        </div>
        <div className="flex gap-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-12 shrink-0 animate-marquee whitespace-nowrap">
            {[...coverage.puertos, ...coverage.fronteras, ...coverage.aeropuertos, ...coverage.puertos, ...coverage.fronteras, ...coverage.aeropuertos].map((p, i) => (
              <span key={i} className="font-display text-3xl italic text-white/40 hover:text-white/80 transition-colors">
                {p} <span className="text-[#5cbdb9] not-italic mx-3">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SPLIT MANIFESTO ─────────── */}
      <section className="section-py container-page">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <span className="eyebrow">Quiénes somos</span>
            <div className="hairline mt-4 mb-8" />
            <p className="meta-mono">Est. 2004 · México</p>
            <p className="meta-mono mt-2">6 líneas de servicio</p>
            <p className="meta-mono mt-2">Presencia multimodal</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-white">
              Somos operadores logísticos. <span className="italic text-[#5cbdb9]">No intermediarios.</span>
            </h2>
            <p className="mt-10 text-lg text-white/70 max-w-2xl leading-relaxed font-light">
              IKROL es una empresa mexicana con más de dos décadas moviendo comercio exterior. Diseñamos, coordinamos y ejecutamos cada tramo del embarque —desde la cotización hasta la entrega final— con un ejecutivo dedicado y trazabilidad total.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { n: "20+", l: "Años operando" },
                { n: "140+", l: "Países cubiertos" },
                { n: "32", l: "Estados MX" },
                { n: "100%", l: "Trazabilidad" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-5xl md:text-6xl text-white">{s.n}</div>
                  <div className="meta-mono mt-2">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/nosotros" className="mt-12 inline-flex items-center gap-3 text-white group">
              <span className="font-display italic text-2xl">Conocer la firma</span>
              <ArrowUpRight className="h-5 w-5 text-[#5cbdb9] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES INDEX (editorial list) ─────────── */}
      <section className="section-py border-t border-white/5">
        <div className="container-page">
          <div className="flex items-end justify-between gap-8 mb-14">
            <div>
              <span className="eyebrow">Índice de servicios</span>
              <h2 className="mt-4 font-display text-5xl md:text-7xl text-white leading-[0.95]">
                Seis líneas.<br /><span className="italic">Una operación.</span>
              </h2>
            </div>
            <Link to="/servicios" className="hidden md:inline-flex btn-ghost-light">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="border-t border-white/10">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug] ?? Ship;
              return (
                <Link
                  key={s.slug}
                  to="/servicios/$slug"
                  params={{ slug: s.slug }}
                  className="group grid grid-cols-[auto_minmax(0,1fr)_auto] md:grid-cols-[80px_minmax(0,3fr)_minmax(0,4fr)_auto] items-center gap-4 md:gap-8 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-2 md:px-4"
                >
                  <span className="meta-mono">0{i + 1}</span>
                  <div className="flex items-center gap-4 min-w-0">
                    <Icon className="h-5 w-5 text-[#5cbdb9] shrink-0" strokeWidth={1.5} />
                    <h3 className="font-display text-3xl md:text-5xl italic text-white truncate group-hover:text-[#5cbdb9] transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <p className="hidden md:block text-sm text-white/60 font-light max-w-md">
                    {s.short}
                  </p>
                  <ArrowUpRight className="h-6 w-6 text-white/40 group-hover:text-[#5cbdb9] transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── EDITORIAL IMAGES ─────────── */}
      <section className="section-py container-page">
        <div className="grid md:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]">
          <div className="md:col-span-7 md:row-span-2 bento-tile min-h-[520px] overflow-hidden group">
            <img src={maritimoImage} alt="Operación marítima IKROL" className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
          </div>
          <div className="md:col-span-5 bento-tile p-8 flex flex-col justify-between min-h-[250px]">
            <span className="meta-mono">Fig. 01 — Puerto</span>
            <p className="font-display text-3xl md:text-4xl italic text-white leading-tight">
              "Cargamos hoy. Entregamos confianza. Movemos negocios, impulsamos el futuro."
            </p>
            <div className="flex items-center gap-3">
              <div className="hairline flex-1" />
              <span className="meta-mono">IKROL</span>
            </div>
          </div>
          <div className="md:col-span-5 bento-tile overflow-hidden min-h-[250px] group">
            <img src={aereoImage} alt="Operación aérea IKROL" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="section-py container-page">
        <div className="bento-tile p-10 md:p-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #123054 0%, #0c2340 60%, #1a4a6e 100%)" }}>
          <div className="pointer-events-none absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-[#5cbdb9] opacity-15 blur-[140px]" />
          <div className="relative z-10 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <span className="eyebrow">Contacto</span>
              <h2 className="mt-4 font-display text-5xl md:text-8xl leading-[0.9] text-white">
                Un embarque. Un<br /><span className="italic text-[#5cbdb9]">ejecutivo dedicado.</span>
              </h2>
              <p className="mt-8 text-white/70 max-w-lg font-light text-lg">
                Cuéntanos qué mueves. Un especialista de IKROL responderá con una propuesta técnica en menos de 24 horas.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
              <Link to="/contacto" className="btn-brand w-full md:w-auto">
                Cotizar ahora <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} className="btn-ghost-light w-full md:w-auto">
                WhatsApp directo
              </a>
              <div className="mt-6 md:text-right">
                <p className="meta-mono">Atención comercial</p>
                <a href={`mailto:${contactInfo.email}`} className="font-display italic text-2xl text-white hover:text-[#5cbdb9] transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────── Sub-components ─────────── */

function ServiceTile({
  slug, name, desc, index, icon: Icon, tone,
}: {
  slug: string; name: string; desc: string; index: string;
  icon: typeof Ship; tone: "ink" | "tide-soft";
}) {
  const bg = tone === "ink" ? "#0c2340" : "rgba(45,138,158,0.2)";
  return (
    <Link
      to="/servicios/$slug"
      params={{ slug }}
      className="md:col-span-4 bento-tile p-8 min-h-[240px] flex flex-col justify-between group"
      style={{ background: bg }}
    >
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center">
          <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
        </div>
        <span className="meta-mono">{index}</span>
      </div>
      <div>
        <h3 className="font-display text-3xl md:text-4xl italic text-white group-hover:text-[#5cbdb9] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-white/60 mt-2 font-light max-w-sm">{desc}</p>
      </div>
    </Link>
  );
}
