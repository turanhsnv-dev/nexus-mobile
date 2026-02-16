import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import GoogleLogo from '../../assets/google-g.svg';

export default function RegisterScreen() {
  const router = useRouter();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Başlıq */}
          <Text style={styles.headerTitle}>Qeydiyyat</Text>

          {/* --- E-POÇT INPUTU --- */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-poçt</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="example@gmail.com" 
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* --- YENİ ŞİFRƏ --- */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Yeni şifrə</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="minimum 8 simvol" 
                style={styles.input}
                secureTextEntry={!isPasswordVisible} // Birinci açar
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
                <FontAwesome 
                  name={isPasswordVisible ? "eye" : "eye-slash"} 
                  size={20} 
                  color="#999" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* --- ŞİFRƏNİ TƏKRARLA --- */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Şifrəni təkrarla</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="şifrəni təkrarla" 
                style={styles.input}
                secureTextEntry={!isConfirmPasswordVisible} // İkinci açar
              />
              <TouchableOpacity onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                <FontAwesome 
                  name={isConfirmPasswordVisible ? "eye" : "eye-slash"} 
                  size={20} 
                  color="#999" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* --- QEYDİYYAT DÜYMƏSİ --- */}
          <TouchableOpacity 
            style={styles.registerButton} 
            activeOpacity={0.8}
            onPress={() => alert("Qeydiyyat göndərildi!")}
          >
            <Text style={styles.buttonText}>Qeydiyyatdan keç</Text>
          </TouchableOpacity>

          {/* --- VƏ YA (DIVIDER) --- */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Və ya daxil ol</Text>
            <View style={styles.line} />
          </View>

          {/* --- SOSİAL DÜYMƏLƏR --- */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook-f" size={24} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <GoogleLogo width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="apple" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* --- FOOTER (Link) --- */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Hesabın var? </Text>
            {/* Login səhifəsinə qaytarır */}
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.loginLink}>Daxil ol</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 24, paddingTop: 100 },
  
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, color: '#333', marginBottom: 8, fontWeight: '500' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: '#fff',
  },
  input: { flex: 1, height: '100%', fontSize: 16 },

  registerButton: {
    backgroundColor: '#C91C1C',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20, // Yuxarıdan və aşağıdan boşluq
    shadowColor: '#C91C1C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  line: { flex: 1, height: 1, backgroundColor: '#eee' },
  dividerText: { marginHorizontal: 16, color: '#999', fontSize: 14 },

  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, gap: 16 },
  socialButton: {
    flex: 1, height: 50, borderWidth: 1, borderColor: '#eee', borderRadius: 12,
    justifyContent: 'center', alignItems: 'center',
  },

  footer: { flexDirection: 'row', justifyContent: 'center' },
  footerText: { color: '#666', fontSize: 14 },
  loginLink: { color: '#000', fontWeight: 'bold', fontSize: 14 },
});
