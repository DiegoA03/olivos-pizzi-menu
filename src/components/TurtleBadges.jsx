import { turtles } from '../data/menuData';

function TurtleBadges({ onBadgeClick }) {
  const colorMap = {
    leo: 'from-blue-500 to-blue-700',
    raph: 'from-red-500 to-red-700',
    don: 'from-purple-500 to-purple-700',
    mikey: 'from-orange-500 to-orange-700',
  };

  const handleClick = (color) => {
    const categoryMap = {
      leo: 'pizzas',
      raph: 'hamburguesas',
      don: 'hotdogs',
      mikey: 'choriperros'
    };
    
    onBadgeClick(categoryMap[color]);
  };

  return (
    <div className="flex justify-center gap-10 mb-16 flex-wrap">
      {turtles.map((turtle) => (
        <button
          key={turtle.color}
          onClick={() => handleClick(turtle.color)}
          className={`
            w-32 h-32 md:w-36 md:h-36 rounded-full 
            bg-gradient-to-br ${colorMap[turtle.color]}
            flex items-center justify-center text-6xl
            cursor-pointer transition-all duration-300
            hover:scale-110 hover:-translate-y-4
            active:scale-105
            shadow-[0_15px_40px_rgba(0,0,0,0.6)]
            hover:shadow-2xl
          `}
          title={turtle.name}
        >
          <span className="hover:scale-110 transition-transform">
            {turtle.emoji}
          </span>
        </button>
      ))}
    </div>
  );
}

export default TurtleBadges;