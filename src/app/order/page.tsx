'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const dummyOrder = {
  orderNumber: 'MM1705494823123',
  status: 'shipped',
  createdAt: '2024-01-15',
  estimatedDelivery: '2024-01-20',
  items: [
    {
      name: 'Premium Plain Makhana',
      quantity: 2,
      price: 249,
    },
    {
      name: 'Roasted Makhana - Classic',
      quantity: 1,
      price: 299,
    },
  ],
  shippingAddress: {
    fullName: 'Rajesh Kumar',
    address: '123, Main Road, Patna',
    city: 'Patna',
    state: 'Bihar',
    pincode: '800001',
    phone: '9876543210',
  },
  totalPrice: 847,
  paymentMethod: 'UPI',
  isPaid: true,
  paidAt: '2024-01-15',
  trackingSteps: [
    { status: 'Order Placed', completed: true, date: '2024-01-15 10:30 AM' },
    { status: 'Processing', completed: true, date: '2024-01-15 02:00 PM' },
    { status: 'Shipped', completed: true, date: '2024-01-16 09:00 AM' },
    { status: 'Out for Delivery', completed: false, date: '' },
    { status: 'Delivered', completed: false, date: '' },
  ],
};

function OrderTrackingContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id');
  const [searchOrderNumber, setSearchOrderNumber] = useState('');
  const [order, setOrder] = useState(orderId ? dummyOrder : null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchOrderNumber) {
      setOrder(dummyOrder);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
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

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Track Your Order</h1>

        {!order ? (
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📦</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Enter Your Order Number
              </h2>
              <p className="text-gray-600">
                You can find your order number in the confirmation email
              </p>
            </div>

            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="mb-4">
                <Input
                  label="Order Number"
                  value={searchOrderNumber}
                  onChange={(e) => setSearchOrderNumber(e.target.value)}
                  placeholder="e.g., MM1705494823123"
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Track Order
              </Button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Order Header */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Order #{order.orderNumber}
                  </h2>
                  <p className="text-gray-600">Placed on {order.createdAt}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span
                    className={`inline-block px-4 py-2 rounded-full font-medium uppercase text-sm ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {order.status === 'shipped' && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-blue-800">
                    <strong>Expected Delivery:</strong> {order.estimatedDelivery}
                  </p>
                </div>
              )}
            </div>

            {/* Tracking Steps */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Status</h3>
              <div className="space-y-6">
                {order.trackingSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-orange-600 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {step.completed ? (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <span className="text-sm font-semibold">{index + 1}</span>
                        )}
                      </div>
                      {index < order.trackingSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-12 mx-auto my-1 ${
                            step.completed ? 'bg-orange-600' : 'bg-gray-200'
                          }`}
                        ></div>
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4
                        className={`font-semibold ${
                          step.completed ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {step.status}
                      </h4>
                      {step.date && (
                        <p className="text-sm text-gray-600 mt-1">{step.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b last:border-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>₹{order.totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h3>
              <div className="text-gray-700 space-y-1">
                <p className="font-semibold">{order.shippingAddress.fullName}</p>
                <p>{order.shippingAddress.address}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} -{' '}
                  {order.shippingAddress.pincode}
                </p>
                <p>Phone: {order.shippingAddress.phone}</p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Status</span>
                  <span
                    className={`font-medium ${
                      order.isPaid ? 'text-green-600' : 'text-orange-600'
                    }`}
                  >
                    {order.isPaid ? 'Paid' : 'Pending'}
                  </span>
                </div>
                {order.isPaid && order.paidAt && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paid On</span>
                    <span className="font-medium">{order.paidAt}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="flex-1">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => window.print()}
              >
                Print Order Details
              </Button>
            </div>

            {/* Contact Support */}
            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help with Your Order?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact us on WhatsApp for quick support
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Chat on WhatsApp</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OrderTrackingPage() {
  return (
    <Suspense fallback={
      <div className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <OrderTrackingContent />
    </Suspense>
  );
}
