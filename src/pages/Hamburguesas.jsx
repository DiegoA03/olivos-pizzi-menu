import { menuData } from '../data/menuData';
import CategorySection from '../components/CategorySection';

function Hamburguesas() {
  const menu = menuData.find((m) => m.id === 'hamburguesas');
  return (
    <div className="py-6">
      <CategorySection menu={menu} />
    </div>
  );
}

export default Hamburguesas;