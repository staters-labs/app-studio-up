import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { useSignIn } from '@clerk/expo';
import { Button, Input } from '../../components';
import { AuthLayout } from './AuthLayout';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { sizes } from '../../theme/sizes';

export const ForgotPasswordScreen: React.FC = () => {
  const navigation = useRootNavigation();
  const { signIn, fetchStatus } = useSignIn();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword] = useState(false);
  const [step, setStep] = useState<'email' | 'code' | 'success'>('email');

  const handleSendCode = async () => {
    if (!email) return;

    const { error } = await signIn.create({ identifier: email });

    if (error) {
      Alert.alert('Erro', error.message || 'Não foi possível enviar o código de recuperação.');
      return;
    }

    const { error: sendCodeError } = await signIn.resetPasswordEmailCode.sendCode();

    if (sendCodeError) {
      Alert.alert('Erro', sendCodeError.message || 'Não foi possível enviar o código.');
      return;
    }

    setStep('code');
  };

  const handleResetPassword = async () => {
    if (!code || !newPassword) return;

    const { error: verifyError } = await signIn.resetPasswordEmailCode.verifyCode({ code });

    if (verifyError) {
      Alert.alert('Erro', verifyError.message || 'Código inválido.');
      return;
    }

    const { error: submitError } = await signIn.resetPasswordEmailCode.submitPassword({
      password: newPassword,
    });

    if (submitError) {
      Alert.alert('Erro', submitError.message || 'Não foi possível redefinir a senha.');
      return;
    }

    await signIn.finalize();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <AuthLayout title="Senha redefinida">
        <View style={styles.success}>
          <Ionicons name="checkmark-circle" size={64} color={colors.success[500]} />
          <Text style={styles.successText}>
            Sua senha foi redefinida com sucesso. Você já está logado.
          </Text>
        </View>

        <Button
          title="Ir para o início"
          onPress={() => navigation.goBack()}
          style={styles.primaryButton}
        />
      </AuthLayout>
    );
  }

  if (step === 'code') {
    return (
      <AuthLayout title="Redefinir senha">
        <Text style={styles.description}>
          Digite o código enviado ao seu e-mail e sua nova senha.
        </Text>

        <Input
          label="Código de verificação"
          value={code}
          onChangeText={setCode}
          placeholder="Código"
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

        <Input
          label="Nova senha"
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Nova senha"
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
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={sizes.icon.md}
              color={colors.text.placeholder}
            />
          }
        />

        <Button
          title="Redefinir senha"
          onPress={handleResetPassword}
          loading={fetchStatus === 'fetching'}
          style={styles.primaryButton}
        />

        <Button
          title="Voltar"
          onPress={() => setStep('email')}
          variant="soft"
          style={styles.stackedButton}
        />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Recuperar senha">
      <Text style={styles.description}>
        Digite seu e-mail e enviaremos um código para redefinir sua senha.
      </Text>

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

      <Button
        title="Enviar código"
        onPress={handleSendCode}
        loading={fetchStatus === 'fetching'}
        style={styles.primaryButton}
      />

      <Button
        title="Voltar para o login"
        onPress={() => navigation.goBack()}
        variant="soft"
        style={styles.stackedButton}
      />
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  description: {
    ...typography.variants.body,
    color: colors.text.secondary,
    marginBottom: spacing[6],
    marginTop: -spacing[3],
  },

  primaryButton: {
    marginTop: spacing[2],
  },

  stackedButton: {
    marginTop: spacing[6],
  },

  success: {
    alignItems: 'center',
    paddingVertical: spacing[6],
  },

  successText: {
    ...typography.variants.body,
    color: colors.text.secondary,
    marginTop: spacing[4],
    textAlign: 'center',
  },
});
