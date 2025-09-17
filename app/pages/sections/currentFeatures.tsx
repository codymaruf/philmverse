// app/sections/Features.tsx
"use client";

import { Film, Workflow, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Film className="w-10 h-10 text-green-400" />,
    title: "Chat Your Way to Perfect Scripts",
    subtitle: "Conversational Script Creation",
    description:
      "Simply describe your story idea and video length through natural conversation. Our AI understands filmmakers' language and transforms your vision into structured, shootable scripts instantly. It's like having a brilliant writing partner available 24/7.",
  },
  {
    icon: <Workflow className="w-10 h-10 text-green-400" />,
    title: "One Universe, Zero Chaos",
    subtitle: "Instant Creative Workflow",
    description:
      "No more juggling dozens of apps or losing brilliant ideas in scattered notes. PhilmVerse keeps all your projects, scripts, and creative conversations in one intuitive space. Your creative energy flows freely from concept to completion.",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-green-400" />,
    title: "AI That Speaks Your Language",
    subtitle: "Your Voice, Amplified",
    description:
      "PhilmVerse learns your storytelling style through every chat. Whether you're crafting YouTube content or feature films, our AI captures your unique voice and creative vision, making every script feel personally crafted.",
  },
];

export default function Features() {
  return (
    <section className="relative py-32 text-white bg-black overflow-hidden">
      {/* Soft Green Glow Behind Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-[-200px] right-1/3 w-[600px] h-[600px] bg-green-600/15 rounded-full blur-[250px]" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Powerful Features for <span className="text-green-400">Filmmakers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          PhilmVerse blends cinematic creativity with advanced AI — making
          pre-production faster, smoother, and inspired.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
            >
              <Card className="bg-white/5 border border-white/10 rounded-3xl shadow-lg hover:shadow-green-500/30 transition backdrop-blur-md relative overflow-hidden">
                {/* Subtle glow inside card */}
                <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-green-400 mb-3">{feature.subtitle}</p>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
