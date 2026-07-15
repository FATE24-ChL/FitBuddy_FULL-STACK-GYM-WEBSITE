"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }



    try {
      const response = await fetch("http://localhost:8000/routes/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "name": name, "email": email, "password": password }),
      });
      console.log(name)
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      else{

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      router.push("/");
      alert("User registered succesfully!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-linear-to-r from-black via-gray-900 to-black">

      <div className="bg-white/10 backdrop-blur-lg border border-red-500 p-10 rounded-3xl shadow-2xl w-96">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          Create Account
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Join FitBuddy today
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white text-black outline-none border-2 border-transparent focus:border-red-500 transition"
              required
            />
          </div>

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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-white text-black outline-none border-2 border-transparent focus:border-red-500 transition"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-white text-black outline-none border-2 border-transparent focus:border-red-500 transition"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}

            <span className="text-red-400 hover:text-red-300 cursor-pointer">
               <Link href="/login">
                                Login
                              </Link>
              
            </span>

          </p>

        </form>

      </div>

    </main>
  );
}
export default Page;