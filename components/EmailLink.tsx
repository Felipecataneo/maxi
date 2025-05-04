"use client"
import React, { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const EmailLink = ({ email }: { email: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsClicked(true);
    
    // Timeout to show animation before opening email app
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
      // Reset the clicked state after a delay
      setTimeout(() => setIsClicked(false), 500);
    }, 300);
  };

  return (
    <a
      href={`mailto:${email}`}
      className={`relative inline-flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
        isHovered ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-transparent'
      } ${
        isClicked ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Mail 
        size={18} 
        className={`transition-all duration-300 ${
          isHovered ? 'text-blue-600 dark:text-blue-400 animate-pulse' : 'text-gray-600 dark:text-gray-400'
        }`} 
      />
      <span 
        className={`transition-all duration-300 ${
          isHovered ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        {email}
      </span>
      <ExternalLink 
        size={14} 
        className={`transition-all duration-300 ${
          isHovered ? 'opacity-100 text-blue-600 dark:text-blue-400' : 'opacity-0'
        }`} 
      />
      
      {/* Ripple effect on click */}
      {isClicked && (
        <span className="absolute inset-0 rounded-md animate-ping bg-blue-500/20" />
      )}
    </a>
  );
};
export default EmailLink