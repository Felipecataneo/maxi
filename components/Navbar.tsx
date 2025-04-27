"use client"; // This is needed for useState and event handlers

import { useState } from 'react'; // Import useState hook
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react'; // Import Menu for open, X for close icon

export default function Navbar() {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (e.g., when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // Add fixed positioning and z-index
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm border-b border-border" // Added fixed, top/left/right-0, z-50, bg-background, shadow-sm, border-b
      // Removed the inline style prop
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-16"> {/* py-4 gives it height, explicit h-16 */}
        <Link href="/" className="flex items-center" onClick={closeMenu}> {/* Close menu if logo clicked while open */}
          {/* Adjust logo size */}
          <Image src="/logo.png" alt="Maxi Institute" width={400} height={70} className="h-auto w-auto max-h-10" /> {/* Adjusted size, add max-h */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
           <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium"> {/* Use foreground/primary colors */}
            Página Inicial
          </Link>
          <Link href="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contato
          </Link>
          <Link href="/documents" className="text-foreground hover:text-primary transition-colors font-medium">
            Documentos
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger/Close Icon) */}
        <div className="md:hidden">
            <button
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu" // Link button to menu panel
                onClick={toggleMenu}
                className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            >
                {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />} {/* Show X icon when open, Menu icon when closed */}
            </button>
        </div>
      </div>

      {/* Mobile Menu Panel (Conditionally Rendered) */}
      {isMenuOpen && (
        <div
            id="mobile-menu"
            className="md:hidden fixed top-[var(--navbar-height)] left-0 right-0 bottom-0 bg-background flex flex-col py-4 px-8 shadow-lg animate-fadeInDown" // Styles for the mobile menu panel, uses variable for top
            // Added animate-fadeInDown from tw-animate-css
        >
            {/* Navigation links inside the mobile menu */}
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-3 rounded" onClick={closeMenu}> {/* Add padding and click handler to close */}
              Página Inicial
            </Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-3 rounded" onClick={closeMenu}> {/* Add padding and click handler to close */}
              Contato
            </Link>
            <Link href="/documents" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-3 rounded" onClick={closeMenu}> {/* Add padding and click handler to close */}
              Documentos
            </Link>
        </div>
      )}
    </nav>
  );
}