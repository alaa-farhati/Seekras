import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '../constants/themes';
import { Theme } from '../types/theme';
// Define the theme modes
type ThemeMode = 'light' | 'dark';

// Define the structure of the theme object


// Define the context value structure
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Define the provider's props structure
interface ThemeProviderProps {
  children: ReactNode; // Allow React components to be passed as children
}

// Declare and export ThemeContext
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemTheme = Appearance.getColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>(systemTheme as ThemeMode || 'light');
  const theme = themes[themeMode];

  const toggleTheme = async () => {
    const newTheme: ThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);

    try {
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setThemeMode(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };

    loadTheme();
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeMode(colorScheme as ThemeMode);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};