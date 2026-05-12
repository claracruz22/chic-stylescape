import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "../components/CategoryPage";
import img from "../assets/cat-dresses.jpg";

export const Route = createFileRoute("/vestidos")({
  head: () => ({
    meta: [
      { title: "Vestidos — Mira Voss" },
      { name: "description", content: "Vestidos fluidos em sedas, cetins e crepes, entre o minimalismo e a sensualidade." },
      { property: "og:title", content: "Vestidos — Mira Voss" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Categoria · 02"
      title="Vestidos"
      intro="Silhuetas que respiram. Sedas leves, cetins lavados e crepes encorpados em cortes que dispensam ornamento."
      hero={img}
      heroAlt="Vestido fluido em cetim"
      pieces={[
        { name: "Vestido Solène", detail: "Cetim de seda · creme", price: "R$ 3.890" },
        { name: "Vestido Margot", detail: "Crepe · preto", price: "R$ 2.940" },
        { name: "Vestido Inès", detail: "Tomara-que-caia · areia", price: "R$ 4.620" },
        { name: "Vestido Camille", detail: "Mídi · linho lavado", price: "R$ 2.380" },
        { name: "Vestido Noor", detail: "Slip dress · seda pura", price: "R$ 3.180" },
        { name: "Vestido Béa", detail: "Manga longa · lã fria", price: "R$ 3.560" },
      ]}
    />
  ),
});
