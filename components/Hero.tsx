// components/Hero.tsx
"use client"; // Adicione esta linha no topo

import { useRef } from 'react'; // Keep useRef for the video element
// Removed: import Image from "next/image"; // No longer needed
import { motion } from "framer-motion"; // Keep framer-motion for text animation

export default function Hero() {
  // Create a ref for the video element (optional, mainly useful for advanced control if needed,
  // but can be omitted if only using standard video attributes like autoplay/loop/muted)
  const videoRef = useRef<HTMLVideoElement>(null);

  // Removed useEffect hook for scroll control

  return (
    // Removed sectionRef from here
    <section className="relative h-screen overflow-hidden">
      {/* Background Video Container */}
      {/* Certifique-se de que AMBOS panoramic.mov e panoramic.mp4 estejam no diretório /public */}
      <div className="absolute inset-0 z-0">
        {/* Use the video element */}
        <video
          ref={videoRef} // Ref is still useful if you ever need programmatic control later
          // REMOVED: src attribute from the <video> tag itself
          muted // Essential for autoplay/manual control in many browsers
          loop // Add loop attribute
          autoPlay // Add autoPlay attribute
          playsInline // Recommended for mobile playback
          preload="auto" // Helps load metadata and potentially some video data
          className="w-full h-full object-cover brightness-75" // object-cover ensures video covers container
          // Poster attribute is good for fallback image if video fails to load or is not supported
          // poster="/panoramic.jpg" // Optional: Add a fallback image path
        >
          {/* ADDED: Multiple source elements */}
          {/* Provide MP4 first for broadest compatibility */}
          <source src="/panoramic.mp4" type="video/mp4" />
          {/* Provide MOV as a fallback for browsers that might support it better (like Safari) */}
          <source src="/panoramic.mov" type="video/quicktime" /> {/* Correct MIME type for MOV */}

          {/* Fallback text for browsers that support neither */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay para melhorar contraste do texto sobre o vídeo */}
        <div className="absolute inset-0 bg-black/50"></div> {/* Aumentei um pouco a opacidade do overlay */}
      </div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        {/* Container principal do texto e botões */}
        <div className="w-full md:max-w-3xl text-white"> {/* Add text-white here to make sure surrounding text is white */}
          {/* Animação de entrada usando framer-motion */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring' }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold leading-tight tracking-tight mb-8"
          >
            Bem-vindo ao <br />
            {/* CHANGED: Gradient colors to sunset tones (orange, red, purple) */}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl">
              Instituto Maximize
            </span>
            <br />
            <span className="font-normal text-white/80">
              Ciência, Tecnologia & Inovação
            </span>
          </motion.h1>

          {/* Botões de CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Botão 1: Conheça nossos serviços -> Link para Contato */}
            <motion.a
              href="#contact" // Link para a seção de Contato (se existir)
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200 transition-colors duration-300 text-center" // Use gray-900 ou foreground para cor do texto
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Entre em contato
            </motion.a>
          </div>
        </div>
      </div>

      {/* Seta de scroll animada no fundo */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }} // Animação de sobe e desce
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} // Animação contínua
      >
        <span className="text-white text-sm mb-2 opacity-80 font-sans">Explore</span> {/* Use font-sans */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}