"use client";

import { motion } from "framer-motion";
import { Film, Settings, Wand, Users, Zap, Monitor, Clock, Book, Eye } from "lucide-react";

export default function AboutPage() {
  const icons = [
    { icon: <Film className="w-12 h-12 text-green-400" />, label: "Storytelling" },
    { icon: <Wand className="w-12 h-12 text-green-400" />, label: "Creative Magic" },
    { icon: <Users className="w-12 h-12 text-green-400" />, label: "Collaboration" },
    { icon: <Settings className="w-12 h-12 text-green-400" />, label: "Smart Workflow" },
    { icon: <Zap className="w-12 h-12 text-green-400" />, label: "Fast Execution" },
    { icon: <Monitor className="w-12 h-12 text-green-400" />, label: "Digital Visualization" },
    { icon: <Clock className="w-12 h-12 text-green-400" />, label: "Time Saved" },
    { icon: <Book className="w-12 h-12 text-green-400" />, label: "Knowledge Base" },
    { icon: <Eye className="w-12 h-12 text-green-400" />, label: "Attention to Detail" },
  ];

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-green-700/25 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-400/10 rounded-full blur-[220px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-green-400"
        >
          Built by Creators, Powered by Magic
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl mb-8"
        >
          We've lived the pre-production nightmare — and we've solved it.
        </motion.p>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 max-w-3xl mx-auto text-left space-y-4 mb-16"
        >
          <p>
            Every filmmaker knows the brutal truth: you have incredible stories to tell, but pre-production feels like navigating a labyrinth blindfolded. Weeks vanish into research, planning, and coordinating — stealing precious time from actual creativity.
          </p>
          <p>
            PhilmVerse was born from this frustration. We believe magical storytelling shouldn't be buried under administrative chaos. Our conversational AI doesn't replace your creativity; it amplifies it exponentially. We handle the tedious groundwork so you can focus on what makes cinema extraordinary: authentic human moments and stories only you can tell.
          </p>
          <p>
            This isn't about robots making films. It's about giving storytellers superpowers through intelligent conversation, transforming the creative process into pure magic.
          </p>
        </motion.div>

        {/* Icon Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-12"
        >
          {icons.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center gap-2"
            >
              {item.icon}
              <span className="text-gray-300 text-sm">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/signup"
            className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl font-bold text-white shadow-lg shadow-green-500/30"
          >
            Join the Creative Revolution
          </a>
        </motion.div>
      </div>
    </section>
  );
}
