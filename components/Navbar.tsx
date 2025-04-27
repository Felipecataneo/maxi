import Link from "next/link";
import Image from "next/image";
// Removed Button import

export default function Navbar() {
  return (
    // Add fixed positioning and z-index
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"> {/* Added fixed, top/left/right-0, z-50, bg-white, shadow-sm */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between"> {/* py-4 gives it height */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Maxi Institute" width={400} height={80} />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm">
           <Link href="/" className="text-gray-700 hover:text-black font-medium">
            Página Inicial
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-black font-medium">
            Contato
          </Link>
          <Link href="/documents" className="text-gray-700 hover:text-black font-medium">
            Documentos
          </Link>
        </div>
      </div>
    </nav>
  );
}