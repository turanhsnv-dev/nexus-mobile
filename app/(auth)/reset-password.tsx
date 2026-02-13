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

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#1F2937" />
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Reset password</Text>
            <Text style={styles.subtitle}>Please type something you’ll remember</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>New password</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="must be 8 characters" 
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                secureTextEntry={!isNewPasswordVisible}
              />
              <TouchableOpacity onPress={() => setNewPasswordVisible(!isNewPasswordVisible)}>
                <Ionicons 
                  name={isNewPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#9CA3AF" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm new password</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="repeat password" 
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                secureTextEntry={!isConfirmPasswordVisible}
              />
              <TouchableOpacity onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                <Ionicons 
                  name={isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#9CA3AF" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity 
            onPress={() => router.push('/(auth)/password-changed')}
            style={styles.resetButton} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Reset password</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.dismissAll()}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24, flexGrow: 1 },

  backButton: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 32,
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

  inputGroup: { marginBottom: 20 },
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    height: '100%',
  },

  resetButton: {
    backgroundColor: '#000',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
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