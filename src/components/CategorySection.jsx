import MenuItem from './MenuItem';

function CategorySection({ menu }) {
  if (!menu) return null;

  const colorMap = {
    leo: 'text-blue-400 border-blue-500/40',
    raph: 'text-red-400 border-red-500/40',
    don: 'text-purple-400 border-purple-500/40',
    mikey: 'text-orange-400 border-orange-500/40'
  };

  return (
    <div className="mb-16">
      {/* Header de la categoría */}
      <div className={`flex items-center gap-4 mb-8 pb-5 border-b-2 ${colorMap[menu.color]}`}>
        <span className="text-6xl sm:text-7xl drop-shadow-lg">{menu.icon}</span>
        <h2 className="font-elegant font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide">
          {menu.category}
        </h2>
      </div>

      {/* Imagen destacada */}
      <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden mb-8">
        <img
          src={menu.image}
          alt={menu.category}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {menu.items.map((item, index) => (
          <MenuItem key={index} item={item} color={menu.color} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;