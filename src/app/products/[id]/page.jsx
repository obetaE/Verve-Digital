// app/products/[id]/page.jsx
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';

const ProductPage = () => {
  // Mock product data - replace with actual data fetching
  const product = {
    id: 1,
    title: "70s Rock Anthology",
    price: 29.99,
    images: [
      "/70s-anthology-1.jpg",
      "/70s-anthology-2.jpg",
      "/70s-anthology-3.jpg"
    ],
    description: "A curated collection of the greatest rock hits from the 1970s, remastered for optimal audio quality.",
    formatOptions: ["Vinyl + Digital", "CD Box Set", "Digital Only"],
    tracklist: [
      "Stairway to Heaven - Led Zeppelin",
      "Bohemian Rhapsody - Queen",
      "Hotel California - Eagles",
      // ... more tracks
    ],
    details: {
      releaseDate: "2024-03-01",
      totalDuration: "2h 48m",
      label: "Verve Classics"
    }
  };

  const [selectedFormat, setSelectedFormat] = useState(product.formatOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]);

  const addToCart = () => {
    // Implement cart logic here
    console.log(`Added ${quantity} ${selectedFormat} of ${product.title} to cart`);
  };

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

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-orange-300">
          <Link href="/products" className="hover:text-orange-400">
            Products
          </Link> / <span className="text-orange-100">{product.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-gray-800 rounded-xl overflow-hidden">
              <Image
                src={mainImage}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    mainImage === image ? 'border-orange-500' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-orange-300">{product.title}</h1>
            
            <div className="space-y-6">
              <p className="text-3xl font-bold text-orange-400">${product.price}</p>
              
              <div>
                <h3 className="text-orange-200 text-lg mb-4">Format Options</h3>
                <div className="flex flex-wrap gap-3">
                  {product.formatOptions.map((format) => (
                    <button
                      key={format}
                      onClick={() => setSelectedFormat(format)}
                      className={`px-4 py-2 rounded-lg ${
                        selectedFormat === format
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-700 text-orange-100 hover:bg-gray-600'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-orange-200 text-lg mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-700 text-orange-300 w-12 h-12 rounded-lg hover:bg-gray-600"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="text-2xl text-orange-100 w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-700 text-orange-300 w-12 h-12 rounded-lg hover:bg-gray-600"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={addToCart}
                className="w-full bg-orange-600 text-white py-4 rounded-xl text-xl hover:bg-orange-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-orange-300">Description</h2>
              <p className="text-orange-100 leading-relaxed">{product.description}</p>
            </div>

            {/* Tracklist */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-orange-300">Tracklist</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <ul className="space-y-3">
                  {product.tracklist.map((track, index) => (
                    <li key={index} className="text-orange-100 flex justify-between">
                      <span>{track}</span>
                      <span className="text-orange-400">3:45</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-orange-300">Details</h2>
              <div className="bg-gray-800 rounded-lg p-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-orange-200">Release Date</p>
                  <p className="text-orange-100">{new Date(product.details.releaseDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-orange-200">Total Duration</p>
                  <p className="text-orange-100">{product.details.totalDuration}</p>
                </div>
                <div>
                  <p className="text-orange-200">Label</p>
                  <p className="text-orange-100">{product.details.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-orange-300 mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {[
              {
                author: "John D., 68",
                rating: 5,
                comment: "The sound quality took me right back to my youth! Excellent remastering."
              },
              {
                author: "Mary S., 72",
                rating: 4,
                comment: "Great selection, but wish the case was sturdier."
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-orange-400">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <span className="text-orange-200">{review.author}</span>
                </div>
                <p className="text-orange-100">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-orange-300 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add recommended products here */}
          </div>
        </section>
      </div>

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

export default ProductPage;