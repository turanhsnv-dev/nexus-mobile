import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import AzeraSvg from '../assets/azera.svg';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <AzeraSvg width={280} height={320} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.loginText}>Daxil ol</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.8}
          onPress={() => router.push('/register')}
        >
          <Text style={styles.registerText}>Qeydiyyatdan keç</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 16,
  },
  loginButton: {
    backgroundColor: '#C91C1C',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C91C1C',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  registerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  }
});