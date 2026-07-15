import Link from "next/link";
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative h-[50vh] flex items-center justify-center">

        <img
          src="/images/GYM-INTERIORS-FEATURE-compressed.jpg"
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold">
            FitBuddy <span className="text-red-500">Gallery</span>
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            Explore our premium gym environment and fitness community
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-5 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/images (2).jpg"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/images (3).jpg"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/images (4).jpg"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/images (5).jpg"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/bodyzonegym.jpg"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/premium-fitness-gym-haibowal-kalan-ludhiana-gyms-dqfuom0w2x.avif"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/fit-woman-man-gym-full-shot_23-2149734688.avif"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/images/istockphoto-1211886784-612x612.jpg"
              alt="gym"
              className="w-full h-72 object-cover"
            />
          </div>

        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-gray-900 py-16">

        <div className="container mx-auto px-5 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Train With The Best
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-8">
            At FitBuddy, we combine modern equipment,
            expert trainers, and a motivating atmosphere
            to help you become the best version of yourself.
          </p>

        </div>
      </section>

    </main>
  );
}