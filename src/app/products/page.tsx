import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makhana Products | Mithila Collection",
  description: "Shop plain, roasted, flavored, makhana powder, and gift packs from Darbhanga, Bihar.",
};

export default function ProductsPage({ searchParams }: { searchParams: { category?: string } }) {
  const filtered = searchParams.category
    ? products.filter((p) => p.category === searchParams.category)
    : products;

  return (
    <div className="section-shell py-14 space-y-6">
      <div className="flex flex-col gap-2">
        <p className="tag">Mithila Pantry</p>
        <h1 className="text-3xl font-semibold">Authentic makhana from Darbhanga farmers</h1>
        <p className="text-muted-foreground">Select a category or explore all variants.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
