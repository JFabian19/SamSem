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
        <p className="text-xl md:text-2xl mb-6 font-body opacity-90 tracking-wide uppercase">
          Profesionalismo al servicio del país
        </p>

        {/* Info Grid */}
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-8 px-4 relative z-10">

          {/* Address */}
          <a
            href="https://www.google.com/maps/place/El+Man%C3%A1+Rest+Chifa/@-9.1358376,-78.5026816,17z/data=!4m15!1m8!3m7!1s0x91ab8574125396b7:0x1d4bd107c85a5979!2sEl+Man%C3%A1+Rest+Chifa!8m2!3d-9.135917!4d-78.5027574!10e5!16s%2Fg%2F11jx3b6yy_!3m5!1s0x91ab8574125396b7:0x1d4bd107c85a5979!8m2!3d-9.135917!4d-78.5027574!16s%2Fg%2F11jx3b6yy_?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <span className="text-sm md:text-base font-body text-center leading-tight text-white hover:underline">Urb Garatea Mz H lote 36 nvo Chimbote</span>
          </a>

          {/* Hours */}
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-sm md:text-base font-body text-white">Horario: 7:00 AM - 12:00 PM</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <a
              href="https://wa.me/51933886107"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg border-2 border-green-500/50"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.355-5.298c0-5.457 4.432-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span className="font-bold text-lg">WhatsApp</span>
            </a>

            <a
              href="https://www.facebook.com/elmamarestaurantechifa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg border-2 border-blue-500/50"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              <span className="font-bold text-lg">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/samsem.rest/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E1306C] text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg border-2 border-pink-500/50"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-bold text-lg">Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@chifa.sam.sem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#000000] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg border-2 border-gray-500/50"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
              </svg>
              <span className="font-bold text-lg">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;