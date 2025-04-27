import { Inter } from "next/font/google";
// If you want a specific serif font (like Georgia or another webfont), import it here
// import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-geist-sans' }); // Using as variable
// Example of adding a local serif font if needed
// const georgia = localFont({ src: '../public/fonts/Georgia.woff2', variable: '--font-georgia' });


export const metadata = {
  title: "Maxi Institute | Ciência, Tecnologia e Inovação", // More descriptive title
  description: "Instituto Maximize Ciência, Tecnologia e Inovação: Impulsionando Pesquisa, Desenvolvimento, Inovação e Empreendedorismo. Desenvolvemos soluções tecnológicas, oferecemos consultoria e construímos ecossistemas para o avanço da ciência e da sociedade.", // Description covering core areas and mission
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // Apply font variables if using them
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      {/* Ensure no whitespace/newline here! */}
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {/* Add padding-top to the main content equal to the navbar height */}
        {/* Use a relative padding class instead of fixed pt-16, as navbar height can vary */}
        {/* Also, apply a max-width and center the content for better readability */}
        <main className="flex-grow pt-[var(--navbar-height, 64px)]"> {/* Dynamically set padding from CSS variable if possible, fallback to 64px (approx h-16) */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}