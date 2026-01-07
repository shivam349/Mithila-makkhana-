import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: 'Health Benefits of Mithila Makhana',
    excerpt:
      'Discover the amazing health benefits of makhana (fox nuts) from the Mithila region. Learn why this superfood is gaining popularity worldwide.',
    date: '2024-01-15',
    author: 'Dr. Priya Sharma',
    category: 'Health & Nutrition',
    image: 'https://placehold.co/800x400/orange/white?text=Health+Benefits',
  },
  {
    id: '2',
    title: 'Traditional Makhana Farming in Darbhanga',
    excerpt:
      'Explore the centuries-old tradition of makhana cultivation in the wetlands of Darbhanga, Bihar. A journey through our farming heritage.',
    date: '2024-01-10',
    author: 'Rajesh Kumar',
    category: 'Farming & Tradition',
    image: 'https://placehold.co/800x400/green/white?text=Traditional+Farming',
  },
  {
    id: '3',
    title: 'Delicious Makhana Recipes You Must Try',
    excerpt:
      'From savory snacks to sweet desserts, discover innovative and traditional recipes using makhana. Perfect for healthy eating.',
    date: '2024-01-05',
    author: 'Chef Anjali Singh',
    category: 'Recipes',
    image: 'https://placehold.co/800x400/red/white?text=Makhana+Recipes',
  },
  {
    id: '4',
    title: 'Why Choose Mithila Makhana Over Others',
    excerpt:
      'What makes Mithila makhana special? Learn about the unique qualities of fox nuts from the Mithila region and why quality matters.',
    date: '2024-01-01',
    author: 'Amit Verma',
    category: 'Product Guide',
    image: 'https://placehold.co/800x400/purple/white?text=Why+Mithila',
  },
  {
    id: '5',
    title: 'Makhana for Weight Loss: A Complete Guide',
    excerpt:
      'Looking to lose weight? Discover how makhana can be your perfect snacking partner. Low in calories, high in nutrition.',
    date: '2023-12-28',
    author: 'Nutritionist Deepa Roy',
    category: 'Health & Nutrition',
    image: 'https://placehold.co/800x400/blue/white?text=Weight+Loss',
  },
  {
    id: '6',
    title: 'The Cultural Significance of Makhana in Bihar',
    excerpt:
      'Makhana is more than just a snack in Bihar—it\'s part of our cultural heritage. Learn about its role in festivals and traditions.',
    date: '2023-12-25',
    author: 'Prof. Suresh Jha',
    category: 'Culture & Heritage',
    image: 'https://placehold.co/800x400/yellow/black?text=Cultural+Heritage',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mithila Makhana Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover everything about makhana - from health benefits to traditional farming methods,
            recipes, and the rich cultural heritage of Mithila region.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="h-80 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${blogPosts[0].image})` }}
              ></div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="text-orange-600 font-medium hover:text-orange-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Link href={`/blog/${post.id}`}>
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
              </Link>
              <div className="p-6">
                <div className="text-xs text-orange-600 font-medium uppercase mb-2">
                  {post.category}
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-600 transition">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-orange-100 mb-6">
            Subscribe to our newsletter for the latest articles, recipes, and health tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
