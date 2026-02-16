import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

          <CustomInput
            label="New password"
            placeholder="must be 8 characters"
            isPassword
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <CustomInput
            label="Confirm new password"
            placeholder="repeat password"
            isPassword
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <View style={{ height: 12 }} />

          <CustomButton 
            title="Reset password"
            onPress={() => router.push('/(auth)/password-changed')}
          />

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
  backButton: { width: 44, height: 44, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 32 },
  headerContainer: { marginBottom: 32 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 12 },
  subtitle: { fontSize: 15, color: '#6B7280', lineHeight: 24 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 'auto', paddingBottom: 20 },
  footerText: { color: '#6B7280', fontSize: 14 },
  loginLink: { color: '#000', fontWeight: 'bold', fontSize: 14 },
});