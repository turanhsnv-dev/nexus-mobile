import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TravelCard } from '../components/TravelCard';

// Real Şəkillərlə Data (Unsplash-dan)
const PLACES = [
  { id: '1', title: 'Qəbələ Dağ Oteli', location: 'Qəbələ, Azərbaycan', price: '120₼', image: 'https://images.unsplash.com/photo-1571896349842-68c47eb17998?w=800' },
  { id: '2', title: 'Dəniz Kənarı Villa', location: 'Mərdəkan, Bakı', price: '300₼', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800' },
  { id: '3', title: 'Meşə Evi', location: 'İsmayıllı', price: '80₼', image: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?w=800' },
  { id: '4', title: 'Sunset Resort', location: 'Lənkəran', price: '150₼', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' },
];

const CATEGORIES = ['Hamısı', 'Dağlar', 'Dəniz', 'Meşə', 'Kempinq', 'Şəhər'];

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      
      {/* 1. Header (Başlıq + Avatar) */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Salam, Turan 👋</Text>
          <Text style={styles.subGreeting}>Hara getmək istəyirsən?</Text>
        </View>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' }} 
          style={styles.avatar} 
        />
      </View>

      {/* 2. Axtarış Xanası (TextInput) */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput 
          placeholder="Otelləri axtar..." 
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      {/* 3. Kateqoriyalar (Horizontal Scroll) */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {CATEGORIES.map((cat, index) => (
            <View key={index} style={[styles.categoryChip, index === 0 && styles.activeChip]}>
              <Text style={[styles.categoryText, index === 0 && styles.activeText]}>{cat}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 4. Əsas Siyahı (Vertical List) */}
      <FlatList
        data={PLACES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TravelCard 
            title={item.title} 
            location={item.location} 
            price={item.price} 
            imageUrl={item.image} 
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  
  // Header Stilləri
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subGreeting: { fontSize: 16, color: '#888' },
  avatar: { width: 50, height: 50, borderRadius: 25 }, // Yumru şəkil

  // Axtarış Stilləri
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },

  // Kateqoriya Stilləri
  categoriesContainer: { paddingLeft: 20, marginBottom: 20 },
  categoryChip: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  activeChip: { backgroundColor: '#333', borderColor: '#333' }, // Seçilən (qara rəng)
  categoryText: { color: '#666', fontWeight: '600' },
  activeText: { color: '#fff' },

  listContainer: { paddingHorizontal: 20, paddingBottom: 20 }
});