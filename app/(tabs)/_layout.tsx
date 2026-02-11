import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarActiveTintColor: '#C91C1C', 
      tabBarInactiveTintColor: '#999', 
      tabBarShowLabel: false, 
      tabBarStyle: { height: 60 } 
    }}>
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="history" 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="clock-o" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="favorites" 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="heart-o" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />,
        }} 
      />
    </Tabs>
  );
}