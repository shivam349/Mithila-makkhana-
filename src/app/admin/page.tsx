import { AdminPanel } from "@/components/AdminPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage products and orders for Mithila Makhana.",
};

export default function AdminPage() {
  return (
    <div className="section-shell py-14 space-y-6">
      <div>
        <p className="tag">Admin</p>
        <h1 className="text-3xl font-semibold">Inventory & Orders</h1>
      </div>
      <AdminPanel />
    </div>
  );
}
