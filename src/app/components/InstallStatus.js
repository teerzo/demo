'use client';

import { useState, useEffect } from 'react';

export default function InstallStatus() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

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

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
    };

    // Initial checks
    checkStandalone();
    checkInstalled();

    // Add event listeners
    window.addEventListener('appinstalled', handleAppInstalled);
    window.matchMedia('(display-mode: standalone)').addEventListener('change', checkStandalone);

    // Clean up
    return () => {
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.matchMedia('(display-mode: standalone)').removeEventListener('change', checkStandalone);
    };
  }, []);

  // Only show on mobile and when not installed
  if (isInstalled) {
    // if (isInstalled || typeof window === 'undefined' || window.innerWidth >= 640) {
    return null;
  }

  return (
    // <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mb-4 text-center sm:hidden">
    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mb-4 text-center">
      {isInstalled ?
        <>
          <p className="text-green-600 dark:text-green-400 font-medium">
            Installed
          </p>
        </>
        :
        <>
          <p className="text-red-600 dark:text-red-400 font-medium">
            Not installed
          </p>
          <p className="text-xs text-red-500 dark:text-red-300 mt-1">
            Install this app for a better experience
          </p>
        </>
      }
    </div>
  );
} 