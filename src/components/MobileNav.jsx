// components/MobileNav.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Cart', href: '/cart' },
  ];

  return (
    <div className=" md:hidden">

      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-orange-100 hover:text-white"
        aria-label="Open menu"
      >
        <Bars3Icon className="h-8 w-8" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed h-full inset-0 z-50 bg-black/50 backdrop-blur-sm">
          {/* Menu Container */}
          <div className="fixed right-0 w-64 bg-gray-900 shadow-lg">
            <div className="bg-gray-900 flex flex-col h-full p-4">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-orange-100 hover:text-white"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 bg-gray-900">
                <ul className="space-y-6 bg-gray-900">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center p-3 text-orange-100 text-xl hover:bg-orange-900/30 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Branding Footer */}
              <div className="bg-gray-900 mt-auto pt-6 border-t border-orange-900/50">
                <p className="text-sm text-orange-300">Verve Digital</p>
                <p className="text-xs text-orange-100 mt-1">Since 1998</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;