import { products } from "@/data/products";
import { ProductDetail } from "@/components/ProductDetail";
import { ReviewList } from "@/components/ReviewList";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { schemaScript } from "@/lib/utils";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} | Mithila Makhana`,
    description: product.description,
    keywords: [product.category, ...product.tags, "mithila makhana", "darbhanga makhana"],
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.id,
    image: product.images,
    brand: { "@type": "Brand", name: "Mithila Makhana" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.salePrice ?? product.price,
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews.length,
    },
  };

  return (
    <div className="section-shell py-14 space-y-10">
      <ProductDetail product={product} />
      <ReviewList reviews={product.reviews} />
      <section className="card p-6">
        <h3 className="text-lg font-semibold mb-3">Customer stories</h3>
        <p className="text-sm text-muted-foreground">
          Grown in Darbhanga's traditional ponds, roasted in small batches, and vacuum packed in eco-friendly pouches.
        </p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={schemaScript(productSchema)} />
    </div>
  );
}
