
import React from 'react';

interface GSLogoProps {
  className?: string;
}

const GSLogo = ({ className = "" }: GSLogoProps) => {
  return (
    <div className={`flex items-center font-bold ${className}`}>
      <div className="relative">
        <div className="text-3xl text-primary flex items-center">
          <span className="relative z-10 mr-[-3px]">G</span>
          <span className="relative z-20 text-accent">S</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-full transform scale-150 animate-pulse"></div>
      </div>
      <span className="ml-2 text-lg font-semibold">Ascend Solutions</span>
    </div>
  );
};

export default GSLogo;
