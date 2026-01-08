"use client";

import { Address } from "@/lib/types";
import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialAddress: Address = {
  name: "",
  phone: "",
  email: "",
  line1: "",
  city: "",
  state: "",
  pincode: "",
};

export function CheckoutForm() {
  const router = useRouter();
  const { items, total, clear } = useCart();
  const [address, setAddress] = useState<Address>(initialAddress);
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "cod">("cod");
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, address, paymentMethod, total: total() }),
      });
      const data = await res.json();
      if (res.ok) {
        clear();
        router.push(`/orders/${data.orderNumber}`);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="card p-6 space-y-4">
      <div>
        <p className="tag">Checkout</p>
        <h2 className="text-xl font-semibold">Shipping & Payment</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {(["name", "phone", "email", "line1", "city", "state", "pincode"] as const).map((field) => (
          <label key={field} className="text-sm text-muted-foreground">
            {field.toUpperCase()}
            <input
              required
              value={address[field]}
              onChange={(e) => setAddress({ ...address, [field]: e.target.value })}
              className="mt-1 w-full rounded-lg border border-muted/70 bg-white px-3 py-2 text-foreground focus:border-accent focus:outline-none"
            />
          </label>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setPaymentMethod("upi")}
          className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold ${paymentMethod === "upi" ? "border-accent bg-accent/10" : "border-muted/70"}`}
        >
          UPI (Razorpay)
        </button>
        <button
          onClick={() => setPaymentMethod("cod")}
          className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold ${paymentMethod === "cod" ? "border-accent bg-accent/10" : "border-muted/70"}`}
        >
          Cash on Delivery
        </button>
      </div>
      <button
        disabled={items.length === 0 || loading}
        onClick={placeOrder}
        className="w-full rounded-full bg-accent text-white px-5 py-3 text-sm font-semibold hover:bg-accent-dark disabled:opacity-70"
      >
        {loading ? "Placing order..." : `Place order (${items.length} items)`}
      </button>
    </div>
  );
}
