import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">🌾</div>
            <div>
              <h1 className="text-xl font-bold">Mithila Makhana</h1>
              <p className="text-xs text-orange-100">From Darbhanga, Bihar</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-orange-200 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-orange-200 transition">
              Products
            </Link>
            <Link href="/blog" className="hover:text-orange-200 transition">
              Blog
            </Link>
            <Link href="/cart" className="hover:text-orange-200 transition flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="hidden md:block px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition font-medium"
            >
              Admin
            </Link>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
