import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

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
    <nav
      className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b shadow-lg"
      style={{ borderColor: 'rgba(var(--accent-rgb), 0.3)' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

         {/* Logo y nombre (IZQUIERDA) */}
          <Link to="/" className="flex items-center gap-3 ml-2 sm:ml-6 lg:ml-10">
            <img src="/logo.png" alt="Olivos Pizzi" className="w-12 h-12 rounded-full object-cover shadow-lg" />
            <span
              className="font-elegant font-bold text-xl sm:text-2xl tracking-wide"
              style={{ color: 'var(--accent)' }}
            >
              Olivos Pizzi
            </span>
          </Link>

          {/* Links de navegación (DERECHA) */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-barlow font-semibold text-sm uppercase tracking-wide transition-all duration-300 pb-1"
                style={
                  isActive(link.path)
                    ? { color: 'var(--accent)', borderBottom: '2px solid var(--accent)' }
                    : { color: '#d1d5db' }
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Selector de color (SIEMPRE visible, incluso en móvil) */}
          <div className="ml-4 lg:ml-6">
            <ThemeSwitcher />
          </div>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden text-white ml-3"
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
                className="font-barlow font-semibold text-sm uppercase tracking-wide py-2 px-4 rounded-lg transition-all"
                style={
                  isActive(link.path)
                    ? { backgroundColor: 'rgba(var(--accent-rgb), 0.15)', color: 'var(--accent)' }
                    : { color: '#d1d5db' }
                }
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