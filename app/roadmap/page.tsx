"use client";

import { motion } from "framer-motion";
import { List, Eye, Shuffle, Users, Globe, Cpu } from "lucide-react";

const roadmapItems = [
  {
    icon: <List className="w-12 h-12 text-green-400" />,
    title: "Conversational Shot Lists",
  description: "Never miss a crucial angle &mdash; generate comprehensive shot lists through natural conversation with your AI partner.",
    section: "Near Future Magic",
  },
  {
    icon: <Eye className="w-12 h-12 text-green-400" />,
    title: "Visual Story Magic",
  description: "Transform scripts into visual storyboard frames through simple chat, ensuring your crew sees your vision before filming begins.",
    section: "Near Future Magic",
  },
  {
    icon: <Shuffle className="w-12 h-12 text-green-400" />,
    title: "Smart Scene Flow",
  description: "Reorganize and polish your story structure through intuitive conversation &mdash; no complex interfaces, just creative dialogue.",
    section: "Near Future Magic",
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Team Creative Conversations",
  description: "Invite writers, directors, and producers into shared creative conversations that build stories collaboratively.",
    section: "Next-Level Creation",
  },
  {
    icon: <Globe className="w-12 h-12 text-green-400" />,
    title: "Multi-Universe Content",
  description: "Transform one story into scripts for YouTube, TikTok, features, or documentaries through conversation-based adaptation.",
    section: "Next-Level Creation",
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-400" />,
    title: "Cinematic Intelligence",
  description: "AI that understands rhythm, tension, and emotional beats &mdash; your conversational co-pilot for masterful storytelling.",
    section: "Next-Level Creation",
  },
  {
    icon: <List className="w-12 h-12 text-green-400" />,
    title: "Complete Production Magic",
  description: "From initial chat to call sheets, budgets, and schedules &mdash; all generated through natural creative conversation.",
    section: "The Ultimate Creative Universe",
  },
  {
    icon: <Globe className="w-12 h-12 text-green-400" />,
    title: "Global Creator Network",
  description: "Connect with filmmakers worldwide, share creative conversations, and collaborate on universe-spanning projects.",
    section: "The Ultimate Creative Universe",
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-400" />,
    title: "Personalized Creative Companion",
  description: "An AI that evolves with your style, learning your creative language and anticipating your storytelling needs.",
  section: "The Ultimate Creative Universe",
  },
];

export default function RoadmapPage() {
  const sections = ["Near Future Magic", "Next-Level Creation", "The Ultimate Creative Universe"];

  return (
    <section className="relative py-32 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-b from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent"
        >
          The Evolution of Creative Magic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16"
        >
          PhilmVerse isn't just growing — it's evolving into a complete creative ecosystem. Every conversation in our community, every piece of feedback, and every magical moment you share shapes what we build next. We're not developing features; we're crafting the future of creative expression through AI conversation.
        </motion.p>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-green-400">{section}</h2>
            <div className="grid gap-12 md:grid-cols-3">
              {roadmapItems
                .filter(item => item.section === section)
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 0.6 }}
                    className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:shadow-green-500/30 transition"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
Cpu