import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section className="section-shell py-14">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="tag">Mithila Collection</p>
          <h2 className="text-2xl font-semibold">Shop authentic makhana variants</h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xl">
          Explore plain, roasted, flavored, powder, and festive gift packs hand-crafted in Darbhanga.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
