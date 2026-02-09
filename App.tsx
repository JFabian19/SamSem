import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_DATA, COLORS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('category-0');

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
          categories={MENU_DATA.menu}
          activeCategory={activeCategory}
          onSelectCategory={scrollToCategory}
        />

        <main className="flex-grow pt-6 pb-12">
          {MENU_DATA.menu.map((category, index) => (
            <MenuSection
              key={index}
              category={category}
              id={`category-${index}`}
            />
          ))}
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default App;