import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Home from "@/app/pages/Home";

export default function HomePage() {
  return (
    <div className="font-sans bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="pt-24">
        <Home />
        {/* Future sections like Features, Roadmap, Testimonials will go here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
