"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect your authentication logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background cinematic glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-green-700/25 rounded-full blur-[200px]" />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-black/90 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg max-w-md w-full p-10 flex flex-col items-center"
      >
        {/* Logo */}
        <Image src="/logo.png" alt="PhilmVerse Logo" width={100} height={100} />

        {/* Headline */}
        <h1 className="mt-4 text-3xl font-bold text-green-400 text-center">
          Welcome Back to PhilmVerse
        </h1>
        <p className="mt-2 text-gray-400 text-center">
          Your creative universe awaits — let&apos;s make more magic together.

        </p>
        <p className="mt-4 text-gray-500 text-sm text-center">
          Step back into your personal creative space where all your scripts, conversations, and film projects live.
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:border-green-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:border-green-400 outline-none"
          />

          <Button type="submit" className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg shadow-green-500/30">
            Enter PhilmVerse
          </Button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 flex justify-between w-full text-sm text-gray-400">
          <a href="#" className="hover:text-green-400 transition">Forgot Password?</a>
          <span>Google Sign-In (Coming Soon)</span>
        </div>
      </motion.div>
    </section>
  );
}
