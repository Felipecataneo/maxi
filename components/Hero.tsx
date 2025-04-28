// components/Hero.tsx
"use client"; // Adicione esta linha no topo

import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image - Panoramic City View */}
      {/* Certifique-se de que a imagem panoramic.jpg esteja no diretório /public */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/panoramic.jpg" // Substitua pelo caminho correto da imagem panorâmica
          alt="Vista panorâmica da cidade"
          fill // Use fill para cobrir o container pai
          className="object-cover brightness-75" // object-cover garante que a imagem cubra o container mantendo a proporção
          priority // Importante para a imagem principal da página para LCP
        />
        {/* Overlay para melhorar contraste do texto sobre a imagem */}
        <div className="absolute inset-0 bg-black/50"></div> {/* Aumentei um pouco a opacidade do overlay */}
      </div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        {/* Container principal do texto e botões */}
        <div className="w-full md:max-w-3xl text-white"> {/* Adicionado text-white aqui para afetar todo o conteúdo */}
          {/* Animação de entrada usando framer-motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Adicionado easeOut para suavizar
          >
            {/* Título */}
            {/* Use font-sans que aponta para Inter via vars globais */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-8 font-heading">
              BEM-VINDO AO <br/> INSTITUTO <br/> MAXIMIZE CIÊNCIA, <br/> TECNOLOGIA E <br/> INOVAÇÃO
            </h1>

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
          </motion.div>
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