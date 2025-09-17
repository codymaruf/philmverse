"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Film, LayoutGrid, Calendar, Users, Palette, Zap } from "lucide-react";

const futureFeatures = [
  { icon: <Film className="w-8 h-8 text-green-400" />, title: "Conversational Shot Lists & Scene Breakdown" },
  { icon: <LayoutGrid className="w-8 h-8 text-green-400" />, title: "AI-Generated Visual Storyboards & Mood Boards" },
  { icon: <Calendar className="w-8 h-8 text-green-400" />, title: "Smart Budgeting + Scheduling Through Chat" },
  { icon: <Zap className="w-8 h-8 text-green-400" />, title: "Multi-Platform Content Adaptation" },
  { icon: <Palette className="w-8 h-8 text-green-400" />, title: "Genre-Specific Creative Templates" },
  { icon: <Users className="w-8 h-8 text-green-400" />, title: "Creative Collaboration Spaces" },
  { icon: <Zap className="w-8 h-8 text-green-400" />, title: "Intelligent Pacing Analysis" },
  { icon: <Film className="w-8 h-8 text-green-400" />, title: "Story Structure Optimization" },
];

export default function FutureFeatures() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background glowing layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-150px] right-[-50px] w-[700px] h-[700px] bg-green-700/25 rounded-full blur-[200px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-400/10 rounded-full blur-[220px]" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          The Magic <span className="text-green-400">Keeps Growing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          PhilmVerse is evolving into your complete creative universe. Soon you&apos;ll generate visual storyboards through conversation, create shot lists that save shooting days, and access budgeting tools that keep productions on track. This is filmmaking reimagined for the AI age.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-green-500/30 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <Button className="px-8 py-4 text-lg font-semibold rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30">
            View Full Roadmap Magic
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
