"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black text-white">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft spotlight gradients */}
        <div className="absolute top-[-150px] left-[10%] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-150px] right-[15%] w-[600px] h-[600px] bg-green-700/25 rounded-full blur-[220px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-400/10 rounded-full blur-[240px]" />

        {/* Faint film reel/clapperboard silhouettes */}
        <Clapperboard className="absolute top-[10%] right-[20%] w-24 h-24 text-green-800/20 rotate-12" />
        <Clapperboard className="absolute bottom-[5%] left-[25%] w-32 h-32 text-green-700/15 -rotate-6" />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-green-400 rounded-full opacity-30 animate-[float_8s_linear_infinite]`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm uppercase tracking-widest text-green-400 drop-shadow-md"
        >
          Less Planning, Faster Films, More Creating {'&mdash;'} Pure Magic
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-5xl font-extrabold sm:text-6xl tracking-wide bg-gradient-to-b from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          Welcome to PhilmVerse
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-xl sm:text-2xl text-gray-200"
        >
          Where filmmakers turn ideas into reality through AI-powered
          conversation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-base leading-relaxed text-gray-300"
        >
          Stop drowning in pre-production chaos. PhilmVerse transforms your creative vision into complete production-ready plans through intelligent conversation. From scripts to shot lists, story structure to scheduling {'&mdash;'} chat with our AI and watch your entire pre-production workflow emerge like magic. Less time planning means more time creating the films you love.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button className="px-6 py-3 text-lg font-semibold rounded-xl bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 flex items-center gap-2">
            <Clapperboard className="w-5 h-5" />
            Create My First Script (Free)
          </Button>
          <Button
            variant="outline"
            className="px-6 py-3 text-lg font-semibold rounded-xl border-green-500 text-green-400 hover:bg-green-500/10 flex items-center gap-2"
          >
            <Clapperboard className="w-5 h-5" />
            Join Our Creative Community
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
