import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="text-2xl font-black text-blue-600 mb-6 italic tracking-tighter">
            ShopQuickly
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">
            Access your real-time updates and smart inventory management with the #1 shopping app for connected devices.
          </p>
        </div>

        <form className="space-y-6">
          <input
            type="email"
            placeholder="yourname@example.com"
            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition">
            Log In
          </button>
        </form>

        <div className="mt-10 flex items-center justify-between text-sm">
          <Link
            href="/signup"
            className="text-gray-500 hover:text-blue-600 font-medium"
          >
            Create an account
          </Link>
          <a href="#" className="text-gray-400">
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  );
}
