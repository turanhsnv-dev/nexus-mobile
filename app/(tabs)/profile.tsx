import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profil Səhifəsi</Text>
      <Text style={styles.subText}>Ləman Mönsünlü</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 15,
  },
  text: { fontSize: 20, fontWeight: 'bold' },
  subText: { color: 'gray', marginTop: 10 }
});