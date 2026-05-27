import Link from 'next/link';
import { BrandHeading } from '@/components/ui/BrandHeading';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white py-16 px-8">
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
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <BrandHeading level={4} className="text-white">ShopQuickly</BrandHeading>
            <p className="text-gray-500 text-sm mt-1">© 2024 ShopQuickly | Built on Bubble</p>
          </div>
          <div className="text-gray-500 text-sm">
            #1 on smart shopping
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;