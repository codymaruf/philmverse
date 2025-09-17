"use client";

import { ShieldCheck, Lock, Key, Trash, FileText } from "lucide-react";
import { motion } from "framer-motion";

const protections = [
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "100% Script Ownership",
  description: "Every word you create stays yours forever. Your stories are always your property."
  },
  {
    icon: <Key className="w-12 h-12 text-green-400" />,
    title: "Minimal Data Collection",
  description: "We only collect what&apos;s needed: email and usage patterns to improve your experience."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-green-400" />,
    title: "Zero Data Monetization",
  description: "We earn through subscriptions, never selling or sharing your creative work."
  },
  {
    icon: <Lock className="w-12 h-12 text-green-400" />,
    title: "Bank-Level Security",
  description: "Military-grade encryption ensures your creative universe is safe from prying eyes."
  },
  {
    icon: <Trash className="w-12 h-12 text-green-400" />,
    title: "Easy Exit",
  description: "Delete your PhilmVerse account anytime, and we remove everything within 30 days."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <section className="relative py-32 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-b from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent"
        >
          Your Creative Universe is Yours Alone
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16"
        >
          Total transparency about protecting your ideas, conversations, and creative magic. 
          PhilmVerse operates on one unbreakable principle: your creative universe belongs entirely to you. 
          We never sell your data, share your scripts, or use your conversations for anything except making 
          your PhilmVerse experience more magical.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-5">
          {protections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
