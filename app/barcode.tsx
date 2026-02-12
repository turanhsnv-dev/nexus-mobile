import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function BarcodeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Bağlamaq üçün "X" düyməsi */}
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Ionicons name="close" size={22} color="#111827" />
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Şaquli Barkod Şəkli */}
        <Image 
          source={require('../assets/barkod-vertical.png')} 
          style={styles.verticalBarcode} 
          resizeMode="contain" 
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10, // Şəklin üstündə qalması üçün
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalBarcode: {
    width: '80%', // Ekranın 80%-ni tutsun
    height: '80%',
  },
});