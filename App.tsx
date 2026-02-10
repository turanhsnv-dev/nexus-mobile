import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { CompanyCard } from './components/CompanyCard';

const DATA = [
  { id: '1', name: 'Bravo Market', sector: 'Market', discount: '5%' },
  { id: '2', name: 'Papa Johns', sector: 'Restoran', discount: '15%' },
  { id: '3', name: 'CinemaPlus', sector: 'Əyləncə', discount: '20%' },
  { id: '4', name: 'Zara', sector: 'Geyim', discount: '10%' },
  { id: '5', name: 'Bolmart', sector: 'Market', discount: '3%' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.headerTitle}>Nexus Mobile 🚀</Text>
        <Text style={styles.subTitle}>Sizə özəl endirimlər</Text>

        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CompanyCard 
              name={item.name} 
              sector={item.sector} 
              discount={item.discount} 
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
        
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    marginTop: 5,
  },
  listContainer: {
    paddingBottom: 20,
  }
});