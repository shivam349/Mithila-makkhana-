import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
}

export default function ProductCard({
  id,
  name,
  slug,
  image,
  price,
  discountPrice,
  rating,
  reviewCount,
  category,
}: ProductCardProps) {
  const discount = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${slug}`}>
        <div className="relative h-64 bg-gray-100">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-6xl">🌾</span>
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
              {discount}% OFF
            </div>
          )}
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium uppercase">
            {category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition">
            {name}
          </h3>
        </Link>

        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({reviewCount})</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            {discountPrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-orange-600">
                  ₹{discountPrice}
                </span>
                <span className="text-sm text-gray-500 line-through">₹{price}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">₹{price}</span>
            )}
          </div>
        </div>

        <Button className="w-full mt-4" size="md">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
