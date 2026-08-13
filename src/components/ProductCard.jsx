import { useState } from 'react';

function ProductCard({ item, color }) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    leo: {
      border: 'border-blue-500/40',
      borderHover: 'hover:border-blue-400',
      glow: 'rgba(52, 152, 219, 0.5)',
      price: 'text-blue-400',
    },
    raph: {
      border: 'border-red-500/40',
      borderHover: 'hover:border-red-400',
      glow: 'rgba(231, 76, 60, 0.5)',
      price: 'text-red-400',
    },
    don: {
      border: 'border-purple-500/40',
      borderHover: 'hover:border-purple-400',
      glow: 'rgba(155, 89, 182, 0.5)',
      price: 'text-purple-400',
    },
    mikey: {
      border: 'border-orange-500/40',
      borderHover: 'hover:border-orange-400',
      glow: 'rgba(243, 156, 18, 0.5)',
      price: 'text-orange-400',
    },
  };

  const s = styles[color] || styles.leo;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative bg-zinc-900/60 backdrop-blur-sm
        border ${s.border} ${s.borderHover}
        rounded-2xl overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-3 hover:scale-[1.03]
        cursor-pointer
      `}
      style={{
        boxShadow: isHovered
          ? `0 25px 50px -12px ${s.glow}, 0 0 30px ${s.glow}`
          : '0 4px 20px rgba(0,0,0,0.4)'
      }}
    >
      {/* Imagen del producto */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Se muestra si la imagen no carga (fallback) */}
        <div className="hidden w-full h-full items-center justify-center text-gray-600 text-sm font-barlow absolute inset-0 bg-zinc-800">
          Imagen no disponible
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="font-elegant font-bold text-xl sm:text-2xl text-white mb-2 tracking-wide">
          {item.name}
        </h3>
        <p className="font-barlow text-sm text-gray-400 leading-relaxed mb-5 min-h-[2.5rem]">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className={`font-bungee text-2xl sm:text-3xl ${s.price}`}>
            ${item.price}
          </span>
          <div className={`w-2 h-2 rounded-full ${s.price.replace('text', 'bg')}`} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;