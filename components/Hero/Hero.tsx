import React from "react";

export default function Hero() {
  return (
    <section className="bg-brand-white">
      {/* Main Hero Content [1] */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h5 className="text-text-muted font-bold uppercase tracking-widest text-sm mb-6">
          #1 on smart shopping
        </h5>
        <h1 className="text-text-muted text-5xl md:text-7xl font-extrabold mb-10">
          Shop Smart <br /> with Our <br /> App
        </h1>
        <p className="text-text-muted font-medium text-lg mb-12">
          **ShopQuickly seamlessly integrates with your smart devices**, making
          your shopping experience effortless and efficient .
        </p>
        <button className="btn-primary">
          Sign up today
        </button>
      </div>

      {/* Recognition Section [1] */}
      <div className="bg-gray-50 py-16 text-center border-y border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          The #1 Shopping App for Connected Devices
        </h3>
        <p className="text-gray-500 font-medium">
          As recognized by top smart home and grocery brands [1].
        </p>
      </div>
    </section>
  );
}
