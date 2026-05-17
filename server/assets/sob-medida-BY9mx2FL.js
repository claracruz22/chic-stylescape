import { N as reactExports, G as jsxRuntimeExports } from "./server-CHt9Jmbd.js";
import { a as createLucideIcon, b as bespoke } from "./router-BWp9hDgQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const steps = [{
  n: "I",
  title: "Conversa",
  text: "Encontro privado, presencial ou por vídeo, para entender ocasião, referências e desejos."
}, {
  n: "II",
  title: "Esboço",
  text: "Apresentação de croquis, escolha de tecidos e definição da modelagem."
}, {
  n: "III",
  title: "Provas",
  text: "Duas a três provas no atelier, com ajustes precisos a cada etapa."
}, {
  n: "IV",
  title: "Entrega",
  text: "Peça finalizada à mão, embalada em musselina e pronta em 6 a 10 semanas."
}];
function BespokePage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid lg:grid-cols-12 gap-12 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-6", children: "Atelier · Sob Medida" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl leading-[0.95]", children: [
          "Uma peça,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "um corpo,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "uma história."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed", children: "Para casamentos, ocasiões marcantes ou para o gesto raro de vestir algo verdadeiramente seu. O atelier aceita um número limitado de encomendas por estação." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 fade-up fade-up-delay-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bespoke, alt: "Designer esboçando uma peça", loading: "lazy", className: "h-full w-full object-cover" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-12 reveal", children: "O processo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        transitionDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-muted-foreground mb-6", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mb-3", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.text })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5", children: "Encomenda" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl leading-tight", children: "Inicie sua peça." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Conte-nos sobre você e a peça que imagina. Respondemos em até três dias úteis com uma proposta de encontro." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { className: "lg:col-span-7 reveal", onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-background p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-8 mx-auto mb-4 text-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mb-2", children: "Pedido recebido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mx-auto", children: "Obrigada. Entraremos em contato em breve para marcar a primeira conversa." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome", name: "name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E-mail", name: "email", type: "email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Telefone", name: "phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cidade", name: "city" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Tipo de peça", name: "type", options: ["Vestido", "Alfaiataria", "Outerwear", "Casual", "Outro"] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Ocasião", name: "occasion", placeholder: "Casamento, evento, peça única…" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-3", children: "Conte sobre a peça" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "description", rows: 5, className: "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm resize-none transition-colors" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all", children: "Enviar pedido" }) })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-3", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, placeholder, className: "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm transition-colors" })
  ] });
}
function Select({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-3", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name, className: "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm transition-colors", defaultValue: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Selecione" }),
      options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o))
    ] })
  ] });
}
export {
  BespokePage as component
};
