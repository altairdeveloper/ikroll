import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Sparkles } from "lucide-react";
import { values, heroImage } from "@/lib/site-data";
import { PageHero } from "./servicios.index";

export const Route = createFileRoute("/nosotros")({
  component: About,
  head: () => ({
    meta: [
      { title: "Nosotros | IKROL — 20+ años en logística internacional" },
      { name: "description", content: "Conoce a IKROL: misión, visión y valores. Empresa mexicana con más de 20 años ofreciendo servicios de logística y comercio exterior." },
      { property: "og:title", content: "Nosotros — IKROL" },
      { property: "og:description", content: "Empresa mexicana con más de 20 años en logística internacional." },
      { property: "og:image", content: heroImage },
    ],
  }),
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Impulsamos negocios que mueven al mundo"
        subtitle="Somos una empresa mexicana con más de 20 años acompañando a importadores y exportadores en su expansión internacional."
      />

      <section className="section-py container-page">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={heroImage} alt="Equipo IKROL" className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl shadow-2xl p-6 border">
              <div className="text-5xl font-bold" style={{ color: "var(--brand-deep)" }}>20+</div>
              <div className="text-sm text-muted-foreground mt-1">años de experiencia<br />en logística</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-deep)" }}>Nuestra historia</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Especialistas en logística multimodal y comercio exterior</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Somos una empresa mexicana con más de <strong className="text-foreground">20 años de experiencia</strong> en el mercado logístico, brindando servicios personalizados de acuerdo a las necesidades de las empresas importadoras y exportadoras del país.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Proporcionamos soluciones integrales en logística, asesoría y asistencia en comercio exterior, con presencia en los principales puertos, fronteras y aeropuertos del país. Nuestro equipo te acompaña en cada paso de tu operación internacional.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-secondary/50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Misión", body: "Generar valor a nuestros clientes optimizando su cadena de suministro mediante servicios de logística multimodal e internacional." },
              { icon: Eye, title: "Visión", body: "Ser una empresa innovadora y líder en el sector logístico que contribuya al crecimiento y desarrollo de cada uno de nuestros clientes." },
            ].map((b) => (
              <div key={b.title} className="p-10 rounded-2xl bg-card border shadow-sm">
                <div className="h-14 w-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "var(--gradient-brand)" }}>
                  <b.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{b.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-brand" style={{ color: "var(--brand-deep)" }}>
                <Sparkles className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Valores</span>
              </div>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold">Los principios que nos definen</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((v, i) => (
                <div key={v.title} className="p-6 rounded-xl bg-card border text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: "var(--brand-deep)" }}>0{i + 1}</div>
                  <div className="font-bold">{v.title}</div>
                  <p className="mt-2 text-xs text-muted-foreground">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
