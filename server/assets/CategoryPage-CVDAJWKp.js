import { G as jsxRuntimeExports } from "./server-CHt9Jmbd.js";
import { L as Link } from "./router-BWp9hDgQ.js";
import { A as ArrowUpRight } from "./arrow-up-right-DWcRJ55i.js";
function CategoryPage({ eyebrow, title, intro, hero, heroAlt, pieces }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid lg:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-6", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl leading-[0.95]", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed", children: intro })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 fade-up fade-up-delay-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: hero,
          alt: heroAlt,
          loading: "lazy",
          className: "h-full w-full object-cover"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1400px] px-6 md:px-10 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Seleção da estação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground hidden md:inline", children: [
          pieces.length,
          " peças"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16", children: pieces.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "reveal", style: { transitionDelay: `${i * 60}ms` }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] bg-muted mb-5 overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-gradient-to-br from-accent/30 to-muted transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: p.detail })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm tabular-nums whitespace-nowrap", children: p.price })
        ] })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 text-center reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5", children: "Atelier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight", children: "Peça uma criação exclusiva, pensada para você." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/sob-medida",
          className: "mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all",
          children: [
            "Sob medida ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  CategoryPage as C
};
