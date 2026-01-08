import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf5ea] via-white to-[#f0e2d4]">
      <div className="absolute inset-0 opacity-50">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=80"
          alt="Makhana ponds in Mithila"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30" />
      </div>
      <div className="section-shell relative py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="tag w-fit bg-white/80">Darbhanga • Mithila • FSSAI Certified</div>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Authentic Mithila Makhana crafted with the heritage of Darbhanga ponds.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Traceable supply chain, artisanal roasting, and Madhubani-inspired packaging that celebrates the heart of Bihar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3 font-medium shadow-sm hover:bg-accent-dark"
              >
                Shop Mithila Collection
              </Link>
              <Link
                href="/orders/track"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 font-medium text-foreground hover:border-accent"
              >
                Track your order
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" />Direct from farmers</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" />Lab tested purity</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" />Free shipping over ₹699</span>
            </div>
          </div>
          <div className="relative h-[420px] w-full">
            <div className="absolute inset-0 card p-4 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                alt="Bowl of roasted makhana"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -left-8 -bottom-6 hidden md:block h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -right-6 -top-8 hidden md:block h-32 w-32 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute -left-6 top-1/4 card p-4 w-40">
              <p className="text-xs text-muted-foreground">Farmer Partner</p>
              <p className="font-semibold">Laheriasarai, Darbhanga</p>
              <p className="text-xs text-muted-foreground">Harvest 2025 • Lot #MM-18</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
