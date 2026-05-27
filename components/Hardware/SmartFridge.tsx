import React from "react";

export default function SmartFridge() {
  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Hardware Visual Placeholder */}
        <div className="bg-gray-200 rounded-3xl aspect-square flex items-center justify-center shadow-inner order-2 lg:order-1">
          <span className="text-gray-400 font-bold">
            Smart Fridge App Integration Interface
          </span>
        </div>

        {/* Content from Source [1] */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Revolutionize Your Grocery Shopping
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Seamlessly connect your app and smart fridge for optimal convenience
            and efficiency.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Convenient Shopping
              </h4>
              <p className="text-gray-600">
                Browse, order, and retrieve items with just a few taps on your
                app.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Seamless Integration
              </h4>
              <p className="text-gray-600">
                Effortlessly sync with your hardware for a unified shopping
                experience.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Smart Retrieval
              </h4>
              <p className="text-gray-600">
                Smart Retrieval intuitively fetches items from your fridge based
                on your consumption patterns.
              </p>
            </div>
          </div>

          <button className="mt-12 text-blue-600 font-bold hover:underline">
            Learn more about hardware sync
          </button>
        </div>
      </div>
    </section>
  );
}
