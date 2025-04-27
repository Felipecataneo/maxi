// app/layout.tsx
import { Inter } from "next/font/google";
// If you want a specific serif font (like Georgia or another webfont), import it here
// import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import { Whatsapp } from 'lucide-react'; // Remova este import, pois vamos usar react-icons
import { FaWhatsapp } from 'react-icons/fa'; // Importe o ícone do Font Awesome v4 via react-icons

const inter = Inter({ subsets: ["latin"], variable: '--font-geist-sans' }); // Using as variable
// Example of adding a local serif font if needed
// const georgia = localFont({ src: '../public/fonts/Georgia.woff2', variable: '--font-georgia' });


export const metadata = {
  title: "Maxi Institute | Ciência, Tecnologia e Inovação", // More descriptive title
  description: "Instituto Maximize Ciência, Tecnologia e Inovação: Impulsionando Pesquisa, Desenvolvimento, Inovação e Empreendedorismo. Desenvolvemos soluções tecnológicas, oferecemos consultoria e construímos ecossistemas para o avanço da ciência e da sociedade.", // Description covering core areas and mission
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  // The WhatsApp number in international format, without '+'
  const whatsappNumber = '5511930706287'; // (11) 93070-6287

  // Construct the WhatsApp Web/App URL
  // Optional: add ?text=YourPredefinedMessage for a pre-filled message
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  // Example with pre-filled message:
  // const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`; // "Olá, gostaria de mais informações." URL encoded

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

        {/* Floating WhatsApp Icon */}
        {/* Placed outside main/footer but within body to be fixed relative to viewport */}
        <a
          href={whatsappLink}
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="fixed bottom-8 right-8 z-[999] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center size-14" // TailWind classes for position, styling, size, and hover
          aria-label="Chat with us on WhatsApp" // Accessibility for screen readers
        >
          {/* Use o componente importado do react-icons */}
          <FaWhatsapp size={28} /> {/* Ajuste o size conforme necessário */}
        </a>

      </body>
    </html>
  );
}