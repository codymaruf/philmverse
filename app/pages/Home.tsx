"use client";

import Hero from './sections/Hero'
import Features from './sections/currentFeatures'
import FutureFeatures from './sections/FutureFeatures'

export default function Home() {
  return (
    <section>
      <Hero />
      <Features />
      <FutureFeatures />
    </section>
  );
}
