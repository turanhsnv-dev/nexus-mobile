import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyCodeScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(20);
  
  // Input ref-ləri ilə fokus idarəetməsi
  const inputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Avtomatik növbəti xanaya keçid
    if (text.length === 1 && index < 3) {
      inputs.current[index + 1]?.focus();
    }
    // Avtomatik əvvəlki xanaya keçid (əgər siliniblərsə)
    if (text.length === 0 && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#1F2937" />
          </TouchableOpacity>

          <Text style={styles.title}>E-poçtunuzu yoxlayın</Text>
          <Text style={styles.subtitle}>
            Biz kodu <Text style={styles.emailText}>{email || 'helloworld@gmail.com'}</Text> ünvanına göndərdik
          </Text>

          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref: any) => (inputs.current[index] = ref)}
                style={[
                  styles.codeInput, 
                  digit ? styles.codeInputFilled : null
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleInput(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                autoFocus={index === 0}
                selectTextOnFocus
              />
            ))}
          </View>

          <TouchableOpacity 
            style={styles.verifyButton} 
            activeOpacity={0.8}
            onPress={() => router.push('/(auth)/reset-password')}
          >
            <Text style={styles.verifyText}>Təsdiqlə</Text>
          </TouchableOpacity>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Kodu yenidən göndər </Text>
            <Text style={styles.timerText}>
              00:{timer < 10 ? `0${timer}` : timer}
            </Text>
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
    width: 44, height: 44, borderWidth: 1, borderColor: '#E5E7EB',
    borderRadius: 12, justifyContent: 'center', alignItems: 'center',
    marginTop: 10, marginBottom: 32
  },

  title: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#6B7280', lineHeight: 24, marginBottom: 32 },
  emailText: { fontWeight: 'bold', color: '#000' },

  codeContainer: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32, gap: 12
  },
  codeInput: {
    flex: 1, height: 60, borderWidth: 1, borderColor: '#E5E7EB',
    borderRadius: 12, fontSize: 24, textAlign: 'center',
    color: '#000', backgroundColor: '#fff'
  },
  codeInputFilled: {
    borderColor: '#000', borderWidth: 1.5
  },

  verifyButton: {
    backgroundColor: '#000', height: 56, borderRadius: 12,
    justifyContent: 'center', alignItems: 'center', marginBottom: 24
  },
  verifyText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  resendContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  resendText: { color: '#6B7280', fontSize: 14, fontWeight: '500' },
  timerText: { color: '#6B7280', fontSize: 14 },
});