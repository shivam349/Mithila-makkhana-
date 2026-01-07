'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const addItem = useCartStore((state) => state.addItem);

  const categories = [
    { name: 'All Products', value: 'all' },
    { name: 'Plain Makhana', value: 'plain' },
    { name: 'Roasted Makhana', value: 'roasted' },
    { name: 'Flavored Makhana', value: 'flavored' },
    { name: 'Makhana Powder', value: 'powder' },
    { name: 'Gift Packs', value: 'gift-pack' },
  ];

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = selectedCategory === 'all' 
        ? '/api/products'
        : `/api/products?category=${selectedCategory}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (response.ok) {
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    toast.success('Added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Premium Makhana Collection
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === cat.value
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            } shadow-md`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <p className="text-xl text-gray-600">No products found</p>
          <p className="text-gray-500 mt-2">Check back soon for new arrivals!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl">🌾</span>
                  </div>
                  {product.discountPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {calculateDiscount(product.price, product.discountPrice)}% OFF
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-4">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-600">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {product.weight && (
                  <p className="text-sm text-gray-500 mb-2">
                    Weight: {product.weight}
                  </p>
                )}

                <div className="flex items-center gap-2 mb-3">
                  {product.discountPrice ? (
                    <>
                      <span className="text-2xl font-bold text-orange-600">
                        {formatPrice(product.discountPrice)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(product.price)}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-orange-600">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>

                {product.stock > 0 ? (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors font-semibold"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-600 py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
