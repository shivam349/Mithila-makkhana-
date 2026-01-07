'use client';

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const shippingPrice = totalPrice > 500 ? 0 : 50;
  const taxPrice = totalPrice * 0.05; // 5% tax
  const grandTotal = totalPrice + shippingPrice + taxPrice;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-7xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some delicious Mithila Makhana to your cart!</p>
        <Link
          href="/products"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart ({totalItems} items)</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const price = item.product.discountPrice || item.product.price;
            const itemTotal = price * item.quantity;

            return (
              <div key={item.product._id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">🌾</span>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="text-lg font-semibold text-gray-800 hover:text-orange-600 mb-2"
                    >
                      {item.product.name}
                    </Link>
                    {item.product.weight && (
                      <p className="text-sm text-gray-600">Weight: {item.product.weight}</p>
                    )}
                    <p className="text-xl font-bold text-orange-600 mt-2">
                      {formatPrice(price)}
                    </p>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.product._id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>

                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x border-gray-300">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={item.quantity >= item.product.stock}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-lg font-bold text-gray-800 mt-2">
                      {formatPrice(itemTotal)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({totalItems} items)</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>
                  {shippingPrice === 0 ? (
                    <span className="text-green-600 font-semibold">FREE</span>
                  ) : (
                    formatPrice(shippingPrice)
                  )}
                </span>
              </div>
              
              <div className="flex justify-between text-gray-700">
                <span>Tax (5%)</span>
                <span>{formatPrice(taxPrice)}</span>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>
            </div>

            {totalPrice < 500 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 text-sm text-orange-800">
                Add {formatPrice(500 - totalPrice)} more to get FREE shipping!
              </div>
            )}

            <Link
              href="/checkout"
              className="block w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold text-center"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/products"
              className="block w-full text-center text-orange-600 hover:text-orange-700 py-3 mt-2"
            >
              Continue Shopping
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Cash on delivery available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Easy returns within 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
