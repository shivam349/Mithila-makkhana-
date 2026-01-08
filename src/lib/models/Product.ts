import mongoose, { Schema, models } from "mongoose";

const ReviewSchema = new Schema(
  {
    user: String,
    rating: Number,
    comment: String,
    date: String,
  },
  { _id: false }
);

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: String,
    price: Number,
    salePrice: Number,
    description: String,
    features: [String],
    images: [String],
    tags: [String],
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: [ReviewSchema],
  },
  { timestamps: true }
);

export const Product = models.Product || mongoose.model("Product", ProductSchema);
