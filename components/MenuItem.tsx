import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import { COLORS } from '../constants';

interface Props {
  item: MenuItemType;
}

const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col py-3 border-b border-opacity-20 border-yellow-500 last:border-b-0">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold font-body leading-tight pr-4" style={{ color: COLORS.textWhite }}>
          {item.nombre}
        </h3>
        <span className="text-lg font-bold font-body whitespace-nowrap" style={{ color: COLORS.accentGold }}>
          S/ {item.precio.toFixed(2)}
        </span>
      </div>
      {item.descripcion && (
        <p className="text-sm mt-1 opacity-80 font-body leading-snug" style={{ color: '#E0E0E0' }}>
          {item.descripcion}
        </p>
      )}
    </div>
  );
};

export default MenuItem;