import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "../assets/hero.jpg";
import tailoring from "../assets/cat-tailoring.jpg";
import dresses from "../assets/cat-dresses.jpg";
import casual from "../assets/cat-casual.jpg";
import outerwear from "../assets/cat-outerwear.jpg";
import bespoke from "../assets/bespoke.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { to: "/alfaiataria", label: "Alfaiataria", img: tailoring, n: "01" },
  { to: "/vestidos", label: "Vestidos", img: dresses, n: "02" },
  { to: "/casual", label: "Casual", img: casual, n: "03" },
  { to: "/outerwear", label: "Outerwear", img: outerwear, n: "04" },
] as const;

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16 pb-24 md:pb-32 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-6 fade-up">
              Coleção · Outono / Inverno 26
            </div>
            <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl leading-[0.92] fade-up fade-up-delay-1">
              Tradição,<br />reescrita.
            </h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed fade-up fade-up-delay-2">
              Mira Voss desenha peças entre o rigor da alfaiataria clássica e a leveza
              do contemporâneo. Cada criação nasce no atelier, em série limitada ou sob medida.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 fade-up fade-up-delay-3">
              <Link
                to="/vestidos"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all"
              >
                Ver coleção <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/sob-medida"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl text-muted-foreground hover:text-foreground transition-colors"
              >
                Encomendar
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 fade-up fade-up-delay-1">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={hero}
                alt="Vestido fluido em seda creme"
                width={1536}
                height={1920}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / EYEBROW */}
      <section className="border-y border-border/60 py-6">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex flex-wrap justify-between gap-6 text-[11px] uppercase tracking-widest-xl text-muted-foreground">
          <span>Atelier autoral</span>
          <span>Tecidos naturais</span>
          <span>Produção limitada</span>
          <span className="hidden md:inline">Feito no Brasil</span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 reveal">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5">
              Categorias
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Quatro silhuetas, uma assinatura.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-relaxed self-end">
            Da alfaiataria estruturada ao casual desconstruído — peças pensadas para
            atravessar estações sem perder o tempo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-12">
          {categories.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              className="group reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted mb-5">
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-1">
                    {c.n}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl">{c.label}</h3>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={bespoke}
                alt="Mãos da designer esboçando uma peça"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal">
            <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5">
              Sob medida
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Uma peça que existe apenas porque você existe.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Do esboço à última costura, acompanhamos cada etapa em consulta privada.
              Tecido, modelagem, ajuste — tudo desenhado em torno de quem vai vestir.
            </p>
            <Link
              to="/sob-medida"
              className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all"
            >
              Iniciar encomenda <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
