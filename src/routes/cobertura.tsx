import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Building2, Plane, MapPin } from "lucide-react";
import { coverage } from "@/lib/site-data";
import { PageHero } from "./servicios.index";

export const Route = createFileRoute("/cobertura")({
  component: Coverage,
  head: () => ({
    meta: [
      { title: "Cobertura nacional e internacional | IKROL" },
      { name: "description", content: "IKROL opera en los principales puertos, fronteras y aeropuertos de México, con cobertura en los 32 estados y presencia internacional." },
      { property: "og:title", content: "Cobertura IKROL" },
      { property: "og:description", content: "Puertos, fronteras y aeropuertos: presencia estratégica en México y el mundo." },
    ],
  }),
});

const estados = [
  "Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas",
];

function Coverage() {
  const blocks = [
    { icon: Anchor, tag: "01", title: "Puertos", items: coverage.puertos },
    { icon: Building2, tag: "02", title: "Fronteras", items: coverage.fronteras },
    { icon: Plane, tag: "03", title: "Aeropuertos", items: coverage.aeropuertos },
  ];
  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title={<>Presencia estratégica <span className="italic text-[#5cbdb9]">en México y el mundo.</span></>}
        subtitle="Operamos desde los principales puertos, fronteras y aeropuertos, con presencia en los 32 estados de la República."
      />

      <section className="section-py container-page">
        <div className="grid md:grid-cols-3 gap-5">
          {blocks.map((b) => (
            <div key={b.title} className="bento-tile p-8 min-h-[380px] flex flex-col">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center">
                  <b.icon className="h-5 w-5 text-[#5cbdb9]" strokeWidth={1.5} />
                </div>
                <span className="meta-mono">{b.tag}</span>
              </div>
              <h3 className="mt-8 font-display text-4xl italic text-white">{b.title}</h3>
              <div className="hairline my-6" />
              <ul className="space-y-3 text-white/70">
                {b.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 font-light">
                    <MapPin className="h-3.5 w-3.5 text-[#5cbdb9] shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bento-tile p-10 md:p-14">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <div>
              <span className="eyebrow">Terrestre</span>
              <h3 className="mt-3 font-display text-4xl md:text-5xl text-white italic">32 estados de la República.</h3>
            </div>
            <span className="meta-mono">Servicio nacional</span>
          </div>
          <div className="hairline mt-8 mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
            {estados.map((e) => (
              <div key={e} className="text-sm text-white/70 font-light border-b border-white/5 pb-2 hover:text-[#5cbdb9] transition-colors">
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

