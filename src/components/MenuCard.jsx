import { useState } from 'react';
import MenuItem from './MenuItem';

function MenuCard({ menu, isHighlighted }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    leo: 'border-blue-500 text-blue-500',
    raph: 'border-red-500 text-red-500',
    don: 'border-purple-500 text-purple-500',
    mikey: 'border-orange-500 text-orange-500'
  };

  return (
    <div
      id={menu.id}
      className={`
        bg-gradient-to-br from-zinc-900/95 to-zinc-950/95
        rounded-[35px] overflow-hidden
        border-3 ${colorMap[menu.color]}
        transition-all duration-500
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.7)]
        hover:-translate-y-4 hover:scale-[1.02]
        ${isHighlighted ? 'scale-105 shadow-2xl ring-4 ring-green-500' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={menu.image}
          alt={menu.category}
          className={`
            w-full h-full object-cover
            transition-all duration-500
            ${isHovered ? 'scale-110 brightness-110 saturate-150' : 'brightness-80'}
          `}
        />
      </div>

      {/* Contenido */}
      <div className="p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-7 md:mb-9 pb-4 sm:pb-5 md:pb-6 border-b-3 border-white/10">
          <div className={`text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_0_25px]`}>
            {menu.icon}
          </div>
          <h2 className={`font-black text-2xl sm:text-3xl md:text-4xl tracking-wider uppercase drop-shadow-[0_0_20px]`}>
            {menu.category}
          </h2>
        </div>

        {/* Items del menú */}
        <div className="space-y-5">
          {menu.items.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              color={menu.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuCard;