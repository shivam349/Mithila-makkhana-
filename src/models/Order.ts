import mongoose, { Document, Schema } from 'mongoose';

export interface IOrderItem {
  product: mongoose.Types.ObjectId;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface IShippingAddress {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface IOrder extends Document {
  orderNumber: string;
  user?: {
    name: string;
    email: string;
    phone: string;
  };
  items: IOrderItem[];
  shippingAddress: IShippingAddress;
  paymentMethod: 'COD' | 'UPI' | 'RAZORPAY';
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentId?: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      name: String,
      email: String,
      phone: String,
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
      landmark: String,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['COD', 'UPI', 'RAZORPAY'],
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
    paymentId: String,
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    orderStatus: {
      type: String,
      required: true,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    trackingNumber: String,
    deliveredAt: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
