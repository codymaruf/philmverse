// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "PhilmVerse",
  description: "AI-powered pre-production for filmmakers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
