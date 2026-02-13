import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItem,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FavoriteItem = {
  id: string;
  name: string;
  discount: string;
  image: ImageSourcePropType;
};

const DATA: FavoriteItem[] = [
  {
    id: '1',
    name: 'Baku Medical Plaza',
    discount: '5-10%',
    image: require('../../assets/bmp.png'), 
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
  const renderItem: ListRenderItem<FavoriteItem> = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      
      <Image 
        source={item.image} 
        style={styles.logo} 
        resizeMode="contain" 
      />

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.discount}</Text>
      </View>

    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Endirimlər</Text>

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
    backgroundColor: '#FAFAFA', 
    paddingTop: 15,
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
  
  card: {
    backgroundColor: '#fff',
    height: 125,
    width: '100%', 
    borderRadius: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3, 
    position: 'relative', 
  },
  
  logo: {
    width: 150, 
    height: 60, 
  },

  badge: {
    position: 'absolute', 
    top: 16,
    right: 16,
    backgroundColor: '#D32F2F', 
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