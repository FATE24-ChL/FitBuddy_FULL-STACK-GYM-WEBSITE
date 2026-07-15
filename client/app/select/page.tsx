import Link from "next/link";

export default function SelectPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 via-white to-red-100 flex items-center justify-center p-6">

      <div className="max-w-3xl w-full bg-white border border-red-200 rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-extrabold text-center text-red-500 mb-4">
          🔥 SELECT Membership
        </h1>

        <p className="text-center text-gray-600 text-lg mb-8">
          The perfect plan for beginners starting their fitness journey.
        </p>

        <img
          src="/images/bodyzonegym.jpg"
          alt="Select Gym"
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />

        <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
          <ul className="space-y-4 text-lg text-gray-800">
            <li>✅ One selected center</li>
            <li>✅ Limited gym access</li>
            <li>✅ Workout guidance</li>
            <li>✅ Community support</li>
            <li>✅ Fitness assessment</li>
            <li>✅ Monthly progress tracking</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-lg">Starting From</p>

          <h2 className="text-6xl font-extrabold text-black mt-2">
            ₹1499
          </h2>

          <p className="text-gray-600">per month</p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-xl text-xl font-bold text-white transition duration-300 shadow-lg">
            Join Now 🚀
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <Link href="/">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
              ← Back to Home
            </button>
          </Link>
        </div>

      </div>

    </main>
  );
}