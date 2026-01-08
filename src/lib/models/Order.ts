import mongoose, { Schema, models } from "mongoose";

const CartItemSchema = new Schema(
  {
    productId: String,
    name: String,
    image: String,
    price: Number,
    salePrice: Number,
    quantity: Number,
  },
  { _id: false }
);

const AddressSchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
    line1: String,
    city: String,
    state: String,
    pincode: String,
  },
  { _id: false }
);

const OrderSchema = new Schema(
  {
    orderNumber: { type: String, unique: true },
    razorpayOrderId: String,
    status: {
      type: String,
      enum: ["processing", "packed", "shipped", "out-for-delivery", "delivered"],
      default: "processing",
    },
    items: [CartItemSchema],
    total: Number,
    address: AddressSchema,
    paymentMethod: { type: String, enum: ["upi", "cod"], default: "cod" },
    expectedBy: String,
    trackingUrl: String,
  },
  { timestamps: true }
);

export const Order = models.Order || mongoose.model("Order", OrderSchema);
