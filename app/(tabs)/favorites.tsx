import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Siyahı Məlumatları (Data)
const DATA = [
  {
    id: '1',
    name: 'Baku Medical Plaza',
    discount: '5-10%',
    image: require('../../assets/bmp.png'), // Assets-dəki şəklin adı
  },
  {
    id: '2',
    name: 'Hill Restaurant',
    discount: '5-10%',
    image: require('../../assets/hill.png'),
  },
  {
    id: '3',
    name: 'Adalat',
    discount: '5-10%',
    image: require('../../assets/adalat.png'),
  },
  {
    id: '4',
    name: 'VetArt',
    discount: '5-10%',
    image: require('../../assets/vetart.png'),
  },
];

export default function FavoritesScreen() {

  // Hər bir kartın necə görünəcəyi
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      
      {/* Logo (Ortada) */}
      <Image 
        source={item.image} 
        style={styles.logo} 
        resizeMode="contain" 
      />

      {/* Qırmızı Etiket (Sağ yuxarı künc) */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.discount}</Text>
      </View>

    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Başlıq */}
      <Text style={styles.headerTitle}>Endirimlər</Text>

      {/* Siyahı */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Arxa fon azca boz olsun (kartlar ağdır deyə)
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  
  // --- KART DİZAYNI ---
  card: {
    backgroundColor: '#fff',
    height: 125, // Sənin istədiyin hündürlük
    width: '100%', // Eni ekrana görə avtomatik olsun (təxminən 355px düşəcək)
    borderRadius: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // Kölgə (Shadow)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3, // Android üçün
    position: 'relative', // Etiketi küncə qoymaq üçün vacibdir
  },
  
  logo: {
    width: 150, // Logonun eni
    height: 60, // Logonun hündürlüyü
  },

  // --- QIRMIZI ETİKET (5-10%) ---
  badge: {
    position: 'absolute', // Kartın içində sərbəst hərəkət edir
    top: 16,
    right: 16,
    backgroundColor: '#D32F2F', // Qırmızı rəng
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});