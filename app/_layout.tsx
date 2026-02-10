import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF' }}>
      
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Ana Səhifə',
          headerShown: false, 
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }} 
      />

      {/* 2. Profil Səhifəsi (profile) */}
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profil',
          headerShown: true, 
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }} 
      />
      
    </Tabs>
  );
}