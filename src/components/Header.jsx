function Header() {
  return (
    <header className="text-center py-20 mb-16 relative">
      {/* Efecto de brillo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/60 rounded-full blur-[80px] animate-pulse -z-10" />
      
      {/* Logo animado */}
      <div className="relative inline-block">
        <h1 className="font-black text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent tracking-[0.2em] mb-4 drop-shadow-[0_0_40px_rgba(76,209,55,0.8)]">
          OLIVOS PIZZI
        </h1>
      </div>
      
      {/* Subtítulo */}
      <div className="font-black text-xl md:text-2xl text-orange-500 tracking-[0.3em] mb-4 drop-shadow-[0_0_20px_rgba(230,126,34,0.6)]">
        🐢 TEENAGE MUTANT NINJA KITCHEN 🐢
      </div>
      
      {/* Eslogan */}
      <div className="text-lg md:text-xl text-gray-400 font-bold italic">
        ¡Pizza con actitud ninja!
      </div>
    </header>
  );
}

export default Header;