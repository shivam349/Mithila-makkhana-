import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Mithila Theme */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                🌾 Authentic from Darbhanga, Bihar
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Premium <span className="text-orange-600">Mithila Makhana</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the authentic taste of fox nuts from the heartland of Mithila region. 
                Traditionally farmed, naturally nutritious, and lovingly packed for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg">Shop Now</Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-orange-600">100%</p>
                  <p className="text-sm text-gray-600">Authentic</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">500+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">4.8★</p>
                  <p className="text-sm text-gray-600">Avg Rating</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative h-96 md:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center text-9xl">
                🌾
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Mithila Heritage</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mithila Makhana comes from the ancient Mithila region of Darbhanga, Bihar, 
              where fox nut cultivation has been a tradition for centuries. The wetlands 
              and ponds of this region provide the perfect natural ecosystem for growing 
              the finest quality makhana. Our farmers follow traditional methods passed 
              down through generations, ensuring each kernel is carefully harvested and 
              processed to preserve its natural goodness.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3">
                <div className="text-5xl">🌱</div>
                <h3 className="text-xl font-semibold">Traditional Farming</h3>
                <p className="text-gray-600">
                  Grown in natural wetlands using age-old techniques
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl">✋</div>
                <h3 className="text-xl font-semibold">Hand-picked Quality</h3>
                <p className="text-gray-600">
                  Each seed is carefully selected and processed
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl">💚</div>
                <h3 className="text-xl font-semibold">100% Natural</h3>
                <p className="text-gray-600">
                  No chemicals, just pure goodness from nature
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Products</h2>
            <p className="text-lg text-gray-600">
              From plain to flavored, we have something for everyone
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/products?category=plain">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center text-7xl">
                  🌾
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                    Plain Makhana
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Pure and natural, perfect for healthy snacking
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/products?category=roasted">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center text-7xl">
                  🔥
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                    Roasted Makhana
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Crispy and crunchy, lightly roasted to perfection
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/products?category=flavored">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-7xl">
                  🌶️
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                    Flavored Makhana
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Exciting flavors like masala, pudina, and more
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/products">
              <Button size="lg">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Makhana?</h2>
            <p className="text-lg text-gray-600">
              A superfood packed with nutrition and health benefits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-semibold text-gray-900 mb-2">High in Protein</h3>
              <p className="text-sm text-gray-600">Great source of plant-based protein</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Low in Calories</h3>
              <p className="text-sm text-gray-600">Perfect for weight management</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Heart Healthy</h3>
              <p className="text-sm text-gray-600">Low in sodium and cholesterol</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rich in Antioxidants</h3>
              <p className="text-sm text-gray-600">Helps fight inflammation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl font-bold">Stay Updated</h2>
            <p className="text-xl">
              Subscribe to our newsletter for exclusive offers, recipes, and health tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button
                type="submit"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
