import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useTheme } from "../../context/ThemeContext"; // Hook çağırıldı

const PARTNERS = [
  require("../../assets/hill.png"),
  require("../../assets/bmp.png"),
  require("../../assets/adalat.png"),
  require("../../assets/vetart.png"),
  require("../../assets/hill.png"),
];

export default function HomeScreen() {
  const router = useRouter(); 
  const { colors, isDark } = useTheme(); // Rənglər
  const isEmployee = true;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundSecondary }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.backgroundSecondary }}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.bonusNumber, { color: colors.text }]}>{isEmployee ? "12%" : "24"}</Text>
            <Text style={[styles.bonusLabel, { color: colors.textSecondary }]}>{isEmployee ? "endirim" : "bonus"}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={[styles.userName, { color: colors.text }]}>Ləman Mönsünlü</Text>
            <Text style={[styles.userRole, { color: colors.textSecondary }]}>{isEmployee ? "Azera Holdinq əməkdaşı" : "Müştəri"}</Text>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: isDark ? colors.inputBg : '#E5E7EB' }]}>
          <Image source={require("../../assets/logo.png")} style={[styles.cardLogo, { tintColor: isDark ? colors.text : undefined }]} resizeMode="contain" />
          <TouchableOpacity
            style={[styles.whiteBox, { backgroundColor: colors.card, borderWidth: isDark ? 1 : 0, borderColor: isDark ? colors.border : 'transparent' }]}
            activeOpacity={0.9}
            onPress={() => router.push('/barcode')}
          >
            <Image source={require('../../assets/barkod.png')} style={[styles.barcodeImage, { tintColor: isDark ? colors.text : undefined }]} resizeMode="contain" />
            <Text style={[styles.cardNumber, { color: colors.text }]}>3 005 038 294 738</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.menuCard, { backgroundColor: colors.card }]}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>Endirimlər</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
          </TouchableOpacity>
          <View style={[styles.separator, { backgroundColor: colors.border }]} />
          <TouchableOpacity style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>Son istifadələr</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>Tərəfdaşlar</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.partnersScrollContainer} style={styles.partnersScrollView}>
          {PARTNERS.map((logo, index) => (
            <View key={index} style={[styles.partnerCard, { backgroundColor: colors.card }]}>
              <Image source={logo} style={styles.partnerLogo} resizeMode="contain" />
            </View>
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingHorizontal: 20, marginTop: 10, marginBottom: 20 },
  bonusNumber: { fontSize: 55, fontWeight: "bold" },
  bonusLabel: { fontSize: 14, marginTop: -5 },
  userInfo: { flex: 1, marginLeft: 20, paddingTop: 4 },
  userName: { fontSize: 18, fontWeight: "bold", marginTop: 4 },
  userRole: { fontSize: 13, marginTop: 10 },
  card: { borderRadius: 16, paddingVertical: 24, paddingHorizontal: 20, marginBottom: 24, marginHorizontal: 20, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  cardLogo: { width: 200, height: 60, marginBottom: 20 },
  whiteBox: { width: "100%", paddingVertical: 26, paddingHorizontal: 16, borderRadius: 16, alignItems: "center" },
  barcodeImage: { width: "100%", height: 100, marginBottom: 10 },
  cardNumber: { fontSize: 14, fontWeight: "600", marginTop: 5, letterSpacing: 2 },
  menuCard: { marginHorizontal: 20, marginBottom: 24, borderRadius: 16, paddingVertical: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  menuItem: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 12, paddingHorizontal: 16 },
  menuText: { fontSize: 15, fontWeight: "500" },
  separator: { height: 1, marginLeft: 16 },
  sectionHeader: { fontSize: 14, fontWeight: "600", marginLeft: 20, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 },
  partnersScrollView: { maxHeight: 90 },
  partnersScrollContainer: { paddingHorizontal: 20, paddingBottom: 8 },
  partnerCard: { width: 120, height: 75, borderRadius: 16, justifyContent: "center", alignItems: "center", marginRight: 12, padding: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  partnerLogo: { width: "100%", height: "100%" },
});