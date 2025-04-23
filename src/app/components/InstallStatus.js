'use client';

import { useState, useEffect } from 'react';

export default function InstallStatus() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the app is running in standalone mode (installed as PWA)
    const checkStandalone = () => {
      const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator.standalone === true);
      setIsStandalone(isStandaloneMode);

      // If in standalone mode, it's installed
      if (isStandaloneMode) {
        setIsInstalled(true);
      }
    };

    // Check if the app is already installed
    const checkInstalled = () => {
      // This is a best-effort check, as there's no perfect way to detect installation
      // across all browsers and platforms
      if (window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator.standalone === true)) {
        setIsInstalled(true);
      }
    };

    // Check if device is mobile
    const checkMobile = () => {
      // Method 1: Check for touch points
      const hasTouchPoints = navigator.maxTouchPoints > 0;

      // Method 2: Check user agent
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

      // Method 3: Check for mobile-specific features
      const isMobileBrowser = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Consider it mobile if any of these checks are true
      setIsMobile(hasTouchPoints || isMobileDevice || isMobileBrowser);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
    };

    // Initial checks
    checkStandalone();
    checkInstalled();
    checkMobile();

    // Add a delay before setting initialized to true
    const initializationTimer = setTimeout(() => {
      setIsFading(true);
      // Wait for the fade-out animation to complete before setting initialized
      setTimeout(() => {
        setIsInitialized(true);
      }, 300); // Match this with the transition duration
    }, 1500); // 1.5 second delay

    // Add event listeners
    window.addEventListener('appinstalled', handleAppInstalled);
    window.matchMedia('(display-mode: standalone)').addEventListener('change', checkStandalone);

    // Clean up
    return () => {
      clearTimeout(initializationTimer);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.matchMedia('(display-mode: standalone)').removeEventListener('change', checkStandalone);
    };
  }, []);

  // Only show when not installed and on mobile
  // if (isInstalled || !isMobile) {
  //   return null;
  // }

  return (
    // <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mb-4 text-center sm:hidden">
    <>
      {isInitialized ? (
        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mb-4 text-center">

          {isMobile ? (
            <>
              {isInstalled ? (
                <>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    Installed
                  </p>
                </>
              ) : (
                <>
                  <p className="text-red-600 dark:text-red-400 font-medium">
                    Not installed
                  </p>
                  <p className="text-xs text-red-500 dark:text-red-300 mt-1">
                    Install this app for a better experience
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <p className="text-green-600 dark:text-green-400 font-medium">
                Desktop detected
              </p>
            </>
          )}


        </div>
      ) : (
        <div className={`bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg mb-4 text-center transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600 dark:border-gray-300"></div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Checking installation status...</span>
          </div>
        </div>
      )}
    </>
  );
} 