import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import GoogleLogo from '../../assets/google-g.svg';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      Alert.alert('Xəta', 'Zəhmət olmasa bütün xanaları doldurun.');
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  }, [email, password, router]);

  const navigateToRegister = useCallback(() => router.push('/register'), [router]);
  const navigateToForgot = useCallback(() => router.push('/(auth)/forgot-password'), [router]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.headerTitle}>Daxil ol</Text>

          <CustomInput
            label="E-poçt"
            placeholder="helloworld@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            rightIcon="checkmark-circle"
          />

          <CustomInput
            label="Şifrə"
            placeholder="••••••••"
            isPassword
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.forgotPassword} onPress={navigateToForgot}>
            <Text style={styles.forgotText}>Şifrəni unutdum</Text>
          </TouchableOpacity>

          <CustomButton 
            title="Daxil ol" 
            onPress={handleLogin} 
            isLoading={loading}
            style={styles.loginButton}
          />

          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Və ya daxil ol</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialContainer}>
            <SocialButton icon="facebook-f" color="#3b5998" />
            <TouchableOpacity style={styles.socialButton}>
              <GoogleLogo width={24} height={24} />
            </TouchableOpacity>
            <SocialButton icon="apple" color="#000" />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Hesabın yoxdur? </Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={styles.registerLink}>Qeydiyyatdan keç</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Local Component for this screen only
const SocialButton = ({ icon, color }: { icon: any, color: string }) => (
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name={icon} size={24} color={color} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  keyboardView: { flex: 1 },
  scrollContent: { padding: 24, paddingTop: 60 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 30 },
  forgotPassword: { alignItems: 'flex-end', marginBottom: 24 },
  forgotText: { color: '#666', fontSize: 14 },
  loginButton: { marginBottom: 30 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  line: { flex: 1, height: 1, backgroundColor: '#eee' },
  dividerText: { marginHorizontal: 16, color: '#999', fontSize: 14 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, gap: 16 },
  socialButton: { flex: 1, height: 50, borderWidth: 1, borderColor: '#eee', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  footer: { flexDirection: 'row', justifyContent: 'center', paddingBottom: 20 },
  footerText: { color: '#666', fontSize: 14 },
  registerLink: { color: '#000', fontWeight: 'bold', fontSize: 14 },
});