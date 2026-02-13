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

export default function LoginScreen() {
    const router = useRouter();

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerTitle}>Daxil ol</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>E-poçt</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="helloworld@gmail.com"
                                style={styles.input}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <FontAwesome name="check-circle" size={20} color="#000" />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Şifrə</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="••••••••"
                                style={styles.input}
                                secureTextEntry={!isPasswordVisible}
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
                    <TouchableOpacity 
                        style={styles.forgotPassword}
                        onPress={() => router.push('/(auth)/forgot-password')}
                    >
                        <Text style={styles.forgotText}>Şifrəni unutdum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginButton}
                        activeOpacity={0.8}
                        onPress={() => router.replace('/(tabs)')}
                    >
                        <Text style={styles.loginText}>Daxil ol</Text>
                    </TouchableOpacity>
                    <View style={styles.dividerContainer}>
                        <View style={styles.line} />
                        <Text style={styles.dividerText}>Və ya daxil ol</Text>
                        <View style={styles.line} />
                    </View>
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

                    {/* --- FOOTER --- */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Hesabın yoxdur? </Text>
                        <TouchableOpacity onPress={() => router.push('/register')}>
                            <Text style={styles.registerLink}>Qeydiyyatdan keç</Text>
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
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 8,
        fontWeight: '500',
    },
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
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
    },

    forgotPassword: { alignItems: 'flex-end', marginBottom: 24 },
    forgotText: { color: '#666', fontSize: 14 },

    loginButton: {
        backgroundColor: '#C91C1C',
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: '#C91C1C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    loginText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    line: { flex: 1, height: 1, backgroundColor: '#eee' },
    dividerText: { marginHorizontal: 16, color: '#999', fontSize: 14 },

    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        gap: 16,
    },
    socialButton: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: { color: '#666', fontSize: 14 },
    registerLink: { color: '#000', fontWeight: 'bold', fontSize: 14 },
});