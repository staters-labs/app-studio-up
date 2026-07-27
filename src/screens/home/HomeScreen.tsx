import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { useAppStore } from '../../stores/useAppStore';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { user, studio } = useAppStore();

  const quickActions = [
    {
      id: 'new-service',
      title: 'Novo Serviço',
      icon: 'add-circle',
      color: colors.primary[500],
      onPress: () => navigation.navigate('NewService'),
    },
    {
      id: 'providers',
      title: 'Prestadores',
      icon: 'people',
      color: colors.success[500],
      onPress: () => navigation.navigate('Providers'),
    },
    {
      id: 'products',
      title: 'Produtos',
      icon: 'cart',
      color: colors.warning[500],
      onPress: () => navigation.navigate('Products'),
    },
    {
      id: 'cash',
      title: 'Caixa',
      icon: 'cash',
      color: colors.info[500],
      onPress: () => navigation.navigate('Cash'),
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, {user?.name?.split(' ')[0] || 'Usuário'}</Text>
          <Text style={styles.studioName}>{studio?.name || 'Seu Studio'}</Text>
        </View>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle" size={40} color={colors.primary[500]} />
        </TouchableOpacity>
      </View>

      <Card style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Resumo do Dia</Text>
        <View style={styles.summaryGrid}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>R$ 0,00</Text>
            <Text style={styles.summaryLabel}>Receita</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>0</Text>
            <Text style={styles.summaryLabel}>Serviços</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>R$ 0,00</Text>
            <Text style={styles.summaryLabel}>Lucro</Text>
          </View>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Ações Rápidas</Text>
      <View style={styles.quickActionsGrid}>
        {quickActions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.quickAction}
            onPress={action.onPress}
          >
            <View style={[styles.quickActionIcon, { backgroundColor: action.color + '20' }]}>
              <Ionicons name={action.icon as any} size={24} color={action.color} />
            </View>
            <Text style={styles.quickActionTitle}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Card style={styles.recentCard}>
        <View style={styles.recentHeader}>
          <Text style={styles.recentTitle}>Atendimentos Recentes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Services')}>
            <Text style={styles.seeAll}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.emptyState}>
          <Ionicons name="document-text-outline" size={48} color={colors.neutral[400]} />
          <Text style={styles.emptyText}>Nenhum atendimento hoje</Text>
          <Button
            title="Iniciar primeiro atendimento"
            onPress={() => navigation.navigate('NewService')}
            variant="outline"
            size="sm"
          />
        </View>
      </Card>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[6],
    paddingTop: spacing[4],
  },
  greeting: {
    ...typography.variants.body,
    color: colors.neutral[600],
  },
  studioName: {
    ...typography.variants.h3,
    color: colors.neutral[900],
  },
  profileButton: {
    padding: spacing[1],
  },
  summaryCard: {
    marginBottom: spacing[6],
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
    ...typography.variants.h3,
    color: colors.primary[500],
    marginBottom: spacing[1],
  },
  summaryLabel: {
    ...typography.variants.caption,
    color: colors.neutral[600],
  },
  sectionTitle: {
    ...typography.variants.h4,
    color: colors.neutral[900],
    marginBottom: spacing[4],
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing[6],
  },
  quickAction: {
    width: '48%',
    backgroundColor: colors.neutral[0],
    borderRadius: 12,
    padding: spacing[4],
    alignItems: 'center',
    marginBottom: spacing[3],
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  quickActionTitle: {
    ...typography.variants.bodySmall,
    color: colors.neutral[700],
    fontWeight: typography.weights.medium,
  },
  recentCard: {
    marginBottom: spacing[6],
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  recentTitle: {
    ...typography.variants.h4,
    color: colors.neutral[900],
  },
  seeAll: {
    ...typography.variants.bodySmall,
    color: colors.primary[500],
  },
  emptyState: {
    alignItems: 'center',
    padding: spacing[6],
  },
  emptyText: {
    ...typography.variants.body,
    color: colors.neutral[500],
    marginVertical: spacing[3],
  },
});
