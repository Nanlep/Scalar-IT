import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Abstract Hexagonal S Symbol */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-scalar-red shrink-0">
        <path d="M11 12L20 7L29 12V16L20 11L11 16V12Z" fill="currentColor" />
        <path d="M11 20L20 15L29 20V24L20 19L11 24V20Z" fill="currentColor" />
        <path d="M11 28L20 23L29 28V33L20 28L11 33V28Z" fill="currentColor" />
      </svg>
      <span className="font-sans font-bold text-xl tracking-tight text-scalar-dark">
        SCALAR
      </span>
    </div>
  );
};