"use client";

import { CartSummary } from "@/components/CartSummary";
import { useCart } from "@/store/cart";
import Link from "next/link";

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="section-shell py-14 space-y-6">
      <div>
        <p className="tag">Your Cart</p>
        <h1 className="text-3xl font-semibold">Mithila treats in your bag</h1>
      </div>
      {items.length === 0 ? (
        <div className="card p-6 text-muted-foreground">
          Your cart is empty. <Link href="/products" className="text-accent">Shop products</Link>
        </div>
      ) : (
        <CartSummary />
      )}
    </div>
  );
}
