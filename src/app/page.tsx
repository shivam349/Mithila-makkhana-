import Link from 'next/link';

export default function HomePage() {
  const categories = [
    { name: 'Plain Makhana', slug: 'plain', icon: '🥣', description: 'Pure and natural' },
    { name: 'Roasted Makhana', slug: 'roasted', icon: '🔥', description: 'Crispy and healthy' },
    { name: 'Flavored Makhana', slug: 'flavored', icon: '✨', description: 'Delicious varieties' },
    { name: 'Makhana Powder', slug: 'powder', icon: '🌾', description: 'Versatile ingredient' },
    { name: 'Gift Packs', slug: 'gift-pack', icon: '🎁', description: 'Perfect for gifting' },
  ];

  const features = [
    { icon: '🌿', title: 'Organic', description: 'Naturally grown in Mithila' },
    { icon: '✅', title: 'Certified', description: 'Quality assured products' },
    { icon: '🚚', title: 'Fast Delivery', description: 'Quick shipping across India' },
    { icon: '💯', title: 'Authentic', description: 'Directly from Darbhanga' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Authentic Mithila Makhana
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Premium Fox Nuts from the Heart of Darbhanga, Bihar
            </p>
            <p className="text-lg mb-8">
              Experience the rich heritage of Mithila region with our traditionally harvested, 
              premium quality makhana - a superfood loved across generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors shadow-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Mithila Makhana */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                The Heritage of Mithila Makhana
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Mithila Makhana, also known as fox nuts or lotus seeds, is a traditional superfood 
                  from the pristine wetlands of Darbhanga in Bihar&apos;s Mithila region.
                </p>
                <p>
                  For centuries, farmers in this region have been cultivating these precious seeds 
                  using age-old techniques passed down through generations.
                </p>
                <p>
                  Our makhana is hand-harvested from natural ponds and carefully processed to 
                  preserve its nutritional value and authentic taste.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Rich in protein and low in calories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Excellent source of antioxidants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Perfect for weight management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Ideal for diabetics and heart health</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/blog"
                className="inline-block mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Learn More About Benefits
              </Link>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌾</div>
                  <p className="text-gray-700 font-semibold">Authentic Mithila Farming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Taste of Mithila
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Order now and get authentic Darbhanga makhana delivered to your doorstep
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
