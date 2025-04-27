// lib/researchData.ts

export const researchItems = [
    {
      slug: "tecnologias-habilitadoras-industria",
      title: "Tecnologias habilitadoras aplicadas à Indústria e Empresas",
      imageSrc: "/research1.png", // Use path from public/images
      detailedText: `
        Em um cenário global de constante evolução tecnológica, o Instituto Maximize se dedica à pesquisa e aplicação de
        tecnologias habilitadoras que impulsionam a transformação da indústria e das empresas. Focamos em áreas como
        Inteligência Artificial, IoT, Blockchain, Computação Quântica e Manufatura Avançada, explorando seu potencial
        para otimizar processos, criar novos modelos de negócio e aumentar a competitividade no mercado.
  
        Nossos projetos visam não apenas a teoria, mas a implementação prática e escalável, gerando impacto real e sustentável
        para nossos parceiros. Trabalhamos em estreita colaboração para garantir que as soluções tecnológicas
        sejam alinhadas às necessidades específicas de cada setor e empresa.
      `, // Added a paragraph break and slightly expanded text
    },
    {
      slug: "inovacao-aberta-transformacao-digital",
      title: "Inovação Aberta e Transformação Digital",
      imageSrc: "/research2.png", // Use path from public/images
      detailedText: `
        Acreditamos que a inovação floresce através da colaboração e da abertura. O Instituto Maximize atua como um hub
        conectando empresas, academia e startups para fomentar a inovação aberta e a cocriação de valor.
  
        Nosso trabalho em transformação digital vai além da simples adoção de ferramentas; trata-se de repensar culturas,
        processos e estratégias para prosperar na era digital. Desenvolvemos metodologias e oferecemos consultoria para
        navegar as complexidades da mudança digital, capacitando organizações a serem mais ágeis, centradas no cliente e resilientes.
        Fomentamos um ecossistema onde o conhecimento flui livremente, acelerando o desenvolvimento de soluções inovadoras.
      `, // Added paragraph breaks and slightly expanded text
    },
    {
      slug: "lideranca-colaboracao-projetos-pesquisa",
      title: "Liderança e colaboração em projetos de Pesquisa e Desenvolvimento",
      imageSrc: "/research3.png", // Use path from public/images
      detailedText: `
        Projetos de P&D são complexos e exigem uma liderança eficaz e uma colaboração fluida entre diferentes atores e disciplinas.
        No Instituto Maximize, pesquisamos e aplicamos as melhores práticas em gestão de projetos de pesquisa, com foco em ambientes
        multidisciplinares e interorganizacionais.
  
        Capacitamos líderes e equipes para gerenciar riscos, otimizar recursos, promover a comunicação assertiva e garantir
        que a pesquisa se traduza em resultados tangíveis e inovadores. Nosso objetivo é ser o parceiro estratégico na condução
        de iniciativas de P&D de alto impacto, construindo pontes entre a pesquisa fundamental e a aplicação prática no mercado.
      `, // Added paragraph breaks and slightly expanded text
    },
  ];
  
  // Optional: Add a function to get an item by slug
  export function getResearchItemBySlug(slug: string) {
    return researchItems.find(item => item.slug === slug);
  }
  
  // Optional: Add a function to get all slugs for static generation
  export function getAllResearchSlugs() {
      return researchItems.map(item => item.slug);
  }