import React, { memo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useTheme } from "../../context/ThemeContext";

const PARTNERS = [
  require("../../assets/hill.png"),
  require("../../assets/bmp.png"),
  require("../../assets/adalat.png"),
  require("../../assets/vetart.png"),
  require("../../assets/hill.png"),
];

// --- Sub-components for cleaner structure ---

const Header = memo(({ colors, isDark }: { colors: any; isDark: boolean }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Text style={[styles.greetingTitle, { color: colors.text }]}>
        Salam, dəyərli müştərimiz 👋
      </Text>
      <Text style={[styles.greetingSubtitle, { color: colors.textSecondary }]}>
        "Azera" tətbiqinə xoş gəlmisiniz
      </Text>
    </View>

    <View style={styles.headerRight}>
      <TouchableOpacity
        style={[styles.iconButton, { backgroundColor: colors.card }]}
        activeOpacity={0.8}
      >
        <Ionicons name="call" size={22} color="#4CAF50" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconButton, { backgroundColor: colors.card }]}
        activeOpacity={0.8}
      >
        <Ionicons name="notifications-outline" size={22} color={colors.text} />
      </TouchableOpacity>
    </View>
  </View>
));

export default function HomeScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();

  const handleBarcodePress = useCallback(() => {
    router.push("/barcode");
  }, [router]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      edges={["top"]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.backgroundSecondary }}
      >
        {/* NEW HEADER */}
        <Header colors={colors} isDark={isDark} />

        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? colors.inputBg : "#E5E7EB" },
          ]}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={[
              styles.cardLogo,
              { tintColor: isDark ? colors.text : undefined },
            ]}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={[
              styles.whiteBox,
              {
                backgroundColor: colors.card,
                borderWidth: isDark ? 1 : 0,
                borderColor: isDark ? colors.border : "transparent",
              },
            ]}
            activeOpacity={0.9}
            onPress={handleBarcodePress}
          >
            <Image
              source={require("../../assets/barkod.png")}
              style={[
                styles.barcodeImage,
                { tintColor: isDark ? colors.text : undefined },
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.cardNumber, { color: colors.text }]}>
              3 005 038 294 738
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.menuCard, { backgroundColor: colors.card }]}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>
              Endirimlər
            </Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
          <View
            style={[styles.separator, { backgroundColor: colors.border }]}
          />
          <TouchableOpacity style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>
              Son istifadələr
            </Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          Tərəfdaşlar
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.partnersScrollContainer}
          style={styles.partnersScrollView}
        >
          {PARTNERS.map((logo, index) => (
            <View
              key={index}
              style={[styles.partnerCard, { backgroundColor: colors.card }]}
            >
              <Image
                source={logo}
                style={styles.partnerLogo}
                resizeMode="contain"
              />
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

  // Header Styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 24,
  },
  headerLeft: {
    flex: 1,
    marginRight: 16,
  },
  headerRight: {
    flexDirection: "row",
    gap: 12,
  },
  greetingTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 13,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  // Existing Styles
  card: {
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  cardLogo: { width: 200, height: 60, marginBottom: 20 },
  whiteBox: {
    width: "100%",
    paddingVertical: 26,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  barcodeImage: { width: "100%", height: 100, marginBottom: 10 },
  cardNumber: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
    letterSpacing: 2,
  },
  menuCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuText: { fontSize: 15, fontWeight: "500" },
  separator: { height: 1, marginLeft: 16 },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  partnersScrollView: { maxHeight: 90 },
  partnersScrollContainer: { paddingHorizontal: 20, paddingBottom: 8 },
  partnerCard: {
    width: 120,
    height: 75,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  partnerLogo: { width: "100%", height: "100%" },
});
