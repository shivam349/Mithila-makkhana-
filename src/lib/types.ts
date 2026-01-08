export type Review = {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  description: string;
  features: string[];
  images: string[];
  tags: string[];
  stock: number;
  rating: number;
  reviews: Review[];
};

export type CartItem = {
  productId: string;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  quantity: number;
};

export type Address = {
  name: string;
  phone: string;
  email: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
};

export type OrderStatus = "processing" | "packed" | "shipped" | "out-for-delivery" | "delivered";

export type Order = {
  id: string;
  orderNumber: string;
  razorpayOrderId?: string;
  status: OrderStatus;
  items: CartItem[];
  total: number;
  address: Address;
  paymentMethod: "upi" | "cod";
  createdAt: string;
  expectedBy: string;
  trackingUrl?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
};
