"use client";
import Link from "next/link";
export default function FitnessInstitutePage() {
return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative h-[50vh] flex items-center justify-center">

        <img
          src="/images/GYM-INTERIORS-FEATURE-compressed (2).jpg"
          alt="fitness"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-5">

          <h1 className="text-5xl md:text-7xl font-bold">
            Fitness <span className="text-red-500">Institute</span>
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            Become a certified fitness professional with FitBuddy
          </p>

        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-5 py-20">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Course 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Advanced Online Course
            </h2>

            <p className="text-gray-300 leading-7">
              Learn fitness training, workout planning,
              and nutrition from expert trainers through
              our online certification course.
            </p>
           <button
  onClick={() => {
    localStorage.setItem(
      "selectedCourse",
      JSON.stringify({
        course: "Advanced Online Course",
        amount: 4999,
      })
    );

    window.location.href = "/payment";
  }}
  className="mt-6 bg-red-500 px-6 py-2 rounded-lg hover:bg-red-700 transition"
>
  Enroll Now
</button>
          </div>

          {/* Course 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Offline Personal Training
            </h2>

            <p className="text-gray-300 leading-7">
              Get practical gym experience with our
              advanced offline personal training batches.
            </p>
          <button
  onClick={() => {
    localStorage.setItem(
      "selectedCourse",
      JSON.stringify({
        course: "Offline Personal Training",
        amount: 6999,
      })
    );

    window.location.href = "/payment";
  }}
  className="mt-6 bg-red-500 px-6 py-2 rounded-lg hover:bg-red-700 transition"
>
  Enroll Now
</button>
          </div>

          {/* Course 3 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Sports Nutrition Course
            </h2>

            <p className="text-gray-300 leading-7">
              Master sports nutrition and healthy diet
              planning for athletes and fitness clients.
            </p>
           <button
  onClick={() => {
    localStorage.setItem(
      "selectedCourse",
      JSON.stringify({
        course: "Sports Nutrition Course",
        amount: 3999,
      })
    );

    window.location.href = "/payment";
  }}
  className="mt-6 bg-red-500 px-6 py-2 rounded-lg hover:bg-red-700 transition"
>
  Enroll Now
</button>

          </div>

        </div>
      </section>

    </main>
  );
}