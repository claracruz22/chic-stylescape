import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Atelier" },
  { to: "/alfaiataria", label: "Alfaiataria" },
  { to: "/vestidos", label: "Vestidos" },
  { to: "/casual", label: "Casual" },
  { to: "/outerwear", label: "Outerwear" },
  { to: "/sob-medida", label: "Sob Medida" },
] as const;

export function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  // intersection-based reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-tight">
            Mira&nbsp;Voss
          </Link>
          <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-widest-xl">
            {nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <nav className="flex flex-col px-6 py-6 gap-5 text-sm uppercase tracking-widest-xl">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 mt-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl">Mira Voss</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Atelier de moda autoral. Peças atemporais entre o clássico e o contemporâneo.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-4">
              Coleções
            </div>
            <ul className="space-y-2 text-sm">
              {nav.slice(1, 5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground text-muted-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-4">
              Contato
            </div>
            <p className="text-sm text-muted-foreground">
              Rua das Palmeiras, 128
              <br />
              São Paulo, Brasil
              <br />
              atelier@miravoss.com
            </p>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 text-xs text-muted-foreground flex justify-between">
            <span>© {new Date().getFullYear()} Mira Voss</span>
            <span className="tracking-widest-xl uppercase">Atelier · Est. 2018</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
