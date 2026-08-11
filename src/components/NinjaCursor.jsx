import { useEffect, useRef, useState } from 'react';

function NinjaCursor() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // No mostrar en dispositivos táctiles (móviles/tablets)
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    function handleMouseMove(e) {
      if (!isVisible) setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Detecta si está sobre un elemento clicable (botón, link, etc.)
      const target = e.target;
      const clickable = target.closest('a, button, [role="button"]');
      setIsPointer(!!clickable);
    }

    function handleMouseLeave() {
      setIsVisible(false);
    }

    function handleMouseEnter() {
      setIsVisible(true);
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div
      ref={cursorRef}
      className={`ninja-cursor ${isVisible ? 'opacity-100' : 'opacity-0'} ${isPointer ? 'ninja-cursor-hover' : ''}`}
    >
      <div className="ninja-cursor-ring" />
      <div className="ninja-cursor-dot" />
    </div>
  );
}

export default NinjaCursor;