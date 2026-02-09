import React from 'react';
import { MenuCategory } from '../types';
import { COLORS } from '../constants';

interface Props {
  categories: MenuCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const Navigation: React.FC<Props> = ({ categories, activeCategory, onSelectCategory }) => {
  const scrollContainerRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  return (
    <nav className="sticky top-0 z-50 py-3 shadow-lg" style={{ backgroundColor: COLORS.primaryRed }}>
      <ul ref={scrollContainerRef} className="flex overflow-x-auto px-4 space-x-3 no-scrollbar items-center">
        {categories.map((cat, index) => {
          const id = `category-${index}`;
          const isActive = activeCategory === id;
          return (
            <li key={index} className="flex-shrink-0">
              <button
                onClick={() => onSelectCategory(id)}
                data-active={isActive}
                className={`px-4 py-2 rounded-full text-sm font-bold font-body transition-all duration-300 border ${isActive
                    ? 'bg-yellow-500 text-black border-yellow-500 shadow-md transform scale-105'
                    : 'bg-transparent text-yellow-500 border-yellow-500 border-opacity-50 hover:bg-red-900'
                  }`}
              >
                {cat.categoria}
              </button>
            </li>
          );
        })}
      </ul>
      {/* Gradient fade for scroll indication */}
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#8B0000] to-transparent pointer-events-none"></div>
    </nav>
  );
};

export default Navigation;