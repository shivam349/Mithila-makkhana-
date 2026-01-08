"use client";

import { products as sampleProducts } from "@/data/products";
import { useState } from "react";

const emptyProduct = {
  name: "",
  slug: "",
  category: "Plain Makhana",
  price: 0,
  salePrice: 0,
  stock: 0,
  description: "",
  image: "",
};

export function AdminPanel() {
  const [product, setProduct] = useState(emptyProduct);
  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState<any[]>([]);

  const handleProductSave = async () => {
    setMessage("Saving...");
    const payload = {
      name: product.name,
      slug: product.slug,
      category: product.category,
      price: Number(product.price),
      salePrice: Number(product.salePrice) || undefined,
      stock: Number(product.stock),
      description: product.description,
      images: product.image ? [product.image] : [],
      features: [],
      tags: [],
      rating: 0,
      reviews: [],
    };
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setMessage(res.ok ? "Product saved" : "Error saving product");
    if (res.ok) setProduct(emptyProduct);
  };

  const fetchOrders = async () => {
    const res = await fetch("/api/orders");
    const data = await res.json();
    setOrders(data.orders ?? []);
  };

  return (
    <div className="space-y-6">
      <div className="card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="tag">Admin</p>
            <h2 className="text-xl font-semibold">Add / Edit Product</h2>
          </div>
          {message && <p className="text-sm text-accent">{message}</p>}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {(["name", "slug", "category", "price", "salePrice", "stock", "image"] as const).map((field) => (
            <label key={field} className="text-sm text-muted-foreground">
              {field.toUpperCase()}
              <input
                value={(product as any)[field]}
                onChange={(e) => setProduct({ ...product, [field]: e.target.value })}
                className="mt-1 w-full rounded-lg border border-muted/70 px-3 py-2 text-sm"
              />
            </label>
          ))}
          <label className="md:col-span-2 text-sm text-muted-foreground">
            DESCRIPTION
            <textarea
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              className="mt-1 w-full rounded-lg border border-muted/70 px-3 py-2 text-sm"
              rows={3}
            />
          </label>
        </div>
        <button
          onClick={handleProductSave}
          className="rounded-full bg-accent text-white px-5 py-3 text-sm font-semibold hover:bg-accent-dark"
        >
          Save product
        </button>
      </div>

      <div className="card p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Inventory snapshot</h3>
          <button onClick={fetchOrders} className="text-sm text-accent">Refresh orders</button>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {sampleProducts.map((p) => (
            <div key={p.id} className="rounded-xl border border-muted/60 p-4">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-muted-foreground">Stock: {p.stock} • Price: ₹{p.salePrice ?? p.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Orders</h3>
          <button onClick={fetchOrders} className="text-sm text-accent">Load orders</button>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {orders.length === 0 && <p className="text-sm text-muted-foreground">No orders yet.</p>}
          {orders.map((order) => (
            <div key={order.orderNumber} className="rounded-xl border border-muted/60 p-4">
              <p className="font-semibold">{order.orderNumber}</p>
              <p className="text-sm text-muted-foreground">{order.items?.length} items • {order.paymentMethod?.toUpperCase()}</p>
              <p className="text-sm text-muted-foreground">Status: {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
