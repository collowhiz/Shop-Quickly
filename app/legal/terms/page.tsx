import { BrandHeading } from "@/components/ui/BrandHeading";

export default function TermsPage() {
  return (
    <main className="bg-[#8FD9FB] min-h-screen py-20 px-4">
      <article className="prose prose-slate max-w-4xl mx-auto">
        <BrandHeading level={1}>Terms of Service</BrandHeading>
        <p className="lead">Last Updated: April 2026</p>

        <h2>1. Platform Usage</h2>
        <p>
          ShopQuickly provides a smart shopping integration service built on the{" "}
          <strong>React and NextJs</strong> platform. By using our application, you agree
          to the seamless synchronization of your transaction data across your
          connected hardware and smart home devices.
        </p>

        <h2>2. Technical Integration</h2>
        <p>
          Our services involve the interaction between the ShopQuickly app and
          third-party smart home hardware. While we strive for a unified
          experience through "Seamless Sync," the performance may vary based on
          hardware manufacturer standards.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content, including the "Smart Retrieval" logic and "Live
          Inventory" management interfaces, is the property of ShopQuickly.
        </p>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p>© 2026 ShopQuickly | Collins Muturi Projects</p>
        </footer>
      </article>
    </main>
  );
}
