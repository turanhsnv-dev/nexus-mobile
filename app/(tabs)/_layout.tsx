import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarStyle: { 
        height: 70, 
        backgroundColor: '#fff',
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0
      } 
    }}>
      
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

      <Tabs.Screen 
        name="history" 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons 
                name={focused ? "time" : "time-outline"} 
                size={26} 
                color={focused ? "#1F1F1F" : "#9CA3AF"} 
              />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }} 
      />

      <Tabs.Screen 
        name="favorites" 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons 
                name={focused ? "heart" : "heart-outline"} 
                size={26} 
                color={focused ? "#1F1F1F" : "#9CA3AF"} 
              />
              {focused && <View style={styles.activeDot} />}
            </View>
          ),
        }} 
      />

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
    top: 10, // İkonları mərkəzləşdirmək üçün biraz aşağı salırıq
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF3B30', // Sənin istədiyin qırmızı rəng
    marginTop: 4, // İkonla nöqtə arasındakı məsafə
  }
});