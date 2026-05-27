import { BrandHeading } from "@/components/ui/BrandHeading";


const features = [
  {
    title: "Live Inventory",
    description:
      "Real-time updates with Live Inventory management. Ensure your stock levels are always accurate.",
  },
  {
    title: "Smart Sync",
    description:
      "Smart Sync keeps your transactions updated in real-time across all connected platforms.",
  },
  {
    title: "Seamless Integration",
    description:
      "Effortlessly integrates with your in-store hardware and smart home devices for a unified experience.",
  },
  {
    title: "Quick Checkout",
    description:
      "Speedy, secure payments with Quick Checkout technology, ensuring data safety and efficiency.",
  },
];

export default function OverviewPage() {
  return (
    <main className=" bg-[#8FD9FB]">
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <BrandHeading level={1} className="mb-6">
          Discover Our Features
        </BrandHeading>
        <p className="text-xl text-gray-600 mb-12">
          Your all-in-one solution for a smarter shopping journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-10 bg-brand-blue-50 rounded-xl text-left border border-blue-100"
            >
              <BrandHeading level={3} className="mb-4">
                {feature.title}
              </BrandHeading>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Primary CTA */}
      <section className="bg-brand-black text-brand-white py-16 text-center">
        <BrandHeading level={2} className="text-white mb-8">
          Ready to upgrade your shopping?
        </BrandHeading>
        <button className="bg-brand-white text-brand-black hover:bg-gray-200 transition-colors px-10 py-4 rounded-full font-bold uppercase tracking-wide">
          Sign up today
        </button>
      </section>
    </main>
  );
}
