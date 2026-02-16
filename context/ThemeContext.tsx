import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colors: typeof Colors.light;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  colors: Colors.light,
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(() => (systemScheme === 'dark' ? 'dark' : 'light'));
  const [userHasSet, setUserHasSet] = useState(false);

  useEffect(() => {
    if (!userHasSet && systemScheme) {
      setTheme(systemScheme === 'dark' ? 'dark' : 'light');
    }
  }, [systemScheme, userHasSet]);

  const toggleTheme = useCallback(() => {
    setUserHasSet(true);
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({
    theme,
    colors: Colors[theme],
    toggleTheme,
    isDark: theme === 'dark',
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);