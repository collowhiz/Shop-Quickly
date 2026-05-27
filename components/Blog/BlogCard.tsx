import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
}

export default function BlogCard({ title, description }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
