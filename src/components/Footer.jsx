function Footer() {
  return (
    <footer className="text-center py-16 px-10 bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 rounded-[40px] mt-20 relative overflow-hidden backdrop-blur-xl border-3 border-green-500/30 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
      {/* Efecto de brillo rotatorio */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(76,209,55,0.1)_0%,transparent_70%)] animate-spin" style={{ animationDuration: '20s' }} />
      
      <div className="relative z-10">
        {/* Título */}
        <div className="font-black text-5xl md:text-6xl bg-gradient-to-r from-green-400 via-orange-500 via-red-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(76,209,55,0.5)]">
          🐢 TURTLE POWER! 🐢
        </div>
        
        {/* Social */}
        <div className="text-2xl md:text-3xl text-green-400 font-bold my-6 drop-shadow-[0_0_20px_rgba(76,209,55,0.6)]">
          📱 contactanos: 3208198473
        </div>
        
        {/* Cita */}
        <p className="text-gray-400 text-xl md:text-2xl italic my-6 leading-relaxed max-w-3xl mx-auto">
          "La pizza es como la vida: hay que disfrutarla mientras esté caliente"
          <br />
          <strong className="text-orange-500">- Jesus Medina</strong>
        </p>
        
        {/* Notas */}
        <div className="text-gray-500 text-base md:text-lg mt-6 space-y-2">
          <div>💰 Todos los precios en COP (Pesos Colombianos)</div>
          <div>📍 Bogota, soacha cundinamarca</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;