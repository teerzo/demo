'use client';

import { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // This event will fire when the browser wants to show the install prompt
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the prompt UI
      setShowPrompt(true);
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // This event will fire when the app is installed
    window.addEventListener('appinstalled', () => {
      // Clear the deferredPrompt
      setDeferredPrompt(null);
      // Hide the prompt UI
      setShowPrompt(false);
      // Optionally, log that the app was installed
      console.log('App was installed');
    });

    // Clean up the event listeners
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // Clear the deferredPrompt
    setDeferredPrompt(null);
    // Hide the prompt UI
    setShowPrompt(false);
    
    // Optionally, log the outcome
    console.log(`User response to the install prompt: ${outcome}`);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 mx-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 sm:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-3 bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Install App</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Add to your home screen for quick access</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setShowPrompt(false)}
            className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Not now
          </button>
          <button 
            onClick={handleInstallClick}
            className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
} 