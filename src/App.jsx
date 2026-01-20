import { useState } from 'react';
import Header from './components/Header';
import TurtleBadges from './components/TurtleBadges';
import MenuCard from './components/MenuCard';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { menuData } from './data/menuData';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setSelectedCategory(categoryId);
      
      // Remover highlight después de 1 segundo
      setTimeout(() => setSelectedCategory(null), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 py-5">
        <Header />
        
        <TurtleBadges onBadgeClick={scrollToCategory} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {menuData.map((menu) => (
            <MenuCard
              key={menu.id}
              menu={menu}
              isHighlighted={selectedCategory === menu.id}
            />
          ))}
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;