import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Switch 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { isDark, toggleTheme, colors } = useTheme();

  // Çıxış funksiyası
  const handleLogout = () => {
    // Burada token silinməsi və s. ola bilər
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* --- BAŞLIQ (Arxa fonu body ilə eyni) --- */}
        <Text style={styles.headerTitle}>Profil</Text>

        {/* --- İSTİFADƏÇİ MƏLUMATLARI --- */}
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }} 
              style={styles.avatar} 
            />
            <TouchableOpacity style={styles.editBadge}>
              <Ionicons name="pencil" size={12} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>Ləman Mönsünlü</Text>
          <Text style={styles.userRole}>Azera Holdinq əməkdaşı</Text>
          
          {/* Status Badge */}
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Premium Üzv</Text>
          </View>
        </View>

        {/* --- MENYU QRUPU 1: HESAB --- */}
        <Text style={styles.sectionHeader}>Hesab tənzimləmələri</Text>
        <View style={styles.sectionContainer}>
          <ProfileItem icon="person-outline" title="Şəxsi məlumatlar" />
          <ProfileItem icon="shield-checkmark-outline" title="Təhlükəsizlik və Şifrə" />
          <ProfileItem icon="notifications-outline" title="Bildirişlər" showBadge />
        </View>

        {/* --- MENYU QRUPU 2: TƏTBİQ --- */}
        <Text style={styles.sectionHeader}>Tətbiq</Text>
        <View style={styles.sectionContainer}>
          <ProfileItem icon="globe-outline" title="Dil seçimi" value="Azərbaycan" />
          <ProfileItem icon="moon-outline" title="Qaranlıq rejim" isSwitch switchValue={isDark} onSwitchChange={toggleTheme} />
          <ProfileItem icon="document-text-outline" title="Qaydalar və Şərtlər" />
        </View>

        {/* --- ÇIXIŞ DÜYMƏSİ --- */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#DC2626" />
          <Text style={styles.logoutText}>Hesabdan çıx</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Versiya 1.0.0</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

// --- KÖMƏKÇİ KOMPONENT (Profile Item) ---
// Bu hissə kodun təkrarının qarşısını alır
const ProfileItem = ({ 
  icon, 
  title, 
  value, 
  showBadge, 
  isSwitch,
  switchValue,
  onSwitchChange,
}: { 
  icon: keyof typeof Ionicons.glyphMap; 
  title: string; 
  value?: string;
  showBadge?: boolean;
  isSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}) => (
  <TouchableOpacity style={styles.itemContainer} activeOpacity={0.7}>
    <View style={styles.itemLeft}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={20} color="#374151" />
      </View>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
    
    <View style={styles.itemRight}>
      {value && <Text style={styles.itemValue}>{value}</Text>}
      {showBadge && <View style={styles.badge} />}
      {isSwitch ? (
        <Switch 
          value={switchValue ?? false} 
          onValueChange={onSwitchChange}
          trackColor={{ false: "#E5E7EB", true: "#111827" }}
          thumbColor="#fff"
        />
      ) : (
        !value && <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' }, // Ümumi fon rəngi
  scrollContent: { paddingBottom: 30 },

  // HEADER
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  // USER CARD
  userCard: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: { position: 'relative', marginBottom: 12 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff', // Ağ çərçivə
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#111827',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginBottom: 4 },
  userRole: { fontSize: 14, color: '#6B7280', marginBottom: 12 },
  statusBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: { color: '#D97706', fontWeight: 'bold', fontSize: 12 },

  // SECTIONS
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginLeft: 20,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 8,
    marginBottom: 24,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },

  // PROFILE ITEM STYLES
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemTitle: { fontSize: 15, fontWeight: '500', color: '#111827' },
  itemRight: { flexDirection: 'row', alignItems: 'center' },
  itemValue: { fontSize: 14, color: '#6B7280', marginRight: 8 },
  badge: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#DC2626' },

  // LOGOUT
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: '#FEE2E2',
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 10,
  },
  logoutText: {
    color: '#DC2626',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  versionText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 20,
  },
});