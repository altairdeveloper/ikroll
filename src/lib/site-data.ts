import {
  Ship,
  Plane,
  Truck,
  Package,
  FileCheck2,
  ShieldCheck,
  Globe2,
  Leaf,
  Users,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  hero: string;
  intro: string;
  features: string[];
  benefits: { title: string; description: string }[];
};

// Images live in /public and are served from the site root, so they work in any
// deploy target (Netlify, etc.). The previous `/__l5e/assets-v1/...` asset URLs
// only resolved inside the Lovable preview proxy and 404'd in production.
export const heroImage = "/hero.png";
export const maritimoImage = "/ship.png";
export const aereoImage = "/flight.png";
export const terrestreImage = "/truck.png";
export const sobredimensionadaImage = "/carriage.png";

export const services: Service[] = [
  {
    slug: "flete-maritimo",
    name: "Flete Marítimo",
    short: "Cobertura mundial en carga FCL, LCL y proyectos especiales.",
    icon: Ship,
    hero: maritimoImage,
    intro:
      "Movemos tu carga por los principales puertos del mundo con tarifas competitivas, tiempos de tránsito confiables y trazabilidad total.",
    features: [
      "Contenedor completo (FCL) 20', 40', 40'HC y 45'",
      "Carga consolidada (LCL) puerto a puerto y puerta a puerta",
      "Carga refrigerada (reefer) y mercancías peligrosas (IMO)",
      "Contratos anuales con navieras de primer nivel",
      "Cobertura en Manzanillo, Lázaro Cárdenas, Veracruz, Altamira y Mazatlán",
    ],
    benefits: [
      { title: "Cobertura global", description: "Rutas directas y de trasbordo a Asia, Europa, Norteamérica y Sudamérica." },
      { title: "Trazabilidad en línea", description: "Monitoreo del embarque desde el origen hasta la entrega final." },
      { title: "Asesoría especializada", description: "Un ejecutivo dedicado que coordina cada etapa del embarque." },
    ],
  },
  {
    slug: "flete-aereo",
    name: "Flete Aéreo",
    short: "Soluciones aéreas para carga urgente, perecedera y de alto valor.",
    icon: Plane,
    hero: aereoImage,
    intro:
      "Cuando el tiempo es crítico, garantizamos rapidez, seguridad y visibilidad en cada envío aéreo internacional o doméstico.",
    features: [
      "Servicio aéreo directo, consolidado y charter",
      "Carga general, perecedera, farmacéutica y valores",
      "Manejo de mercancías peligrosas (DGR)",
      "Recolección puerta a puerta y entrega express",
      "Alianzas con las principales aerolíneas cargueras",
    ],
    benefits: [
      { title: "Tiempos garantizados", description: "Programación con salidas frecuentes y prioridad en aeropuerto." },
      { title: "Manejo especializado", description: "Personal certificado para carga sensible y de alto valor." },
      { title: "Cobertura mundial", description: "Conexión con los principales HUBs aéreos internacionales." },
    ],
  },
  {
    slug: "transporte-terrestre",
    name: "Transporte Terrestre",
    short: "Autotransporte de carga nacional, cross-border y última milla.",
    icon: Truck,
    hero: terrestreImage,
    intro:
      "Red propia y aliada de unidades para movimientos nacionales, fronterizos y de distribución con seguimiento GPS 24/7.",
    features: [
      "Full, sencillo, caja seca, refrigerada y plataforma",
      "Servicio cross-border México — Estados Unidos y Canadá",
      "Rutas dedicadas y consolidadas por ciudad",
      "Unidades con GPS, monitoreo y custodia",
      "Cobertura en los 32 estados de la República",
    ],
    benefits: [
      { title: "Seguimiento en tiempo real", description: "Visibilidad de la unidad y estatus del embarque en todo momento." },
      { title: "Rutas optimizadas", description: "Planeación inteligente para reducir costos y tiempos de entrega." },
      { title: "Seguridad garantizada", description: "Protocolos, custodia y unidades verificadas." },
    ],
  },
  {
    slug: "carga-sobredimensionada",
    name: "Carga Sobredimensionada",
    short: "Proyectos especiales, maquinaria y carga fuera de norma.",
    icon: Package,
    hero: sobredimensionadaImage,
    intro:
      "Diseñamos soluciones a la medida para maquinaria pesada, equipos industriales y carga con dimensiones fuera de estándar.",
    features: [
      "Estudios de ruta y permisos especiales",
      "Grúas, lowboys, modulares y equipo hidráulico",
      "Embarques Break Bulk, RO-RO y Flat Rack",
      "Escoltas y logística en sitio",
      "Ingeniería de estiba y trincado certificada",
    ],
    benefits: [
      { title: "Ingeniería logística", description: "Planeación técnica de cada movimiento con simulaciones y permisos." },
      { title: "Equipo especializado", description: "Unidades y accesorios diseñados para cargas críticas." },
      { title: "Cumplimiento normativo", description: "Gestión integral de permisos ante SICT y autoridades locales." },
    ],
  },
  {
    slug: "despacho-aduanal",
    name: "Despacho Aduanal",
    short: "Asesoría y trámite integral en importación y exportación.",
    icon: FileCheck2,
    hero: aereoImage,
    intro:
      "Trabajamos con agentes aduanales certificados en las principales aduanas del país para agilizar tus operaciones de comercio exterior.",
    features: [
      "Clasificación arancelaria y prevalidación",
      "Importación definitiva, temporal e IMMEX",
      "Gestión ante COFEPRIS, SENASICA, SEDENA y SE",
      "Programas de fomento: PROSEC, Regla 8ª, Cuenta Aduanera",
      "Presencia en puertos, fronteras y aeropuertos",
    ],
    benefits: [
      { title: "Cumplimiento normativo", description: "Reduce riesgos con documentación revisada por expertos." },
      { title: "Aduanas estratégicas", description: "Operamos en Manzanillo, Veracruz, Laredo, AICM y más." },
      { title: "Asesoría continua", description: "Actualización permanente en regulaciones y tratados." },
    ],
  },
  {
    slug: "seguro-de-mercancias",
    name: "Seguro de Mercancías",
    short: "Cobertura integral para tu carga en cualquier modalidad.",
    icon: ShieldCheck,
    hero: terrestreImage,
    intro:
      "Protege el valor de tus mercancías durante todo el trayecto con pólizas específicas por embarque o anuales.",
    features: [
      "Pólizas específicas o de flotilla",
      "Cobertura ICC A, B y C conforme a normas internacionales",
      "Coberturas de guerra, huelga y almacenaje",
      "Asesoría para reclamaciones y salvamento",
      "Trámite ágil ante aseguradoras de primer nivel",
    ],
    benefits: [
      { title: "Tranquilidad total", description: "Tu inversión protegida en cada trayecto." },
      { title: "Trámite simple", description: "Emisión inmediata con un solo contacto." },
      { title: "Respaldo profesional", description: "Acompañamiento en caso de siniestro." },
    ],
  },
];

