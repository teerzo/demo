import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Video from '../components/Video';

export default function NursePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-rows-[1fr_20px] justify-items-center flex-grow p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-10 items-center sm:items-start w-full max-w-4xl">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold text-[var(--brand-black)]">
                            Free Training, When You Need It
                        </h1>
                        <p className="text-lg text-gray-600">
                            Learn how to inject with the support of a registered nurse via video, phone, or
                            telehealth.
                        </p>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            Learn by Video
                        </h2>
                        <p className="text-gray-700">
                            Prefer to watch a quick guide?
                            Check out our Injection Guide Video, a step-by-step walkthrough on how to safely
                            use your Ebglyss pen.
                            It's simple, fast, and designed to give you confidence for your first injection.
                        </p>
                        <Video />
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            Complimentary One-on-One Nurse Training
                        </h2>
                        <p className="text-gray-700">
                            Our friendly Inservio Home nurses are here to support you—one-on-one, in the
                            comfort of your home.
                            You can speak with a registered nurse to:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Receive live injection training via phone or video</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Understand your dosing schedule</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[var(--brand-red)]">•</span>
                                <span>Ask questions about using Ebglyss</span>
                            </li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            This service is completely free as part of the LillyPlus Program.
                        </p>
                    </div>

                    <div className="w-full space-y-2">
                        <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
                            How Do I Book Support?
                        </h2>
                        <p className="text-gray-700">
                            Call <a href="tel:1300790229" className="text-[var(--brand-red)]">1300 790 229</a> (Monday to Friday, 9 AM – 5 PM AEST) and ask to book a
                            training session with an Inservio Home Nurse. We'll find a time that works for you.
                        </p>
                        <div className="flex justify-center">
                            <a href="tel:1300790229" className="inline-block mt-4">
                                <button className="bg-[var(--brand-red)] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
                                    Call Now
                                </button>
                            </a>
                        </div>
                    </div>
                </main>
            </div >
            <MobileNav />
        </div >
    );
}