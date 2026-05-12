import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "../components/CategoryPage";
import img from "../assets/cat-tailoring.jpg";

export const Route = createFileRoute("/alfaiataria")({
  head: () => ({
    meta: [
      { title: "Alfaiataria — Mira Voss" },
      { name: "description", content: "Blazers, calças e ternos de alfaiataria autoral em lãs e linhos nobres." },
      { property: "og:title", content: "Alfaiataria — Mira Voss" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Categoria · 01"
      title="Alfaiataria"
      intro="Estrutura sem rigidez. Modelagens construídas em lã fria, gabardine e linhos pesados, com ombros suaves e caimento preciso."
      hero={img}
      heroAlt="Blazer de alfaiataria em manequim"
      pieces={[
        { name: "Blazer Hélène", detail: "Lã virgem · camel", price: "R$ 4.200" },
        { name: "Calça Marais", detail: "Pregas frontais · grafite", price: "R$ 2.180" },
        { name: "Colete Édith", detail: "Forro em cupro", price: "R$ 1.640" },
        { name: "Terno Pierre", detail: "Risca de giz", price: "R$ 6.900" },
        { name: "Camisa Lou", detail: "Algodão egípcio", price: "R$ 1.290" },
        { name: "Saia Rive", detail: "Midi · lã italiana", price: "R$ 2.480" },
      ]}
    />
  ),
});
