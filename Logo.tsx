
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative group ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
        {/* Outer Hexagon Frame */}
        <path 
          d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" 
          className="stroke-red-600 stroke-[2] opacity-50 group-hover:opacity-100 transition-opacity"
        />
        {/* Inner Glitch Lines */}
        <path d="M20 30 L30 30 M70 70 L80 70" className="stroke-red-500 stroke-[1] animate-pulse" />
        
        {/* The Falcon Silhouette */}
        <path 
          d="M30 40 C30 40 45 35 50 45 C55 35 70 40 70 40 L65 55 L50 70 L35 55 Z" 
          className="fill-red-600 shadow-red-500 shadow-2xl"
        />
        <path 
          d="M50 45 L50 70 M40 50 L60 50" 
          className="stroke-black stroke-[1.5] opacity-50"
        />
        
        {/* Glowing Eye */}
        <circle cx="50" cy="48" r="2" className="fill-white animate-pulse" />
      </svg>
      {/* Glitch Effect Underlay */}
      <div className="absolute inset-0 bg-red-600 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    </div>
  );
};

export default Logo;
