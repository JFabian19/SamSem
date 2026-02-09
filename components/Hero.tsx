import React from 'react';
import { ChineseCorner } from './Ornaments';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full pt-10 pb-8 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 p-2">
        <ChineseCorner />
      </div>
      <div className="absolute top-0 right-0 p-2">
        <ChineseCorner rotate={90} />
      </div>

      {/* Logo Container */}
      <div className="relative mb-6">
        <div
          className="w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-lg z-10 relative bg-black overflow-hidden"
          style={{ borderColor: COLORS.accentGold }}
        >
          <img
            src="/logo.png"
            alt="SAM SEM Logo"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative rays behind logo */}
        <div className="absolute inset-0 bg-yellow-500 opacity-20 blur-xl rounded-full scale-125"></div>
      </div>

      {/* Text Info */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-chifa mb-2" style={{ color: COLORS.textWhite }}>
          SAM SEM
        </h1>
        <p className="text-xl md:text-2xl font-chifa tracking-wider" style={{ color: COLORS.accentGold }}>
          CHIFA REST.
        </p>
        <div className="mt-4 w-16 h-1 mx-auto rounded" style={{ backgroundColor: COLORS.accentGold }}></div>
      </div>
    </header>
  );
};

export default Hero;