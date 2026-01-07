'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Product, Review } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Review form
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  });

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (slug) {
      fetchProduct();
      fetchReviews();
    }
  }, [slug]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${slug}`);
      const data = await response.json();
      
      if (response.ok) {
        setProduct(data.product);
      } else {
        toast.error('Product not found');
        router.push('/products');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      toast.error('Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch(`/api/products/${slug}/reviews`);
      const data = await response.json();
      
      if (response.ok) {
        setReviews(data.reviews || []);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast.success(`Added ${quantity} item(s) to cart!`);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`/api/products/${slug}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewForm),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Review submitted successfully!');
        setShowReviewForm(false);
        setReviewForm({ name: '', email: '', rating: 5, comment: '' });
        fetchReviews();
      } else {
        toast.error(data.message || 'Failed to submit review');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        <p className="mt-4 text-gray-600">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-orange-600">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-4 h-96 flex items-center justify-center">
            <span className="text-9xl">🌾</span>
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-gradient-to-br from-orange-100 to-red-100 rounded-lg h-20 flex items-center justify-center ${
                    selectedImage === idx ? 'ring-2 ring-orange-600' : ''
                  }`}
                >
                  <span className="text-2xl">🌾</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                star <= Math.round(averageRating) ? (
                  <StarIcon key={star} className="w-5 h-5 text-yellow-400" />
                ) : (
                  <StarIconOutline key={star} className="w-5 h-5 text-gray-300" />
                )
              ))}
            </div>
            <span className="text-gray-600">
              ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            {product.discountPrice ? (
              <>
                <span className="text-4xl font-bold text-orange-600">
                  {formatPrice(product.discountPrice)}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {calculateDiscount(product.price, product.discountPrice)}% OFF
                </span>
              </>
            ) : (
              <span className="text-4xl font-bold text-orange-600">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Details */}
          <div className="bg-orange-50 rounded-lg p-4 mb-6 space-y-2">
            {product.weight && (
              <div className="flex justify-between">
                <span className="text-gray-600">Weight:</span>
                <span className="font-semibold">{product.weight}</span>
              </div>
            )}
            {product.flavor && (
              <div className="flex justify-between">
                <span className="text-gray-600">Flavor:</span>
                <span className="font-semibold">{product.flavor}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-semibold capitalize">{product.category.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Availability:</span>
              <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Ingredients */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Nutritional Info */}
          {product.nutritionalInfo && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Nutritional Information:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {product.nutritionalInfo.calories && (
                  <div>Calories: {product.nutritionalInfo.calories}</div>
                )}
                {product.nutritionalInfo.protein && (
                  <div>Protein: {product.nutritionalInfo.protein}</div>
                )}
                {product.nutritionalInfo.carbs && (
                  <div>Carbs: {product.nutritionalInfo.carbs}</div>
                )}
                {product.nutritionalInfo.fat && (
                  <div>Fat: {product.nutritionalInfo.fat}</div>
                )}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          {product.stock > 0 && (
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border-t pt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Customer Reviews ({reviews.length})
          </h2>
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Write a Review
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <form onSubmit={handleSubmitReview} className="bg-orange-50 rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={reviewForm.name}
                onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={reviewForm.email}
                onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                  >
                    {star <= reviewForm.rating ? (
                      <StarIcon className="w-8 h-8 text-yellow-400" />
                    ) : (
                      <StarIconOutline className="w-8 h-8 text-gray-300" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Your Review *"
              required
              rows={4}
              value={reviewForm.comment}
              onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none mb-4"
            />

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="bg-white rounded-lg p-6 shadow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        star <= review.rating ? (
                          <StarIcon key={star} className="w-4 h-4 text-yellow-400" />
                        ) : (
                          <StarIconOutline key={star} className="w-4 h-4 text-gray-300" />
                        )
                      ))}
                    </div>
                    {review.isVerified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        {reviews.length === 0 && !showReviewForm && (
          <div className="text-center py-12 text-gray-600">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
    </div>
  );
}
