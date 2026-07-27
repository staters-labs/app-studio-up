import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, Card } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation();
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

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={colors.primary[500]} />
        </TouchableOpacity>
        <Text style={styles.logo}>Studio Up</Text>
        <Text style={styles.subtitle}>Recuperar senha</Text>
      </View>

      <Card style={styles.card}>
        {isSuccess ? (
          <View style={styles.successContainer}>
            <Ionicons name="checkmark-circle" size={64} color={colors.success[500]} />
            <Text style={styles.successTitle}>E-mail enviado!</Text>
            <Text style={styles.successText}>
              Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
            </Text>
            <Button
              title="Voltar para o login"
              onPress={() => navigation.goBack()}
              style={styles.backButtonStyle}
            />
          </View>
        ) : (
          <>
            <Text style={styles.title}>Esqueceu a senha?</Text>
            <Text style={styles.description}>
              Digite seu e-mail e enviaremos um link para redefinir sua senha.
            </Text>
            
            <Input
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <Button
              title="Enviar link de recuperação"
              onPress={handleResetPassword}
              loading={isLoading}
              style={styles.resetButton}
            />
          </>
        )}
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Lembrou a senha?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerLink}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  content: {
    padding: spacing[4],
    paddingTop: spacing[8],
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing[8],
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: spacing[2],
  },
  logo: {
    ...typography.variants.h1,
    color: colors.primary[500],
    marginBottom: spacing[2],
  },
  subtitle: {
    ...typography.variants.body,
    color: colors.neutral[600],
  },
  card: {
    padding: spacing[6],
  },
  title: {
    ...typography.variants.h3,
    color: colors.neutral[900],
    marginBottom: spacing[2],
  },
  description: {
    ...typography.variants.body,
    color: colors.neutral[600],
    marginBottom: spacing[6],
  },
  resetButton: {
    marginTop: spacing[4],
  },
  successContainer: {
    alignItems: 'center',
    padding: spacing[4],
  },
  successTitle: {
    ...typography.variants.h3,
    color: colors.neutral[900],
    marginTop: spacing[4],
    marginBottom: spacing[2],
  },
  successText: {
    ...typography.variants.body,
    color: colors.neutral[600],
    textAlign: 'center',
    marginBottom: spacing[6],
  },
  backButtonStyle: {
    marginTop: spacing[4],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing[6],
  },
  footerText: {
    ...typography.variants.body,
    color: colors.neutral[600],
  },
  footerLink: {
    ...typography.variants.body,
    color: colors.primary[500],
    fontWeight: typography.weights.semibold,
    marginLeft: spacing[1],
  },
});