export const values = [
  { title: "Lealtad", description: "Relaciones de largo plazo basadas en la confianza." },
  { title: "Compromiso", description: "Cada embarque es tratado como si fuera nuestro." },
  { title: "Trabajo en equipo", description: "Colaboramos con clientes, proveedores y aliados." },
  { title: "Transparencia", description: "Comunicación clara en tiempos, costos y procesos." },
  { title: "Responsabilidad", description: "Operamos con ética y cumpliendo cada compromiso." },
];

export const highlights = [
  { icon: Globe2, title: "Conexión Global", description: "Presencia en los principales puertos, fronteras y aeropuertos del mundo." },
  { icon: Truck, title: "Transporte Inteligente", description: "Rutas optimizadas y trazabilidad en tiempo real." },
  { icon: Building2, title: "Soluciones Integrales", description: "Logística multimodal y comercio exterior bajo un mismo aliado." },
  { icon: Leaf, title: "Sostenibilidad", description: "Operaciones responsables con el medio ambiente." },
  { icon: Users, title: "Compromiso", description: "Equipo dedicado a hacer crecer tu negocio." },
];

export const coverage = {
  puertos: ["Manzanillo", "Lázaro Cárdenas", "Veracruz", "Mazatlán", "Altamira"],
  fronteras: ["Tijuana", "Laredo", "Ciudad Juárez", "Nogales"],
  aeropuertos: ["Ciudad de México", "Guadalajara", "Monterrey", "Querétaro"],
};

export const contactInfo = {
  phone: "+52 55 0000 0000",
  whatsapp: "525500000000",
  email: "contacto@ikrol.mx",
  address: "Ciudad de México, México",
  website: "www.ikrol.mx",
};

export const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/cobertura", label: "Cobertura" },
  { to: "/contacto", label: "Contacto" },
] as const;
