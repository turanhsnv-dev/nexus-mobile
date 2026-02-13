// constants/Colors.ts

const tintColorLight = '#C91C1C';
const tintColorDark = '#FF453A';

export const Colors = {
  light: {
    text: '#111827',
    textSecondary: '#6B7280',
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    card: '#FFFFFF',
    border: '#E5E7EB',
    icon: '#374151',
    tint: tintColorLight,
    inputBg: '#F3F4F6',
    shadow: '#000000',
  },
  dark: {
    text: '#FFFFFF',           // Tam ağ
    textSecondary: '#A1A1AA',  // Daha açıq boz (Zinc-400)
    background: '#000000',     // 🔥 TAM QARA
    backgroundSecondary: '#000000', // Səhifə fonu da tam qara
    card: '#121212',           // 🔥 Çox tünd boz (Göyümtül deyil!)
    border: '#333333',         // İncə border
    icon: '#D4D4D8',
    tint: tintColorDark,
    inputBg: '#18181B',
    shadow: '#C91C1C',         // 🔥 KÖLGƏ RƏNGİ QIRMIZI (NEON ÜÇÜN)
  },
};