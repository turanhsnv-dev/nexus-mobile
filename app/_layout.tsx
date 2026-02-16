import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

// Stack naviqasiyasını ayrı komponentə çıxarırıq ki, 
// 'useTheme' hook-unu burada işlədə bilək
function RootLayoutNav() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Stack 
        screenOptions={{ 
          headerShown: false,
          // Səhifə keçidləri zamanı arxa fon rəngi ağarmasın deyə:
          contentStyle: { backgroundColor: isDark ? '#000' : '#fff' },
          animation: 'slide_from_right' // Səhifə keçid animasiyası
        }}
      >
        {/* Əsas Səhifələr (Tabs) */}
        <Stack.Screen name="(tabs)" />

        {/* Giriş sistemi (Login, Register) */}
        <Stack.Screen name="(auth)" />

        {/* Welcome Screen */}
        <Stack.Screen name="index" />

        {/* Barkod - Modal kimi açılsın */}
        <Stack.Screen 
          name="barcode" 
          options={{ 
            presentation: 'modal',
            headerShown: false      
          }} 
        />
      </Stack>

      {/* Status Bar (Yuxarıdakı saat/batareya) rəngi avtomatik dəyişsin */}
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </>
  );
}

export default function RootLayout() {
  return (
    // Bütün tətbiqi ThemeProvider ilə əhatə edirik
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}
