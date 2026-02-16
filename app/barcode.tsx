import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');
const BARCODE_WIDTH = height * 0.7; // Derived from original logic
const VERTICAL_TEXT_WIDTH = 400; // Keep fixed for rotation logic

export default function BarcodeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={() => router.back()}
        activeOpacity={0.8}
      >
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
    top: 20,
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
    height: BARCODE_WIDTH, 
  },
  textContainer: {
    width: 40, 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8, 
  },
  verticalText: {
    width: VERTICAL_TEXT_WIDTH, 
    textAlign: 'center', 
    transform: [{ rotate: '90deg' }], 
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    letterSpacing: 3, 
  },
  verticalBarcode: {
    width: width * 0.5, 
    height: '100%', 
  },
});