import { G as jsxRuntimeExports } from "./server-CHt9Jmbd.js";
import { L as Link, t as tailoring, d as dresses, c as casual, o as outerwear, b as bespoke } from "./router-BWp9hDgQ.js";
import { A as ArrowUpRight } from "./arrow-up-right-DWcRJ55i.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const hero = "/assets/hero-Dpqg7bxT.jpg";
const categories = [{
  to: "/alfaiataria",
  label: "Alfaiataria",
  img: tailoring,
  n: "01"
}, {
  to: "/vestidos",
  label: "Vestidos",
  img: dresses,
  n: "02"
}, {
  to: "/casual",
  label: "Casual",
  img: casual,
  n: "03"
}, {
  to: "/outerwear",
  label: "Outerwear",
  img: outerwear,
  n: "04"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16 pb-24 md:pb-32 grid lg:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-6 fade-up", children: "Coleção · Outono / Inverno 26" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl xl:text-8xl leading-[0.92] fade-up fade-up-delay-1", children: [
          "Tradição,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "reescrita."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed fade-up fade-up-delay-2", children: "Mira Voss desenha peças entre o rigor da alfaiataria clássica e a leveza do contemporâneo. Cada criação nasce no atelier, em série limitada ou sob medida." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-6 fade-up fade-up-delay-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/vestidos", className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all", children: [
            "Ver coleção ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sob-medida", className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl text-muted-foreground hover:text-foreground transition-colors", children: "Encomendar" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-1 lg:order-2 fade-up fade-up-delay-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Vestido fluido em seda creme", width: 1536, height: 1920, className: "h-full w-full object-cover" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10 flex flex-wrap justify-between gap-6 text-[11px] uppercase tracking-widest-xl text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Atelier autoral" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tecidos naturais" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Produção limitada" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Feito no Brasil" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-8 mb-16 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5", children: "Categorias" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl leading-tight", children: "Quatro silhuetas, uma assinatura." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-6 lg:col-start-7 text-muted-foreground leading-relaxed self-end", children: "Da alfaiataria estruturada ao casual desconstruído — peças pensadas para atravessar estações sem perder o tempo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-x-6 gap-y-12", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "group reveal", style: {
        transitionDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-muted mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.label, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-1", children: c.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl md:text-4xl", children: c.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-5 text-muted-foreground group-hover:text-foreground transition-colors" })
        ] })
      ] }, c.to)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bespoke, alt: "Mãos da designer esboçando uma peça", loading: "lazy", className: "h-full w-full object-cover" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 lg:col-start-7 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5", children: "Sob medida" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl leading-tight", children: "Uma peça que existe apenas porque você existe." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed max-w-lg", children: "Do esboço à última costura, acompanhamos cada etapa em consulta privada. Tecido, modelagem, ajuste — tudo desenhado em torno de quem vai vestir." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sob-medida", className: "mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all", children: [
          "Iniciar encomenda ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
