import { createContext, useContext, useState, useEffect } from 'react';

export const themes = {
  classic: { name: 'Clásico', hex: '#4cd137' },
  leo: { name: 'Leonardo', hex: '#3498db' },
  raph: { name: 'Raphael', hex: '#e74c3c' },
  don: { name: 'Donatello', hex: '#9b59b6' },
  mikey: { name: 'Michelangelo', hex: '#f39c12' },
};

function hexToRgbString(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState('classic');

  useEffect(() => {
    const hex = themes[themeKey].hex;
    document.documentElement.style.setProperty('--accent', hex);
    document.documentElement.style.setProperty('--accent-rgb', hexToRgbString(hex));
  }, [themeKey]);

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}