import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { sizes } from '../../theme/sizes';

interface AuthLayoutProps {
  /** Título de destaque alinhado à esquerda (ex.: "Entrar", "Criar conta"). */
  title: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => (
  <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Logo style={styles.logo} />

        <Text style={styles.title}>{title}</Text>

        <View>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingBottom: spacing[8],
    paddingHorizontal: sizes.screenPadding,
    paddingTop: spacing[6],
  },

  flex: {
    flex: 1,
  },

  logo: {
    marginBottom: spacing[8],
  },

  safeArea: {
    backgroundColor: colors.surface.screen,
    flex: 1,
  },

  title: {
    color: colors.text.primary,
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    marginBottom: spacing[7],
  },
});
