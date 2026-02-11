import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_DATA, COLORS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('category-0');
  const [menuData, setMenuData] = useState(MENU_DATA);

  useEffect(() => {
    const loadData = async () => {
      // Dynamic import to avoid issues if service is incomplete, but here it's fine
      const { fetchMenuData } = await import('./services/googleSheets');
      const data = await fetchMenuData();
      if (data) {
        setMenuData(data);
      }
    };
    loadData();
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Optional: Intersection Observer to update active tab on scroll
  // For simplicity and performance on mobile, we'll rely mostly on click-to-scroll,
  // but let's add a basic listener.
  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_DATA.menu.map((_, index) => document.getElementById(`category-${index}`));
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(`category-${i}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-yellow-500 selection:text-red-900">
      {/* Background Texture/Pattern */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(${COLORS.accentGold} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto shadow-2xl min-h-screen flex flex-col" style={{ backgroundColor: COLORS.primaryRed }}>

        <Hero />

        <Navigation
          categories={menuData.menu}
          activeCategory={activeCategory}
          onSelectCategory={scrollToCategory}
        />

        <main className="flex-grow pt-6 pb-12">

          {/* Section 1: Sopas/Tallarines vs Arroces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-full overflow-hidden mb-8">
            {/* Left Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isLeft = ["Sopas", "Tallarines"].includes(category.categoria);
                if (!isLeft) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isRight = ["Arroces (Chaufas y Aeropuertos)"].includes(category.categoria);
                if (!isRight) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
          </div>

          {/* Section 2: Combinados/Dulces vs Salados/Chancho/Pato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-full overflow-hidden mb-8">
            {/* Left Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isLeft = ["Combinados", "Platos Dulces"].includes(category.categoria);
                if (!isLeft) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isRight = ["Platos Salados", "Chancho Asado", "Pato Asado"].includes(category.categoria);
                if (!isRight) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
          </div>

          {/* Section 3: Sides/Drinks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-full overflow-hidden">
            {/* Left Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isLeft = ["Alitas", "Guarniciones"].includes(category.categoria);
                if (!isLeft) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isRight = ["Piqueos", "Bebidas Frias", "Refrescos", "Bebidas Calientes"].includes(category.categoria);
                if (!isRight) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
          </div>

        </main>

        <Footer />

      </div>
    </div>
  );
};

export default App;