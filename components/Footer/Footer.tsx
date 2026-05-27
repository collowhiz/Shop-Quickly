import Link from 'next/link';
import { BrandHeading } from '../ui/BrandHeading';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mailing List Section [4] */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-2xl font-bold mb-2">Join Our Mailing List</h3>
            <p className="text-gray-500">
              Stay updated with our latest integrations and special offers!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="yourname@example.com"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none min-w-[300px]"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
              Sign up
            </button>
          </div>
        </div>

        {/* Footer Links Grid [4] */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Customers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy
                </a>
              </li>
            </ul>
          </div> */}

        </div>
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/product/overview" className="hover:text-white transition">Overview</Link></li>
              <li><Link href="/product/customers" className="hover:text-white transition">Customers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/company/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/jobs" className="hover:text-white transition">Jobs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/support/faqs" className="hover:text-white transition">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/legal/terms" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Branding [4] */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <span className="font-bold text-gray-900 text-lg mb-2 md:mb-0">
            ShopQuickly
          </span>
          <p>© 2024 ShopQuickly. Collins Muturi Projects</p>
        </div>
      </div>
    </footer>
  );
}
