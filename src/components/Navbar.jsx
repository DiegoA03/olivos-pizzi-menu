import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Pizzas', path: '/pizzas' },
    { name: 'Hamburguesas', path: '/hamburguesas' },
    { name: 'Hot Dogs', path: '/hotdogs' },
    { name: 'Choriperros', path: '/choriperros' },
    { name: 'Papas', path: '/papas' },
    { name: 'Bebidas', path: '/bebidas' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b-2 border-green-500/30 shadow-lg">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo y nombre (IZQUIERDA) */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-2xl shadow-lg">
              🐢
            </div>
            <span className="font-elegant font-bold text-xl sm:text-2xl text-green-400 tracking-wide">
              Olivos Pizzi
            </span>
          </Link>

          {/* Links de navegación (DERECHA) */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  font-barlow font-semibold text-sm uppercase tracking-wide
                  transition-all duration-300
                  hover:text-green-400
                  ${isActive(link.path) ? 'text-green-400 border-b-2 border-green-400 pb-1' : 'text-gray-300'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="lg:hidden pb-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  font-barlow font-semibold text-sm uppercase tracking-wide
                  py-2 px-4 rounded-lg transition-all
                  ${isActive(link.path) ? 'bg-green-500/20 text-green-400' : 'text-gray-300 hover:bg-white/5'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;