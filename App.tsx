import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_DATA, COLORS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('category-0');
  // Start with the static MENU_DATA so the page renders instantly
  const [menuData, setMenuData] = useState<typeof MENU_DATA>(MENU_DATA);

  // Callback for background data refresh
  const handleBackgroundUpdate = useCallback((freshData: typeof MENU_DATA) => {
    setMenuData(freshData);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { fetchMenuData } = await import('./services/googleSheets');
        const data = await fetchMenuData(handleBackgroundUpdate);
        if (data) {
          setMenuData(data);
        }
        // If data is null, we keep the static MENU_DATA — no error needed
      } catch (err) {
        console.error("Failed to load menu data", err);
        // Keep static data as fallback — no blank screen
      }
    };
    loadData();
  }, [handleBackgroundUpdate]);


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
      if (!menuData) return;
      const sections = menuData.menu.map((_, index) => document.getElementById(`category-${index}`));
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
  }, [menuData]);

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
        />

        <main className="flex-grow pt-6 pb-12">

          {/* Section 1: Sopas/Tallarines vs Arroces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-full overflow-hidden mb-8">
            {/* Left Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isLeft = ["sopas", "tallarines"].includes(category.categoria.toLowerCase());
                if (!isLeft) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isRight = ["arroces (chaufas y aeropuertos)"].includes(category.categoria.toLowerCase());
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
                const isLeft = ["combinados", "platos dulces"].includes(category.categoria.toLowerCase());
                if (!isLeft) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isRight = ["platos salados", "chancho asado", "pato asado"].includes(category.categoria.toLowerCase());
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
                const isLeft = ["alitas", "guarniciones"].includes(category.categoria.toLowerCase());
                if (!isLeft) return null;
                return <MenuSection key={index} category={category} id={`category-${index}`} />;
              })}
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              {menuData.menu.map((category, index) => {
                const isRight = ["piqueos", "bebidas frias", "refrescos", "bebidas calientes"].includes(category.categoria.toLowerCase());
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