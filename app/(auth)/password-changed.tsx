import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function PasswordChangedScreen() {
  const router = useRouter();

  const handleBackToLogin = () => {
    // Stack tarixçəsini təmizləyib Login səhifəsinə yönləndiririk
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.title}>Password changed</Text>
        <Text style={styles.subtitle}>
          Your password has been changed successfully
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={handleBackToLogin}
        >
          <Text style={styles.buttonText}>Back to login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: '80%',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});