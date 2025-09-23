"use client";

import { motion } from "framer-motion";
import { Mail, Users, Film, X, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const DiscordIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 71 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-green-400"
  >
    <path
      d="M60.104 4.857A58.197 58.197 0 0046.1 0a42.23 42.23 0 00-1.96 4.007 55.446 55.446 0 00-16.17 0A42.117 42.117 0 0025.01 0 58.197 58.197 0 0011.008 4.857C4.662 19.07 1.36 33.18 2.285 47.212a58.137 58.137 0 0015.86 7.995 42.265 42.265 0 003.73-5.948 37.607 37.607 0 01-5.688-2.717c.48-.348.95-.717 1.398-1.108a31.37 31.37 0 0025.586 0c.45.39.918.758 1.398 1.108a37.586 37.586 0 01-5.69 2.717 42.264 42.264 0 003.728 5.948 58.138 58.138 0 0015.86-7.995c.921-14.03-2.37-28.142-8.717-42.355zM23.725 37.87c-3.29 0-5.964-3.018-5.964-6.737 0-3.72 2.64-6.736 5.963-6.736 3.33 0 6.016 3.018 5.963 6.736 0 3.72-2.636 6.737-5.963 6.737zm23.57 0c-3.29 0-5.964-3.018-5.964-6.737 0-3.72 2.64-6.736 5.963-6.736 3.33 0 6.016 3.018 5.963 6.736 0 3.72-2.635 6.737-5.962 6.737z"
      fill="currentColor"
    />
  </svg>
);

  const features = [
    { icon: <Mail className="w-10 h-10 text-green-400" />, label: "Email", link: "mailto:azharmaruf900@gmail.com" },
    { icon: <DiscordIcon />, label: "Creative Community", link: "https://discord.gg/KdHfbK63tD" },
    { icon: <X className="w-10 h-10 text-green-400" />, label: "X/Twitter", link: "https://x.com/azharmarufworld" },
    { icon: <Facebook className="w-10 h-10 text-green-400" />, label: "Facebook", link: "https://www.facebook.com/profile.php?id=61574481545132" },
    { icon: <Youtube className="w-10 h-10 text-green-400" />, label: "YouTube", link: "https://youtube.com/@azharmaruf?si=mN-k0HaNlaYfHV3I" },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center items-center px-6 lg:px-24 py-32">
      
      {/* Cinematic Floating Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 6 + i * 0.3, delay: i * 0.2 }}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-b from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent"
      >
  Let&apos;s Create Magic Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center text-gray-300 max-w-3xl mb-16 text-lg md:text-xl"
      >
  Your voice shapes the future of PhilmVerse. Share ideas, get support, or showcase your creations &mdash; everything happens in this cinematic universe of creativity.
      </motion.p>

      {/* Contact & Social Icons */}
      <div className="grid md:grid-cols-5 gap-8 w-full max-w-5xl mb-20">
        {features.map((feature, i) => (
          <motion.a
            key={i}
            href={feature.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.8 }}
            className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-green-500/40 transition hover:scale-105"
          >
            <div className="mb-4">{feature.icon}</div>
            <p className="text-green-400 font-semibold">{feature.label}</p>
          </motion.a>
        ))}
      </div>

      {/* Quick Contact Form */}
      {/* <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full max-w-3xl flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>

        <Button className="px-6 py-3 font-semibold rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 text-lg">
          Send Your Message
        </Button>
      </motion.form> */}
    </section>
  );
}
