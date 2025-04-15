// app/about/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';

export default function About() {
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
                <Link href="/" className="text-orange-100 hover:text-white px-3 py-2 text-lg font-medium">
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
              Preserving Musical Heritage<br/>
              <span className="text-orange-400">Since 1998</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" // Add your image to public folder
                alt="Vinyl record collection"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-300 mb-8">Our Journey</h2>
              <p className="text-orange-100 text-lg leading-relaxed mb-6">
                Founded in a small record store in Chicago, Verve Digital began as a passion project 
                to preserve the authentic sound of rock's golden era. Over two decades, we've grown 
                into a global distributor while maintaining our commitment to audio purity and 
                artist integrity.
              </p>
              <div className="bg-orange-900/20 p-6 rounded-lg">
                <p className="text-orange-200 italic">
                  "Our mission remains unchanged: Deliver timeless music with the warmth and 
                  authenticity it deserves."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-300 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Authenticity',
                icon: '🎸',
                content: 'Strict quality control ensures original mastering quality'
              },
              { 
                title: 'Accessibility',
                icon: '🌍',
                content: 'Worldwide shipping with senior-friendly support'
              },
              { 
                title: 'Integrity',
                icon: '🤝',
                content: 'Fair partnerships with artists and customers'
              }
            ].map((value, index) => (
              <div key={index} className="bg-orange-900/20 p-8 rounded-xl text-center">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-orange-200 mb-4">{value.title}</h3>
                <p className="text-orange-100">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-300 mb-16">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Michael Carter',
                role: 'Founder & CEO',
                bio: '40+ years in music preservation',
                img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                name: 'Sarah Johnson',
                role: 'Customer Support',
                bio: 'Dedicated senior care specialist',
                img: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                name: 'David Chen',
                role: 'Audio Engineer',
                bio: 'Grammy-winning restoration expert',
                img: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-700 rounded-xl p-6 text-center">
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-orange-200">{member.name}</h3>
                <p className="text-orange-300 mb-2">{member.role}</p>
                <p className="text-orange-100">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-orange-300 mb-8">Join the Verve Family</h2>
          <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto">
            Experience music the way it was meant to be heard - pure, powerful, and authentic.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/products" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-orange-600 transition-colors">
              Browse Collection
            </Link>
            <Link href="/contact" className="bg-gray-700 text-orange-300 px-8 py-4 rounded-lg text-xl hover:bg-gray-600 transition-colors">
              Contact Us
            </Link>
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
}