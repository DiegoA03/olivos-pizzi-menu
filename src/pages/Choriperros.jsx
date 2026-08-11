import { menuData } from '../data/menuData';
import CategorySection from '../components/CategorySection';

function Choriperros() {
  const menu = menuData.find((m) => m.id === 'choriperros');
  return (
    <div className="py-6">
      <CategorySection menu={menu} />
    </div>
  );
}

export default Choriperros;