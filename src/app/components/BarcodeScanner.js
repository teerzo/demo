'use client';
import { BarcodeScanner } from 'react-barcode-scanner'
import "react-barcode-scanner/polyfill"

// export default () => {
//   return <BarcodeScanner />
// }


import { useState } from 'react';

export default function Barcode() {
  const [isScanning, setIsScanning] = useState(false);

  const handleScanClick = () => {
    setIsScanning(true);
    // TODO: Implement actual barcode scanning functionality
    console.log('Starting barcode scan...');
  };

  const handleManualEntry = () => {
    // TODO: Implement manual entry functionality
    console.log('Opening manual entry...');
  };

  return (
    <>
      {
        isScanning ?
          <>
            < BarcodeScanner />
          </>
          :
          <div className="w-full max-w-md mx-auto p-4">
            <div className="space-y-4">
              {/* Primary Scan Button */}
              <button
                onClick={handleScanClick}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                Scan Barcode
              </button>

              {/* Manual Entry Button */}
              <button
                onClick={handleManualEntry}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Enter Barcode Manually
              </button>

              {/* Scanning Indicator */}
              {isScanning && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <span className="text-sm text-blue-600 dark:text-blue-400">Scanning...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
      }
    </>
  );
} 