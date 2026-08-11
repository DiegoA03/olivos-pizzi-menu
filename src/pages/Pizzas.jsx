import { menuData } from '../data/menuData';
import CategorySection from '../components/CategorySection';

function Pizzas() {
  const menu = menuData.find((m) => m.id === 'pizzas');
  return (
    <div className="py-6">
      <CategorySection menu={menu} />
    </div>
  );
}

export default Pizzas;