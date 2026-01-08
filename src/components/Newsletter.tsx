"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("sent");
      setEmail("");
    } catch (error) {
      setStatus("idle");
    }
  };

  return (
    <section className="section-shell py-14">
      <div className="card p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="tag">Newsletter</p>
            <h3 className="text-2xl font-semibold">Get Mithila harvest updates</h3>
            <p className="text-muted-foreground text-sm mt-2">
              Farmer stories, new flavors, festival drops, and wellness tips—no spam, only makhana love.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row md:items-center">
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-muted/80 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-accent text-white px-5 py-3 text-sm font-semibold hover:bg-accent-dark disabled:opacity-70"
            >
              {status === "sent" ? "Added" : status === "loading" ? "Adding..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
