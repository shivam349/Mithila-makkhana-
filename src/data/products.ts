import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "plain",
    slug: "plain-makhana",
    name: "Plain Premium Makhana",
    category: "Plain Makhana",
    price: 499,
    salePrice: 429,
    description:
      "Handpicked large-size mithila makhana sourced directly from Darbhanga farmers. Perfect for snacking, fasting, and gourmet cooking.",
    features: [
      "Sourced from organic ponds in Darbhanga",
      "Low GI, high protein, gluten free",
      "Sun-dried and hand roasted for crunch",
    ],
    images: [
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["mithila", "superfood", "vegan"],
    stock: 120,
    rating: 4.8,
    reviews: [
      {
        id: "r1",
        user: "Anjali",
        rating: 5,
        comment: "Crisp, clean taste and authentic size. Takes me back to Bihar!",
        date: "2024-12-12",
      },
      {
        id: "r2",
        user: "Rahul",
        rating: 4,
        comment: "Great quality and quick delivery.",
        date: "2024-11-01",
      },
    ],
  },
  {
    id: "roasted",
    slug: "roasted-makhana-ghee",
    name: "Desi Ghee Roasted Makhana",
    category: "Roasted Makhana",
    price: 549,
    salePrice: 469,
    description:
      "Slow-roasted in A2 cow ghee with a whisper of black salt and pepper. A savory teatime companion.",
    features: [
      "Small batch roasted in iron kadai",
      "Seasoned with rock salt and pepper",
      "Resealable freshness lock pouch",
    ],
    images: [
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["snack", "ghee", "protein"],
    stock: 80,
    rating: 4.6,
    reviews: [
      {
        id: "r3",
        user: "Shreya",
        rating: 5,
        comment: "Balanced flavors, not too salty. Perfect evening snack!",
        date: "2024-10-08",
      },
    ],
  },
  {
    id: "flavored",
    slug: "flavored-makhana-mithila-masala",
    name: "Mithila Masala Flavored Makhana",
    category: "Flavored Makhana",
    price: 579,
    salePrice: 489,
    description:
      "Spiced with Maithili mustard, chillies, and roasted jeera inspired by Darbhanga kitchens.",
    features: [
      "Authentic Mithila spice blend",
      "Lightly roasted, zero transfat",
      "No artificial colors or flavors",
    ],
    images: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["masala", "snack", "mithila"],
    stock: 95,
    rating: 4.7,
    reviews: [
      {
        id: "r4",
        user: "Satyam",
        rating: 4,
        comment: "Spice level is perfect. Crunch stays even after 2 days.",
        date: "2024-09-18",
      },
    ],
  },
  {
    id: "powder",
    slug: "makhana-powder",
    name: "Stone-Ground Makhana Powder",
    category: "Makhana Powder",
    price: 429,
    salePrice: 379,
    description:
      "Finely milled makhana flour ideal for kheer, baby food, gluten-free rotis, and festival prasad.",
    features: [
      "Stone-ground for gentle heat",
      "Lab tested for purity",
      "Rich in calcium and fiber",
    ],
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506084916199-7bad08f6d7e8?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["powder", "gluten-free", "baby food"],
    stock: 60,
    rating: 4.5,
    reviews: [
      {
        id: "r5",
        user: "Nidhi",
        rating: 5,
        comment: "Makes smooth kheer without lumps. Aroma is fresh!",
        date: "2024-08-05",
      },
    ],
  },
  {
    id: "gift",
    slug: "mithila-festive-gift-pack",
    name: "Mithila Festive Gift Pack",
    category: "Gift Packs",
    price: 1299,
    salePrice: 1099,
    description:
      "Curated trio of plain, roasted, and masala makhana in a Madhubani inspired gift box.",
    features: [
      "Includes handcrafted Mithila postcard",
      "Reusable tin jars",
      "Perfect for weddings and festivals",
    ],
    images: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["gift", "festive", "premium"],
    stock: 40,
    rating: 4.9,
    reviews: [
      {
        id: "r6",
        user: "Priyanka",
        rating: 5,
        comment: "Packaging is beautiful. Sent it to relatives and they loved it!",
        date: "2024-12-25",
      },
    ],
  },
];
