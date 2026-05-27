import React from "react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-500 text-sm">
            Join the #1 shopping app for connected devices and experience the future of retail.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="yourname@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Sign up today
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-bold hover:underline"
          >
            Log in
          </Link>
        </p>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            **Data Security**: Your information is safe and secure with our
            encrypted smart sync .
          </p>
        </div>
      </div>
    </main>
  );
}
