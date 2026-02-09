import React from 'react';
import { COLORS } from '../constants';

export const ChineseCorner: React.FC<{ className?: string; rotate?: number }> = ({ className, rotate = 0 }) => (
  <svg
    viewBox="0 0 50 50"
    className={className}
    style={{ transform: `rotate(${rotate}deg)`, width: '40px', height: '40px' }}
    fill="none"
    stroke={COLORS.accentGold}
    strokeWidth="2"
  >
    <path d="M5 45 V 15 Q 5 5 15 5 H 45" />
    <path d="M15 45 V 20 Q 15 15 20 15 H 45" />
  </svg>
);

export const ChineseKnot: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke={COLORS.accentGold}
    strokeWidth="2"
  >
    {/* Simplified Endless Knot representation */}
    <rect x="25" y="25" width="50" height="50" rx="5" />
    <path d="M25 40 H 75" />
    <path d="M25 60 H 75" />
    <path d="M40 25 V 75" />
    <path d="M60 25 V 75" />
  </svg>
);

export const NoodleBowlIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke={COLORS.accentGold}
    strokeWidth="4"
    strokeLinecap="round"
  >
    {/* Bowl */}
    <path d="M20 50 Q 50 100 80 50 H 20 Z" fill={COLORS.textBlack} />
    {/* Chopsticks */}
    <line x1="85" y1="20" x2="40" y2="60" stroke={COLORS.accentGold} strokeWidth="3" />
    <line x1="90" y1="25" x2="45" y2="65" stroke={COLORS.accentGold} strokeWidth="3" />
    {/* Noodles / Steam */}
    <path d="M35 45 Q 35 30 40 45" stroke="#FFF" strokeWidth="2" />
    <path d="M50 45 Q 50 25 55 45" stroke="#FFF" strokeWidth="2" />
    <path d="M65 45 Q 65 30 70 45" stroke="#FFF" strokeWidth="2" />
  </svg>
);