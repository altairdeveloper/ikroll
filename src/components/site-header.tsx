import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site-data";

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
        scrolled
          ? "bg-[#0c2340]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-3xl italic tracking-tighter text-white">IKROL</span>
          <span className="hidden sm:inline meta-mono">MX</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors relative"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-white relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-[#5cbdb9]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contacto" className="btn-brand !py-2.5 !px-5 text-sm">
            Cotizar <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0c2340]">
          <nav className="container-page flex flex-col py-6 gap-1">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="px-3 py-4 font-display italic text-3xl text-white border-b border-white/5">
                {l.label}
              </Link>
            ))}
            <Link to="/contacto" className="btn-brand mt-4">Cotizar</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
