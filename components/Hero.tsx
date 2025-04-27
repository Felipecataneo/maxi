import Image from "next/image";
import DynamicBusinessHeroAnimation from "./DynamicBusinessHeroAnimation"; // Importa a animação Three.js

export default function Hero() {
  return (
    // Section com a animação Three.js como plano de fundo
    <section className="relative overflow-hidden py-24 md:py-30">
      {/* Animação Three.js como plano de fundo */}
      <div className="absolute inset-0 -z-10">
        <DynamicBusinessHeroAnimation />
      </div>
      
      {/* Overlay gradiente para melhorar o contraste com a animação */}
      <div className="absolute inset-0 bg-white/85 -z-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Flex container para layout lado a lado em telas grandes, empilhado em pequenas */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-16">

          {/* Área de Conteúdo de Texto (esquerda em telas grandes) */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-gray-900">
              BEM-VINDO AO <br/> INSTITUTO <br/> MAXIMIZE CIÊNCIA, <br/> TECNOLOGIA E <br/> INOVAÇÃO
            </h1>
          </div>

          {/* Área de Imagem (direita em telas grandes) */}
          <div className="lg:w-1/2 animate-slide-left delay-100">
            <div className="relative">
              {/* Efeito de brilho sutil por trás da imagem que combina com a animação Three.js */}
              <div className="absolute -inset-1 bg-blue-100/50 rounded-lg blur-xl"></div>
              
              <Image
                src="/hero.png"
                alt="Meeting Image"
                width={800}
                height={500}
                className="relative w-full h-auto rounded-lg shadow-xl transform transition-transform hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}