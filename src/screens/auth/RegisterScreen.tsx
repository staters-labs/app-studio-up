import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, GoogleIcon } from '../../components';
import { AuthLayout } from './AuthLayout';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { sizes } from '../../theme/sizes';
import { useAppStore } from '../../stores/useAppStore';

export const RegisterScreen: React.FC = () => {
  const navigation = useRootNavigation();
  const { setUser, setLoading, isLoading } = useAppStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) return;

    setLoading(true);
    // TODO: Implement actual Clerk registration
    setTimeout(() => {
      setUser({
        id: '1',
        email,
        name,
        role: 'OWNER',
      });
      setLoading(false);
    }, 1000);
  };

  const handleGoogleSignUp = async () => {
    // TODO: Implement Google OAuth with Clerk
    console.log('Google sign up');
  };

  return (
    <AuthLayout title="Criar conta">
      <Input
        label="Nome"
        value={name}
        onChangeText={setName}
        placeholder="Nome"
        autoCapitalize="words"
        autoComplete="name"
        leftIcon={
          <Ionicons
            name="person-outline"
            size={sizes.icon.md}
            color={colors.text.placeholder}
          />
        }
      />

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
        autoComplete="new-password"
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
        title="Criar conta"
        onPress={handleRegister}
        loading={isLoading}
        style={styles.primaryButton}
      />

      <Button
        title="Cadastrar com Google"
        onPress={handleGoogleSignUp}
        variant="social"
        leftIcon={<GoogleIcon size={sizes.icon.lg} />}
        style={styles.stackedButton}
      />

      <Button
        title="Já tenho conta"
        onPress={() => navigation.goBack()}
        variant="soft"
        style={styles.stackedButton}
      />
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    marginTop: spacing[2],
  },

  stackedButton: {
    marginTop: spacing[6],
  },
});
