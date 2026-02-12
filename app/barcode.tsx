import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function BarcodeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Ionicons name="close" size={24} color="#111827" />
      </TouchableOpacity>

      <View style={styles.content}>
        
        <View style={styles.barcodeWrapper}>
            
            <View style={styles.textContainer}>
                <Text style={styles.verticalText}>3 005 038 294 738</Text>
            </View>

            <Image 
              source={require('../assets/barkod-vertical.png')} 
              style={styles.verticalBarcode} 
              resizeMode="contain" 
            />

        </View>

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
    zIndex: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6', 
    borderRadius: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeWrapper: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.7, 
  },
  
  textContainer: {
    width: 40, 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4, 
  },
  
  
  verticalText: {
    width: 400, 
    textAlign: 'center', 
    transform: [{ rotate: '90deg' }], 
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
    letterSpacing: 2, 
  },
  verticalBarcode: {
    width: 200, 
    height: '100%', 
  },
});