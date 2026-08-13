import { useState, useRef, useEffect } from 'react';

function LocationButton() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef(null);

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3976.9904728969727!2d-74.20194472502132!3d4.595728795378929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzUnNDQuNiJOIDc0wrAxMSc1Ny43Ilc!5e0!3m2!1ses!2sco!4v1786577516173!5m2!1ses!2sco';

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Dg+42+%23+14C-13,+Soacha,+Cundinamarca';

  // Cierra el panel si haces click afuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="fixed bottom-[104px] sm:bottom-[120px] right-6 z-50">

      {/* Panel del mini mapa (asistente) */}
      {open && (
        <div
          className={`absolute bottom-20 right-0 rounded-2xl overflow-hidden border bg-black/95 backdrop-blur-xl shadow-2xl animate-fadeInUp transition-all duration-300 ${
            expanded ? 'w-[90vw] max-w-md' : 'w-72 sm:w-80'
          }`}
          style={{ borderColor: 'rgba(var(--accent-rgb), 0.4)' }}
        >
          {/* Header del panel */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: 'rgba(var(--accent-rgb), 0.3)' }}
          >
            <span className="font-barlow font-semibold text-white text-sm">
              Nuestra ubicación
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={expanded ? 'Reducir mapa' : 'Expandir mapa'}
                title={expanded ? 'Reducir mapa' : 'Expandir mapa'}
              >
                {expanded ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  setExpanded(false);
                }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mini mapa (interactivo: scroll para zoom, arrastrar para mover) */}
          <div className={`transition-all duration-300 ${expanded ? 'h-96' : 'h-40 sm:h-48'}`}>
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación de Olivos Pizzi"
            />
          </div>

          {/* Dirección + botón */}
          <div className="p-4">
            <p className="font-barlow text-gray-300 text-xs sm:text-sm mb-3">
              Dg 42 #14C-13, Soacha, Cundinamarca
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-black font-barlow font-bold text-sm px-4 py-2.5 rounded-full hover:scale-105 transition-transform w-full"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Cómo llegar
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        style={{
          backgroundColor: 'var(--accent)',
          boxShadow: '0 10px 30px rgba(var(--accent-rgb), 0.6)'
        }}
        title="Ver ubicación"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  );
}

export default LocationButton;