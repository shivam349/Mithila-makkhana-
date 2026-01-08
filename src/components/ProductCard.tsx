"use client";

import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBasket, Sparkles } from "lucide-react";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const priceLabel = product.salePrice ?? product.price;

  return (
    <div className="card overflow-hidden flex flex-col h-full">
      <div className="relative h-52 w-full">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, 100vw"
        />
        {product.salePrice && (
          <span className="absolute left-3 top-3 rounded-full bg-accent text-white px-3 py-1 text-xs font-semibold">
            Save {formatCurrency(product.price - product.salePrice)}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{product.category}</p>
            <Link href={`/products/${product.slug}`} className="font-semibold text-lg hover:text-accent">
              {product.name}
            </Link>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Sparkles size={14} className="text-accent" /> {product.rating.toFixed(1)}
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>{formatCurrency(priceLabel)}</span>
          {product.salePrice && (
            <span className="text-sm text-muted-foreground line-through">{formatCurrency(product.price)}</span>
          )}
        </div>
        <div className="flex items-center gap-3 mt-auto">
          <div className="flex items-center rounded-full border px-3 py-2 text-sm">
            <button
              className="px-2 text-muted-foreground"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-8 text-center">{qty}</span>
            <button
              className="px-2 text-muted-foreground"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Increase quantity"
            >
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
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-4 py-3 text-sm font-semibold shadow-sm hover:bg-accent-dark"
          >
            <ShoppingBasket size={16} /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
