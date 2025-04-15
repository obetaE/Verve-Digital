"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MobileNav from '@/components/MobileNav';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "70s Rock Anthology",
      price: 29.99,
      quantity: 1,
      image: "/70s-anthology.jpg",
      format: "Vinyl + Digital"
    },
    {
      id: 2,
      title: "Live at Wembley '75",
      price: 34.99,
      quantity: 2,
      image: "/live-wembley.jpg",
      format: "2xLP Box Set"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-orange-300 mb-8">Your Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-gray-800 p-8 rounded-xl text-center">
                <p className="text-orange-200 text-xl mb-4">Your cart is empty</p>
                <Link href="/products" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-gray-800 rounded-xl p-6 flex gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-orange-300 mb-2">{item.title}</h2>
                      <p className="text-orange-100 mb-2">{item.format}</p>
                      <p className="text-2xl font-bold text-orange-400">${item.price}</p>
                      
                      <div className="mt-4 flex items-center gap-4">
                        <label className="text-orange-200">Quantity:</label>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-20 p-2 bg-gray-700 text-orange-100 rounded-lg text-center"
                          min="1"
                        />
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-orange-500 hover:text-orange-600 text-sm font-semibold"
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 rounded-xl p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-orange-300 mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-orange-200">Subtotal ({cartItems.length} items)</span>
                <span className="text-orange-300">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-200">Shipping</span>
                <span className="text-orange-300">${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-orange-900/30 pt-4 flex justify-between">
                <span className="text-orange-200 font-semibold">Total</span>
                <span className="text-orange-400 font-bold text-xl">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button 
                className="w-full bg-orange-600 text-white py-4 rounded-xl text-xl hover:bg-orange-700 transition-colors"
                disabled={cartItems.length === 0}
              >
                Secure Checkout
              </button>
              
              <Link 
                href="/products" 
                className="block text-center text-orange-300 hover:text-orange-400 underline"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Promo Code */}
            <div className="mt-8 pt-8 border-t border-orange-900/30">
              <label className="block text-orange-200 mb-2">Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 p-3 bg-gray-700 text-orange-100 rounded-lg"
                  placeholder="Enter promo code"
                />
                <button className="bg-orange-900/30 text-orange-300 px-6 py-3 rounded-lg hover:bg-orange-900/40">
                  Apply
                </button>
              </div>
            </div>

            {/* Security Badges */}
            <div className="mt-8 flex justify-center gap-4">
              <div className="text-orange-500">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <div className="text-orange-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
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

export default CartPage;