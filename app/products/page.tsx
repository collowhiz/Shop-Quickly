import React from "react";
import FeatureGrid from "@/components/Features/FeatureGrid";

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <div className="bg-gray-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Product Overview</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore how ShopQuickly integrates with your devices to create the #1
          shopping app for connected households.
        </p>
      </div>

      {/* Reusing the feature grid for the Overview section [3, 4] */}
      <FeatureGrid />

      {/* Customers Section mentioned in source [2] */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Trusted by Customers Globally
        </h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
          {/* Logo placeholders for the "recognized by top smart home brands" [3] */}
          <span className="text-2xl font-black">FRESHMART</span>
          <span className="text-2xl font-black">SMARTHOME</span>
          <span className="text-2xl font-black">QUICKLOGISTICS</span>
        </div>
      </section>
    </main>
  );
}
