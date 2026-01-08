import { Order } from "@/lib/types";
import { CheckCircle2, MapPin, Truck, PackageCheck } from "lucide-react";
import React from "react";

const statusSteps: { key: Order["status"]; label: string; icon: React.ComponentType<{ size?: number }>; }[] = [
  { key: "processing", label: "Processing", icon: PackageCheck },
  { key: "packed", label: "Packed", icon: CheckCircle2 },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "out-for-delivery", label: "Out for delivery", icon: MapPin },
  { key: "delivered", label: "Delivered", icon: CheckCircle2 },
];

export function OrderTracker({ order }: { order: Order }) {
  return (
    <div className="card p-6 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Order</p>
          <p className="font-semibold">{order.orderNumber}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          Expected by <span className="font-semibold text-foreground">{order.expectedBy}</span>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-5">
        {statusSteps.map((step, index) => {
          const Icon = step.icon;
          const activeIndex = statusSteps.findIndex((s) => s.key === order.status);
          const isActive = index <= activeIndex;
          return (
            <div key={step.key} className={`rounded-xl border p-4 text-sm ${isActive ? "border-accent bg-accent/5" : "border-muted/70"}`}>
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Icon size={16} className={isActive ? "text-accent" : "text-muted-foreground"} />
                {step.label}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{isActive ? "Completed/Current" : "Pending"}</p>
            </div>
          );
        })}
      </div>
      <div className="text-sm text-muted-foreground">
        {order.trackingUrl ? (
          <a href={order.trackingUrl} target="_blank" className="text-accent font-semibold">
            View live tracking
          </a>
        ) : (
          "Tracking link will be shared post dispatch."
        )}
      </div>
    </div>
  );
}
