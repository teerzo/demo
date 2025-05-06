import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import InstallPrompt from '../components/InstallPrompt';
import InstallStatus from '../components/InstallStatus';
import BarcodeScanner from '../components/BarcodeScanner';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center flex-grow p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] items-center sm:items-start w-full max-w-4xl">
          <h1>Home</h1>
        </main>
      </div>
      <MobileNav />
    </div>
  );
} 