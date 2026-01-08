import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-muted/70 bg-white">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="h-10 w-10 rounded-full bg-accent/15 grid place-items-center text-accent font-bold">MM</span>
            Authentic Mithila Makhana
          </div>
          <p className="text-sm text-muted-foreground">
            Sourced directly from Darbhanga farmers. Ethical, traceable, and packed fresh with love from Mithila.
          </p>
          <p className="text-xs text-muted-foreground">FSSAI Lic. 23021026000000</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Shop</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/products">All Products</Link>
            <Link href="/products?category=Plain Makhana">Plain</Link>
            <Link href="/products?category=Roasted Makhana">Roasted</Link>
            <Link href="/products?category=Gift Packs">Gift Packs</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/orders/track">Track Order</Link>
            <Link href="mailto:care@mithilamakhana.in">care@mithilamakhana.in</Link>
            <Link href="https://wa.me/919999999999" target="_blank">WhatsApp</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Visit</h4>
          <p className="text-sm text-muted-foreground">
            Darbhanga HQ: DMCH Road, Laheriasarai, Bihar 846004
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Factory: Industrial Estate, Hajipur</p>
        </div>
      </div>
      <div className="border-t border-muted/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mithila Makhana. Built with pride in Bihar.
      </div>
    </footer>
  );
}
