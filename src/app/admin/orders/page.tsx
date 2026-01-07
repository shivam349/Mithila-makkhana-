'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const dummyOrders = [
  {
    _id: '1',
    orderNumber: 'MM1705494823123',
    shippingAddress: { fullName: 'Rajesh Kumar' },
    totalPrice: 847,
    status: 'shipped',
    isPaid: true,
    createdAt: '2024-01-15',
  },
  {
    _id: '2',
    orderNumber: 'MM1705494823124',
    shippingAddress: { fullName: 'Priya Singh' },
    totalPrice: 1299,
    status: 'processing',
    isPaid: true,
    createdAt: '2024-01-15',
  },
  {
    _id: '3',
    orderNumber: 'MM1705494823125',
    shippingAddress: { fullName: 'Amit Sharma' },
    totalPrice: 599,
    status: 'delivered',
    isPaid: true,
    createdAt: '2024-01-14',
  },
  {
    _id: '4',
    orderNumber: 'MM1705494823126',
    shippingAddress: { fullName: 'Neha Gupta' },
    totalPrice: 799,
    status: 'pending',
    isPaid: false,
    createdAt: '2024-01-14',
  },
];

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState(dummyOrders);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const filteredOrders =
    filterStatus === 'all' ? orders : orders.filter((o) => o.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    setOrders(
      orders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/admin/dashboard" className="text-orange-600 hover:text-orange-700">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Orders</h1>

          {/* Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Order Number</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Customer</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Amount</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Payment</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Date</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order._id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-mono text-sm">{order.orderNumber}</td>
                    <td className="py-4 px-6 font-medium">{order.shippingAddress.fullName}</td>
                    <td className="py-4 px-6 font-semibold">₹{order.totalPrice}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          order.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {order.isPaid ? 'Paid' : 'Unpaid'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getStatusColor(
                          order.status
                        )}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">{order.createdAt}</td>
                    <td className="py-4 px-6">
                      <Link
                        href={`/order?id=${order.orderNumber}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        target="_blank"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl mt-8">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-gray-600 text-lg">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
}
