import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Header, Card, Button } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const ProvidersScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Header
        title="Prestadores"
        rightAction={{
          icon: 'add',
          onPress: () => navigation.navigate('NewProvider'),
        }}
      />
      
      <View style={styles.content}>
        <View style={styles.emptyState}>
          <Ionicons name="people-outline" size={64} color={colors.neutral[400]} />
          <Text style={styles.emptyTitle}>Nenhum prestador cadastrado</Text>
          <Text style={styles.emptyText}>
            Cadastre seus prestadores para começar a gerenciar seus atendimentos.
          </Text>
          <Button
            title="Cadastrar primeiro prestador"
            onPress={() => navigation.navigate('NewProvider')}
          />
        </View>
      </View>
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
    padding: spacing[4],
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing[6],
  },
  emptyTitle: {
    ...typography.variants.h4,
    color: colors.neutral[700],
    marginTop: spacing[4],
    marginBottom: spacing[2],
  },
  emptyText: {
    ...typography.variants.body,
    color: colors.neutral[500],
    textAlign: 'center',
    marginBottom: spacing[6],
  },
});
