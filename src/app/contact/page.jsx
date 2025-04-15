// app/contact/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';

export default function Contact() {
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
              We're Here to Help<br/>
              <span className="text-orange-400">24/7 Support</span>
            </h1>
            <p className="text-orange-100 text-xl max-w-3xl mx-auto">
              Reach out anytime - our senior support specialists are always ready to assist
            </p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-orange-300 mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-orange-200 text-lg mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 rounded-lg bg-gray-600 text-orange-100 text-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-orange-200 text-lg mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-4 rounded-lg bg-gray-600 text-orange-100 text-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-orange-200 text-lg mb-2">How Can We Help?</label>
                  <select 
                    className="w-full p-4 rounded-lg bg-gray-600 text-orange-100 text-lg focus:ring-2 focus:ring-orange-500"
                    defaultValue="general"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Product Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-orange-200 text-lg mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full p-4 rounded-lg bg-gray-600 text-orange-100 text-lg focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-orange-600 text-white py-4 rounded-lg text-xl hover:bg-orange-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="space-y-8">
              <div className="bg-orange-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-300 mb-4">Direct Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-orange-100 text-lg">24/7 Support Line</p>
                      <p className="text-orange-300 text-xl font-semibold">1-800-ROCK-123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-orange-100 text-lg">Email Support</p>
                      <p className="text-orange-300 text-xl font-semibold">help@vervedigital.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-700 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-300 mb-6">Common Questions</h3>
                <div className="space-y-4">
                  {[
                    {question: "How long does shipping take?", answer: "Typically 3-5 business days in the US"},
                    {question: "Can I return products?", answer: "30-day no-questions-asked returns"},
                    {question: "Need help with digital downloads?", answer: "Step-by-step guides available"}
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-orange-900/30 pb-4">
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer text-orange-200">
                          <span className="text-lg">{faq.question}</span>
                          <svg className="w-6 h-6 group-open:rotate-180 transition-transform">
                            <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                          </svg>
                        </summary>
                        <p className="mt-2 text-orange-100">{faq.answer}</p>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-300 mb-12">Our Headquarters</h2>
          <div className="bg-gray-700 rounded-xl overflow-hidden">
            {/* Replace with actual map component or image */}
            <div className="relative h-96 bg-orange-900/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-orange-200 text-lg">Map integration available with API key</p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-orange-100 text-lg">123 Rock Avenue</p>
              <p className="text-orange-100 text-lg">Chicago, IL 60601</p>
              <p className="text-orange-100 text-lg mt-4">Office Hours: Mon-Fri 9AM - 5PM CST</p>
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
}