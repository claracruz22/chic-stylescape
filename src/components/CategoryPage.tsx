import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface Piece {
  name: string;
  detail: string;
  price: string;
}

interface CategoryPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  hero: string;
  heroAlt: string;
  pieces: Piece[];
}

export function CategoryPage({ eyebrow, title, intro, hero, heroAlt, pieces }: CategoryPageProps) {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-5 fade-up">
          <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-6">
            {eyebrow}
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">{title}</h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            {intro}
          </p>
        </div>
        <div className="lg:col-span-7 fade-up fade-up-delay-1">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={hero}
              alt={heroAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-32">
        <div className="flex items-end justify-between mb-12 reveal">
          <h2 className="font-serif text-3xl md:text-4xl">Seleção da estação</h2>
          <span className="text-[11px] uppercase tracking-widest-xl text-muted-foreground hidden md:inline">
            {pieces.length} peças
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {pieces.map((p, i) => (
            <article key={p.name} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="aspect-[3/4] bg-muted mb-5 overflow-hidden group">
                <div className="h-full w-full bg-gradient-to-br from-accent/30 to-muted transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-xl">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.detail}</p>
                </div>
                <span className="text-sm tabular-nums whitespace-nowrap">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 text-center reveal">
          <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5">
            Atelier
          </div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
            Peça uma criação exclusiva, pensada para você.
          </h2>
          <Link
            to="/sob-medida"
            className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all"
          >
            Sob medida <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
