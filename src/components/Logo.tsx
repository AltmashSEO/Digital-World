import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
  onClick,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <div
      id="brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group ${className}`}
    >
      {/* 3D DW Orbit Symbol crafted to match the brand emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(37,99,235,0.6)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dwBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="dwWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="dwGreenGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>
            <linearGradient id="dwCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <filter id="dwGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#38bdf8" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Top Orbital Arc (Cyan/Blue to Lime) */}
          <path
            d="M 18 55 C 16 30, 42 16, 72 26 C 79 28, 85 32, 88 37"
            stroke="url(#dwCyanGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#dwGlow)"
          />
          <path
            d="M 70 25 C 84 31, 92 42, 88 56 C 85 68, 72 78, 56 82"
            stroke="url(#dwGreenGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Foreground Swirling Ring (Blue 3D Ring Swoosh) */}
          <path
            d="M 12 62 C 16 75, 42 84, 76 64 C 92 54, 95 44, 91 38"
            stroke="url(#dwCyanGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Bold Letter 'D' in Royal Blue */}
          <path
            d="M 22 36 L 40 36 C 49 36, 54 41, 54 50 C 54 59, 49 64, 40 64 L 22 64 Z"
            fill="url(#dwBlueGrad)"
          />
          {/* Inner cut for 'D' */}
          <path
            d="M 30 43 L 39 43 C 44 43, 46 46, 46 50 C 46 54, 44 57, 39 57 L 30 57 Z"
            fill="#050b1a"
          />

          {/* Letter 'W' in Bright Metallic White */}
          <path
            d="M 48 37 L 55 64 L 62 47 L 68 64 L 76 37 L 70 37 L 65 55 L 60 42 L 56 42 L 51 55 L 48 37 Z"
            fill="url(#dwWhiteGrad)"
            filter="drop-shadow(0px 2px 3px rgba(0,0,0,0.6))"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={`font-black tracking-wider uppercase text-white ${titleSizes[size]} font-['Space_Grotesk'] leading-none`}>
            Digital
          </span>
          <span className={`font-black tracking-wider uppercase text-sky-400 ${titleSizes[size]} font-['Space_Grotesk'] leading-none group-hover:text-cyan-300 transition-colors`}>
            World
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-[1.5px] bg-red-500 rounded-full"></span>
            <span className={`tracking-[0.2em] font-semibold uppercase text-slate-300 ${subtitleSizes[size]} leading-none`}>
              Digital Marketing Agency
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
