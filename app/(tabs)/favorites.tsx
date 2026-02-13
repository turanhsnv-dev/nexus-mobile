import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

type FavoriteItem = {
  id: string;
  name: string;
  discount: string;
  category: string; 
  image: ImageSourcePropType;
};

// Məlumatlar
const DATA: FavoriteItem[] = [
  { 
    id: '1', 
    name: 'Baku Medical Plaza', 
    discount: '10% endirim', 
    category: 'Səhiyyə',
    image: require('../../assets/bmp.png'), 
  },
  { 
    id: '2', 
    name: 'Hill Restaurant', 
    discount: '15% endirim', 
    category: 'Restoran',
    image: require('../../assets/hill.png'), 
  },
  { 
    id: '3', 
    name: 'Adalat', 
    discount: '5% bonus', 
    category: 'Geyim',
    image: require('../../assets/adalat.png'), 
  },
  { 
    id: '4', 
    name: 'VetArt', 
    discount: '5-10% endirim', 
    category: 'Baytarlıq',
    image: require('../../assets/vetart.png'), 
  },
];

export default function FavoritesScreen() {

  const renderItem = ({ item }: { item: FavoriteItem }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      
      {/* 1. Logo Hissəsi (Qutu içində) */}
      <View style={styles.logoWrapper}>
        <Image 
          source={item.image} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </View>

      {/* 2. Məlumat Hissəsi */}
      <View style={styles.infoContainer}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>

      {/* 3. Ox İşarəsi */}
      <View style={styles.iconContainer}>
         <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </View>

    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Başlıq */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Seçilmişlər</Text>
      </View>

      {/* Axtarış Paneli (Search Bar) */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#9CA3AF" style={{ marginRight: 10 }} />
          <TextInput 
            placeholder="Tərəfdaş axtar..." 
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
      </View>

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
  container: { flex: 1, backgroundColor: '#F8F9FA' },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#111827' },

  // Axtarış
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  searchInput: { flex: 1, height: '100%', fontSize: 15, color: '#111827' },

  listContent: { padding: 20 },

  // KART DİZAYNI
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    
    // Kölgə
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },

  logoWrapper: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginRight: 16,
  },
  logo: { width: '100%', height: '100%' },

  infoContainer: { flex: 1 },
  category: { fontSize: 12, color: '#9CA3AF', marginBottom: 2, fontWeight: '500' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginBottom: 4 },
  discount: { fontSize: 14, fontWeight: '700', color: '#C91C1C' }, // Qırmızı rəng endirimi vurğulayır

  iconContainer: {
    paddingLeft: 10,
  },
});