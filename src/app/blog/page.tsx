import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'health-benefits-of-makhana',
      title: '10 Amazing Health Benefits of Makhana (Fox Nuts)',
      excerpt: 'Discover why makhana is considered a superfood and how it can improve your health and wellness.',
      date: '2024-01-15',
      category: 'Health & Nutrition',
      readTime: '5 min read',
    },
    {
      slug: 'makhana-recipes',
      title: 'Delicious Makhana Recipes for Every Occasion',
      excerpt: 'From snacks to desserts, explore creative ways to enjoy Mithila Makhana in your daily meals.',
      date: '2024-01-10',
      category: 'Recipes',
      readTime: '7 min read',
    },
    {
      slug: 'makhana-farming-in-mithila',
      title: 'The Art of Makhana Farming in Mithila Region',
      excerpt: 'Learn about the traditional methods and cultural significance of makhana cultivation in Darbhanga, Bihar.',
      date: '2024-01-05',
      category: 'Culture & Heritage',
      readTime: '6 min read',
    },
    {
      slug: 'makhana-for-weight-loss',
      title: 'How Makhana Can Help in Your Weight Loss Journey',
      excerpt: 'Low in calories and high in protein, makhana is the perfect snack for weight management.',
      date: '2023-12-28',
      category: 'Weight Management',
      readTime: '4 min read',
    },
    {
      slug: 'makhana-vs-other-snacks',
      title: 'Makhana vs. Other Snacks: A Nutritional Comparison',
      excerpt: 'See how makhana stacks up against popular snacks in terms of nutrition and health benefits.',
      date: '2023-12-20',
      category: 'Nutrition',
      readTime: '5 min read',
    },
    {
      slug: 'diabetic-friendly-makhana',
      title: 'Why Makhana is Perfect for Diabetics',
      excerpt: 'With low glycemic index and high fiber content, makhana is an excellent choice for diabetic-friendly snacking.',
      date: '2023-12-15',
      category: 'Health & Wellness',
      readTime: '4 min read',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Makhana Blog</h1>
            <p className="text-xl">
              Explore the world of Mithila Makhana - health, recipes, culture, and more
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Featured Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <span className="text-7xl">🌾</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-orange-600">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits Quick Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Quick Health Benefits Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">High in Protein</h3>
                <p className="text-gray-600">
                  Excellent source of plant-based protein for muscle building and repair
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Heart Healthy</h3>
                <p className="text-gray-600">
                  Low in sodium and cholesterol, promotes cardiovascular health
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Weight Management</h3>
                <p className="text-gray-600">
                  Low calorie, high satiety - perfect for healthy weight control
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Brain Function</h3>
                <p className="text-gray-600">
                  Rich in antioxidants that support cognitive health and memory
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🩸</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Blood Sugar Control</h3>
                <p className="text-gray-600">
                  Low glycemic index helps manage blood sugar levels
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🦴</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bone Health</h3>
                <p className="text-gray-600">
                  Rich in calcium and magnesium for strong bones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for health tips, recipes, and exclusive offers
          </p>
          <Link
            href="/#newsletter"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}
