import { useState, useRef, useEffect } from 'react';
import { useTheme, themes } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { themeKey, setThemeKey } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Cierra el panel si haces click afuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-full border-2 border-white/30 transition-transform hover:scale-110"
        style={{ backgroundColor: themes[themeKey].hex, boxShadow: `0 0 10px ${themes[themeKey].hex}` }}
        title="Cambiar color del sitio"
      />

      {open && (
        <div className="absolute right-0 mt-3 flex gap-2 bg-black/95 border border-white/10 rounded-full px-3 py-2 backdrop-blur-xl shadow-2xl z-50">
          {Object.entries(themes).map(([key, t]) => (
            <button
              key={key}
              onClick={() => {
                setThemeKey(key);
                setOpen(false);
              }}
              className={`w-7 h-7 rounded-full transition-transform hover:scale-125 ${
                themeKey === key ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''
              }`}
              style={{ backgroundColor: t.hex }}
              title={t.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;