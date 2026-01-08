import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-shell py-16">
      <div className="card p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-white to-white pointer-events-none" />
        <div className="relative grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="tag">Mithila Promise</p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              From Darbhanga ponds to your table with freshness, fairness, and traceability.
            </h2>
            <p className="text-muted-foreground text-lg">
              We pay farmer-first prices, test every lot, and roast in small batches. Every pack tells you the harvest lot and roasting date.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-foreground">
              <span className="rounded-full bg-muted px-3 py-1">COD & UPI</span>
              <span className="rounded-full bg-muted px-3 py-1">Same-day dispatch</span>
              <span className="rounded-full bg-muted px-3 py-1">Eco-friendly packs</span>
            </div>
            <div className="flex gap-3">
              <Link href="/checkout" className="rounded-full bg-accent text-white px-5 py-3 text-sm font-semibold hover:bg-accent-dark">
                Start checkout
              </Link>
              <Link href="/products" className="rounded-full border px-5 py-3 text-sm font-semibold text-foreground hover:border-accent">
                Explore products
              </Link>
            </div>
          </div>
          <div className="grid gap-3 text-sm text-muted-foreground">
            <div className="rounded-xl border border-muted/70 bg-white/70 p-4">
              <p className="text-xs uppercase tracking-wide text-accent">Sustainability</p>
              <p className="text-base text-foreground font-semibold">Rainfed ponds, low-water crop</p>
              <p>Lotus seeds thrive in natural ponds, conserving water versus cash crops. We reuse husk waste as organic fuel.</p>
            </div>
            <div className="rounded-xl border border-muted/70 bg-white/70 p-4">
              <p className="text-xs uppercase tracking-wide text-accent">Community</p>
              <p className="text-base text-foreground font-semibold">200+ farmer families onboarded</p>
              <p>We host price-transparency circles and offer harvest advances so farmers never have to undersell their lot.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
