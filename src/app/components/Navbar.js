'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Hamburger Menu Button - Only visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/home" className="flex items-center">
              <Image
                src="/lilly-logo.png"
                className="p-2"
                alt="Logo"
                width={100}
                height={24}
              />
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile, visible on sm and above */}
          <div className="hidden sm:flex sm:space-x-8 ml-8">
            <Link
              href="/home"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/nurse"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Nurse
            </Link>
            <Link
              href="/delivery"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Delivery
            </Link>

            <div className="flex-grow"></div>

            <Link
              href="/privacy"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-lg z-50 sm:hidden transform transition-transform duration-300 ease-in-out">
                <div className="h-full flex flex-col">
                  {/* Logo and Close button */}
                  <div className="flex items-center h-16  px-4  shadow-sm">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    >
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <Link href="/home" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                      <Image
                        src="/lilly-logo.png"
                        className="p-2"
                        alt="Logo"
                        width={100}
                        height={24}
                      />
                    </Link>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 px-4 py-2 space-y-1">
                    <Link
                      href="/home"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/nurse"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Nurse
                    </Link>
                    <Link
                      href="/delivery"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Delivery
                    </Link>
                  </div>

                  {/* Footer Links */}
                  <div className="border-t border-gray-200 px-4 py-4 space-y-1">
                    <Link
                      href="/lilly-privacy"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Eli Lilly Privacy Policy
                    </Link>
                    <Link
                      href="/lilly-terms"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Eli Lilly Terms and conditions
                    </Link>

                    <Link
                      href="/inservio-privacy"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    > 
                      Inservio Privacy Policy
                    </Link>

                    <div className="border-t border-gray-200 pb-8"></div>

                    <Link
                      href="/"
                      className="block px-3 py-2 rounded-md text-base font-medium text-red-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Clear barcode / Logout
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
} 