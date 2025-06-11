import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';

export default function DeliveryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center flex-grow p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-10 items-center sm:items-start w-full max-w-4xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-[var(--brand-black)]">
              Convenient, Reliable, Delivered to Your Door
            </h1>
            <p className="text-lg text-gray-600">
              Through the LillyPlus Program, your Ebglyss medication is delivered directly to your
              home in temperature-controlled packaging.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
              How Does Home Delivery Work?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>Inservio Home will contact you to confirm your details, arrange payment, and
                  schedule your first Ebglyss delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>Your first delivery includes a complimentary sharps container.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>Once your order is confirmed, you'll receive a text with the delivery details.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>Your order will then be shipped in temperature-controlled packaging to
                  maintain quality.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>Delivery timing may vary by location. Most patients receive shipments on
                  Tuesday, Wednesday, or Thursday. Inservio Home does not dispatch on
                  Fridays or on the day before a long weekend.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>You will receive a text message from the courier once your medication is
                  dispatched and on the day of delivery.</span>
              </li>
            </ul>
          </div>

          <div className="w-full space-y-2">
            <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
              What's Included in Your Order?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>Your pre-filled Ebglyss pens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>Free sharps containers for safe disposal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-red)]">•</span>
                <span>A temperature tracker card to check on arrival</span>
              </li>
            </ul>
          </div>

          <div className="w-full space-y-2">
            <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
              How Do I Reorder?
            </h2>
            <p className="text-gray-700">
              As part of the LillyPlus Program, Inservio Home will track your treatments and
              contact you before your next supply is due.
              To discuss deliveries, call Inservio Home on 1300 790 229 (Monday to Friday, 9 AM
              – 5 PM AEST).
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
              What Does Delivery Cost?
            </h2>
            <p className="text-gray-700">
              Delivery is included in the program. You only need to pay for your Ebglyss
              medication.
            </p>
          </div>

          <div className="w-full space-y-2">
            <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
              How Much Does EBGLYSS Cost?
            </h2>
            <div className="w-full text-center border-2 border-gray-200 rounded-lg p-10 bg-gray-50">
              IMAGE PLACEHOLDER
            </div>
          </div>

          <div className="w-full space-y-2">
            <h2 className="text-2xl font-semibold text-[var(--brand-black)]">
              Need Help?
            </h2>
            <p className="text-gray-700">
              Call <a href="tel:1300790229" className="text-[var(--brand-red)]">1300 790 229</a> (Monday to Friday, 9 AM - 5 PM AEST) and we'll help you with your delivery.
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
      </div>
      <MobileNav />
    </div>
  );
} 