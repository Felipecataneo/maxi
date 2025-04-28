// app/layout.tsx
import { Inter } from "next/font/google";
// Importe a nova fonte para os títulos
import { Outfit } from "next/font/google"; // Importe a fonte desejada (aqui, Outfit)

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { FaWhatsapp } from 'react-icons/fa'; // Mantenha o import do WhatsApp se já o adicionou

// Configure a fonte Inter (para corpo) como variável --font-sans
const inter = Inter({ subsets: ["latin"], variable: '--font-geist-sans' });

// Configure a nova fonte para títulos (ex: Outfit) como variável --font-heading
// Escolha os pesos que você usará para os títulos (400 normal, 500/600 semibold/bold, 700 bold)
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'] // Especifique os pesos necessários
});


export const metadata = {
  title: "Maxi Institute | Ciência, Tecnologia e Inovação",
  description: "Instituto Maximize Ciência, Tecnologia e Inovação: Impulsionando Pesquisa, Desenvolvimento, Inovação e Empreendedorismo...",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
   // O número do WhatsApp e link (mantenha se adicionou)
  const whatsappNumber = '5511930706287';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    // Aplique AMBAS as variáveis de fonte ao <html>
    // Isso as torna disponíveis em todo o CSS e Tailwind
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body> {/* Remova a classe 'flex flex-col min-h-screen' daqui e coloque-a em uma div wrapper dentro do body, ou gerencie o layout de forma diferente se o body não for o container principal */}
        <Navbar />
        <main className="flex-grow pt-[var(--navbar-height, 64px)]">
          {children}
        </main>
        <Footer />

        {/* Floating WhatsApp Icon (mantenha se adicionou) */}
         <a
           href={whatsappLink}
           target="_blank"
           rel="noopener noreferrer"
           className="fixed bottom-8 right-8 z-[999] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center size-14"
           aria-label="Chat with us on WhatsApp"
         >
           <FaWhatsapp size={28} />
         </a>
      </body>
    </html>
  );
}