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
    // Add more dummy data as needed
    // {
    //   id: '3',
    //   name: 'Relatório Anual 2023',
    //   type: 'file', // Example of a file
    //   lastModified: '15 de jan. de 2024',
    //   views: 10,
    //   favorites: 3,
    //   collaborators: [], // No collaborators
    // },
  ];
  
  // No specific getter functions needed for this simple list page