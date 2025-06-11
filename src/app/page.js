// 'use client';

import Image from "next/image";
// import ClientCounter from './components/ClientCounter';
// import ServerInfo from './components/ServerInfo';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import InstallPrompt from './components/InstallPrompt';
import InstallStatus from './components/InstallStatus';
import BarcodeScanner from './components/BarcodeScanner';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center flex-grow p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] items-center sm:items-start w-full max-w-4xl">
          <Image
            src="/lilly-logo.png"
            className="p-2"
            alt="Logo"
            width={100}
            height={24}
          />

          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-[var(--brand-black)]">
              Welcome to the Program
            </h1>
          </div>

          <div className="flex flex-col">
            <p className="text-lg text-gray-600">
              Please scan your barcode to get started
            </p>
          </div>

          <BarcodeScanner />


        </main>
        <InstallStatus />

      </div>
      {/* <MobileNav /> */}
      <InstallPrompt />
    </div>
  );
}
