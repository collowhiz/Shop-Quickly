import { BrandHeading } from "@/components/ui/BrandHeading";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#8FD9FB]">
      {/* Narrative Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <BrandHeading level={2} className="mb-6">
            Revolutionize Your Grocery Shopping
          </BrandHeading>
          <p className="text-lg text-gray-700 mb-6">
            ShopQuickly is dedicated to creating an efficient, automated, and
            hassle-free purchasing process. By seamlessly connecting your app
            and smart fridge, we provide optimal convenience for the modern
            household.
          </p>
          <div className="bg-brand-blue-50 p-6 rounded-lg border-l-4 border-brand-black">
            <BrandHeading level={4} className="mb-2">
              Smart Retrieval
            </BrandHeading>
            <p className="text-gray-600">
              Our proprietary Smart Retrieval logic intuitively fetches items
              from your fridge based on your real-time consumption patterns,
              ensuring you never run out of essentials.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center text-gray-500 italic">
          [Visual: App-Hardware Connectivity Interface]
        </div>
      </section>

      {/* Hardware Integration Synthesis */}
      <section className="py-20 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-gray-200 aspect-square rounded-2xl flex items-center justify-center text-gray-500 italic">
            [Visual: Smart Home Device Integration]
          </div>
          <div className="order-1 md:order-2">
            <BrandHeading level={2} className="mb-6">
              Elevate Your Experience
            </BrandHeading>
            <p className="text-gray-700 mb-4">
              Our hardware integration allows you to{" "}
              <strong>streamline purchases</strong> and{" "}
              <strong>automate notifications</strong> directly from your home
              devices.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="font-bold text-brand-black">01.</span>
                <span>
                  <strong>Easy Inventory Management:</strong> Monitor stock
                  levels through effortless hardware-to-app syncing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-brand-black">02.</span>
                <span>
                  <strong>Quick Display Selections:</strong> Make purchases
                  directly from your smart fridge or connected hub.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-brand-black">03.</span>
                <span>
                  <strong>Automated Refills:</strong> Let cutting-edge
                  technology handle the replenishment of frequent items.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
