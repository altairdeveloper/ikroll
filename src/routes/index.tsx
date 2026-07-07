import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Ship, Plane, Truck, Package, FileCheck2, ShieldCheck, ChevronLeft, ChevronRight, Leaf, ReceiptText } from "lucide-react";
import { services, heroImage, maritimoImage, aereoImage, terrestreImage, sobredimensionadaImage, contactInfo, coverage } from "@/lib/site-data";

const heroSlides = [heroImage, maritimoImage, aereoImage, terrestreImage, sobredimensionadaImage];

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "IKROL — Conectamos lo que mueve al mundo | Marítimo, aéreo, terrestre" },
      { name: "description", content: "IKROL. Más de 20 años moviendo comercio exterior mexicano por mar, aire y tierra. Despacho aduanal, carga sobredimensionada y seguros integrales." },
      { property: "og:title", content: "IKROL — Conectamos lo que mueve al mundo" },
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

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const count = heroSlides.length;
  const go = (dir: number) => setActive((p) => (p + dir + count) % count);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % count), 6500);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className="relative w-full h-[calc(100svh-5rem)] min-h-[540px] max-h-[840px] overflow-hidden bg-[#0c2340]">
      {/* Slides */}
      {heroSlides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${idx === active ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== active}
        >
          <img src={src} alt="" className="h-full w-full object-cover" />
        </div>
      ))}

      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08182e] via-[#08182e]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08182e]/85 via-transparent to-[#08182e]/25" />

      {/* Content */}
      <div className="container-page relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-sans font-extrabold text-white text-[2.9rem] leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-7xl">
            Conectamos<br />
            lo que <span className="text-[#22c55e]">mueve</span><br />
            al mundo<span className="text-[#22c55e]">.</span>
          </h1>
          <p className="mt-7 max-w-md text-base md:text-lg font-light text-white/80 leading-relaxed">
            Soluciones logísticas integrales por mar, aire y tierra. Eficiencia, innovación y sostenibilidad en cada entrega.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/servicios" className="btn-green">
              Nuestros servicios <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contacto" className="btn-outline-hero">
              Cotiza tu envío <ReceiptText className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Slide anterior"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-black/55"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Slide siguiente"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-black/55"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-0 right-0 z-20 flex justify-center gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            aria-label={`Ir al slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === active ? "w-8 bg-[#22c55e]" : "w-4 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Sustainability badge */}
      <div className="hidden md:block absolute bottom-7 right-6 z-20 max-w-[15rem] rounded-2xl border border-white/15 bg-[#08182e]/70 p-5 backdrop-blur-md">
        <Leaf className="h-5 w-5 text-[#22c55e]" strokeWidth={1.6} />
        <p className="mt-3 text-sm font-medium leading-snug text-white">
          Comprometidos con un futuro más <span className="text-[#22c55e]">sostenible</span>.
        </p>
        <Link to="/nosotros" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 transition hover:text-white">
          Conoce nuestras iniciativas <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <HeroCarousel />

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
