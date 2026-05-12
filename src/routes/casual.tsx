import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "../components/CategoryPage";
import img from "../assets/cat-casual.jpg";

export const Route = createFileRoute("/casual")({
  head: () => ({
    meta: [
      { title: "Casual — Mira Voss" },
      { name: "description", content: "Casual desconstruído em linho, algodão orgânico e malha — peças para o dia a dia." },
      { property: "og:title", content: "Casual — Mira Voss" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Categoria · 03"
      title="Casual"
      intro="O conforto como gesto. Volumes generosos, cinturas baixas, tecidos naturais lavados — para vestir sem pensar."
      hero={img}
      heroAlt="Conjunto casual em linho"
      pieces={[
        { name: "Camisa Otto", detail: "Linho lavado · areia", price: "R$ 1.180" },
        { name: "Calça Sora", detail: "Wide leg · algodão", price: "R$ 1.490" },
        { name: "Tricô Yves", detail: "Lã merino · marfim", price: "R$ 1.860" },
        { name: "T-shirt Lou", detail: "Algodão pima", price: "R$ 480" },
        { name: "Bermuda June", detail: "Sarja leve", price: "R$ 980" },
        { name: "Cardigan Mara", detail: "Cashmere · cinza", price: "R$ 2.640" },
      ]}
    />
  ),
});
