import Image from "next/image";
// Removed Link import as no links in footer

export default function Footer() {
  return (
    // Simple footer with dark background and minimal text
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm"> {/* Dark background, smaller text, centered */}
      <div className="container mx-auto px-4">

        {/* Logo/Name */}
        {/* The reference shows "Instituto Maximize Ciência, Tecnologia e Inovação" in text, not a logo image */}
        <p className="text-gray-200 font-medium mb-2">Instituto Maximize Ciência, Tecnologia e Inovação</p> {/* Text version */}
        {/* <Image src="/images/logo-dark-simple.png" alt="Maxi Institute" width={120} height={30} className="mx-auto mb-4" /> */} {/* If you prefer the dark logo */}


        {/* Email */}
        <p className="mb-4">daniilomelo@maxiinstitute.br</p> {/* Email from contact section, centered */}

        {/* Copyright and "created with Wix" */}
        {/* No border top in this simplified footer */}
        <p>©2025 por Instituto Maximize Ciência, Tecnologia e Inovação. Orgulhosamente criado por Felipe Cataneo</p> {/* Exact text from reference */}

      </div>
    </footer>
  );
}