import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "../components/CategoryPage";
import img from "../assets/cat-outerwear.jpg";

export const Route = createFileRoute("/outerwear")({
  head: () => ({
    meta: [
      { title: "Outerwear — Mira Voss" },
      { name: "description", content: "Sobretudos, trench coats e jaquetas em lãs encorpadas e cashmere." },
      { property: "og:title", content: "Outerwear — Mira Voss" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Categoria · 04"
      title="Outerwear"
      intro="Peças que atravessam invernos. Lãs duplas, cashmere e gabardines impermeáveis em silhuetas que envelhecem com elegância."
      hero={img}
      heroAlt="Sobretudo de lã estruturado"
      pieces={[
        { name: "Sobretudo Auguste", detail: "Lã dupla · grafite", price: "R$ 6.480" },
        { name: "Trench Lola", detail: "Gabardine · areia", price: "R$ 4.290" },
        { name: "Jaqueta Ren", detail: "Suede · castanho", price: "R$ 5.180" },
        { name: "Capa Sieg", detail: "Lã italiana · preto", price: "R$ 5.940" },
        { name: "Parka Olm", detail: "Algodão encerado", price: "R$ 3.860" },
        { name: "Blazer-coat Iris", detail: "Cashmere blend", price: "R$ 7.240" },
      ]}
    />
  ),
});
