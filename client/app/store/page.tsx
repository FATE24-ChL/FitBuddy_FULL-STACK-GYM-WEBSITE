"use client";
import Link from "next/link";
import withAuth from "@/components/withAuth";
function StorePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">

        <img
          src="/images/GYM-INTERIORS-FEATURE-compressed.jpg"
          alt="store"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-5">

          <h1 className="text-5xl md:text-7xl font-bold">
            FitBuddy <span className="text-red-500">Store</span>
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            Premium gym products for your fitness journey
          </p>

        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-5 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Product 1 */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="/images/images (6).jpg"
              alt="protein"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-2">
                Whey Protein
              </h2>

              <p className="text-gray-300 mb-4">
                High-quality protein for muscle recovery
                and strength building.
              </p>

              <div className="flex items-center justify-between">

                <span className="text-red-500 text-xl font-bold">
                  ₹2999
                </span>

                <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                  Buy Now
                </button>

              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="/images/gymgloves.webp"
              alt="gloves"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-2">
                Gym Gloves
              </h2>

              <p className="text-gray-300 mb-4">
                Comfortable and durable gloves for
                better grip and protection.
              </p>

              <div className="flex items-center justify-between">

                <span className="text-red-500 text-xl font-bold">
                  ₹799
                </span>

                <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                  Buy Now
                </button>

              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="/images/proteinshaker.webp"
              alt="shaker"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-2">
                Protein Shaker
              </h2>

              <p className="text-gray-300 mb-4">
                Stylish shaker bottle for protein
                and workout drinks.
              </p>

              <div className="flex items-center justify-between">

                <span className="text-red-500 text-xl font-bold">
                  ₹499
                </span>

                <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                  Buy Now
                </button>

              </div>
            </div>
          </div>
          {/* Product 4 */}    
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="/images/leverbelt.webp"
              alt="Lifting Belt"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-2">
                Lifting Belt
              </h2>

              <p className="text-gray-300 mb-4">
                Stylish shaker bottle for protein
                and workout drinks.
              </p>

              <div className="flex items-center justify-between">

                <span className="text-red-500 text-xl font-bold">
                  ₹3000
                </span>

                <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                  Buy Now
                </button>

              </div>
            </div>
          </div>

 <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="/images/massagegun.webp"
              alt="Massage Gun"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-2">
                Massage Gun
              </h2>

              <p className="text-gray-300 mb-4">
                Stylish shaker bottle for protein
                and workout drinks.
              </p>

              <div className="flex items-center justify-between">

                <span className="text-red-500 text-xl font-bold">
                  ₹1500
                </span>

                <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                  Buy Now
                </button>

              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="/images/images (7).jpg"
              alt="Yoga Mat"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-2">
                Yoga Mat
              </h2>

              <p className="text-gray-300 mb-4">
                Stylish shaker bottle for protein
                and workout drinks.
              </p>

              <div className="flex items-center justify-between">

                <span className="text-red-500 text-xl font-bold">
                  ₹700
                </span>

                <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                  Buy Now
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-red-500 py-16 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Upgrade Your Fitness Journey
        </h2>

        <p className="max-w-2xl mx-auto text-lg">
          Shop premium fitness products trusted by
          athletes and gym professionals.
        </p>

        <Link
          href="/register"
          className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          Join FitBuddy
        </Link>

      </section>

    </main>
  );
}
export default withAuth(StorePage);