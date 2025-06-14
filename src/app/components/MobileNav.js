'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname.indexOf(path) === 0;
  };

  return (
    <>
      {/* Footer with Privacy Policy - Only visible on mobile */}
      {/* <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 sm:hidden">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-center">
            <Link 
              href="/privacy"
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div> */}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:hidden">
        <div className="flex justify-around items-center h-16">
          <Link 
            href="/home" 
            className={`flex flex-col items-center justify-center w-1/3 h-full ${
              isActive('/home') 
                ? 'text-[var(--brand-red)]' 
                : 'text-gray-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link 
            href="/nurse" 
            className={`flex flex-col items-center justify-center w-1/3 h-full ${
              isActive('/nurse') 
                ? 'text-[var(--brand-red)]' 
                : 'text-gray-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Nurse</span>
          </Link>
          
          <Link 
            href="/delivery" 
            className={`flex flex-col items-center justify-center w-1/3 h-full ${
              isActive('/delivery') 
                ? 'text-[var(--brand-red)]' 
                : 'text-gray-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span className="text-xs mt-1">Delivery</span>
          </Link>
        </div>
      </div>
    </>
  );
} 