import Navbar from '@/app/components/Navbar';
import MobileNav from '@/app/components/MobileNav';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function MedicationPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-rows-[1fr_20px] flex-grow p-8 sm:p-20">
                <main className="flex flex-col gap-10 items-center sm:items-start w-full max-w-4xl">

                    <div className="flex justify-between w-full">
                        <Link
                            href="/home"
                            className="flex items-center gap-2 text-[var(--brand-red)] hover:text-red-700 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold text-[var(--brand-black)]">
                            Understanding Your Ebglyss Treatment
                        </h1>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            Start with the Guide
                        </h2>
                        <p className="text-gray-700">
                            We’ve made it easy to get started.
                            Our Ebglyss Treatment Guide includes everything you need to know:
                        </p>

                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>What Ebglyss is and how it works</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>How to store and handle your pens</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Possible side effects to look out for</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>When and how to take each dose</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Injection tips and safety information</span>
                            </li>
                        </ul>

                        <div className="flex justify-center mt-4 mb-4">
                            <Link href="/EBGLYSS_Patient LBH_AW3.4_FA_DIGI.pdf" target="_blank">
                                <button className="bg-[var(--brand-red)] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
                                    View Guide
                                </button>
                            </Link>
                        </div>

                        <p className="text-gray-700">
                            This guide is designed to support your treatment, not replace your doctor. If you have
                            any questions or concerns, please consult your healthcare provider.
                        </p>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            Storage
                        </h2>
                        <p className="text-gray-700">
                            Keep the medication in its original carton.
                        </p>

                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Store the pre-filled pen in the refrigerator between 2°C and 8°C until ready to
                                    use.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>If needed, it can be left out for up to 7 days at a temperature not exceeding
                                    30°C.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Let the pre-filled pen sit at room temperature for at least 45 minutes before
                                    using it.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Dispose of used pens in a sharps container.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            How much does EBGLYSS Cost?
                        </h2>
                        <div className="w-full text-center border-2 border-gray-200 rounded-lg p-10 bg-gray-50">
                            IMAGE PLACEHOLDER
                        </div>
                    </div>

                    <div className="w-full space-y-2"></div>


                </main>
                {/* <Footer /> */}
            </div>
            <MobileNav />
        </div>
    );
} 