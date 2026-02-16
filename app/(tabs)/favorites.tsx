import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ImageSourcePropType,
  ListRenderItem
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { Colors } from '../../constants/colors';

// --- Types ---
type FavoriteItemType = {
  id: string;
  name: string;
  discount: string;
  category: string; 
  image: ImageSourcePropType;
};

interface FavoriteCardProps {
  item: FavoriteItemType;
  colors: typeof Colors.light;
}

// --- Constants ---
const DATA: FavoriteItemType[] = [
  { id: '1', name: 'Baku Medical Plaza', discount: '10% endirim', category: 'Səhiyyə', image: require('../../assets/bmp.png') },
  { id: '2', name: 'Hill Restaurant', discount: '15% endirim', category: 'Restoran', image: require('../../assets/hill.png') },
  { id: '3', name: 'Adalat', discount: '5% bonus', category: 'Geyim', image: require('../../assets/adalat.png') },
  { id: '4', name: 'VetArt', discount: '5-10% endirim', category: 'Baytarlıq', image: require('../../assets/vetart.png') },
];

// --- Components ---
const FavoriteCard = memo(({ item, colors }: FavoriteCardProps) => (
  <TouchableOpacity 
    style={[styles.card, { backgroundColor: colors.card }]} 
    activeOpacity={0.7}
  >
    <View style={[styles.logoWrapper, { backgroundColor: colors.inputBg }]}>
      <Image source={item.image} style={styles.logo} resizeMode="contain" />
    </View>

    <View style={styles.infoContainer}>
      <Text style={[styles.category, { color: colors.textSecondary }]}>{item.category}</Text>
      <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
    </View>

    <View style={styles.iconContainer}>
       <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
    </View>
  </TouchableOpacity>
));

const HeaderComponent = memo(({ colors }: { colors: typeof Colors.light }) => (
  <>
    <Text style={[styles.pageTitle, { color: colors.text }]}>Seçilmişlər</Text>
    <View style={[styles.searchWrap, { backgroundColor: colors.card }]}>
      <View style={[styles.searchBox, { backgroundColor: colors.inputBg }]}>
        <Ionicons name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          placeholder="Tərəfdaş axtar..."
          placeholderTextColor={colors.textSecondary}
          style={[styles.searchInput, { color: colors.text }]}
        />
      </View>
    </View>
  </>
));

// --- Main Screen ---
export default function FavoritesScreen() {
  const { colors } = useTheme();

  const renderItem: ListRenderItem<FavoriteItemType> = useCallback(({ item }) => (
    <FavoriteCard item={item} colors={colors} />
  ), [colors]);

  const keyExtractor = useCallback((item: FavoriteItemType) => item.id, []);

  const ListHeader = useCallback(() => (
    <HeaderComponent colors={colors} />
  ), [colors]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundSecondary }]} edges={['top']}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: { flex: 1 },
  pageTitle: { fontSize: 28, fontWeight: 'bold', marginTop: 10, marginBottom: 20 },
  searchWrap: { marginBottom: 24, borderRadius: 16, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  searchBox: { flexDirection: 'row', alignItems: 'center', height: 48, borderRadius: 12, paddingHorizontal: 16 },
  searchIcon: { marginRight: 10 },
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