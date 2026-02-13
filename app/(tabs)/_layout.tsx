import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext'; // Hook əlavə edildi

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useTheme(); // Rəngləri götürürük

  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarStyle: {
        height: 56 + insets.bottom,
        paddingTop: 8,
        paddingBottom: Math.max(insets.bottom, 8),
        backgroundColor: colors.card,
        borderTopColor: colors.border,
        borderTopWidth: 1,
        elevation: 0,
        shadowOpacity: 0,
      } 
    }}>
      
      {/* 1. HOME */}
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons 
                name={focused ? "home" : "home-outline"} 
                size={24} 
                // --- DƏYİŞİKLİK 2: İkon rəngləri ---
                color={focused ? colors.text : colors.textSecondary} 
              />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }} 
      />

      {/* 2. HISTORY */}
      <Tabs.Screen 
        name="history" 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons 
                name={focused ? "time" : "time-outline"} 
                size={25} 
                color={focused ? colors.text : colors.textSecondary} 
              />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }} 
      />

      {/* 3. FAVORITES */}
      <Tabs.Screen 
        name="favorites" 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons 
                name={focused ? "heart" : "heart-outline"} 
                size={25} 
                color={focused ? colors.text : colors.textSecondary} 
              />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }} 
      />

      {/* 4. PROFILE */}
      <Tabs.Screen 
        name="profile" 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons 
                name={focused ? "person" : "person-outline"} 
                size={24} 
                color={focused ? colors.text : colors.textSecondary} 
              />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }} 
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', 
    width: 50, 
  },
  activeDot: {
    width: 5, 
    height: 5,
    borderRadius: 3,
    backgroundColor: '#C91C1C', // Aktiv nöqtə hər iki rejimdə qırmızı qalsın
    marginTop: 4, 
  }
});