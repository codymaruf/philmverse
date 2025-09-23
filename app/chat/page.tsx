// app/chat/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Clock } from "lucide-react";

export default function ChatComingSoon() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Layered green glows (match Hero style) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-emerald-300/18 rounded-full blur-[180px]" />
        <div className="absolute top-[-120px] right-[-200px] w-[500px] h-[500px] bg-green-500/12 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-220px] right-[-200px] w-[700px] h-[700px] bg-green-800/24 rounded-full blur-[220px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-400/06 rounded-full blur-[240px]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white/3 backdrop-blur-sm border border-white/6">
            <Wrench className="w-8 h-8 text-green-400" />
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Chat Workspace
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="mx-auto w-full max-w-xl px-8 py-14 rounded-2xl bg-gradient-to-b from-white/3 to-black/40 border border-white/6 backdrop-blur-sm">
              {/* Animated "Under Construction" badge */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-green-400 animate-pulse" />
                  <h2 className="text-3xl sm:text-4xl font-bold">
                    Under Construction
                  </h2>
                </div>

                {/* Subtext with type-like reveal */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-3 text-gray-300 max-w-2xl"
                >
                  Coming soon — our interactive chat workspace is being built.
                  We’re crafting smart conversation flows, script previews, and
                  realtime tools to make pre-production effortless.
                </motion.p>

                {/* Neon "Coming Soon" tag with flicker */}
                <div className="mt-6">
                  <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-green-500/10 border border-green-500/30 text-green-300 shadow-[0_8px_30px_rgba(34,197,94,0.12)] coming-soon">
                    Coming Soon
                  </span>
                </div>

                {/* Helpful actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/" className="inline-block">
                    <button className="rounded-lg px-5 py-2.5 bg-green-500 hover:bg-green-600 text-black font-semibold shadow-lg">
                      Return Home
                    </button>
                  </Link>
                  <a
                    href="https://discord.gg/KdHfbK63tD"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <button className="rounded-lg px-5 py-2.5 border border-green-500 text-green-300 hover:bg-green-500/10">
                      Join Founders’ Community
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        /* subtle neon flicker for the "Coming Soon" label */
        @keyframes neonFlicker {
          0%,
          100% {
            text-shadow: 0 0 6px rgba(34, 197, 94, 0.7),
              0 0 18px rgba(34, 197, 94, 0.25);
            opacity: 1;
          }
          50% {
            text-shadow: 0 0 4px rgba(34, 197, 94, 0.45);
            opacity: 0.92;
          }
        }
        .coming-soon {
          animation: neonFlicker 2.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
