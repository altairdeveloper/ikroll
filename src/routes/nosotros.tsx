import { createFileRoute } from "@tanstack/react-router";
import { values, heroImage, maritimoImage } from "@/lib/site-data";
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
        eyebrow="La firma"
        title={<>Operadores, <span className="italic text-[#5cbdb9]">no intermediarios.</span></>}
        subtitle="Somos una casa mexicana con más de dos décadas moviendo el comercio exterior de importadores y exportadores. Cada embarque, un ejecutivo dedicado."
      />

      {/* Manifesto split */}
      <section className="section-py container-page">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 relative">
            <div className="bento-tile overflow-hidden aspect-[4/5]">
              <img src={maritimoImage} alt="Operación IKROL" className="h-full w-full object-cover grayscale" />
            </div>
            <div className="absolute -bottom-6 -right-6 bento-tile p-6 bg-[#5cbdb9] border-none text-[#0c2340]">
              <div className="font-display text-6xl leading-none">20+</div>
              <div className="meta-mono mt-2 text-[#0c2340] opacity-80">Años en operación</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="mt-6 font-display text-white text-4xl md:text-6xl leading-[0.95]">
              Especialistas en <span className="italic text-[#5cbdb9]">logística multimodal</span> y comercio exterior.
            </h2>
            <div className="hairline my-10" />
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Empresa mexicana con más de <span className="text-white">20 años de experiencia</span> en el mercado logístico, diseñando servicios personalizados para las necesidades de importadores y exportadores del país.
            </p>
            <p className="mt-6 text-white/70 font-light leading-relaxed">
              Proporcionamos soluciones integrales en logística, asesoría y asistencia en comercio exterior, con presencia en los principales puertos, fronteras y aeropuertos de México.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-py border-t border-white/5">
        <div className="container-page grid md:grid-cols-2 gap-5">
          {[
            { tag: "Misión", body: "Generar valor a nuestros clientes optimizando su cadena de suministro mediante servicios de logística multimodal e internacional." },
            { tag: "Visión", body: "Ser una empresa innovadora y líder en el sector logístico que contribuya al crecimiento y desarrollo de cada uno de nuestros clientes." },
          ].map((b) => (
            <div key={b.tag} className="bento-tile p-10 md:p-14 min-h-[340px] flex flex-col justify-between">
              <span className="meta-mono">{b.tag}</span>
              <p className="font-display text-3xl md:text-4xl italic text-white leading-tight">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values — editorial list */}
      <section className="section-py container-page border-t border-white/5">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="eyebrow">Valores</span>
            <h2 className="mt-6 font-display text-white text-5xl md:text-6xl leading-[0.95]">
              Los principios<br /><span className="italic">que nos definen.</span>
            </h2>
          </div>
          <div className="md:col-span-8 border-t border-white/10">
            {values.map((v, i) => (
              <div key={v.title} className="grid grid-cols-[60px_minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-6 py-6 border-b border-white/10">
                <span className="meta-mono">0{i + 1}</span>
                <h3 className="font-display text-3xl md:text-4xl italic text-white">{v.title}</h3>
                <p className="text-sm md:text-base text-white/60 font-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
