// components/DynamicBusinessHeroAnimation.tsx
"use client"
import dynamic from 'next/dynamic';

// Importando o componente dinamicamente com ssr: false para evitar erros de renderização no servidor
const DynamicBusinessHeroAnimation = dynamic(
  () => import('./BusinessHeroAnimation'),
  { ssr: false }
);

export default DynamicBusinessHeroAnimation;