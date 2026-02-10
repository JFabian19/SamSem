import React from 'react';
import { MenuCategory } from '../types';
import MenuItem from './MenuItem';
import { COLORS } from '../constants';

interface Props {
  category: MenuCategory;
  id: string;
}

const MenuSection: React.FC<Props> = ({ category, id }) => {
  return (
    <section id={id} className="mb-8 scroll-mt-24 px-4">
      <div className="mb-4 flex items-center">
        <div className="flex-grow h-px bg-yellow-500 opacity-50"></div>
        <h2 className="px-4 text-2xl font-chifa text-center uppercase tracking-wide" style={{ color: COLORS.accentGold }}>
          {category.categoria}
        </h2>
        <div className="flex-grow h-px bg-yellow-500 opacity-50"></div>
      </div>

      <div className="relative bg-black bg-opacity-40 rounded-lg p-4 shadow-inner overflow-hidden">
        {category.imagen && (
          <div
            className="absolute inset-0 z-0 opacity-30 bg-cover bg-center pointer-events-none transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${category.imagen})` }}
          />
        )}
        <div className="relative z-10">
          {category.items.map((item, index) => (
            <MenuItem key={`${category.categoria}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;