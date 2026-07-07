import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { services, highlights, heroImage } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "IKROL — Creando conexiones globales | Logística internacional" },
      { name: "description", content: "Más de 20 años ofreciendo soluciones integrales de logística multimodal, transporte marítimo, aéreo, terrestre y despacho aduanal en México." },
      { property: "og:title", content: "IKROL — Conectamos lo que mueve al mundo" },
      { property: "og:description", content: "Soluciones integrales de logística internacional y comercio exterior." },
      { property: "og:image", content: heroImage },
      { property: "twitter:image", content: heroImage },
    ],
  }),
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden -mt-20 pt-20 min-h-[92vh] flex items-center">
        <img src={heroImage} alt="Operación logística IKROL en puerto" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.14 0.04 240 / 0.92) 0%, oklch(0.14 0.04 240 / 0.7) 45%, oklch(0.14 0.04 240 / 0.3) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, oklch(0.14 0.04 240 / 0.9) 100%)" }} />

        <div className="container-page relative z-10 py-24 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-white uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand"></span>
              Más de 20 años de experiencia
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
              Conectamos lo que <span className="text-brand">mueve al mundo</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Somos IKROL, empresa mexicana especialista en logística multimodal, comercio exterior y soluciones integrales para importadores y exportadores.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contacto" className="btn-brand">
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/servicios" className="btn-outline-light">
                Conocer servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="relative -mt-16 z-20 container-page">
        <div className="rounded-2xl bg-card shadow-2xl border p-6 md:p-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="text-center">
              <div className="mx-auto h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-3">
                <h.icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
              </div>
              <div className="text-sm font-semibold text-foreground uppercase tracking-wide">{h.title}</div>
              <div className="text-xs text-muted-foreground mt-1 hidden md:block">{h.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="section-py container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-wider">Quiénes somos</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Impulsamos la expansión global de tu negocio
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Somos una empresa mexicana con más de <strong className="text-foreground">20 años</strong> de experiencia en el mercado logístico, brindando servicios personalizados a las empresas importadoras y exportadoras del país.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Proporcionamos soluciones integrales en logística, asesoría y asistencia en comercio exterior, con presencia en los principales puertos, fronteras y aeropuertos de México.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t pt-8">
              {[{ n: "20+", l: "Años de experiencia" }, { n: "32", l: "Estados de cobertura" }, { n: "100%", l: "Trazabilidad" }].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-4xl font-bold text-brand" style={{ color: "var(--brand-deep)" }}>{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/nosotros" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand" style={{ color: "var(--brand-deep)" }}>
              Conoce más sobre nosotros <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-brand)", opacity: 0.15 }} />
            <img src={heroImage} alt="Operación IKROL" className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 max-w-[220px] border">
              <div className="flex items-center gap-2 text-brand" style={{ color: "var(--brand-deep)" }}>
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-semibold">Servicio certificado</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Operamos con procesos auditados y personal capacitado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-secondary/50">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-brand uppercase tracking-wider" style={{ color: "var(--brand-deep)" }}>Nuestros servicios</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">Soluciones logísticas integrales</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Desde flete marítimo y aéreo hasta despacho aduanal: un solo aliado para toda tu cadena de suministro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/servicios/$slug"
                params={{ slug: s.slug }}
                className="card-elevated group p-8 flex flex-col"
              >
                <div className="h-14 w-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "var(--gradient-brand)" }}>
                  <s.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed flex-1">{s.short}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-brand" style={{ color: "var(--brand-deep)" }}>
                  Ver detalle <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / CTA */}
      <section className="section-py">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16" style={{ background: "var(--gradient-navy)" }}>
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full" style={{ background: "var(--brand)", opacity: 0.15, filter: "blur(80px)" }} />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Quote className="h-10 w-10 text-brand mb-4" />
                <p className="text-2xl md:text-3xl font-display text-white leading-snug">
                  "Cargamos hoy. Entregamos confianza. Movemos negocios, impulsamos el futuro."
                </p>
                <p className="mt-6 text-white/60 text-sm uppercase tracking-wider">IKROL — Logística sin fronteras</p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4">
                <p className="text-white/80 lg:text-right max-w-md">
                  ¿Listo para llevar tu negocio más lejos? Cuéntanos en qué servicio estás interesado y un especialista te contactará.
                </p>
                <Link to="/contacto" className="btn-brand">
                  Contactar a un asesor <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
