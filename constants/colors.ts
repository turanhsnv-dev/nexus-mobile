// constants/Colors.ts

const tintColorLight = '#C91C1C'; // Azera Qırmızı
const tintColorDark = '#FF453A';  // Qaranlıq rejim üçün açıq qırmızı

export const Colors = {
  light: {
    text: '#111827',           // Qara mətn
    textSecondary: '#6B7280',  // Boz mətn
    background: '#FFFFFF',     // Ağ fon
    backgroundSecondary: '#F8F9FA', // Səhifə fonu (Açıq boz)
    card: '#FFFFFF',           // Kart rəngi
    border: '#E5E7EB',         // Çərçivə
    icon: '#374151',           // İkon rəngi
    tint: tintColorLight,      // Aktiv rəng
    inputBg: '#F3F4F6',        // Input arxa fonu
    shadow: '#000000',         // Kölgə rəngi
  },
  dark: {
    text: '#F9FAFB',           // Ağ mətn
    textSecondary: '#9CA3AF',  // Boz mətn
    background: '#111827',     // Tünd fon (Deep Blue/Black)
    backgroundSecondary: '#000000', // Tam qara fon
    card: '#1F2937',           // Tünd boz kart
    border: '#374151',         // Tünd çərçivə
    icon: '#9CA3AF',           // Açıq boz ikon
    tint: tintColorDark,       // Aktiv rəng
    inputBg: '#374151',        // Input arxa fonu
    shadow: '#000000',         // Kölgə
  },
};