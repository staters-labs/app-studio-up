import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { Header, Button } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const ServicesScreen: React.FC = () => {
  const navigation = useRootNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Serviços"
        rightAction={{
          icon: 'add',
          onPress: () => navigation.navigate('NewService'),
        }}
      />
      
      <View style={styles.content}>
        <View style={styles.emptyState}>
          <Ionicons name="briefcase-outline" size={64} color={colors.neutral[400]} />
          <Text style={styles.emptyTitle}>Nenhum serviço cadastrado</Text>
          <Text style={styles.emptyText}>
            Cadastre seus serviços para começar a gerenciar seus atendimentos.
          </Text>
          <Button
            title="Cadastrar primeiro serviço"
            onPress={() => navigation.navigate('NewService')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral[50],
    flex: 1,
  },
  content: {
    flex: 1,
    padding: spacing[4],
  },
  emptyState: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing[6],
  },
  emptyText: {
    ...typography.variants.body,
    color: colors.neutral[500],
    marginBottom: spacing[6],
    textAlign: 'center',
  },
  emptyTitle: {
    ...typography.variants.h4,
    color: colors.neutral[700],
    marginBottom: spacing[2],
    marginTop: spacing[4],
  },
});
