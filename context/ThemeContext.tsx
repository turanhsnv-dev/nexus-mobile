import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native'; // Telefonun öz rejimini oxuyur
import { Colors } from '../constants/colors'; // Bayaq yaratdığın fayl

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colors: typeof Colors.light;
  toggleTheme: () => void;
  isDark: boolean;
}

// Boş bir context yaradırıq
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

  const toggleTheme = () => {
    setUserHasSet(true);
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';
  const colors = Colors[theme]; // Hazırki rəngləri seçirik

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Səhifələrdə istifadə etmək üçün qısa yol (Hook)
export const useTheme = () => useContext(ThemeContext);