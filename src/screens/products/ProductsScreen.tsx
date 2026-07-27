import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRootNavigation } from '../../hooks/useNavigation';
import { Ionicons } from '@expo/vector-icons';
import { Header, Button } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const ProductsScreen: React.FC = () => {
  const navigation = useRootNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Produtos"
        rightAction={{
          icon: 'add',
          onPress: () => navigation.navigate('NewProduct'),
        }}
      />
      
      <View style={styles.content}>
        <View style={styles.emptyState}>
          <Ionicons name="cart-outline" size={64} color={colors.neutral[400]} />
          <Text style={styles.emptyTitle}>Nenhum produto cadastrado</Text>
          <Text style={styles.emptyText}>
            Cadastre seus produtos para controlar estoque e custos.
          </Text>
          <Button
            title="Cadastrar primeiro produto"
            onPress={() => navigation.navigate('NewProduct')}
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
