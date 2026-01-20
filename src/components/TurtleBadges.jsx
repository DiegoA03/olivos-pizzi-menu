import { turtles } from '../data/menuData';

function TurtleBadges({ onBadgeClick }) {
  const colorMap = {
    leo: 'from-blue-500 to-blue-700',
    raph: 'from-red-500 to-red-700',
    don: 'from-purple-500 to-purple-700',
    mikey: 'from-orange-500 to-orange-700'
  };

  const allCategories = [
    { emoji: '🍕', category: 'pizzas', color: 'leo', name: 'Pizzas' },
    { emoji: '🍔', category: 'hamburguesas', color: 'raph', name: 'Hamburguesas' },
    { emoji: '🌭', category: 'hotdogs', color: 'don', name: 'Perros' },
    { emoji: '🔥', category: 'choriperros', color: 'mikey', name: 'Choriperros' },
    { emoji: '🍟', category: 'salchipapas', color: 'leo', name: 'Salchipapas' },
    { emoji: '🍟', category: 'choripapas', color: 'raph', name: 'Choripapas' },
    { emoji: '👑', category: 'especial', color: 'don', name: 'Especial' },
    { emoji: '🥤', category: 'bebidas', color: 'mikey', name: 'Bebidas' }
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-16 flex-wrap px-4">
      {allCategories.map((item) => (
        <button
          key={item.category}
          onClick={() => onBadgeClick(item.category)}
          className={`
            w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full 
            bg-gradient-to-br ${colorMap[item.color]}
            flex flex-col items-center justify-center text-3xl sm:text-4xl md:text-5xl
            cursor-pointer transition-all duration-300
            hover:scale-110 hover:-translate-y-4
            active:scale-105
            shadow-[0_15px_40px_rgba(0,0,0,0.6)]
            hover:shadow-2xl
          `}
          title={item.name}
        >
          <span className="hover:scale-110 transition-transform">
            {item.emoji}
          </span>
        </button>
      ))}
    </div>
  );
}

export default TurtleBadges;