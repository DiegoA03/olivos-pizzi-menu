import { menuData } from '../data/menuData';
import CategorySection from '../components/CategorySection';

function HotDogs() {
  const menu = menuData.find((m) => m.id === 'hotdogs');
  return (
    <div className="py-6">
      <CategorySection menu={menu} />
    </div>
  );
}

export default HotDogs;