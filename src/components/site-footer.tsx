import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { services, contactInfo } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy text-navy-foreground" style={{ background: "var(--gradient-navy)" }}>
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white rounded-lg p-3 inline-block">
            <img src={logoAsset.url} alt="IKROL" className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Empresa mexicana con más de 20 años conectando negocios al mundo mediante soluciones integrales de logística y comercio exterior.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/servicios/$slug" params={{ slug: s.slug }} className="hover:text-brand transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/nosotros" className="hover:text-brand">Nosotros</Link></li>
            <li><Link to="/cobertura" className="hover:text-brand">Cobertura</Link></li>
            <li><Link to="/servicios" className="hover:text-brand">Servicios</Link></li>
            <li><Link to="/contacto" className="hover:text-brand">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-brand" /><a href={`tel:${contactInfo.phone.replace(/\s/g,"")}`} className="hover:text-brand">{contactInfo.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-brand" /><a href={`mailto:${contactInfo.email}`} className="hover:text-brand">{contactInfo.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand" /><span>{contactInfo.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} IKROL. Todos los derechos reservados.</p>
          <p>Creando conexiones globales.</p>
        </div>
      </div>
    </footer>
  );
}
