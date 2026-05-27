import React from "react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header from Source [1] */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          User Testimonials
        </h2>
        <p className="text-gray-500 text-lg mb-16 italic">
          Global users share their seamless shopping experiences. 
        </p>

        {/* Quote Content from Source [1] */}
        <div className="relative">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-10">
            "The seamless integration with my smart fridge has completely
            changed the way I manage my groceries. Thanks to this app, I'm never
            out of essentials, and I can track my consumption effortlessly—it
            truly simplifies my life!" 
          </blockquote>

          {/* Attribution from Source [1] */}
          <div className="flex flex-col items-center">
            <span className="h-1 w-10 bg-blue-600 mb-4"></span>
            <p className="text-lg font-bold text-gray-900">Emily Johnson</p>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
              Sales Director at FreshMart 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
