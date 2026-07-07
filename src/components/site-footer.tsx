import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { services, contactInfo } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0c2340] text-white">
      <div className="container-page pt-20 pb-10">
        {/* Massive wordmark */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="meta-mono">Est. 2004 · Ciudad de México</span>
              <img
                src="/logo.png"
                alt="IKROL"
                className="mt-6 h-20 md:h-28 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <Link to="/contacto" className="btn-brand shrink-0 mb-4">
              Escribir a un asesor <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Empresa mexicana especialista en logística internacional y comercio exterior desde hace más de dos décadas.
            </p>
            <div className="flex gap-2 mt-6">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#5cbdb9] hover:text-[#5cbdb9] transition-colors">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="meta-mono mb-5">Servicios</p>
            <ul className="space-y-3 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/servicios/$slug" params={{ slug: s.slug }} className="hover:text-[#5cbdb9] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="meta-mono mb-5">Firma</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/nosotros" className="hover:text-[#5cbdb9]">Nosotros</Link></li>
              <li><Link to="/cobertura" className="hover:text-[#5cbdb9]">Cobertura</Link></li>
              <li><Link to="/servicios" className="hover:text-[#5cbdb9]">Servicios</Link></li>
              <li><Link to="/contacto" className="hover:text-[#5cbdb9]">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="meta-mono mb-5">Contacto</p>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-[#5cbdb9] shrink-0" /><a href={`tel:${contactInfo.phone.replace(/\s/g,"")}`} className="hover:text-[#5cbdb9]">{contactInfo.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-[#5cbdb9] shrink-0" /><a href={`mailto:${contactInfo.email}`} className="hover:text-[#5cbdb9]">{contactInfo.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[#5cbdb9] shrink-0" /><span>{contactInfo.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} IKROL — Todos los derechos reservados.</p>
          <p className="italic font-display text-sm">Creando conexiones globales.</p>
        </div>
      </div>
    </footer>
  );
}
