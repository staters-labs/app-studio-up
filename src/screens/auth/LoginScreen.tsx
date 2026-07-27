import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, Card } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
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
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.logo}>Studio Up</Text>
        <Text style={styles.subtitle}>Gestão de beleza simplificada</Text>
      </View>

      <Card style={styles.card}>
        <Text style={styles.title}>Entrar</Text>
        
        <Input
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Sua senha"
          secureTextEntry={!showPassword}
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color={colors.neutral[500]}
              />
            </TouchableOpacity>
          }
        />
        
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        
        <Button
          title="Entrar"
          onPress={handleLogin}
          loading={isLoading}
          style={styles.loginButton}
        />
        
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.dividerLine} />
        </View>
        
        <Button
          title="Continuar com Google"
          onPress={handleGoogleLogin}
          variant="outline"
          style={styles.googleButton}
        />
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerLink}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: spacing[6],
  },
  container: {
    backgroundColor: colors.neutral[50],
    flex: 1,
  },
  content: {
    padding: spacing[4],
    paddingTop: spacing[12],
  },
  divider: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: spacing[6],
  },
  dividerLine: {
    backgroundColor: colors.neutral[300],
    flex: 1,
    height: 1,
  },
  dividerText: {
    ...typography.variants.bodySmall,
    color: colors.neutral[500],
    marginHorizontal: spacing[3],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing[6],
  },
  footerLink: {
    ...typography.variants.body,
    color: colors.primary[500],
    fontWeight: typography.weights.semibold,
    marginLeft: spacing[1],
  },
  footerText: {
    ...typography.variants.body,
    color: colors.neutral[600],
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: spacing[4],
  },
  forgotPasswordText: {
    ...typography.variants.bodySmall,
    color: colors.primary[500],
  },
  googleButton: {
    marginTop: spacing[2],
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing[8],
  },
  loginButton: {
    marginTop: spacing[2],
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
  title: {
    ...typography.variants.h3,
    color: colors.neutral[900],
    marginBottom: spacing[6],
  },
});
