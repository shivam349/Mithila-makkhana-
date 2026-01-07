'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function TrackOrderPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderNumber.trim()) {
      toast.error('Please enter an order number');
      return;
    }

    setLoading(true);
    router.push(`/orders/${orderNumber.trim()}`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Track Your Order</h1>
          <p className="text-gray-600">
            Enter your order number to track your shipment
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Order Number
              </label>
              <input
                type="text"
                placeholder="MM12345678"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                You can find your order number in the confirmation email
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Track Order'}
            </button>
          </form>
        </div>

        <div className="mt-8 bg-orange-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-3">Need Help?</h3>
          <p className="text-gray-600 text-sm mb-3">
            If you have any questions about your order, feel free to contact us:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <span>📧</span>
              <span>info@mithilamakhana.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span>📞</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
