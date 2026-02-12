import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tarixçə Səhifəsi</Text>
      <Text style={styles.subText}>(Tezliklə)</Text>
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