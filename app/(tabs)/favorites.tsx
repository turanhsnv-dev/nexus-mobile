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
import { useTheme } from '../../context/ThemeContext'; // Hook

type FavoriteItem = {
  id: string;
  name: string;
  discount: string;
  category: string; 
  image: ImageSourcePropType;
};

const DATA: FavoriteItem[] = [
  { id: '1', name: 'Baku Medical Plaza', discount: '10% endirim', category: 'Səhiyyə', image: require('../../assets/bmp.png') },
  { id: '2', name: 'Hill Restaurant', discount: '15% endirim', category: 'Restoran', image: require('../../assets/hill.png') },
  { id: '3', name: 'Adalat', discount: '5% bonus', category: 'Geyim', image: require('../../assets/adalat.png') },
  { id: '4', name: 'VetArt', discount: '5-10% endirim', category: 'Baytarlıq', image: require('../../assets/vetart.png') },
];

export default function FavoritesScreen() {
  const { colors } = useTheme(); // Rəngləri götürürük

  const renderItem = ({ item }: { item: FavoriteItem }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: colors.card }]} 
      activeOpacity={0.7}
    >
      
      {/* Logo Hissəsi */}
      <View style={[styles.logoWrapper, { backgroundColor: colors.inputBg }]}>
        <Image source={item.image} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Məlumat Hissəsi */}
      <View style={styles.infoContainer}>
        <Text style={[styles.category, { color: colors.textSecondary }]}>{item.category}</Text>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>

      {/* Ox İşarəsi */}
      <View style={styles.iconContainer}>
         <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      </View>

    </TouchableOpacity>
  );

  const ListHeader = () => (
    <>
      <Text style={[styles.pageTitle, { color: colors.text }]}>Seçilmişlər</Text>
      <View style={[styles.searchWrap, { backgroundColor: colors.card }]}>
        <View style={[styles.searchBox, { backgroundColor: colors.inputBg }]}>
          <Ionicons name="search" size={20} color={colors.textSecondary} style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Tərəfdaş axtar..."
            placeholderTextColor={colors.textSecondary}
            style={[styles.searchInput, { color: colors.text }]}
          />
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundSecondary }]} edges={['top']}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageTitle: { fontSize: 28, fontWeight: 'bold', marginTop: 10, marginBottom: 20 },
  searchWrap: { marginBottom: 24, borderRadius: 16, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  searchBox: { flexDirection: 'row', alignItems: 'center', height: 48, borderRadius: 12, paddingHorizontal: 16 },
  searchInput: { flex: 1, height: '100%', fontSize: 15 },
  listContent: { paddingHorizontal: 20, paddingBottom: 30 },
  card: { flexDirection: 'row', alignItems: 'center', borderRadius: 16, padding: 12, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  logoWrapper: { width: 60, height: 60, borderRadius: 12, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: 16 },
  logo: { width: '100%', height: '100%' },
  infoContainer: { flex: 1 },
  category: { fontSize: 12, marginBottom: 2, fontWeight: '500' },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  discount: { fontSize: 14, fontWeight: '700', color: '#C91C1C' },
  iconContainer: { paddingLeft: 10 },
});