'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'plain', name: 'Plain Makhana' },
  { id: 'roasted', name: 'Roasted Makhana' },
  { id: 'flavored', name: 'Flavored Makhana' },
  { id: 'powder', name: 'Makhana Powder' },
  { id: 'gift-pack', name: 'Gift Packs' },
];

// Dummy products for demonstration
const dummyProducts = [
  {
    _id: '1',
    name: 'Premium Plain Makhana',
    slug: 'premium-plain-makhana',
    images: ['https://placehold.co/400x400/orange/white?text=Plain+Makhana'],
    price: 299,
    discountPrice: 249,
    category: 'plain',
    ratings: 4.5,
    reviewCount: 24,
    stock: 50,
    description: 'Pure and natural makhana from Mithila',
  },
  {
    _id: '2',
    name: 'Roasted Makhana - Classic',
    slug: 'roasted-makhana-classic',
    images: ['https://placehold.co/400x400/red/white?text=Roasted+Makhana'],
    price: 349,
    discountPrice: 299,
    category: 'roasted',
    ratings: 4.7,
    reviewCount: 45,
    stock: 30,
    description: 'Lightly roasted to perfection',
  },
  {
    _id: '3',
    name: 'Masala Flavored Makhana',
    slug: 'masala-flavored-makhana',
    images: ['https://placehold.co/400x400/green/white?text=Masala+Makhana'],
    price: 399,
    discountPrice: 349,
    category: 'flavored',
    ratings: 4.8,
    reviewCount: 67,
    stock: 25,
    description: 'Spicy masala flavored makhana',
  },
  {
    _id: '4',
    name: 'Pudina Flavored Makhana',
    slug: 'pudina-flavored-makhana',
    images: ['https://placehold.co/400x400/teal/white?text=Pudina+Makhana'],
    price: 399,
    category: 'flavored',
    ratings: 4.6,
    reviewCount: 38,
    stock: 20,
    description: 'Refreshing pudina mint flavor',
  },
  {
    _id: '5',
    name: 'Makhana Powder',
    slug: 'makhana-powder',
    images: ['https://placehold.co/400x400/yellow/black?text=Powder'],
    price: 199,
    discountPrice: 149,
    category: 'powder',
    ratings: 4.4,
    reviewCount: 15,
    stock: 40,
    description: 'Fine makhana powder for drinks',
  },
  {
    _id: '6',
    name: 'Premium Gift Pack',
    slug: 'premium-gift-pack',
    images: ['https://placehold.co/400x400/purple/white?text=Gift+Pack'],
    price: 999,
    discountPrice: 849,
    category: 'gift-pack',
    ratings: 5.0,
    reviewCount: 12,
    stock: 15,
    description: 'Assorted makhana gift box',
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState(dummyProducts);
  const [loading, setLoading] = useState(false);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Makhana Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Authentic Mithila makhana from Darbhanga, Bihar. 100% natural and traditionally processed.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                slug={product.slug}
                image={product.images[0]}
                price={product.price}
                discountPrice={product.discountPrice}
                rating={product.ratings}
                reviewCount={product.reviewCount}
                category={product.category}
              />
            ))}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders above ₹500</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">7-day return policy</p>
            </div>
            <div>
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-600">100% authentic products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
