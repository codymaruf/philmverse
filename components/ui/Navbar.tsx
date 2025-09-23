// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 shadow-md"
//     >
//       <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo.png"
//             alt="PhilmVerse Logo"
//             width={150}
//             height={150}
//             className="object-contain"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-white font-medium">
//           <Link href="/" className="hover:text-green-400 transition-colors">
//             Home
//           </Link>
//           <Link href="/roadmap" className="hover:text-green-400 transition-colors">
//             Roadmap
//           </Link>
//           <Link href="/about" className="hover:text-green-400 transition-colors">
//             About
//           </Link>
//           <Link href="/contact" className="hover:text-green-400 transition-colors">
//             Contact
//           </Link>

//           {/* CTA Button */}
//           <Link href="/enter">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 text-white font-semibold transition"
//             >
//               Enter PhilmVerse
//             </motion.button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden bg-black/90 backdrop-blur-md shadow-lg"
//           >
//             <div className="flex flex-col items-center gap-6 py-6 text-white font-medium">
//               <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-400">
//                 Home
//               </Link>
//               <Link href="/roadmap" onClick={() => setIsOpen(false)} className="hover:text-green-400">
//                 Roadmap
//               </Link>
//               <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-green-400">
//                 About
//               </Link>
//               <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-400">
//                 Contact
//               </Link>
//               <Link href="/enter" onClick={() => setIsOpen(false)}>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 text-white font-semibold transition"
//                 >
//                   Enter PhilmVerse
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }


// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 shadow-md overflow-visible"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.png"
            alt="PhilmVerse Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <Link href="/roadmap" className="hover:text-green-400 transition-colors">Roadmap</Link>
          <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>

          {/* CTA Button */}
          <Link href="/enter">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 text-white font-semibold transition"
            >
              Enter PhilmVerse
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400/40"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (positioned directly under nav) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-md border-t border-white/6 z-40"
          >
            <div className="container mx-auto px-6 lg:px-12">
              <nav className="flex flex-col gap-4 py-6 text-white font-medium">
                <Link href="/" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-white/3 transition-colors">
                  Home
                </Link>
                <Link href="/roadmap" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-white/3 transition-colors">
                  Roadmap
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-white/3 transition-colors">
                  About
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-white/3 transition-colors">
                  Contact
                </Link>

                <div className="px-4 mt-2">
                  <Link href="/enter" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 shadow text-black font-semibold"
                    >
                      Enter PhilmVerse
                    </motion.button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
