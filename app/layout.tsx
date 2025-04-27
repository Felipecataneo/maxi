import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maxi Institute",
  description: "Empowering Organizations with AI-Powered Customer Intelligence",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        {/* Add padding-top to the main content equal to the navbar height */}
        <main className="flex-grow pt-16"> {/* Added pt-16. Adjust if navbar height changes significantly. */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}