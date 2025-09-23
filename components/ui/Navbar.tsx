"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link href="/enter">
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
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-white font-medium">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                Home
              </Link>
              <Link href="/roadmap" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                Roadmap
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                About
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                Contact
              </Link>
              <Link href="/enter" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 text-white font-semibold transition"
                >
                  Enter PhilmVerse
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
