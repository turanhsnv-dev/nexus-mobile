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
import { useTheme } from '../../context/ThemeContext'; // Hook-u çağırırıq

export default function ProfileScreen() {
  const router = useRouter();
  const { isDark, toggleTheme, colors } = useTheme(); // Rəngləri götürürük

  const handleLogout = () => {
    router.replace('/(auth)/login');
  };

  return (
    // DƏYİŞİKLİK 1: Arxa fon rəngini dinamik edirik
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundSecondary }]} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Başlıq rəngi dinamik */}
        <Text style={[styles.headerTitle, { color: colors.text }]}>Profil</Text>

        {/* --- İSTİFADƏÇİ KARTI --- */}
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }} 
              style={[styles.avatar, { borderColor: colors.card }]} 
            />
            <TouchableOpacity style={[styles.editBadge, { backgroundColor: colors.text, borderColor: colors.card }]}>
              <Ionicons name="pencil" size={12} color={colors.background} />
            </TouchableOpacity>
          </View>
          
          <Text style={[styles.userName, { color: colors.text }]}>Ləman Mönsünlü</Text>
          <Text style={[styles.userRole, { color: colors.textSecondary }]}>Azera Holdinq əməkdaşı</Text>
          
          <View style={[styles.statusBadge, { backgroundColor: isDark ? '#333' : '#FEF3C7' }]}>
            <Text style={[styles.statusText, { color: isDark ? '#FBBF24' : '#D97706' }]}>Premium Üzv</Text>
          </View>
        </View>

        {/* --- QRUPLAR --- */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>Hesab tənzimləmələri</Text>
        {/* Kartların rəngini dəyişirik */}
        <View style={[styles.sectionContainer, { backgroundColor: colors.card }]}>
          <ProfileItem icon="person-outline" title="Şəxsi məlumatlar" colors={colors} />
          <ProfileItem icon="shield-checkmark-outline" title="Təhlükəsizlik və Şifrə" colors={colors} />
          <ProfileItem icon="notifications-outline" title="Bildirişlər" showBadge colors={colors} />
        </View>

        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>Tətbiq</Text>
        <View style={[styles.sectionContainer, { backgroundColor: colors.card }]}>
          <ProfileItem icon="globe-outline" title="Dil seçimi" value="Azərbaycan" colors={colors} />
          
          {/* Switch üçün rəngləri tənzimləyirik */}
          <ProfileItem 
            icon="moon-outline" 
            title="Qaranlıq rejim" 
            isSwitch 
            switchValue={isDark} 
            onSwitchChange={toggleTheme} 
            colors={colors}
          />
          <ProfileItem icon="document-text-outline" title="Qaydalar və Şərtlər" colors={colors} />
        </View>

        <TouchableOpacity style={[styles.logoutButton, { backgroundColor: isDark ? 'rgba(220, 38, 38, 0.2)' : '#FEE2E2' }]} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#DC2626" />
          <Text style={styles.logoutText}>Hesabdan çıx</Text>
        </TouchableOpacity>

        <Text style={[styles.versionText, { color: colors.textSecondary }]}>Versiya 1.0.0</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable Component - Rəngləri props kimi qəbul edir
const ProfileItem = ({ 
  icon, title, value, showBadge, isSwitch, switchValue, onSwitchChange, colors 
}: any) => (
  <TouchableOpacity style={styles.itemContainer} activeOpacity={0.7}>
    <View style={styles.itemLeft}>
      <View style={[styles.iconBox, { backgroundColor: colors.inputBg }]}>
        <Ionicons name={icon} size={20} color={colors.text} />
      </View>
      <Text style={[styles.itemTitle, { color: colors.text }]}>{title}</Text>
    </View>
    
    <View style={styles.itemRight}>
      {value && <Text style={[styles.itemValue, { color: colors.textSecondary }]}>{value}</Text>}
      {showBadge && <View style={styles.badge} />}
      {isSwitch ? (
        <Switch 
          value={switchValue} 
          onValueChange={onSwitchChange}
          trackColor={{ false: "#E5E7EB", true: "#C91C1C" }}
          thumbColor="#fff"
        />
      ) : (
        !value && <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1 }, // Background rəngi burdan sildim, inline verdim
  scrollContent: { paddingBottom: 30 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 10, marginBottom: 20 },
  userCard: { alignItems: 'center', marginBottom: 30 },
  avatarContainer: { position: 'relative', marginBottom: 12 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 4 },
  editBadge: { position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 2 },
  userName: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  userRole: { fontSize: 14, marginBottom: 12 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  statusText: { fontWeight: 'bold', fontSize: 12 },
  sectionHeader: { fontSize: 14, fontWeight: '600', marginLeft: 20, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  sectionContainer: { marginHorizontal: 20, borderRadius: 16, paddingVertical: 8, marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 16 },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  itemTitle: { fontSize: 15, fontWeight: '500' },
  itemRight: { flexDirection: 'row', alignItems: 'center' },
  itemValue: { fontSize: 14, marginRight: 8 },
  badge: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#DC2626' },
  logoutButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, paddingVertical: 16, borderRadius: 16, marginTop: 10 },
  logoutText: { color: '#DC2626', fontWeight: 'bold', fontSize: 16, marginLeft: 8 },
  versionText: { textAlign: 'center', fontSize: 12, marginTop: 20 },
});