import { useState } from 'react';

function MenuItem({ item, color }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    leo: 'border-blue-500',
    raph: 'border-red-500',
    don: 'border-purple-500',
    mikey: 'border-orange-500'
  };

  return (
    <div
      className={`
        grid grid-cols-[1fr_auto] gap-3 sm:gap-4 md:gap-6
        p-4 sm:p-5 md:p-6 rounded-2xl
        bg-white/[0.03]
        transition-all duration-300
        border-l-4 border-transparent
        ${isHovered ? `bg-white/[0.08] translate-x-4 shadow-[-5px_10px_30px_rgba(0,0,0,0.3)] ${colorMap[color]}` : ''}
        cursor-pointer
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Info del item */}
      <div className="flex flex-col gap-2">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {item.emoji} {item.name}
        </div>
        <div className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
          {item.description}
        </div>
      </div>

      {/* Precio */}
      <div className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-400 flex items-center whitespace-nowrap">
        ${item.price}
      </div>
    </div>
  );
}

export default MenuItem;