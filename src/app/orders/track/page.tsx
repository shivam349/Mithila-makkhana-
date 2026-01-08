"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const router = useRouter();

  return (
    <div className="section-shell py-14 space-y-6">
      <div>
        <p className="tag">Order Tracking</p>
        <h1 className="text-3xl font-semibold">Track your Mithila shipment</h1>
        <p className="text-muted-foreground">Enter your order number to view live status.</p>
      </div>
      <div className="card p-6 space-y-3">
        <input
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="MM-2025-0001"
          className="w-full rounded-lg border border-muted/70 px-4 py-3 text-sm focus:border-accent"
        />
        <button
          onClick={() => orderNumber && router.push(`/orders/${orderNumber}`)}
          className="w-full rounded-full bg-accent text-white px-5 py-3 text-sm font-semibold hover:bg-accent-dark"
        >
          Track order
        </button>
      </div>
    </div>
  );
}
