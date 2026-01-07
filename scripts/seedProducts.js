const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
  category: String,
  price: Number,
  discountPrice: Number,
  images: [String],
  stock: Number,
  weight: String,
  flavor: String,
  ingredients: [String],
  isFeatured: Boolean,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

const sampleProducts = [
  {
    name: 'Premium Plain Makhana - 500g',
    slug: 'premium-plain-makhana-500g',
    description: 'Premium quality plain makhana from the pristine wetlands of Darbhanga. Perfect for roasting, making kheer, or enjoying as a healthy snack.',
    category: 'plain',
    price: 450,
    discountPrice: 399,
    images: ['https://placeholder.com/400x400'],
    stock: 100,
    weight: '500g',
    ingredients: ['100% Natural Makhana'],
    isFeatured: true,
    isActive: true,
  },
  {
    name: 'Roasted Makhana - 250g',
    slug: 'roasted-makhana-250g',
    description: 'Lightly roasted makhana with a perfect crunch. Ready to eat, no preparation needed. Low calorie and high protein snack.',
    category: 'roasted',
    price: 250,
    discountPrice: 225,
    images: ['https://placeholder.com/400x400'],
    stock: 150,
    weight: '250g',
    ingredients: ['Makhana', 'Edible Oil', 'Salt'],
    isFeatured: true,
    isActive: true,
  },
  {
    name: 'Peri Peri Flavored Makhana - 200g',
    slug: 'peri-peri-flavored-makhana-200g',
    description: 'Spicy peri peri flavored makhana for those who love a kick. Perfect evening snack with tea or coffee.',
    category: 'flavored',
    price: 220,
    discountPrice: 199,
    images: ['https://placeholder.com/400x400'],
    stock: 80,
    weight: '200g',
    flavor: 'Peri Peri',
    ingredients: ['Makhana', 'Peri Peri Seasoning', 'Edible Oil', 'Salt'],
    isFeatured: false,
    isActive: true,
  },
  {
    name: 'Cream & Onion Makhana - 200g',
    slug: 'cream-onion-makhana-200g',
    description: 'Classic cream and onion flavor that everyone loves. Guilt-free snacking with amazing taste.',
    category: 'flavored',
    price: 220,
    discountPrice: 199,
    images: ['https://placeholder.com/400x400'],
    stock: 80,
    weight: '200g',
    flavor: 'Cream & Onion',
    ingredients: ['Makhana', 'Cream & Onion Seasoning', 'Edible Oil'],
    isFeatured: false,
    isActive: true,
  },
  {
    name: 'Makhana Powder - 200g',
    slug: 'makhana-powder-200g',
    description: 'Finely ground makhana powder. Perfect for making kheer, laddoos, or adding to smoothies for extra nutrition.',
    category: 'powder',
    price: 280,
    discountPrice: 249,
    images: ['https://placeholder.com/400x400'],
    stock: 60,
    weight: '200g',
    ingredients: ['100% Ground Makhana'],
    isFeatured: false,
    isActive: true,
  },
  {
    name: 'Premium Gift Pack - 1kg',
    slug: 'premium-gift-pack-1kg',
    description: 'Beautifully packaged assorted makhana gift pack. Includes plain, roasted, and flavored varieties. Perfect for gifting.',
    category: 'gift-pack',
    price: 999,
    discountPrice: 899,
    images: ['https://placeholder.com/400x400'],
    stock: 40,
    weight: '1kg',
    ingredients: ['Assorted Makhana Products'],
    isFeatured: true,
    isActive: true,
  },
];

async function seedProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products (optional)
    // await Product.deleteMany({});
    // console.log('Cleared existing products');

    // Insert sample products
    for (const productData of sampleProducts) {
      const existing = await Product.findOne({ slug: productData.slug });
      if (!existing) {
        await Product.create({
          ...productData,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        console.log(`Created: ${productData.name}`);
      } else {
        console.log(`Skipped (already exists): ${productData.name}`);
      }
    }

    console.log('\nSample products seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();
