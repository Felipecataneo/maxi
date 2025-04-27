import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BusinessHeroAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    // Detectar dispositivos móveis para ajustar a qualidade da animação
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Criando a cena, câmera e renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !isMobile, // Desativa antialiasing em dispositivos móveis para melhor desempenho
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limita o pixel ratio para melhor desempenho
    
    // Montando o renderer no DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Configuração das partículas
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = isMobile ? 300 : 700; // Reduz o número de partículas em dispositivos móveis
    
    const posArray = new Float32Array(particlesCount * 3);
    
    // Criando posições aleatórias para as partículas
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material das partículas - cores ajustadas para combinar com seu design
    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.03 : 0.02, 
      color: 0x3B6EA5, // Azul mais escuro para combinar com o tema institucional
      transparent: true,
      opacity: 0.6, // Opacidade reduzida para não competir com o conteúdo
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    // Criando as partículas
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Adicionando linhas de conexão
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x1F4785, // Azul mais escuro para as linhas
      transparent: true,
      opacity: 0.15 // Bem mais sutil para não interferir com o conteúdo
    });
    
    // Criando as linhas
    const connections: THREE.Line[] = [];
    const threshold = 1.2; // Distância máxima de conexão
    
    // Função para criar linhas entre pontos próximos
    const updateConnections = () => {
      // Removendo linhas antigas
      connections.forEach(line => scene.remove(line));
      connections.length = 0;
      
      const positions = particlesGeometry.attributes.position.array;
      
      // Criando novas conexões baseadas na proximidade
      for (let i = 0; i < particlesCount; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];
        
        for (let j = i + 1; j < particlesCount; j++) {
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];
          
          const distance = Math.sqrt(
            Math.pow(x2 - x1, 2) + 
            Math.pow(y2 - y1, 2) + 
            Math.pow(z2 - z1, 2)
          );
          
          if (distance < threshold) {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(x1, y1, z1),
              new THREE.Vector3(x2, y2, z2)
            ]);
            
            const line = new THREE.Line(lineGeometry, lineMaterial);
            scene.add(line);
            connections.push(line);
          }
        }
      }
    };
    
    // Posicionando a câmera
    camera.position.z = 5;
    
    // Adicionando luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotação suave das partículas
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;
      
      // Atualizando as conexões periodicamente
      if (Math.random() > 0.95) {
        updateConnections();
      }
      
      renderer.render(scene, camera);
    };
    
    // Função para redimensionar a animação
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Verificar se é dispositivo móvel para ajustar a qualidade
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        // Ajustar qualidade se o tipo de dispositivo mudar
        particlesMaterial.size = newIsMobile ? 0.03 : 0.02;
      }
    };
    
    // Controle de desempenho - interromper animação quando fora da visualização
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderer.setAnimationLoop(animate);
        } else {
          renderer.setAnimationLoop(null);
        }
      });
    }, { threshold: 0.1 });
    
    if (mountRef.current) {
      observer.observe(mountRef.current);
    }
    
    // Adicionando listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Inicializando conexões e animação
    updateConnections();
    animate();
    
    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return (
    <div className="absolute inset-0 -z-10 w-full h-full" ref={mountRef}></div>
  );
};

export default BusinessHeroAnimation;