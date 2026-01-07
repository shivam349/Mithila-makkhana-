'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const dummyProducts = [
  {
    _id: '1',
    name: 'Premium Plain Makhana',
    category: 'plain',
    price: 299,
    discountPrice: 249,
    stock: 50,
    featured: true,
  },
  {
    _id: '2',
    name: 'Roasted Makhana - Classic',
    category: 'roasted',
    price: 349,
    discountPrice: 299,
    stock: 30,
    featured: false,
  },
  {
    _id: '3',
    name: 'Masala Flavored Makhana',
    category: 'flavored',
    price: 399,
    discountPrice: 349,
    stock: 25,
    featured: true,
  },
];

export default function AdminProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState(dummyProducts);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/admin/dashboard" className="text-orange-600 hover:text-orange-700">
            ← Back to Dashboard
          </Link>
          <Link href="/admin/products/new">
            <Button>+ Add New Product</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Products</h1>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Product Name</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Category</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Price</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Stock</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Featured</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{product.name}</td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium uppercase">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">₹{product.discountPrice || product.price}</span>
                        {product.discountPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`font-medium ${
                          product.stock > 20
                            ? 'text-green-600'
                            : product.stock > 0
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      >
                        {product.stock} units
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {product.featured ? (
                        <span className="text-yellow-500">⭐</span>
                      ) : (
                        <span className="text-gray-300">☆</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-3">
                        <Link
                          href={`/admin/products/${product._id}`}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="text-red-600 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-gray-600 text-lg mb-4">No products found</p>
            <Link href="/admin/products/new">
              <Button>Add Your First Product</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
