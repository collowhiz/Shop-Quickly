// import React from "react";

// export default function Testimonials() {
//   return (
//     <section className="py-24 bg-white border-t border-gray-100">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         {/* Header from Source [1] */}
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//           User Testimonials
//         </h2>
//         <p className="text-gray-500 text-lg mb-16 italic">
//           Global users share their seamless shopping experiences.
//         </p>

//         {/* Quote Content from Source [1] */}
//         <div className="relative">
//           <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-10">
//             "The seamless integration with my smart fridge has completely
//             changed the way I manage my groceries. Thanks to this app, I am never
//             out of essentials, and I can track my consumption effortlessly—it
//             truly simplifies my life!"
//           </blockquote>

//           {/* Attribution from Source [1] */}
//           <div className="flex flex-col items-center">
//             <span className="h-1 w-10 bg-blue-600 mb-4"></span>
//             <p className="text-lg font-bold text-gray-900">Emily Johnson</p>
//             <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
//               Sales Director at FreshMart
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

export default function Testimonials() {
  const features = [
    {
      title: "5 Ways Smart Refrigerators Save Time & Money",
      description:
        "Discover how integrating your smart fridge with Shop Quickly reduces food waste and cuts grocery bills by up to 40%.",
    },
    {
      title: "Real-Time Inventory Tracking: Never Forget Again",
      description:
        "Stay in control of your pantry with instant notifications when items run low or are about to expire.",
    },
    {
      title: "Family Shopping Made Simple: Shared Lists & Sync",
      description:
        "Collaborate with household members in real-time. Add items, assign tasks, and never duplicate purchases.",
    },
  ];

  return (
    <>
      {/* FEATURES SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
            Why Smart Shopping Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-500 text-lg italic">
              Real stories from customers who transformed their shopping
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The seamless integration with my smart fridge has completely
                changed the way I manage my groceries. I never run out of
                essentials anymore!"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">Emily Johnson</p>
                <p className="text-gray-500 text-sm">
                  Sales Director at FreshMart
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The app sends real-time notifications that have helped me catch items before
                they expire. My household food waste has dropped by 60% since I
                started using Shop Quickly!"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">Marcus Chen</p>
                <p className="text-gray-500 text-sm">
                  Tech Enthusiast & Parent
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Being able to check inventory from anywhere while at the store
                is a game-changer. I save time and money every week with better
                shopping decisions."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">Sarah Williams</p>
                <p className="text-gray-500 text-sm">
                  Busy Professional & Homeowner
                </p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Shop Quickly's smart suggestions have completely streamlined my
                weekly meal planning. The app learns what I buy and saves me
                precious time."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">David Rodriguez</p>
                <p className="text-gray-500 text-sm">Chef & Food Writer</p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The integration between my smart home devices and Shop Quickly
                is seamless. My kitchen has never been more organized and
                efficient."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">Jessica Park</p>
                <p className="text-gray-500 text-sm">Smart Home Advocate</p>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Finally, an app that actually understands the modern kitchen.
                The family loves how easy it is to share shopping lists and keep
                everything in sync."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">Robert Thompson</p>
                <p className="text-gray-500 text-sm">Family of Four</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
