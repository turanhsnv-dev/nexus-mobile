import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  ViewStyle 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// --- TİPLƏR VƏ DATA ---
type TransactionType = 'earn' | 'spend' | 'discount';

interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  type: TransactionType;
}

const TRANSACTIONS: Transaction[] = [
  { id: '1', title: 'Bravo Market', subtitle: 'Alış-veriş bonusu', amount: '+ 2.50 ₼', date: 'Bu gün, 14:30', type: 'earn' },
  { id: '2', title: 'Stilist Nigar', subtitle: 'Xidmət ödənişi', amount: '- 15.00 ₼', date: 'Dünən, 18:00', type: 'spend' },
  { id: '3', title: 'Baku Medical Plaza', subtitle: 'Endirim tətbiq edildi', amount: '10%', date: '12 Fev, 10:00', type: 'discount' },
  { id: '4', title: 'Hill Restaurant', subtitle: 'Hesab ödənişi', amount: '- 45.00 ₼', date: '10 Fev, 21:15', type: 'spend' },
  { id: '5', title: 'Azera Bonus', subtitle: 'Hədiyyə bonus', amount: '+ 10.00 ₼', date: '01 Fev, 09:00', type: 'earn' },
  { id: '6', title: 'VetArt', subtitle: 'Müayinə', amount: '5%', date: '28 Yan, 15:30', type: 'discount' },
];

export default function HistoryScreen() {

  // --- RENDER ITEM ---
  const renderItem = ({ item }: { item: Transaction }) => {
    
    // Növünə görə rəng və ikon seçimi
    let iconName: keyof typeof Ionicons.glyphMap = 'cart';
    let iconColor = '#6B7280';
    let iconBg = '#F3F4F6';
    let amountColor = '#111827';

    switch (item.type) {
      case 'earn':
        iconName = 'arrow-down'; // Daxil olan
        iconColor = '#059669';   // Yaşıl
        iconBg = '#ECFDF5';
        amountColor = '#059669';
        break;
      case 'spend':
        iconName = 'arrow-up';   // Çıxan
        iconColor = '#DC2626';   // Qırmızı
        iconBg = '#FEF2F2';
        amountColor = '#DC2626';
        break;
      case 'discount':
        iconName = 'pricetag';   // Endirim
        iconColor = '#4F46E5';   // Bənövşəyi/Göy
        iconBg = '#EEF2FF';
        amountColor = '#4F46E5';
        break;
    }

    return (
      <View style={styles.card}>
        {/* İkon Hissəsi */}
        <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
          <Ionicons name={iconName} size={20} color={iconColor} />
        </View>

        {/* Mətn Hissəsi */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle} • {item.date}</Text>
        </View>

        {/* Məbləğ Hissəsi */}
        <Text style={[styles.amount, { color: amountColor }]}>{item.amount}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* BAŞLIQ */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tarixçə</Text>
      </View>

      {/* STATİSTİKA KARTI (Ümumi İcmal) */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <View style={styles.statIconDown}>
            <Ionicons name="arrow-down" size={16} color="#059669" />
          </View>
          <View>
            <Text style={styles.statLabel}>Qazanc (Ay)</Text>
            <Text style={styles.statValue}>+12.50 ₼</Text>
          </View>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.statBox}>
          <View style={styles.statIconUp}>
            <Ionicons name="arrow-up" size={16} color="#DC2626" />
          </View>
          <View>
            <Text style={styles.statLabel}>Xərc (Ay)</Text>
            <Text style={styles.statValue}>-60.00 ₼</Text>
          </View>
        </View>
      </View>

      {/* SİYAHI */}
      <FlatList
        data={TRANSACTIONS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.sectionHeader}>Son əməliyyatlar</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#111827' },

  // --- STATİSTİKA KARTI ---
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    // Kölgə
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  statBox: { flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' },
  verticalLine: { width: 1, height: 40, backgroundColor: '#E5E7EB' },
  
  statIconDown: { 
    width: 32, height: 32, borderRadius: 16, backgroundColor: '#ECFDF5', 
    justifyContent: 'center', alignItems: 'center', marginRight: 12 
  },
  statIconUp: { 
    width: 32, height: 32, borderRadius: 16, backgroundColor: '#FEF2F2', 
    justifyContent: 'center', alignItems: 'center', marginRight: 12 
  },
  statLabel: { fontSize: 12, color: '#6B7280', marginBottom: 2 },
  statValue: { fontSize: 16, fontWeight: 'bold', color: '#111827' },

  // --- LIST ---
  listContent: { paddingHorizontal: 20, paddingBottom: 20 },
  sectionHeader: { fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 12, marginTop: 4 },

  // --- TRANSACTION CARD ---
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    // Kölgə
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 4 },
  subtitle: { fontSize: 12, color: '#9CA3AF' },
  amount: { fontSize: 15, fontWeight: 'bold' },
});