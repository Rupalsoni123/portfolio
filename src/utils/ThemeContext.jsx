import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user has a theme preference in localStorage or prefers dark mode
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    return 'light'; // Default theme
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Update theme in localStorage and document when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous theme class and add new one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Save theme to localStorage
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
