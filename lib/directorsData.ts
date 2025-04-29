// lib/directorsData.ts

export type Director = {
    name: string;
    role: string;
    degree: string;
    photoUrl: string;
    linkedin?: string;
  };
  
  export const directors: Director[] = [
    {
      name: 'Maria Silva',
      role: 'CEO',
      degree: 'Mestre em Administração - USP',
      photoUrl: '/felipe.jpg', // Assuming you place images here
      linkedin: 'https://linkedin.com/in/mariasilva'
    },
    {
      name: 'João Pereira',
      role: 'Diretor de Tecnologia',
      degree: 'Engenharia da Computação - UFRJ',
      photoUrl: '/felipe.jpg', // Assuming you place images here
      linkedin: 'https://linkedin.com/in/joaopereira'
    },
    // Add more directors following this structure
     {
      name: 'Ana Costa',
      role: 'Diretora de P&D',
      degree: 'Doutora em Física - UNICAMP',
      photoUrl: '/felipe.jpg', // Example path
      linkedin: 'https://linkedin.com/in/anacosta'
    },
    {
      name: 'Ana',
      role: 'Diretora de P&D',
      degree: 'Doutora em Física - UNICAMP',
      photoUrl: '/felipe.jpg', // Example path
      linkedin: 'https://linkedin.com/in/anacosta'
    },
    {
      name: 'Costa',
      role: 'Diretora de P&D',
      degree: 'Doutora em Física - UNICAMP',
      photoUrl: '/felipe.jpg', // Example path
      linkedin: 'https://linkedin.com/in/anacosta'
    },
  ];