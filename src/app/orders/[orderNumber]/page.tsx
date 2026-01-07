'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Order } from '@/types';
import { formatPrice } from '@/lib/utils';

export default function OrderDetailsPage() {
  const params = useParams();
  const orderNumber = params.orderNumber as string;
  
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderNumber) {
      fetchOrder();
    }
  }, [orderNumber]);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/orders?orderNumber=${orderNumber}`);
      const data = await response.json();
      
      if (response.ok && data.order) {
        setOrder(data.order);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'processing':
        return 'text-blue-600 bg-blue-100';
      case 'shipped':
        return 'text-purple-600 bg-purple-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        <p className="mt-4 text-gray-600">Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h2>
        <p className="text-gray-600 mb-8">
          We couldn&apos;t find an order with number: <strong>{orderNumber}</strong>
        </p>
        <Link
          href="/orders/track"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Try Again
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Order #{order.orderNumber}
            </h1>
            <p className="text-gray-600">
              Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="flex gap-3">
            <span className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(order.orderStatus)}`}>
              {order.orderStatus.toUpperCase()}
            </span>
            <span className={`px-4 py-2 rounded-full font-semibold ${getPaymentStatusColor(order.paymentStatus)}`}>
              {order.paymentStatus.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Order Items and Timeline */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Timeline */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Status</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-1 ${order.orderStatus !== 'pending' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className="flex-1">
                  <div className="font-semibold">Order Placed</div>
                  <div className="text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-1 ${['processing', 'shipped', 'delivered'].includes(order.orderStatus) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className="flex-1">
                  <div className="font-semibold">Processing</div>
                  <div className="text-sm text-gray-600">We are preparing your order</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-1 ${['shipped', 'delivered'].includes(order.orderStatus) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className="flex-1">
                  <div className="font-semibold">Shipped</div>
                  <div className="text-sm text-gray-600">
                    {order.trackingNumber ? `Tracking: ${order.trackingNumber}` : 'Order in transit'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-1 ${order.orderStatus === 'delivered' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className="flex-1">
                  <div className="font-semibold">Delivered</div>
                  <div className="text-sm text-gray-600">
                    {order.deliveredAt 
                      ? new Date(order.deliveredAt).toLocaleString('en-IN')
                      : 'Estimated delivery in 3-5 days'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b last:border-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🌾</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-600">Quantity: {item.quantity}</div>
                    <div className="text-orange-600 font-semibold mt-1">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary and Shipping */}
        <div className="lg:col-span-1 space-y-6">
          {/* Shipping Address */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h2>
            <div className="text-gray-700 space-y-1">
              <div className="font-semibold">{order.shippingAddress.fullName}</div>
              <div>{order.shippingAddress.phone}</div>
              <div>{order.shippingAddress.address}</div>
              {order.shippingAddress.landmark && (
                <div>Landmark: {order.shippingAddress.landmark}</div>
              )}
              <div>
                {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
            <div className="text-gray-700">
              {order.paymentMethod === 'COD' && 'Cash on Delivery'}
              {order.paymentMethod === 'UPI' && 'UPI Payment'}
              {order.paymentMethod === 'RAZORPAY' && 'Online Payment'}
            </div>
            {order.paymentId && (
              <div className="text-sm text-gray-600 mt-2">
                Payment ID: {order.paymentId}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>{formatPrice(order.itemsPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>{formatPrice(order.shippingPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax</span>
                <span>{formatPrice(order.taxPrice)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total</span>
                  <span>{formatPrice(order.totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-orange-50 rounded-lg p-4 text-sm">
            <div className="font-semibold text-gray-800 mb-2">Need Help?</div>
            <div className="text-gray-600 space-y-1">
              <div>📧 info@mithilamakhana.com</div>
              <div>📞 +91 98765 43210</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
