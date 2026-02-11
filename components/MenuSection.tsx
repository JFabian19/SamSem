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

      <div className="relative bg-black bg-opacity-40 rounded-lg shadow-inner overflow-hidden">
        {category.imagen && (
          <div className="w-full h-32 md:h-40">
            <img
              src={category.imagen}
              alt={category.categoria}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="relative z-10 p-4">
          {category.items.map((item, index) => (
            <MenuItem key={`${category.categoria}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;