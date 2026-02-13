import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext'; // Hook

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
  const { colors, isDark } = useTheme();

  const renderItem = ({ item }: { item: Transaction }) => {
    let iconName: keyof typeof Ionicons.glyphMap = 'cart';
    let iconColor = '#6B7280';
    let iconBg = colors.inputBg; // Default background
    let amountColor = colors.text;

    // Dark mode üçün rəngləri yumşaldırıq (opacity ilə)
    switch (item.type) {
      case 'earn':
        iconName = 'arrow-down';
        iconColor = '#059669';
        // Dark: Tünd Yaşıl (transparent), Light: Açıq Yaşıl
        iconBg = isDark ? 'rgba(5, 150, 105, 0.15)' : '#ECFDF5'; 
        amountColor = '#059669';
        break;
      case 'spend':
        iconName = 'arrow-up';
        iconColor = '#DC2626';
        iconBg = isDark ? 'rgba(220, 38, 38, 0.15)' : '#FEF2F2';
        amountColor = '#DC2626';
        break;
      case 'discount':
        iconName = 'pricetag';
        iconColor = '#4F46E5';
        iconBg = isDark ? 'rgba(79, 70, 229, 0.15)' : '#EEF2FF';
        amountColor = '#4F46E5';
        break;
    }

    return (
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
          <Ionicons name={iconName} size={20} color={iconColor} />
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{item.subtitle} • {item.date}</Text>
        </View>

        <Text style={[styles.amount, { color: amountColor }]}>{item.amount}</Text>
      </View>
    );
  };

  const ListHeader = () => (
    <>
      <Text style={[styles.pageTitle, { color: colors.text }]}>Tarixçə</Text>
      <View style={[styles.statsContainer, { backgroundColor: colors.card }]}>
        <View style={styles.statBox}>
          <View style={[styles.statIconDown, { backgroundColor: isDark ? 'rgba(5, 150, 105, 0.15)' : '#ECFDF5' }]}>
            <Ionicons name="arrow-down" size={16} color="#059669" />
          </View>
          <View>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Qazanc (Ay)</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>+12.50 ₼</Text>
          </View>
        </View>
        <View style={[styles.verticalLine, { backgroundColor: colors.border }]} />
        <View style={styles.statBox}>
          <View style={[styles.statIconUp, { backgroundColor: isDark ? 'rgba(220, 38, 38, 0.15)' : '#FEF2F2' }]}>
            <Ionicons name="arrow-up" size={16} color="#DC2626" />
          </View>
          <View>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Xərc (Ay)</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>-60.00 ₼</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>Son əməliyyatlar</Text>
    </>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundSecondary }]} edges={['top']}>
      <FlatList
        data={TRANSACTIONS}
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
  statsContainer: { flexDirection: 'row', marginBottom: 24, borderRadius: 16, padding: 16, alignItems: 'center', justifyContent: 'space-between', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  statBox: { flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' },
  verticalLine: { width: 1, height: 40 },
  statIconDown: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  statIconUp: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  statLabel: { fontSize: 12, marginBottom: 2 },
  statValue: { fontSize: 16, fontWeight: 'bold' },
  listContent: { paddingHorizontal: 20, paddingBottom: 30 },
  sectionHeader: { fontSize: 14, fontWeight: '600', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  card: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  iconBox: { width: 44, height: 44, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  subtitle: { fontSize: 12 },
  amount: { fontSize: 15, fontWeight: 'bold' },
});