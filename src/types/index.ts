export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  category: 'plain' | 'roasted' | 'flavored' | 'powder' | 'gift-pack';
  price: number;
  discountPrice?: number;
  images: string[];
  stock: number;
  weight?: string;
  flavor?: string;
  ingredients?: string[];
  nutritionalInfo?: {
    calories?: string;
    protein?: string;
    carbs?: string;
    fat?: string;
  };
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface Review {
  _id: string;
  product: string;
  name: string;
  email?: string;
  rating: number;
  comment: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  user?: {
    name: string;
    email: string;
    phone: string;
  };
  items: {
    product: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  shippingAddress: ShippingAddress;
  paymentMethod: 'COD' | 'UPI' | 'RAZORPAY';
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentId?: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  deliveredAt?: string;
  createdAt: string;
  updatedAt: string;
}
