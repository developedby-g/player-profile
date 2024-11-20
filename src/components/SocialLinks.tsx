import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-10 mt-0  rounded-xl">
      <a
        href="https://instagram.com/yourusername" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-700 transition-colors"
        aria-label="Instagram"
      >
        
        
      
        <Instagram size={34} />
      </a>
      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={34}  />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={34}  />
      </a>
      
    </div>
  );
}