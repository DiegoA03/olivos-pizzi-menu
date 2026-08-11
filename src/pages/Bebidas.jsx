import { menuData } from '../data/menuData';
import CategorySection from '../components/CategorySection';

function Bebidas() {
  const menu = menuData.find((m) => m.id === 'bebidas');
  return (
    <div className="py-6">
      <CategorySection menu={menu} />
    </div>
  );
}

export default Bebidas;