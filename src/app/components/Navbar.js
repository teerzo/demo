'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/next.svg"
                alt="Logo"
                width={100}
                height={24}
                className="dark:invert"
              />
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile, visible on sm and above */}
          <div className="hidden sm:flex sm:space-x-8 ml-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/nurse"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Nurse
            </Link>
            <Link
              href="/delivery"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Delivery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 