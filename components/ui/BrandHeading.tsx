import React from "react";

interface BrandHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export const BrandHeading = ({
  children,
  level = 1,
  className = "",
}: BrandHeadingProps) => {
  const Tag = `h${level}` as React.ElementType;
  const baseStyles = "font-bold text-brand-black tracking-tight uppercase";
  const sizeStyles = {
    1: "text-5xl md:text-6xl",
    2: "text-4xl md:text-5xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl",
  };

  return (
    <Tag className={`${baseStyles} ${sizeStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
};
