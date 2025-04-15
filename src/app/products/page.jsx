// app/products/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';

const Products = () => {
  const albums = [
    {
      id: 1,
      title: "70s Rock Anthology",
      price: 29.99,
      image: "/70s-anthology.jpg",
      era: "1970s",
      tracks: 24,
      format: "Vinyl + Digital"
    },
    {
      id: 2,
      title: "Live at Wembley '75",
      price: 34.99,
      image: "/live-wembley.jpg",
      era: "1970s",
      tracks: 18,
      format: "2xLP Box Set"
    },
    {
      id: 3,
      title: "Studio Masterpieces",
      price: 27.99,
      image: "/studio-master.jpg",
      era: "1960s-1980s",
      tracks: 30,
      format: "3xCD Collection"
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-orange-900/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-orange-300">Verve Digital</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link href="/cart" className="text-orange-100 hover:text-white px-3 py-2 text-lg font-medium">
                  Home
                </Link>
                <Link href="/cart" className="text-orange-100 hover:text-white px-3 py-2 text-lg font-medium">
                  Cart
                </Link>
                <Link href="/products" className="text-orange-100 hover:text-white px-3 py-2 text-lg font-medium">
                  Products
                </Link>
                <Link href="/about" className="text-orange-100 hover:text-white px-3 py-2 text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-orange-100 hover:text-white px-3 py-2 text-lg font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-orange-900/40 to-gray-900">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-100 mb-8 leading-tight">
              Premium Rock Collections<br/>
              <span className="text-orange-400">Curated for True Fans</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Product Filters */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="w-full md:w-auto">
              <label className="text-orange-200 text-lg mr-4">Filter by Era:</label>
              <select className="bg-gray-700 text-orange-100 p-3 rounded-lg w-full md:w-64">
                <option>All Eras</option>
                <option>1960s</option>
                <option>1970s</option>
                <option>1980s</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <label className="text-orange-200 text-lg mr-4">Sort by:</label>
              <select className="bg-gray-700 text-orange-100 p-3 rounded-lg w-full md:w-64">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Release Date</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {albums.map((album) => (
              <div key={album.id} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-square mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-orange-300 mb-2">{album.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-100"><span className="font-semibold">Era:</span> {album.era}</p>
                  <p className="text-orange-100"><span className="font-semibold">Format:</span> {album.format}</p>
                  <p className="text-orange-100"><span className="font-semibold">Tracks:</span> {album.tracks}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-orange-400">${album.price}</p>
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-300 mb-16">What Our Listeners Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "The quality of these remasters took me right back to my youth. Perfect for my vinyl setup!",
                author: "James P., 68"
              },
              {
                quote: "Customer service helped me set up my digital collection - patient and knowledgeable!",
                author: "Margaret S., 72"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-orange-900/20 p-8 rounded-xl">
                <p className="text-orange-100 text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-orange-300 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange-900/20 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-orange-300 mb-8">Need Help Choosing?</h2>
            <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto">
              Our senior support specialists are available 24/7 to guide your selection
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-orange-700 transition-colors">
                Call Now: 1-800-ROCK-123
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-orange-900/20 text-orange-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-orange-300 text-xl font-bold mb-4">Verve Digital</h3>
              <p className="text-sm">Preserving rock heritage since 1998</p>
            </div>
            <div>
              <h4 className="text-orange-300 text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:text-orange-400">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-orange-400">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-300 text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li>24/7 Support: 1-800-ROCK-123</li>
                <li>Email: help@vervedigital.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-300 text-lg mb-4">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="p-2 rounded-l-lg flex-1 bg-gray-700" />
                <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-900 text-center">
            <p>&copy; 2024 Verve Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;