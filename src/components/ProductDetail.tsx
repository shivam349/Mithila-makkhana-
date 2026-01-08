"use client";

import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/store/cart";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Leaf, ShieldCheck } from "lucide-react";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [qty, setQty] = useState(1);
  const priceLabel = product.salePrice ?? product.price;

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="relative h-[420px] w-full card overflow-hidden">
          <Image src={activeImage} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
        </div>
        <div className="flex gap-3 overflow-x-auto">
          {product.images.map((img) => (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl border ${activeImage === img ? "border-accent" : "border-muted/70"}`}
            >
              <Image src={img} alt={product.name} fill className="object-cover" sizes="112px" />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <p className="tag">{product.category}</p>
          <h1 className="text-3xl font-semibold mt-2">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck size={16} className="text-accent" /> Lab tested • FSSAI approved • Traceable lot
          </div>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
        <ul className="space-y-2 text-sm text-foreground">
          {product.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 text-accent" /> {feat}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <span>{formatCurrency(priceLabel)}</span>
          {product.salePrice && (
            <span className="text-base text-muted-foreground line-through">{formatCurrency(product.price)}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border px-3 py-2 text-sm">
            <button className="px-2 text-muted-foreground" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              -
            </button>
            <span className="w-8 text-center">{qty}</span>
            <button className="px-2 text-muted-foreground" onClick={() => setQty((q) => q + 1)}>
              +
            </button>
          </div>
          <button
            onClick={() =>
              addItem({
                productId: product.id,
                name: product.name,
                image: product.images[0],
                price: product.price,
                salePrice: product.salePrice,
                quantity: qty,
              })
            }
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-accent-dark"
          >
            Add to cart
          </button>
          <button className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf size={16} /> Sustainably harvested
          </button>
        </div>
      </div>
    </div>
  );
}
