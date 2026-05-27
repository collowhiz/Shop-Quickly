import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  const features = [
    {
      title: "Live Inventory",
      description: "Real-time updates with Live Inventory management .",
    },
    {
      title: "Seamless Integration",
      description: "Seamlessly integrates with your in-store hardware .",
    },
    {
      title: "Smart Sync",
      description:
        "Smart Sync keeps your transactions updated in real-time .",
    },
    {
      title: "Quick Checkout",
      description: "Speedy, secure payments with Quick Checkout .",
    },
    {
      title: "Instant Alerts",
      description: "Get instant notifications on item status .",
    },
    {
      title: "Data Security",
      description: "Ensures your data is safe and secure .",
    },
    {
      title: "Seamless Sync",
      description: "Sync across all devices for seamless shopping .",
    },
    {
      title: "Smart Notifications",
      description: "Receive timely updates on item availability .",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Discover Our Features
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Your all-in-one solution for a smarter, more efficient shopping
          journey .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition">
          Sign up
        </button>
      </div>
    </section>
  );
}
