"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-12 overflow-hidden">
      {/* Top glow/background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[700px] h-[700px] bg-green-700/25 rounded-full blur-[200px]" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="PhilmVerse Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Footer CTA */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-green-400">Experience the Magic?</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Join thousands of creators already living in the PhilmVerse. Your first script is completely free and takes just minutes to create. No credit cards, no commitments — just pure creative magic waiting for your vision. What story will you bring to life today?
        </p>

        <a href="/enter">
          <Button className="px-8 py-4 text-lg font-semibold rounded-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 mb-12">
            Enter PhilmVerse Now
          </Button>
        </a>
        

        {/* Footer links and social */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</a>
          <a href="/roadmap" className="hover:text-green-400 transition-colors">Roadmap</a>
          <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
          <div className="flex gap-4 mt-2 md:mt-0">
            
            <a href="https://twitter.com/azharmarufworld" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-green-400 transition-colors" />
            </a>
            <a href="https://youtube.com/@AzharMaruf" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Footer tagline */}
          <p className="mt-12 text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PhilmVerse. Less Planning, Faster Films, More Creating &mdash; Pure Magic.
          </p>
      </div>
    </footer>
  );
}
