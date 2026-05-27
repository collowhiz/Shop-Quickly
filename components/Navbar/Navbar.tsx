import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Branding */}
      <div className="text-2xl font-bold text-gray-900 tracking-tight">
        ShopQuickly
      </div>

      {/* Navigation Links from Source [1] */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-600 transition">
          Products
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </div>

      {/* CTA Button from Source [1] */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
        Shop Now
      </button>
    </nav>
  );
}
