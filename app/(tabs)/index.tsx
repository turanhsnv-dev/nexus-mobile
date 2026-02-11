import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* --- BAŞLIQ (Header) --- */}
        <View style={styles.header}>
          <View>
            {/* Böyük rəqəm */}
            <Text style={styles.bonusNumber}>24</Text>
            <Text style={styles.bonusLabel}>bonus</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Ləman Mönsünlü</Text>
            <Text style={styles.userRole}>Müştəri</Text>
          </View>
          {/* Sağ tərəfdə balaca bir ikon və ya boşluq ola bilər, şəkildə görünmür */}
          <View style={{ width: 40 }} /> 
        </View>

        {/* --- KART (Loyalty Card) --- */}
        <View style={styles.card}>
          {/* Kartın Boz Hissəsi */}
          <View style={styles.cardHeader}>
             <Image 
                source={require('../../assets/logo.png')} 
                style={styles.cardLogo} 
                resizeMode="contain" 
             />
          </View>
          
          {/* Kartın Ağ Hissəsi (Barkod) */}
          <View style={styles.cardBody}>
            {/* Barkod əvəzi (Hələlik şəkil yoxdursa bunu istifadə et) */}
            <View style={styles.barcodePlaceholder}>
                <View style={[styles.bar, { width: 4 }]} />
                <View style={[styles.bar, { width: 8 }]} />
                <View style={[styles.bar, { width: 2 }]} />
                <View style={[styles.bar, { width: 6 }]} />
                <View style={[styles.bar, { width: 10 }]} />
                <View style={[styles.bar, { width: 3 }]} />
                <View style={[styles.bar, { width: 7 }]} />
                <View style={[styles.bar, { width: 5 }]} />
                <View style={[styles.bar, { width: 9 }]} />
                <View style={[styles.bar, { width: 4 }]} />
                <View style={[styles.bar, { width: 6 }]} />
            </View>
            
            <Text style={styles.cardNumber}>3 005 038 294 738</Text>
          </View>
        </View>

        {/* --- MENYU SİYAHISI --- */}
        <View style={styles.menuList}>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Endirimlər</Text>
            </TouchableOpacity>
            
            <View style={styles.separator} />
            
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Son istifadələr</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
        </View>

        {/* --- TƏRƏFDAŞLAR (Partners) --- */}
        <Text style={styles.sectionTitle}>Tərəfdaşlar</Text>
        <View style={styles.partnersRow}>
            {/* Şəkillərin yoxdursa, sadə dairələr qoyuram */}
            <View style={styles.partnerLogo}><Text style={{fontSize: 10}}>Hill</Text></View>
            <View style={styles.partnerLogo}><Text style={{fontSize: 10}}>BMP</Text></View>
            <View style={styles.partnerLogo}><Text style={{fontSize: 10}}>Adalat</Text></View>
            <View style={styles.partnerLogo}><Text style={{fontSize: 10}}>VetArt</Text></View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 20 },

  // Header
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  bonusNumber: { fontSize: 48, fontWeight: 'bold', color: '#000' },
  bonusLabel: { fontSize: 14, color: '#999', marginTop: -5 },
  userInfo: { flex: 1, marginLeft: 20 },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  userRole: { fontSize: 14, color: '#999' },

  // Card Design
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 30,
    // Shadow (Kölgə)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Android üçün kölgə
    overflow: 'hidden', // İçindəkilər kənara çıxmasın
    borderWidth: 1,
    borderColor: '#f0f0f0'
  },
  cardHeader: {
    backgroundColor: '#E5E7EB', // Boz hissə
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLogo: { width: 150, height: 50 },
  cardBody: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  cardNumber: { fontSize: 16, fontWeight: '600', color: '#333', marginTop: 10, letterSpacing: 2 },
  
  // Fake Barcode Styling
  barcodePlaceholder: { flexDirection: 'row', height: 50, gap: 4, alignItems: 'center' },
  bar: { backgroundColor: '#000', height: '100%' },

  // Menu List
  menuList: { marginBottom: 30 },
  menuItem: { paddingVertical: 16 },
  menuText: { fontSize: 16, color: '#000' },
  separator: { height: 1, backgroundColor: '#eee' },

  // Partners
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  partnersRow: { flexDirection: 'row', justifyContent: 'space-between' },
  partnerLogo: { 
    width: 70, height: 40, 
    backgroundColor: '#f9f9f9', 
    justifyContent: 'center', alignItems: 'center', 
    borderRadius: 8 
  }
});