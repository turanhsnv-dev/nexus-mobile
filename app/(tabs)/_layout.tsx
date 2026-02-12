import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarStyle: { 
        // HÜNDÜRLÜK: 60px (standart) + Aşağıdakı sistem boşluğu
        height: 60 + insets.bottom, 
        
        // PADDING: İkonları aşağıdan və yuxarıdan sıxırıq
        paddingBottom: insets.bottom > 0 ? insets.bottom - 5 : 5, // Androiddə çox boşluq qalmasın
        paddingTop: 5, 
        
        backgroundColor: '#fff',
        borderTopWidth: 0,
        elevation: 0, // Android kölgəsini silir
        shadowOpacity: 0, // iOS kölgəsini silir
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
                color={focused ? "#1F1F1F" : "#9CA3AF"} 
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
                color={focused ? "#1F1F1F" : "#9CA3AF"} 
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
                color={focused ? "#1F1F1F" : "#9CA3AF"} 
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
                color={focused ? "#1F1F1F" : "#9CA3AF"} 
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
    width: 50, // Klikləmə sahəsi
  },
  activeDot: {
    width: 5, // Nöqtəni biraz zərifləşdirdim
    height: 5,
    borderRadius: 3,
    backgroundColor: '#FF3B30', 
    marginTop: 4, // İkondan məsafə (ideal balans)
  }
});