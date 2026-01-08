export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    amount
  );

export const siteKeywords = [
  "mithila makhana",
  "darbhanga makhana",
  "bihar makhana",
  "fox nut mithila",
  "lotus seeds",
  "mithila superfood",
];

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mithila-makhana.example";

export const schemaScript = (json: object) => ({
  __html: JSON.stringify(json),
});

export const shimmer = (w: number, h: number) =>
  `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#f3f3f3" offset="20%"/>\n      <stop stop-color="#e2e2e2" offset="50%"/>\n      <stop stop-color="#f3f3f3" offset="70%"/>\n    </linearGradient>\n  </defs>\n  <rect width="${w}" height="${h}" fill="#f3f3f3"/>\n  <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>\n  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite"  />\n</svg>`
  ).toString("base64")}`;
