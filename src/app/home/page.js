import Navbar from '@/app/components/Navbar';
import MobileNav from '@/app/components/MobileNav';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center flex-grow p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-10 items-center sm:items-start w-full max-w-4xl">

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
              Welcome to the Ebglyss® LillyPlus™ Program
            </h2>
            <p className="text-lg text-gray-600">
              Your doctor has prescribed EBGLYSS to help you better manage your atopic dermatitis.
            </p>
          </div>

          <div className="w-full ">
            <Link href="/home/program">
              <div className="w-full text-center border-2 border-gray-200 rounded-lg p-10 bg-gray-50">
                IMAGE PLACEHOLDER
              </div>
              <button className="w-full bg-[var(--brand-red)] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
                Program information
              </button>
            </Link>
          </div>

          <div className="w-full">
            <Link href="/home/medication">
              <div className="w-full text-center border-2 border-gray-200 rounded-lg p-10 bg-gray-50">
                IMAGE PLACEHOLDER
              </div>
              <button className="w-full bg-[var(--brand-red)] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
                Medication information
              </button>
            </Link>
          </div>

        </main>
        {/* <Footer /> */}
      </div>
      <MobileNav />
    </div>
  );
} 