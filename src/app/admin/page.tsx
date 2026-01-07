'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalProducts: 0,
    pendingOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchStats();
  }, []);

  const fetchStats = async () => {
    // In a real application, this would fetch from API
    // For now, using placeholder data
    setStats({
      totalOrders: 0,
      totalProducts: 0,
      pendingOrders: 0,
      totalRevenue: 0,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-orange-600 hover:text-orange-700">
                View Website
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm mb-2">Total Orders</div>
            <div className="text-3xl font-bold text-gray-800">{stats.totalOrders}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm mb-2">Total Products</div>
            <div className="text-3xl font-bold text-gray-800">{stats.totalProducts}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm mb-2">Pending Orders</div>
            <div className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-600 text-sm mb-2">Total Revenue</div>
            <div className="text-3xl font-bold text-green-600">₹{stats.totalRevenue}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/admin/products"
              className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-colors"
            >
              <div className="text-3xl mb-2">📦</div>
              <div className="font-semibold">Manage Products</div>
              <div className="text-sm text-orange-100 mt-1">Add, edit, or delete products</div>
            </Link>

            <Link
              href="/admin/orders"
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-colors"
            >
              <div className="text-3xl mb-2">🛒</div>
              <div className="font-semibold">View Orders</div>
              <div className="text-sm text-blue-100 mt-1">Manage customer orders</div>
            </Link>

            <Link
              href="/products"
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-colors"
            >
              <div className="text-3xl mb-2">🌐</div>
              <div className="font-semibold">View Website</div>
              <div className="text-sm text-green-100 mt-1">See the live website</div>
            </Link>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Getting Started</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">1.</span>
              <div>
                <strong>Add Products:</strong> Start by adding your makhana products with details, pricing, and images.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">2.</span>
              <div>
                <strong>Manage Orders:</strong> View and update order statuses as they come in.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">3.</span>
              <div>
                <strong>Monitor Inventory:</strong> Keep track of stock levels and update as needed.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">4.</span>
              <div>
                <strong>Configure Settings:</strong> Set up payment methods, shipping rates, and other settings in your .env file.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
