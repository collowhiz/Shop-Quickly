import React from 'react';

export default function MailingList() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Header and Subheading from Source [3] */}
        <h2 className="text-4xl font-extrabold mb-4">Join Our Mailing List</h2>
        <p className="text-gray-400 text-lg mb-10">Stay updated with our latest integrations and special offers! </p>
        
        {/* Input and Button from Source [3] */}
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="yourname@example.com" 
            className="flex-grow px-6 py-4 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">
            Sign up 
          </button>
        </form>
      </div>
    </section>
  );
}
