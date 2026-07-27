import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header, Card } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const CashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Caixa" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Card style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Resumo do Dia</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>R$ 0,00</Text>
              <Text style={styles.summaryLabel}>Entradas</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>R$ 0,00</Text>
              <Text style={styles.summaryLabel}>Despesas</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>R$ 0,00</Text>
              <Text style={styles.summaryLabel}>Comissões</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.profitContainer}>
            <Text style={styles.profitLabel}>Lucro Líquido</Text>
            <Text style={styles.profitValue}>R$ 0,00</Text>
          </View>
        </Card>

        <Card style={styles.entriesCard}>
          <Text style={styles.entriesTitle}>Entradas do Dia</Text>
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={48} color={colors.neutral[400]} />
            <Text style={styles.emptyText}>Nenhuma entrada hoje</Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing[4],
  },
  summaryCard: {
    marginBottom: spacing[4],
  },
  summaryTitle: {
    ...typography.variants.h4,
    color: colors.neutral[900],
    marginBottom: spacing[4],
  },
  summaryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    ...typography.variants.h4,
    color: colors.primary[500],
    marginBottom: spacing[1],
  },
  summaryLabel: {
    ...typography.variants.caption,
    color: colors.neutral[600],
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral[200],
    marginVertical: spacing[4],
  },
  profitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profitLabel: {
    ...typography.variants.body,
    color: colors.neutral[700],
    fontWeight: typography.weights.medium,
  },
  profitValue: {
    ...typography.variants.h3,
    color: colors.success[500],
  },
  entriesCard: {
    marginBottom: spacing[4],
  },
  entriesTitle: {
    ...typography.variants.h4,
    color: colors.neutral[900],
    marginBottom: spacing[4],
  },
  emptyState: {
    alignItems: 'center',
    padding: spacing[6],
  },
  emptyText: {
    ...typography.variants.body,
    color: colors.neutral[500],
    marginTop: spacing[3],
  },
});
