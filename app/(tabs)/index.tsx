import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // <--- 1. BU SƏTRİ ƏLAVƏ ET

export default function HomeScreen() {
  const router = useRouter(); 
  
  // true = Əməkdaş (12%), false = Müştəri (24 bonus)
  const isEmployee = true;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* --- BAŞLIQ --- */}
        <View style={styles.header}>
          <View>
            <Text style={styles.bonusNumber}>{isEmployee ? "12%" : "24"}</Text>
            <Text style={styles.bonusLabel}>
              {isEmployee ? "endirim" : "bonus"}
            </Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Ləman Mönsünlü</Text>
            <Text style={styles.userRole}>
              {isEmployee ? "Azera Holdinq əməkdaşı" : "Müştəri"}
            </Text>
          </View>
        </View>

        {/* --- KART --- */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.cardLogo}
            resizeMode="contain"
          />

          {/* --- BURA DİQQƏT: View əvəzinə TouchableOpacity işlətdik --- */}
          <TouchableOpacity 
            style={styles.whiteBox} 
            activeOpacity={0.9}
            onPress={() => router.push('/barcode')} // <--- YENİ SƏHİFƏYƏ KEÇİD
          >
            <Image 
                source={require('../../assets/barkod.png')}
                style={styles.barcodeImage}
                resizeMode="contain"
            />
            <Text style={styles.cardNumber}>3 005 038 294 738</Text>
          </TouchableOpacity>
          {/* ----------------------------------------------------------- */}

        </View>

        {/* --- MENYU --- */}
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
            source={require("../../assets/hill.png")}
            style={styles.partnerLogo}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/bmp.png")}
            style={styles.partnerLogo}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/adalat.png")}
            style={styles.partnerLogo}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/vetart.png")}
            style={styles.partnerLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 15 },
  scrollContent: { padding: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  bonusNumber: { fontSize: 55, fontWeight: "bold", color: "#000" },
  bonusLabel: { fontSize: 14, color: "#999", marginTop: -5 },
  userInfo: { flex: 1, marginLeft: 20, paddingTop: 4 },
  userName: { fontSize: 18, fontWeight: "bold", color: "#000", marginTop: 4 },
  userRole: { fontSize: 13, color: "#999", marginTop: 10 },

  card: {
    backgroundColor: "#E5E7EB",
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardLogo: { width: 200, height: 60, marginBottom: 20 },
  
  whiteBox: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 26,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  
  barcodeImage: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
  
  cardNumber: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginTop: 5,
    letterSpacing: 2,
  },

  menuList: { marginBottom: 30 },
  menuItem: { paddingVertical: 16 },
  menuText: { fontSize: 16, color: "#000" },
  separator: { height: 1, backgroundColor: "#eee" },

  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  partnersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  partnerLogo: {
    width: 75,
    height: 40,
  },
});