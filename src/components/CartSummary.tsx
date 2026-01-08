import { useCart } from "@/store/cart";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export function CartSummary() {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.productId} className="flex flex-col gap-3 rounded-xl border border-muted/70 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-muted-foreground">{formatCurrency(item.salePrice ?? item.price)}</p>
            </div>
            <button className="text-sm text-accent" onClick={() => removeItem(item.productId)}>
              Remove
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center rounded-full border px-3 py-2 text-sm">
              <button className="px-2 text-muted-foreground" onClick={() => updateQuantity(item.productId, item.quantity - 1)}>
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button className="px-2 text-muted-foreground" onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                +
              </button>
            </div>
            <div className="text-sm font-semibold">{formatCurrency((item.salePrice ?? item.price) * item.quantity)}</div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between rounded-xl border border-muted/70 bg-muted/30 p-4">
        <span className="font-semibold">Total</span>
        <span className="text-xl font-bold">{formatCurrency(total())}</span>
      </div>
      <Link
        href="/checkout"
        className="inline-flex w-full items-center justify-center rounded-full bg-accent text-white px-5 py-3 text-sm font-semibold hover:bg-accent-dark"
      >
        Proceed to checkout
      </Link>
    </div>
  );
}
