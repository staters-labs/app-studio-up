import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, GoogleIcon } from '../../components';
import { AuthLayout } from './AuthLayout';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { sizes } from '../../theme/sizes';
import { useAppStore } from '../../stores/useAppStore';

export const LoginScreen: React.FC = () => {
  const navigation = useRootNavigation();
  const { setUser, setLoading, isLoading } = useAppStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;

    setLoading(true);
    // TODO: Implement actual Clerk authentication
    setTimeout(() => {
      setUser({
        id: '1',
        email,
        name: 'Usuário Teste',
        role: 'OWNER',
      });
      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = async () => {
    // TODO: Implement Google OAuth with Clerk
    console.log('Google login');
  };

  return (
    <AuthLayout title="Entrar">
      <Input
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        leftIcon={
          <Ionicons
            name="mail-outline"
            size={sizes.icon.md}
            color={colors.text.placeholder}
          />
        }
      />

      <Input
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        autoComplete="password"
        leftIcon={
          <Ionicons
            name="lock-closed-outline"
            size={sizes.icon.md}
            color={colors.text.placeholder}
          />
        }
        rightIcon={
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            accessibilityRole="button"
            accessibilityLabel={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={sizes.icon.md}
              color={colors.text.placeholder}
            />
          </TouchableOpacity>
        }
      />

      <Button
        title="Entrar"
        onPress={handleLogin}
        loading={isLoading}
        style={styles.primaryButton}
      />

      <Button
        title="Entrar com Google"
        onPress={handleGoogleLogin}
        variant="social"
        leftIcon={<GoogleIcon size={sizes.icon.lg} />}
        style={styles.stackedButton}
      />

      <Button
        title="Recuperar senha"
        onPress={() => navigation.navigate('ForgotPassword')}
        variant="soft"
        style={styles.stackedButton}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.footer}
        accessibilityRole="button"
      >
        <Text style={styles.footerText}>
          Não tem conta? <Text style={styles.footerLink}>Criar conta</Text>
        </Text>
      </TouchableOpacity>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginTop: spacing[6],
    paddingVertical: spacing[2],
  },

  footerLink: {
    color: colors.primary[500],
    fontWeight: typography.weights.semibold,
  },

  footerText: {
    ...typography.variants.bodySmall,
    color: colors.text.secondary,
  },

  primaryButton: {
    marginTop: spacing[2],
  },

  stackedButton: {
    marginTop: spacing[6],
  },
});
