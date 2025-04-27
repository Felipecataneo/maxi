// lib/innovationData.ts

export const innovationItems = [
    {
      slug: "desenvolvimento-solucoes-tecnologicas",
      title: "Desenvolvimento de soluções tecnológicas para o futuro da ciência e da sociedade",
      imageSrc: "/innovation1.png", // Use path from public/images
      detailedText: `
        No Instituto Maximize, estamos na vanguarda da criação de soluções tecnológicas que não apenas respondem aos desafios atuais,
        mas também pavimentam o caminho para um futuro mais justo e sustentável.
  
        Nosso foco abrange desde a pesquisa básica que expande os limites do conhecimento científico até a prototipagem e
        desenvolvimento de tecnologias aplicadas que podem ser escaladas para gerar impacto social e econômico em larga escala.
        Trabalhamos em colaboração com universidades, centros de pesquisa e parceiros da indústria para transformar descobertas
        em inovações tangíveis.
      `,
    },
    {
      slug: "consultoria-empreendedorismo-inovacao",
      title: "Consultoria em Empreendedorismo e Inovação",
      imageSrc: "/innovation2.png", // Use path from public/images
      detailedText: `
        Apoiar o nascimento e o crescimento de iniciativas inovadoras é parte fundamental de nossa missão. Oferecemos consultoria
        especializada para empreendedores, startups e empresas que buscam estruturar seus projetos de inovação e navegar o ecossistema
        de P&D&I.
  
        Nossa expertise abrange desde a validação de modelos de negócio e a estratégia de propriedade intelectual até a captação de
        recursos e a conexão com o mercado. Ajudamos a transformar ideias promissoras em ventures de sucesso, promovendo uma cultura
        de inovação sustentável dentro das organizações.
      `,
    },
    {
      slug: "construcao-lideranca-ecossistemas-pd-i",
      title: "Construção e Liderança de Ecossistemas de Empreendedorismo e P&D&I",
      imageSrc: "/innovation3.png", // Use path from public/images
      detailedText: `
        Ecossistemas vibrantes são o berço da inovação disruptiva. O Instituto Maximize desempenha um papel ativo na construção
        e liderança de ecossistemas de empreendedorismo e P&D&I, articulando diferentes atores como governo, academia, indústria,
        investidores e sociedade civil.
  
        Trabalhamos para criar ambientes colaborativos que facilitem a troca de conhecimento, o acesso a recursos, a formação de
        parcerias estratégicas e a atração de talentos. Nossa atuação visa fortalecer a cadeia de inovação, acelerar a transferência
        de tecnologia e impulsionar o desenvolvimento regional e nacional através da ciência e da inovação.
      `,
    },
  ];
  
  // Optional: Add a function to get an item by slug
  export function getInnovationItemBySlug(slug: string) {
    return innovationItems.find(item => item.slug === slug);
  }
  
  // Optional: Add a function to get all slugs for static generation
  export function getAllInnovationSlugs() {
      return innovationItems.map(item => item.slug);
  }