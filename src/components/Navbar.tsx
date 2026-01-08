"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cart";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/orders/track", label: "Track" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-muted/70">
      <div className="section-shell flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
          <div className="h-10 w-10 rounded-full bg-accent/15 grid place-items-center text-accent font-bold">
            MM
          </div>
          <div className="leading-tight">
            <div>Authentic Mithila Makhana</div>
            <p className="text-xs text-muted-foreground">Darbhanga, Bihar</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${pathname === item.href ? "text-accent" : "text-muted-foreground hover:text-accent"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/919999999999"
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-accent text-white px-3 py-2 text-xs shadow-sm hover:bg-accent-dark"
          >
            <PhoneCall size={14} /> WhatsApp
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:border-accent"
          >
            <ShoppingBag size={16} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 h-5 min-w-5 rounded-full bg-accent text-white text-xs grid place-items-center px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden rounded-full border p-2 text-muted-foreground"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-muted/80 bg-white">
          <div className="section-shell flex flex-col gap-3 py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition-colors ${pathname === item.href ? "text-accent" : "text-muted-foreground hover:text-accent"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/cart" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <ShoppingBag size={16} /> Cart ({cartCount})
            </Link>
            <Link
              href="https://wa.me/919999999999"
              target="_blank"
              className="flex items-center gap-2 text-accent"
              onClick={() => setOpen(false)}
            >
              <PhoneCall size={14} /> WhatsApp Support
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
