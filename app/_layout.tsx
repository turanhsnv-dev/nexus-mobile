import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        
        {/* Əsas Səhifələr (Menyu, Home, Profile və s.) */}
        <Stack.Screen name="(tabs)" />

        {/* Giriş sistemi (Login, Register) */}
        <Stack.Screen name="(auth)" />

        {/* Welcome Screen (index.tsx) */}
        <Stack.Screen name="index" />

        {/* 🔥 BURA DİQQƏT: Barkod səhifəsi "Modal" kimi açılsın */}
        <Stack.Screen 
          name="barcode" 
          options={{ 
            presentation: 'modal',  // Bu kod səhifəni aşağıdan yuxarı sürüşdürür
            headerShown: false      // Başlığı gizlədir
          }} 
        />

      </Stack>

      <StatusBar style="dark" />
    </>
  );
}