import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* --- BAŞLIQ --- */}
        <View style={styles.header}>
          <View>
            <Text style={styles.bonusNumber}>24</Text>
            <Text style={styles.bonusLabel}>bonus</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Ləman Mönsünlü</Text>
            <Text style={styles.userRole}>Müştəri</Text>
          </View>
          <View style={{ width: 40 }} /> 
        </View>

        <View style={styles.card}>
          <Image 
            source={require('../../assets/logo.png')} 
            style={styles.cardLogo} 
            resizeMode="contain" 
          />
          <View style={styles.whiteBox}>
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
                <View style={[styles.bar, { width: 3 }]} />
                <View style={[styles.bar, { width: 8 }]} />
                <View style={[styles.bar, { width: 5 }]} />
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

        {/* --- TƏRƏFDAŞLAR --- */}
        <Text style={styles.sectionTitle}>Tərəfdaşlar</Text>
        <View style={styles.partnersRow}>
            <Image 
              source={require('../../assets/hill.png')} 
              style={styles.partnerLogo} 
              resizeMode="contain" 
            />
            <Image 
              source={require('../../assets/bmp.png')} 
              style={styles.partnerLogo} 
              resizeMode="contain" 
            />
            <Image 
              source={require('../../assets/adalat.png')} 
              style={styles.partnerLogo} 
              resizeMode="contain" 
            />
            <Image 
              source={require('../../assets/vetart.png')} 
              style={styles.partnerLogo} 
              resizeMode="contain" 
            />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 20 },

  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  bonusNumber: { fontSize: 48, fontWeight: 'bold', color: '#000' },
  bonusLabel: { fontSize: 14, color: '#999', marginTop: -5 },
  userInfo: { flex: 1, marginLeft: 20 },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  userRole: { fontSize: 14, color: '#999' },

  card: {
    backgroundColor: '#E5E7EB', 
    borderRadius: 16,
    padding: 16, 
    marginBottom: 30,
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardLogo: { 
    width: 140, 
    height: 40, 
    marginBottom: 16 
  },
  
  whiteBox: {
    backgroundColor: '#fff', 
    width: '100%', 
    paddingVertical: 20, 
    paddingHorizontal: 10,
    borderRadius: 12, 
    alignItems: 'center', 
  },

  cardNumber: { fontSize: 14, fontWeight: '600', color: '#333', marginTop: 10, letterSpacing: 1 },
  
  barcodePlaceholder: { flexDirection: 'row', height: 50, gap: 3, alignItems: 'center', justifyContent: 'center' },
  bar: { backgroundColor: '#000', height: '100%' },

  menuList: { marginBottom: 30 },
  menuItem: { paddingVertical: 16 },
  menuText: { fontSize: 16, color: '#000' },
  separator: { height: 1, backgroundColor: '#eee' },

  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  partnersRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 10,
    paddingHorizontal: 10 
  },
  
  partnerLogo: { 
    width: 80,      
    height: 40,      
  }
});