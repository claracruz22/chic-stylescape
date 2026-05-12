import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import bespoke from "../assets/bespoke.jpg";

export const Route = createFileRoute("/sob-medida")({
  head: () => ({
    meta: [
      { title: "Sob Medida — Mira Voss" },
      { name: "description", content: "Encomende uma peça única desenhada e costurada exclusivamente para você no atelier Mira Voss." },
      { property: "og:title", content: "Sob Medida — Mira Voss" },
      { property: "og:image", content: bespoke },
    ],
  }),
  component: BespokePage,
});

const steps = [
  { n: "I", title: "Conversa", text: "Encontro privado, presencial ou por vídeo, para entender ocasião, referências e desejos." },
  { n: "II", title: "Esboço", text: "Apresentação de croquis, escolha de tecidos e definição da modelagem." },
  { n: "III", title: "Provas", text: "Duas a três provas no atelier, com ajustes precisos a cada etapa." },
  { n: "IV", title: "Entrega", text: "Peça finalizada à mão, embalada em musselina e pronta em 6 a 10 semanas." },
] as const;

function BespokePage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-6 fade-up">
          <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-6">
            Atelier · Sob Medida
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">
            Uma peça,<br />um corpo,<br />uma história.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Para casamentos, ocasiões marcantes ou para o gesto raro de vestir algo
            verdadeiramente seu. O atelier aceita um número limitado de encomendas por estação.
          </p>
        </div>
        <div className="lg:col-span-6 fade-up fade-up-delay-1">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img src={bespoke} alt="Designer esboçando uma peça" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-12 reveal">
            O processo
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((s, i) => (
              <div key={s.n} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="font-serif text-3xl text-muted-foreground mb-6">{s.n}</div>
                <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal">
            <div className="text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-5">
              Encomenda
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Inicie sua peça.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Conte-nos sobre você e a peça que imagina. Respondemos em até três dias úteis
              com uma proposta de encontro.
            </p>
          </div>

          <form
            className="lg:col-span-7 reveal"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="border border-border bg-background p-10 text-center">
                <Check className="size-8 mx-auto mb-4 text-foreground" />
                <h3 className="font-serif text-2xl mb-2">Pedido recebido</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Obrigada. Entraremos em contato em breve para marcar a primeira conversa.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Nome" name="name" />
                <Field label="E-mail" name="email" type="email" />
                <Field label="Telefone" name="phone" />
                <Field label="Cidade" name="city" />
                <div className="sm:col-span-2">
                  <Select label="Tipo de peça" name="type" options={["Vestido", "Alfaiataria", "Outerwear", "Casual", "Outro"]} />
                </div>
                <div className="sm:col-span-2">
                  <Field label="Ocasião" name="occasion" placeholder="Casamento, evento, peça única…" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-3">
                    Conte sobre a peça
                  </label>
                  <textarea
                    name="description"
                    rows={5}
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm resize-none transition-colors"
                  />
                </div>
                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest-xl border-b border-foreground pb-1 hover:gap-3 transition-all"
                  >
                    Enviar pedido
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm transition-colors"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest-xl text-muted-foreground mb-3">
        {label}
      </label>
      <select
        name={name}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm transition-colors"
        defaultValue=""
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
