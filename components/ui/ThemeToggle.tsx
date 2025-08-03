'use client';

import { useEffect, useState, createContext, useContext } from 'react';

const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({ theme: 'light', toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const applyThemeTransition = () => {
    const app = document.getElementById('__next'); // main container
    if (!app) return;

    const clone = app.cloneNode(true) as HTMLElement;
    clone.style.position = 'fixed';
    clone.style.inset = '0';
    clone.style.zIndex = '9999';
    clone.style.pointerEvents = 'none';
    clone.classList.add('theme-transition');

    document.body.appendChild(clone);

    setTimeout(() => {
      document.body.removeChild(clone);
    }, 600); // match animation duration
  };

  const toggleTheme = () => {
    applyThemeTransition();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
