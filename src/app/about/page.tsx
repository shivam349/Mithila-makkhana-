import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mithila Makhana</h1>
            <p className="text-xl">
              Bringing the authentic taste of Bihar&apos;s Mithila region to your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mithila Makhana is rooted in the rich agricultural heritage of Darbhanga, Bihar - 
                the heartland of India&apos;s finest fox nuts. For generations, farmers in the Mithila 
                region have been cultivating these precious seeds in the pristine wetlands, using 
                traditional methods passed down through centuries.
              </p>
              <p>
                Our journey began with a simple mission: to bring the authentic, nutritious, and 
                delicious Mithila Makhana to health-conscious consumers across India. We work 
                directly with local farmers, ensuring fair prices and sustainable farming practices 
                that benefit both the community and the environment.
              </p>
              <p>
                Every pack of Mithila Makhana carries the legacy of Mithila&apos;s agricultural excellence, 
                carefully harvested, processed, and packaged to preserve its natural goodness and 
                authentic flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">100% Authentic</h3>
              <p className="text-gray-600">
                Sourced directly from Darbhanga, Bihar - the original home of premium makhana
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Natural & Organic</h3>
              <p className="text-gray-600">
                Grown without harmful chemicals, processed using traditional methods
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">👨‍🌾</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Farmer Direct</h3>
              <p className="text-gray-600">
                Supporting local farmers with fair prices and sustainable practices
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorous quality checks to ensure only the best makhana reaches you
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Nutritious</h3>
              <p className="text-gray-600">
                Rich in protein, low in calories, perfect for healthy snacking
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fresh Packaging</h3>
              <p className="text-gray-600">
                Sealed to maintain freshness and delivered quickly to your door
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mithila Difference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">The Mithila Difference</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Perfect Growing Conditions</h3>
                <p className="text-gray-700">
                  The unique climate and water quality of Bihar&apos;s Mithila region create ideal 
                  conditions for growing premium quality makhana. The natural ponds and wetlands 
                  provide the perfect ecosystem for lotus cultivation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Traditional Processing</h3>
                <p className="text-gray-700">
                  Our makhana is processed using time-tested methods that preserve its nutritional 
                  value and natural flavor. Each batch is carefully roasted to achieve the perfect 
                  crunch without any artificial additives.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Practices</h3>
                <p className="text-gray-700">
                  We believe in responsible sourcing and sustainable agriculture. Our partnership 
                  with local farmers ensures environmentally friendly farming practices that protect 
                  the natural ecosystem while providing livelihood to rural communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Authentic Mithila Makhana</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers enjoying healthy, delicious makhana
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
