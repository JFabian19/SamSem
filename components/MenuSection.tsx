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
      
      <div className="bg-black bg-opacity-20 rounded-lg p-4 shadow-inner">
        {category.items.map((item, index) => (
          <MenuItem key={`${category.categoria}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;