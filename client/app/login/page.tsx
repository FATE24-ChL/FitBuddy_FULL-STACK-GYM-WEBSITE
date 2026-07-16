"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await fetch("https://fitbuddy-full-stack-gym-website.onrender.com/routes/auth/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user",JSON.stringify({email:email}));
        router.push('/');
        alert("Login Successful");
      } else {
        alert("data.message || Login Failed");
        return;
      }

    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-linear-to-r from-black via-gray-900 to-black">

      <div className="bg-white/10 backdrop-blur-lg border border-red-500 p-10 rounded-3xl shadow-2xl w-96">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          Welcome Back
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Login to your FitBuddy account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-white text-black outline-none border-2 border-transparent focus:border-red-500 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-white text-black outline-none border-2 border-transparent focus:border-red-500 transition"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-red-400 text-sm hover:text-red-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-300 mt-4">
            Don’t have an account?{" "}

            <span className="text-red-400 hover:text-red-300 cursor-pointer">
               <Link href="/register">
                  Register
                </Link>
            </span>

          </p>

        </form>

      </div>

    </main>
  );
}
export default Page;