import { useEffect, useState } from 'react';

function AnimatedBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Crear partículas iniciales
    const initialParticles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10
    }));
    setParticles(initialParticles);

    // Agregar partículas dinámicamente
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 15 + Math.random() * 10
        }
      ].slice(-10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Fondo base con gradiente */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(76,209,55,0.15)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(230,126,34,0.15)_0%,transparent_40%),radial-gradient(circle_at_50%_50%,rgba(52,152,219,0.1)_0%,transparent_50%),#0a0a0a] -z-10" />
      
      {/* Partículas flotantes */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-green-400 rounded-full opacity-30 pointer-events-none animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      {/* Pizzas flotantes */}
      <div className="fixed text-6xl opacity-20 pointer-events-none animate-bounce" style={{ left: '5%', top: '10%' }}>
        🍕
      </div>
      <div className="fixed text-6xl opacity-20 pointer-events-none animate-bounce" style={{ left: '75%', top: '60%', animationDelay: '2s' }}>
        🍕
      </div>
      <div className="fixed text-6xl opacity-20 pointer-events-none animate-bounce" style={{ left: '40%', top: '80%', animationDelay: '4s' }}>
        🍕
      </div>
    </>
  );
}

export default AnimatedBackground;
