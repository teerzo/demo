import Navbar from '@/app/components/Navbar';
import MobileNav from '@/app/components/MobileNav';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function ProgramPage() {
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

                   

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            What is the LillyPlus Program?
                        </h2>
                        <p className="text-gray-700">
                            The LillyPlus™ Program is designed to support you as you begin treatment with
                            Ebglyss for moderate-to-severe atopic dermatitis. From your first injection through
                            ongoing care, we&apos;re with you every step of the way.
                            <br />
                            This program is managed by Inservio Home on behalf of Eli Lilly Australia.
                        </p>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            What&apos;s Included in the Program?
                        </h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Complimentary home delivery of your Ebglyss medication</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Free injection training with a registered nurse</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Free sharps containers for safe disposal</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Friendly delivery reminders and ongoing support</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            Your Details Are Already Set
                        </h2>
                        <p className="text-gray-700">
                            Your doctor has enrolled you, no additional steps are required. You can now use the
                            app to manage your treatment, schedule support, and get the most out of your
                            medication.
                        </p>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            Privacy Notice
                        </h2>
                        <p className="text-gray-700">
                            To learn how your personal information is collected and used, please read our
                            <a href="" className="text-[var(--brand-red)] hover:underline ml-1">
                                Privacy Collection Notice
                            </a>
                        </p>
                    </div>

                    <div className="w-full space-y-2"></div>
                </main>
                {/* <Footer /> */}
            </div>
            <MobileNav />
        </div>
    );
} 