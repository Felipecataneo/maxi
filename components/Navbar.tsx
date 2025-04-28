// components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (e.g., when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image src="/logo.png" alt="Maxi Institute" width={400} height={70} className="h-auto w-auto max-h-10" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
           <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
            Página Inicial
          </Link>
          {/* UPDATED: Link to the new /about page */}
           <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre Nós
          </Link>

          <Link href="/documents" className="text-foreground hover:text-primary transition-colors font-medium">
            Documentos
          </Link>
          <Link href="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger/Close Icon) */}
        <div className="md:hidden">
            <button
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            >
                {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Panel (Conditionally Rendered) */}
      {isMenuOpen && (
        <div
            id="mobile-menu"
            className="md:hidden fixed top-[var(--navbar-height)] left-0 right-0 bottom-0 bg-background flex flex-col py-4 px-8 shadow-lg animate-fadeInDown z-40"
        >
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-3 rounded" onClick={closeMenu}>
              Página Inicial
            </Link>
            {/* UPDATED: Link to the new /about page */}
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-3 rounded" onClick={closeMenu}>
              Sobre Nós
            </Link>
            <Link href="/documents" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-3 rounded" onClick={closeMenu}>
              Documentos
            </Link>
             <Link href="/#contact" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-3 rounded" onClick={closeMenu}>
              Contato
            </Link>
        </div>
      )}
    </nav>
  );
}