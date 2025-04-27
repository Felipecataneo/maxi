// lib/documentsData.ts

export interface DocumentItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  itemCount?: number; // For folders
  lastModified: string; // Using string for dummy data
  views: number;
  favorites: number;
  collaborators: string[]; // Or simple indicator
}

export const documentsData: DocumentItem[] = [
  {
    id: '1',
    name: 'Estatuto e Atas',
    type: 'folder',
    itemCount: 2,
    lastModified: '28 de out. de 2023',
    views: 1,
    favorites: 0,
    collaborators: ['ictmaximize'], // Simple indicator
  },
  {
    id: '2',
    name: 'Termos de Colaboração Técnico-científica',
    type: 'folder',
    itemCount: 0,
    lastModified: '28 de out. de 2023',
    views: 4,
    favorites: 0,
    collaborators: ['ictmaximize'],
  },
   {
     id: '3',
     name: 'Relatório Anual 2023',
     type: 'file', // Example of a file
     lastModified: '15 de jan. de 2024',
     views: 10,
     favorites: 3,
     collaborators: ['João Silva'], // Example with a collaborator
   },
   {
     id: '4',
     name: 'Proposta de Projeto IA',
     type: 'file',
     lastModified: '01 de fev. de 2024',
     views: 5,
     favorites: 1,
     collaborators: ['Maria Souza', 'Pedro Alves'], // Example with multiple collaborators
   },
    {
     id: '5',
     name: 'Apresentação Institucional',
     type: 'file',
     lastModified: '10 de mar. de 2024',
     views: 25,
     favorites: 5,
     collaborators: [], // No collaborators
   },
];

// No specific getter functions needed for this simple list page