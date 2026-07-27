import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input } from '../../components';
import { AuthLayout } from './AuthLayout';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { sizes } from '../../theme/sizes';

export const ForgotPasswordScreen: React.FC = () => {
  const navigation = useRootNavigation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleResetPassword = async () => {
    if (!email) return;

    setIsLoading(true);
    // TODO: Implement actual password reset with Clerk
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <AuthLayout title="E-mail enviado">
        <View style={styles.success}>
          <Ionicons name="checkmark-circle" size={64} color={colors.success[500]} />
          <Text style={styles.successText}>
            Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
          </Text>
        </View>

        <Button
          title="Voltar para o login"
          onPress={() => navigation.goBack()}
          style={styles.primaryButton}
        />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Recuperar senha">
      <Text style={styles.description}>
        Digite seu e-mail e enviaremos um link para redefinir sua senha.
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
        title="Enviar link de recuperação"
        onPress={handleResetPassword}
        loading={isLoading}
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
