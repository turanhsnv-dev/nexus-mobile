import React, { useState, useCallback } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
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

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = useCallback(() => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Xəta', 'Bütün xanaları doldurun.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Xəta', 'Şifrələr eyni deyil.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Uğurlu', 'Qeydiyyat tamamlandı!', [
        { text: 'OK', onPress: () => router.push('/(auth)/login') }
      ]);
    }, 1500);
  }, [email, password, confirmPassword, router]);

  const navigateToLogin = useCallback(() => router.push('/(auth)/login'), [router]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <Text style={styles.headerTitle}>Qeydiyyat</Text>

          <CustomInput
            label="E-poçt"
            placeholder="example@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            label="Yeni şifrə"
            placeholder="minimum 8 simvol"
            isPassword
            value={password}
            onChangeText={setPassword}
          />

          <CustomInput
            label="Şifrəni təkrarla"
            placeholder="şifrəni təkrarla"
            isPassword
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <CustomButton 
            title="Qeydiyyatdan keç" 
            onPress={handleRegister} 
            isLoading={loading}
            style={styles.registerButton}
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
            <Text style={styles.footerText}>Hesabın var? </Text>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={styles.loginLink}>Daxil ol</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const SocialButton = ({ icon, color }: { icon: any, color: string }) => (
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name={icon} size={24} color={color} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 24, paddingTop: 60 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 30 },
  registerButton: { marginVertical: 20 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  line: { flex: 1, height: 1, backgroundColor: '#eee' },
  dividerText: { marginHorizontal: 16, color: '#999', fontSize: 14 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, gap: 16 },
  socialButton: { flex: 1, height: 50, borderWidth: 1, borderColor: '#eee', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  footer: { flexDirection: 'row', justifyContent: 'center' },
  footerText: { color: '#666', fontSize: 14 },
  loginLink: { color: '#000', fontWeight: 'bold', fontSize: 14 },
});