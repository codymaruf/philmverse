"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, FormInput } from "lucide-react";

export default function EnterPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-emerald-300/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-green-700/30 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-400/15 rounded-full blur-[220px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        {/* Vision Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm uppercase tracking-widest text-green-400"
        >
          Shaping the Future of Filmmaking
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-5xl font-extrabold sm:text-6xl bg-gradient-to-b from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent"
        >
          Welcome to PhilmVerse
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-lg text-gray-300"
        >
          Join us at the ground floor of the next cinematic revolution.
          Share your needs, shape our vision, and connect with a community
          of pioneering filmmakers. Together, we’re building a smarter way
          to create stories.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Google Form CTA */}
          <a
            href="https://forms.gle/YmzSU9MKGcTdnHPNA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-xl bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 flex items-center gap-2">
              <FormInput className="w-5 h-5" />
              Fill Out User Form
            </Button>
          </a>

          {/* Discord CTA */}
          <a
            href="https://discord.gg/KdHfbK63tD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-xl border-green-500 text-green-400 hover:bg-green-500/10 flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Join Founders’ Community
            </Button>
          </a>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-6 text-sm text-gray-400"
        >
          [ Get founder-tier support and exclusive early access opportunities ]
        </motion.p>
      </div>
    </section>
  );
}
