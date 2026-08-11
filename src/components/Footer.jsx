import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  const categories = [
    { name: 'Pizzas', path: '/pizzas' },
    { name: 'Hamburguesas', path: '/hamburguesas' },
    { name: 'Hot Dogs', path: '/hotdogs' },
    { name: 'Choriperros', path: '/choriperros' },
    { name: 'Papas', path: '/papas' },
    { name: 'Bebidas', path: '/bebidas' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md mt-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-lg">
                🐢
              </div>
              <span className="font-elegant font-bold text-lg text-green-400">
                Olivos Pizzi
              </span>
            </div>
            <p className="text-gray-400 text-sm font-barlow leading-relaxed">
              Pizza artesanal, hamburguesas y comida rápida con actitud ninja.
              Sabor, disciplina y pasión en cada plato.
            </p>
          </div>

          {/* Menú */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Menú
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.path}>
                  <Link
                    to={cat.path}
                    className="text-gray-400 text-sm font-barlow hover:text-green-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm font-barlow text-gray-400">
              <li>Cúcuta, Norte de Santander</li>
              <li>+57 320 819 8473</li>
              <li>Pedidos por WhatsApp</li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs font-barlow">
            © {year} Olivos Pizzi. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs font-barlow">
            Todos los precios en COP
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;