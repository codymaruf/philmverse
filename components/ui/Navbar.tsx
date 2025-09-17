"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 shadow-md"
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="PhilmVerse Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="/" className="hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link href="/features" className="hover:text-green-400 transition-colors">
            Features
          </Link>
          <Link href="/roadmap" className="hover:text-green-400 transition-colors">
            Roadmap
          </Link>
          <Link href="/about" className="hover:text-green-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition-colors">
            Contact
          </Link>

          {/* CTA Button */}
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 text-white font-semibold transition"
            >
              Enter PhilmVerse
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
