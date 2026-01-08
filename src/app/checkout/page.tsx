"use client";

import { CheckoutForm } from "@/components/CheckoutForm";
import { useCart } from "@/store/cart";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total } = useCart();

  return (
    <div className="section-shell py-14 space-y-6">
      <div>
        <p className="tag">Checkout</p>
        <h1 className="text-3xl font-semibold">Finish your Mithila order</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <aside className="card p-6 space-y-4">
          <h3 className="text-lg font-semibold">Order summary</h3>
          {items.map((item) => (
            <div key={item.productId} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold">{formatCurrency((item.salePrice ?? item.price) * item.quantity)}</p>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-muted/70 pt-3">
            <span className="font-semibold">Total</span>
            <span className="text-xl font-bold">{formatCurrency(total())}</span>
          </div>
          <p className="text-xs text-muted-foreground">Payments handled via Razorpay UPI/COD. Secure and encrypted.</p>
          <Link href="/products" className="text-sm text-accent">
            Add more items
          </Link>
        </aside>
      </div>
    </div>
  );
}
