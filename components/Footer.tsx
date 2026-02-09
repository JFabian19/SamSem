import React from 'react';
import { ChineseCorner, ChineseKnot } from './Ornaments';
import { COLORS } from '../constants';

const PaymentIcon: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex flex-col items-center justify-center p-2">
    <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow mb-1">
      <span className="text-xs font-bold text-gray-800">{label}</span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-12 py-10 px-4 bg-black bg-opacity-30 border-t-2 border-yellow-600">
      {/* Decorative Bottom Corners */}
      <div className="absolute bottom-0 left-0 p-2">
        <ChineseCorner rotate={270} />
      </div>
      <div className="absolute bottom-0 right-0 p-2">
        <ChineseCorner rotate={180} />
      </div>

      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="mb-6">
            <ChineseKnot className="w-16 h-16 opacity-80" />
        </div>

        <h3 className="text-xl font-chifa mb-4" style={{ color: COLORS.accentGold }}>
          Medios de Pago
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            <PaymentIcon label="VISA" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="YAPE" />
            <PaymentIcon label="PLIN" />
            <PaymentIcon label="CASH" />
        </div>

        <p className="text-center text-sm font-body opacity-60 max-w-xs">
          Gracias por su preferencia. Los precios incluyen IGV.
        </p>
        <p className="text-center text-xs mt-8 opacity-40">
          © {new Date().getFullYear()} SAM SEM Chifa
        </p>
      </div>
    </footer>
  );
};

export default Footer;