import { Link } from 'react-router-dom';
import TypewriterText from '../components/TypewriterText';

function Home() {
  return (
    <div>
      {/* Sección Hero */}
      <div className="min-h-[75vh] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-10">

        {/* Columna izquierda - Texto */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-barlow font-semibold mb-6"
            style={{
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              border: '1px solid rgba(var(--accent-rgb), 0.4)',
              color: 'var(--accent)'
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse inline-block"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            {' '}Bienvenido a la cocina ninja
          </div>

          <h1 className="font-elegant font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4 min-h-[1.4em]">
            Hola, soy{' '}
            <span style={{ color: 'var(--accent)' }}>
              <TypewriterText text="Jesús Medina" speed={90} />
            </span>
          </h1>

          <p className="font-bungee text-lg sm:text-xl text-orange-500 tracking-wide mb-6">
            Fundador de Olivos Pizzi
          </p>

          <p className="font-elegant italic text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            "Cada pizza que sale de nuestro horno lleva el espíritu ninja:
            pasión, disciplina y sabor en cada bocado."
          </p>

          <Link
            to="/pizzas"
            className="inline-block text-black font-barlow font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform"
            style={{
              backgroundColor: 'var(--accent)',
              boxShadow: '0 10px 30px rgba(var(--accent-rgb), 0.5)'
            }}
          >
            Ver Nuestro Menú
          </Link>
        </div>

        {/* Columna derecha - Imagen del dueño */}
        <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end w-full">
          <div className="relative animate-float mt-2">
            <div className="absolute inset-0 bg-green-500/30 rounded-full blur-3xl scale-90" />
            <img
              src="/tortugas.png"
              alt="Jesús Medina"
              className="relative w-64 sm:w-80 md:w-96 max-h-[75vh] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Sección de ubicación (debajo del hero, no dentro del grid) */}
    </div>
  );
}

export default Home;