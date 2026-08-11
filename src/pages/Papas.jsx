import { menuData } from '../data/menuData';
import CategorySection from '../components/CategorySection';

function Papas() {
  const salchipapas = menuData.find((m) => m.id === 'salchipapas');
  const choripapas = menuData.find((m) => m.id === 'choripapas');
  const especial = menuData.find((m) => m.id === 'especial');

  return (
    <div className="py-6">
      <CategorySection menu={salchipapas} />
      <CategorySection menu={choripapas} />
      <CategorySection menu={especial} />
    </div>
  );
}

export default Papas;