import React, { useState } from 'react';
import { ChineseCorner, ChineseKnot } from './Ornaments';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyYapeNumber = () => {
    navigator.clipboard.writeText("933886107");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative mt-12 py-12 px-4 bg-[#1a0f0f] border-t-4 border-yellow-600">
      {/* Decorative Bottom Corners */}
      <div className="absolute bottom-0 left-0 p-2 opacity-30">
        <ChineseCorner rotate={270} />
      </div>
      <div className="absolute bottom-0 right-0 p-2 opacity-30">
        <ChineseCorner rotate={180} />
      </div>

      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-sm mx-auto">
        <div className="mb-4 text-yellow-500">
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        </div>

        <h3 className="text-2xl font-serif text-yellow-500 mb-6 uppercase tracking-wider text-center">
          MÉTODO DE PAGO
        </h3>

        {/* Payment Card Container */}
        <div className="bg-[#2a1a1a] p-6 rounded-lg shadow-2xl w-full border border-yellow-900/30">

          {/* Logos Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Visa */}
            <div className="bg-white rounded-lg h-16 flex items-center justify-center p-2 shadow-md hover:scale-105 transition-transform">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-full object-contain" />
            </div>

            {/* Mastercard */}
            <div className="bg-white rounded-lg h-16 flex items-center justify-center p-2 shadow-md hover:scale-105 transition-transform">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full object-contain" />
            </div>

            {/* Plin */}
            <div className="bg-white rounded-lg h-16 flex items-center justify-center p-2 shadow-md hover:scale-105 transition-transform">
              <img
                src="/plin inter.png"
                alt="Plin"
                className="h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.backgroundColor = '#00C4B4';
                  e.currentTarget.parentElement!.innerHTML = '<span style="color: white; font-weight: bold; font-size: 1.5rem;">plin</span>';
                }}
              />
            </div>

            {/* Yape */}
            <div className="bg-white rounded-lg h-16 flex items-center justify-center p-2 shadow-md hover:scale-105 transition-transform">
              <img
                src="/yap.png"
                alt="Yape"
                className="h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.backgroundColor = '#742284';
                  e.currentTarget.parentElement!.innerHTML = '<span style="color: white; font-weight: bold; font-size: 1.5rem;">Yape</span>';
                }}
              />
            </div>
          </div>

          {/* Copy Number Button */}
          <button
            onClick={copyYapeNumber}
            className="w-full bg-[#8B0000] hover:bg-red-800 text-white py-4 rounded-lg font-bold text-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3 border border-red-900 relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-green-600 transition-transform duration-300 ${copied ? 'translate-x-0' : '-translate-x-full'}`}></div>
            <div className="relative flex items-center gap-3 z-10">
              {copied ? (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  <span className="tracking-wider text-2xl">933 886 107</span>
                </>
              )}
            </div>
          </button>

        </div>

        <p className="text-center text-xs mt-8 opacity-40 font-body">
          © {new Date().getFullYear()} SAM SEM Chifa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;