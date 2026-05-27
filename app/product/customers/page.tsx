"use client";
import { BrandHeading } from "@/components/ui/BrandHeading";

export default function CustomersPage() {
  return (
    <main className="bg-[#8FD9FB] min-h-screen">
      <section className="py-24 px-6 bg-brand-gray-50">
        <div className="max-w-5xl mx-auto">
          <BrandHeading level={1} className="text-center mb-16">
            User Testimonials
          </BrandHeading>

          <div className="bg-brand-white p-12 rounded-2xl shadow-sm border border-gray-100">
            <blockquote className="text-2xl md:text-3xl font-medium text-brand-black leading-snug italic mb-8">
              "The seamless integration with my smart fridge has completely
              changed the way I manage my groceries. Thanks to this app, I'm
              never out of essentials, and I can track my consumption
              effortlessly—it truly simplifies my life!"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-brand-blue-50 rounded-full flex items-center justify-center font-bold text-xl">
                EJ
              </div>
              <div>
                <p className="font-bold text-lg text-brand-black">
                  Emily Johnson
                </p>
                <p className="text-gray-500 uppercase text-sm tracking-widest">
                  Sales Director at FreshMart
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-12 text-gray-400 font-medium">
            Built with you in mind.
          </p>
        </div>
      </section>
    </main>
  );
}
