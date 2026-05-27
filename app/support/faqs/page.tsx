"use client";
import { BrandHeading } from "@/components/ui/BrandHeading";
import { useState } from "react";

const faqData = [
  {
    question: "How is my data handled and protected?",
    answer:
      "Data Security is our top priority. ShopQuickly ensures your data is safe and secure through integrated encryption protocols and safe-storage standards built on the Bubble platform.",
  },
  {
    question: "How do Instant Alerts work?",
    answer:
      "You will receive instant notifications on item status and timely updates on item availability based on your smart fridge integration and shopping list preferences.",
  },
  {
    question: "Does the app work across multiple devices?",
    answer:
      "Yes. Our Seamless Sync feature allows you to synchronize your inventory and transactions across all devices for a unified shopping experience.",
  },
  {
    question: "How does Smart Retrieval fetch items?",
    answer:
      "Smart Retrieval analyzes your consumption patterns and automatically fetches or suggests items from your fridge to your shopping list.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#8FD9FB] min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <BrandHeading level={1} className="text-center mb-16">
          Support & FAQs
        </BrandHeading>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-brand-black mb-3">
                {item.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
