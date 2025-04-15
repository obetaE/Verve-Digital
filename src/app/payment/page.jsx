// app/checkout/payment/page.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });
  const [billingAddress, setBillingAddress] = useState({
    line1: '',
    city: '',
    state: '',
    postal: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = [
    { id: 1, title: "70s Rock Anthology", price: 29.99, quantity: 1 },
    { id: 2, title: "Live at Wembley '75", price: 34.99, quantity: 2 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Add payment processing logic
    setTimeout(() => {
      setIsProcessing(false);
      // Handle success/error
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-orange-900/30 backdrop-blur-sm sticky top-0 z-50">
        {/* ... Same navigation code ... */}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">1</div>
              <span className="text-orange-300">Cart</span>
            </div>
            <div className="h-px bg-orange-900/50 flex-1 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">2</div>
              <span className="text-orange-300">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-orange-300 mb-8">Payment Details</h1>
            
            {/* Payment Method Selector */}
            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl text-orange-200 mb-4">Choose Payment Method</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('credit-card')}
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 ${
                    paymentMethod === 'credit-card' 
                      ? 'bg-orange-900/30 border-2 border-orange-500' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <CreditCardIcon className="w-8 h-8 text-orange-300" />
                  <span className="text-orange-100">Credit Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 ${
                    paymentMethod === 'paypal' 
                      ? 'bg-orange-900/30 border-2 border-orange-500' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <Image 
                    src="/paypal-logo.png" 
                    alt="PayPal" 
                    width={80} 
                    height={30} 
                    className="h-8 w-auto"
                  />
                </button>
              </div>
            </div>

            {/* Payment Form */}
            {paymentMethod === 'credit-card' ? (
              <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6">
                <div className="space-y-6">
                  {/* Card Number */}
                  <div>
                    <label className="block text-orange-200 text-lg mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                    />
                  </div>

                  {/* Expiry and CVC */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-orange-200 text-lg mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-orange-200 text-lg mb-2">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Name on Card */}
                  <div>
                    <label className="block text-orange-200 text-lg mb-2">Name on Card</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                    />
                  </div>

                  {/* Billing Address */}
                  <div className="space-y-6">
                    <h3 className="text-xl text-orange-200">Billing Address</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                        value={billingAddress.line1}
                        onChange={(e) => setBillingAddress({...billingAddress, line1: e.target.value})}
                      />
                      <div className="grid md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                          value={billingAddress.city}
                          onChange={(e) => setBillingAddress({...billingAddress, city: e.target.value})}
                        />
                        <input
                          type="text"
                          placeholder="State"
                          className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                          value={billingAddress.state}
                          onChange={(e) => setBillingAddress({...billingAddress, state: e.target.value})}
                        />
                        <input
                          type="text"
                          placeholder="ZIP Code"
                          className="w-full p-4 bg-gray-700 text-orange-100 rounded-lg"
                          value={billingAddress.postal}
                          onChange={(e) => setBillingAddress({...billingAddress, postal: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security Info */}
                  <div className="flex items-center gap-4 text-orange-200">
                    <ShieldCheckIcon className="w-8 h-8 text-orange-400" />
                    <p>Your payment information is securely encrypted</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-orange-600 text-white py-4 rounded-lg text-xl hover:bg-orange-700 disabled:bg-gray-600"
                  >
                    {isProcessing ? 'Processing...' : 'Pay $' + total.toFixed(2)}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700">
                  Checkout with PayPal
                </button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 rounded-xl p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-orange-300 mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-orange-200">
                    {item.title} × {item.quantity}
                  </span>
                  <span className="text-orange-300">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-orange-900/30 pt-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-orange-200">Subtotal</span>
                  <span className="text-orange-300">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-200">Shipping</span>
                  <span className="text-orange-300">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-orange-900/30 pt-4">
                  <span className="text-orange-200 font-bold">Total</span>
                  <span className="text-orange-400 font-bold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <Image src="/ssl-secured.png" alt="SSL Secured" width={120} height={50} />
          <Image src="/pci-compliant.png" alt="PCI Compliant" width={120} height={50} />
          <Image src="/3d-secure.png" alt="3D Secure" width={120} height={50} />
        </div>
      </main>

      {/* Footer */}
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

// Credit Card Icon Component
const CreditCardIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
  </svg>
);

// Security Shield Icon Component
const ShieldCheckIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
  </svg>
);

export default PaymentPage;