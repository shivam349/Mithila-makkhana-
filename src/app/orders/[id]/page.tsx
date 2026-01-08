import { OrderTracker } from "@/components/OrderTracker";
import { Order } from "@/lib/types";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

async function getOrder(id: string): Promise<Order | null> {
  try {
    const res = await fetch(`${base}/api/orders/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.order as Order;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return { title: `Order ${params.id} | Mithila Makhana` };
}

export default async function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = await getOrder(params.id);
  if (!order) return notFound();

  return (
    <div className="section-shell py-14 space-y-6">
      <OrderTracker order={order} />
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-3">Items</h3>
        <div className="grid gap-2 text-sm text-muted-foreground">
          {order.items.map((item) => (
            <div key={item.productId} className="flex items-center justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{(item.salePrice ?? item.price) * item.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
