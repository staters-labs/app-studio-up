import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { useSignUp } from '@clerk/expo';
import { Button, Input, GoogleIcon } from '../../components';
import { AuthLayout } from './AuthLayout';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { sizes } from '../../theme/sizes';

export const RegisterScreen: React.FC = () => {
  const navigation = useRootNavigation();
  const { signUp, fetchStatus } = useSignUp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) return;

    const { error } = await signUp.password({
      emailAddress: email,
      password,
    });

    if (error) {
      Alert.alert('Erro ao cadastrar', error.message || 'Erro ao criar conta.');
      return;
    }

    await signUp.verifications.sendEmailCode();
    setPendingVerification(true);
  };

  const handleVerifyEmail = async () => {
    if (!code) return;

    const { error } = await signUp.verifications.verifyEmailCode({ code });

    if (error) {
      Alert.alert('Erro na verificação', error.message || 'Código inválido.');
      return;
    }

    if (signUp.status === 'complete') {
      await signUp.finalize();
    }
  };

  const handleGoogleSignUp = async () => {
    Alert.alert('Em breve', 'Cadastro com Google será implementado em breve.');
  };

  if (pendingVerification) {
    return (
      <AuthLayout title="Verificar e-mail">
        <Input
          label="Código de verificação"
          value={code}
          onChangeText={setCode}
          placeholder="Digite o código enviado ao seu e-mail"
          keyboardType="number-pad"
          autoComplete="one-time-code"
          leftIcon={
            <Ionicons
              name="key-outline"
              size={sizes.icon.md}
              color={colors.text.placeholder}
            />
          }
        />

        <Button
          title="Verificar"
          onPress={handleVerifyEmail}
          loading={fetchStatus === 'fetching'}
          style={styles.primaryButton}
        />

        <Button
          title="Voltar"
          onPress={() => {
            setPendingVerification(false);
            setCode('');
          }}
          variant="soft"
          style={styles.stackedButton}
        />
      </AuthLayout>
    );
  }

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
        loading={fetchStatus === 'fetching'}
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
