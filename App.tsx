import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_DATA, COLORS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [menuData, setMenuData] = useState<typeof MENU_DATA | null>(null);

  useEffect(() => {
    const loadData = async () => {
      // Dynamic import to avoid issues if service is incomplete, but here it's fine
      const { fetchMenuData } = await import('./services/googleSheets');
      const data = await fetchMenuData();
      if (data) {
        setMenuData(data);
        setActiveCategory('category-0');
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

        {/* Show a simple loading state or just the hero if menu not ready */}
        {!menuData ? (
          <div className="flex justify-center items-center h-40 text-yellow-500 font-bold">
            Cargando carta...
          </div>
        ) : (
          <>
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
          </>
        )}

        <Footer />

      </div>
    </div>
  );
};

export default App;