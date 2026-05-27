import React from "react";

export default function ContactPage() {
  return (
    <main className="py-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Contact Us</h1>
      <p className="text-gray-600 text-lg mb-12">
        Have questions about your smart device integration? Our support team is
        here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p className="text-gray-600 mb-6">
            Access our FAQs for quick answers on hardware setup and smart sync.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded font-bold">
            Visit Support Center
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded border border-gray-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border border-gray-200"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded border border-gray-200 h-32"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
