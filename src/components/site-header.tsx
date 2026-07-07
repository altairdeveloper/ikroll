import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { navLinks, contactInfo } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b shadow-sm" : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="IKROL — Creando conexiones globales" className="h-11 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors relative"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-foreground rounded-md relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-brand" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" /> {contactInfo.phone}
          </a>
          <Link to="/contacto" className="btn-brand !py-2 !px-4 text-sm">Cotizar</Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-page flex flex-col py-4 gap-1">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="px-3 py-3 rounded-md hover:bg-secondary font-medium">
                {l.label}
              </Link>
            ))}
            <Link to="/contacto" className="btn-brand mt-2">Cotizar</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
