import React from "react";

interface FeatureProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureProps) {
  return (
    <div className="p-8 border border-gray-100 rounded-xl bg-[#FCDEBC] shadow-sm hover:shadow-md transition-shadow group">
      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:underline">
        Learn more
      </button>
    </div>
  );
}
