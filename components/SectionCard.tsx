// components/SectionCard.tsx
import Image from "next/image";
// Import para usar o tipo do item de dados
import { researchItems } from "@/lib/researchData";
type ResearchItem = typeof researchItems[0];

// Componente SectionCard (APENAS a estrutura visual)
// Não inclui Link. Recebe item completo para renderizar.
function SectionCard({ item }: { item: ResearchItem }) {
  const { imageSrc, title } = item;

  return (
    // Adicionado h-full para ajudar no dimensionamento dentro do grid
    // O 'group' class será aplicado ao <Link> que envolve este div no componente pai.
    <div className="bg-card text-card-foreground rounded-lg shadow-sm overflow-hidden flex flex-col border border-border h-full
                    transition-all duration-300 ease-in-out
                    group-hover:scale-[1.03]
                    group-hover:shadow-lg
                    group-hover:border-primary/50
                    group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2
                   ">
      {/* Adicionado flex-shrink-0 para garantir que a imagem mantenha seu tamanho */}
      <div className="relative w-full aspect-[16/9] md:aspect-[3/2] flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      {/* flex-grow para que esta área de conteúdo preencha o espaço vertical disponível */}
      {/* Podemos adicionar min-h aqui se o grid standard stretch não for suficiente */}
      <div className="p-6 flex-grow flex flex-col justify-between"> {/* Pode adicionar min-h-[100px] ou similar aqui se precisar garantir altura mínima */}
        <div>
          {/* Título: já parte da área clicável pois o Link envolve o card. */}
          {/* Estilo group-hover:text-primary já dá feedback visual no título */}
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">{title}</h3>
        </div>
        {/* "Saiba mais" indicator - também parte da área clicável */}
        <div className="text-sm font-medium text-primary mt-4 inline-flex items-center justify-end group-hover:underline transition-colors duration-200">
           Saiba mais...
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;