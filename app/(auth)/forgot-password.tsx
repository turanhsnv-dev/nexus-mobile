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
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()}
          >
             <Ionicons name="chevron-back" size={24} color="#1F2937" />
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Şifrəni unutmusan?</Text>
            <Text style={styles.subtitle}>
              Narahat olma! Bu baş verə bilər. Hesabınla əlaqəli e-poçt ünvanını daxil et.
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-poçt</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="E-poçt ünvanını daxil et" 
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <TouchableOpacity 
            onPress={() => router.push({ pathname: '/(auth)/verify-code', params: { email: email } })}
            style={styles.sendButton} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Kodu göndər</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Şifrəni xatırladın? </Text>
            <TouchableOpacity onPress={() => router.back()}>
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
  content: { padding: 24 },

  backButton: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },

  headerContainer: { marginBottom: 32 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 24,
  },

  inputGroup: { marginBottom: 32 },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 16,
    color: '#111827',
    height: '100%',
  },

  sendButton: {
    backgroundColor: '#000', 
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto', 
    paddingBottom: 20,
  },
  footerText: { color: '#6B7280', fontSize: 14 },
  loginLink: { color: '#000', fontWeight: 'bold', fontSize: 14 },
});