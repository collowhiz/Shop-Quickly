import { BrandHeading } from "@/components/ui/BrandHeading";

export default function PrivacyPage() {
  return (
    <main className="bg-[#8FD9FB] min-h-screen py-20 px-4">
      <article className="prose prose-slate max-w-4xl mx-auto">
        <BrandHeading level={1}>Privacy Policy</BrandHeading>

        <h2>Information Collection</h2>
        <p>
          We collect data essential to providing our "Smart Sync" services. This
          includes transaction history, item status updates, and usage patterns
          required for the Smart Retrieval feature to function intuitively.
        </p>

        <h2>Device Integration & Data Safety</h2>
        <p>
          ShopQuickly is committed to ensuring your information is{" "}
          <strong>safe and secure</strong>. Data shared between your smart
          fridge and our app is encrypted and used solely to facilitate easy
          inventory management and automated notifications.
        </p>

        <h2>Smart Sync Governance</h2>
        <p>
          User data is synchronized across all authorized devices. We do not
          sell your personal consumption patterns to third-party advertisers.
          Our infrastructure, built on Bubble, adheres to strict data security
          protocols.
        </p>

        <p className="mt-10 font-medium">© 2026 ShopQuickly</p>
      </article>
    </main>
  );
}
