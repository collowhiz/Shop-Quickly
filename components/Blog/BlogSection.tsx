import React from "react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  const articles = [
    {
      title:
        "Elevate Your Shopping Experience: The Future of App-Hardware Integration",
      description:
        "Learn about the future of retail with app-hardware integration. Elevate your shopping experience by combining our innovative app with smart home devices. [1]",
    },
    {
      title:
        "Smart Purchases: Integrate with Your Home Hardware for Easy Shopping",
      description:
        "Discover how seamlessly integrating smart home hardware with our app can revolutionize your shopping experience. Streamline purchases and automate notifications. [2]",
    },
    {
      title:
        "Effortless Shopping: How Our App Integrates Seamlessly with Your Hardware",
      description:
        "Learn how our app makes shopping a breeze by seamlessly connecting with your hardware. From easy inventory management to quick display selections. [2]",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          Latest blog articles 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <BlogCard
              key={idx}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
