import Link from "next/link";

export default function ElitePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-6">

      <div className="max-w-3xl w-full bg-gray-900 border border-yellow-500 rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-4">
          👑 ELITE Membership
        </h1>

        <p className="text-center text-gray-300 text-lg mb-8">
          Unlock the ultimate fitness experience with our most premium plan.
        </p>

        <div className="bg-black rounded-2xl p-6 border border-gray-700">
          <ul className="space-y-4 text-lg">
            <li>✅ Access to all ELITE gyms</li>
            <li>✅ Personal trainer support</li>
            <li>✅ Live workout sessions</li>
            <li>✅ Customized diet guidance</li>
            <li>✅ Luxury gym equipment</li>
            <li>✅ Priority customer support</li>
            <li>✅ Exclusive fitness events</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-lg">Starting From</p>

          <h2 className="text-6xl font-extrabold text-red-500 mt-2">
            ₹4999
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