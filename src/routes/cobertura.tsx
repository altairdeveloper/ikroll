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
    { icon: Anchor, title: "Puertos", items: coverage.puertos, color: "var(--brand)" },
    { icon: Building2, title: "Fronteras", items: coverage.fronteras, color: "var(--brand-deep)" },
    { icon: Plane, title: "Aeropuertos", items: coverage.aeropuertos, color: "var(--brand)" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title="Presencia estratégica en México y el mundo"
        subtitle="Operamos desde los principales puertos, fronteras y aeropuertos, con presencia en los 32 estados de la República."
      />

      <section className="section-py container-page">
        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl p-8 border bg-card shadow-sm">
              <div className="h-14 w-14 rounded-xl flex items-center justify-center mb-6" style={{ background: b.color }}>
                <b.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold">{b.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {b.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" style={{ color: "var(--brand-deep)" }} /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl p-10 border bg-secondary/40">
          <h3 className="text-2xl font-bold">Cobertura de transporte terrestre</h3>
          <p className="mt-2 text-muted-foreground">Servicio en los 32 estados de la República Mexicana.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {estados.map((e) => (
              <div key={e} className="px-4 py-2 rounded-lg bg-card border text-sm text-foreground/80 hover:border-brand hover:text-foreground transition-colors">
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
