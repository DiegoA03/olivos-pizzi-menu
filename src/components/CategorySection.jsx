import ProductCard from './ProductCard';

function CategorySection({ menu }) {
  if (!menu) return null;

  const glowColors = {
    leo: '#3498db',
    raph: '#e74c3c',
    don: '#9b59b6',
    mikey: '#f39c12',
  };

  const glow = glowColors[menu.color] || glowColors.leo;

  return (
    <div className="mb-20">
      {/* Título alumbrado */}
      <div className="mb-10 text-center sm:text-left">
        <h2
          className="font-elegant font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide inline-block"
          style={{
            color: '#fff',
            textShadow: `0 0 10px ${glow}, 0 0 25px ${glow}, 0 0 45px ${glow}`
          }}
        >
          {menu.category}
        </h2>
        <div
          className="h-[3px] w-24 mx-auto sm:mx-0 mt-3 rounded-full"
          style={{ background: glow, boxShadow: `0 0 10px ${glow}` }}
        />
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {menu.items.map((item, index) => (
          <ProductCard key={index} item={item} color={menu.color} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;