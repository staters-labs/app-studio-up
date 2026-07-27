import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, Card } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { useAppStore } from '../../stores/useAppStore';

export const RegisterScreen: React.FC = () => {
  const navigation = useRootNavigation();
  const { setUser, setLoading, isLoading } = useAppStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) return;
    if (password !== confirmPassword) return;
    
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

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={colors.primary[500]} />
        </TouchableOpacity>
        <Text style={styles.logo}>Studio Up</Text>
        <Text style={styles.subtitle}>Crie sua conta</Text>
      </View>

      <Card style={styles.card}>
        <Text style={styles.title}>Cadastro</Text>
        
        <Input
          label="Nome completo"
          value={name}
          onChangeText={setName}
          placeholder="Seu nome"
          autoCapitalize="words"
        />
        
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
          placeholder="Mínimo 8 caracteres"
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
        
        <Input
          label="Confirmar senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Repita a senha"
          secureTextEntry={!showPassword}
        />
        
        <Button
          title="Criar conta"
          onPress={handleRegister}
          loading={isLoading}
          style={styles.registerButton}
        />
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerLink}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    left: 0,
    padding: spacing[2],
    position: 'absolute',
    top: 0,
  },
  card: {
    padding: spacing[6],
  },
  container: {
    backgroundColor: colors.neutral[50],
    flex: 1,
  },
  content: {
    padding: spacing[4],
    paddingTop: spacing[8],
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
  header: {
    alignItems: 'center',
    marginBottom: spacing[8],
  },
  logo: {
    ...typography.variants.h1,
    color: colors.primary[500],
    marginBottom: spacing[2],
  },
  registerButton: {
    marginTop: spacing[4],
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
