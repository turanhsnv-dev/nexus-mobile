import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import AzeraSvg from '../assets/azera.svg';
import { useTheme } from '../context/ThemeContext';

export default function WelcomeScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.logoContainer}>
        <AzeraSvg width={280} height={320} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginButton, { backgroundColor: colors.tint }]}
          activeOpacity={0.8}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.loginText}>Daxil ol</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.registerButton, 
            { 
              backgroundColor: colors.background, 
              borderColor: colors.tint,
            }
          ]}
          activeOpacity={0.8}
          onPress={() => router.push('/register')}
        >
          <Text style={[styles.registerText, { color: colors.text }]}>Qeydiyyatdan keç</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    fontWeight: '600',
  }
});
