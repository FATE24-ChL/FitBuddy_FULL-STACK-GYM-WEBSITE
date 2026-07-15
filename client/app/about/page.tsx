import React from "react";

const page = () =>  {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">

        <img
          src="/images/GYM-INTERIORS-FEATURE-compressed.jpg"
          alt="gym"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-5">
          <h1 className="text-5xl md:text-7xl font-bold">
            About <span className="text-red-500">FitBuddy</span>
          </h1>

          <p className="mt-5 text-lg max-w-2xl mx-auto text-gray-200">
            Your ultimate fitness destination for strength,
            transformation, and healthy living.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-5 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/images/bodyzonegym.jpg"
              alt="gym"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Why Choose FitBuddy?
            </h2>

            <p className="text-gray-300 leading-8 mb-5">
              FitBuddy is more than just a gym. We provide
              professional trainers, modern equipment,
              personalized workout plans, and a motivating
              fitness environment for everyone.
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              Whether you are a beginner or a professional
              athlete, our mission is to help you achieve
              your fitness goals effectively.
            </p>

            <div className="flex gap-5 mt-8">

              <div className="bg-red-500 p-5 rounded-xl">
                <h3 className="text-3xl font-bold">10K+</h3>
                <p>Members</p>
              </div>

              <div className="bg-gray-800 p-5 rounded-xl">
                <h3 className="text-3xl font-bold">50+</h3>
                <p>Expert Trainers</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="bg-gray-900 py-20">

        <div className="container mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-14">
            Meet Our Trainers
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-black rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/images (2).jpg"
                alt="trainer"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Rahul Sharma
                </h3>

                <p className="text-red-400 mt-2">
                  Strength Coach
                </p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/images (3).jpg"
                alt="trainer"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Priya Mehta
                </h3>

                <p className="text-red-400 mt-2">
                  Yoga Expert
                </p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/images (4).jpg"
                alt="trainer"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Arjun Patel
                </h3>

                <p className="text-red-400 mt-2">
                  Cardio Specialist
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default page;