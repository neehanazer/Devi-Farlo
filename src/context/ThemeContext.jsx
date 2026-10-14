import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  themeMode: 'light',
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(() => {
    try {
      const saved = localStorage.getItem('devifarlo_theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  });

  const isDark = themeMode === 'dark';

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    try {
      localStorage.setItem('devifarlo_theme', themeMode);
    } catch (e) {
      // fallback
    }
    document.documentElement.setAttribute('data-theme', themeMode);
    document.body.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
