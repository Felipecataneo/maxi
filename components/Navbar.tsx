import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Maxi Institute" width={120} height={40} />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#features" className="text-gray-700 hover:text-black font-medium">
            Features
          </Link>
          <Link href="/#about" className="text-gray-700 hover:text-black font-medium">
            About
          </Link>
          <Link href="/#methodology" className="text-gray-700 hover:text-black font-medium">
            Methodology
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
        
        <Button variant="ghost" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </nav>
  );
}