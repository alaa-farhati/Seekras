import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext'; // Importing the ThemeContext
import { ThemeContextType } from '../context/themeContext'; // Importing the ThemeContextType

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};