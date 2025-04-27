import Image from "next/image";
// Removed Link import as no links in footer

export default function Footer() {
  return (
    // Simple footer with dark background and minimal text
    <footer className="bg-gray-900 text-gray-400 py-8 text-sm relative z-10"> {/* Dark background, smaller text, centered, added z-index */}
      <div className="container mx-auto px-4">

        {/* Logo/Name */}
        {/* The reference shows "Instituto Maximize Ciência, Tecnologia e Inovação" in text */}
        <p className="text-gray-200 font-medium mb-4 text-lg">Instituto Maximize Ciência, Tecnologia e Inovação</p> {/* Text version, slightly larger */}

        {/* Email */}
        <p className="mb-4">daniilomelo@maxiinstitute.br</p> {/* Email from contact section, centered */}

        {/* Placeholder Social Icons (Example) */}
        <div className="flex justify-center space-x-4 mb-4">
            {/* Replace with actual links and icons if needed */}
            {/* <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a> */}
            {/* <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-instagram"></i></a> */}
            {/* Add Lucide icons here if you prefer */}
            {/* Example using Lucide: */}
             {/* <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </Link> */}
        </div>


        {/* Copyright */}
        {/* No border top in this simplified footer */}
        <p>©2025 por Instituto Maximize Ciência, Tecnologia e Inovação. Orgulhosamente criado por Felipe Cataneo</p> {/* Exact text from reference */}

      </div>
    </footer>
  );
}