import Link from "next/link";

export default function ProPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-6">

      <div className="max-w-3xl w-full bg-gray-800 border border-gray-400 rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-extrabold text-center text-gray-300 mb-4">
          💎 PRO Membership
        </h1>

        <p className="text-center text-gray-400 text-lg mb-8">
          The perfect choice for dedicated fitness enthusiasts.
        </p>

        <img
          src="/images/bodyzonegym.jpg"
          alt="Pro Gym"
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />

        <div className="bg-black rounded-2xl p-6 border border-gray-600">
          <ul className="space-y-4 text-lg">
            <li>✅ Access to all PRO gyms</li>
            <li>✅ 2 ELITE sessions every month</li>
            <li>✅ Workout tracking & progress reports</li>
            <li>✅ Basic trainer support</li>
            <li>✅ Nutrition tips</li>
            <li>✅ Member-only fitness challenges</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-lg">Starting From</p>

          <h2 className="text-6xl font-extrabold text-red-500 mt-2">
            ₹2999
          </h2>

          <p className="text-gray-300">per month</p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-xl text-xl font-bold transition duration-300 shadow-lg">
            Join Now 🚀
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <Link href="/">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              ← Back to Home
            </button>
          </Link>
        </div>

      </div>

    </main>
  );
}