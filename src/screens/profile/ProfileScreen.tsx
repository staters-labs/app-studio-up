import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Header, Card, Button } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { useAppStore } from '../../stores/useAppStore';

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user, studio, logout } = useAppStore();

  const menuItems = [
    {
      id: 'edit-profile',
      title: 'Editar Perfil',
      icon: 'person-outline',
      onPress: () => {},
    },
    {
      id: 'studio-settings',
      title: 'Configurações do Studio',
      icon: 'business-outline',
      onPress: () => {},
    },
    {
      id: 'subscription',
      title: 'Assinatura',
      icon: 'card-outline',
      onPress: () => {},
    },
    {
      id: 'help',
      title: 'Ajuda e Suporte',
      icon: 'help-circle-outline',
      onPress: () => {},
    },
    {
      id: 'about',
      title: 'Sobre o App',
      icon: 'information-circle-outline',
      onPress: () => {},
    },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Header title="Perfil" showBackButton />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Card style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </Text>
            </View>
            <Text style={styles.userName}>{user?.name || 'Usuário'}</Text>
            <Text style={styles.userEmail}>{user?.email || 'email@exemplo.com'}</Text>
            <Text style={styles.userRole}>{user?.role || 'OWNER'}</Text>
          </View>
        </Card>

        <Card style={styles.studioCard}>
          <Text style={styles.studioTitle}>Meu Studio</Text>
          <View style={styles.studioInfo}>
            <Ionicons name="business" size={24} color={colors.primary[500]} />
            <View style={styles.studioDetails}>
              <Text style={styles.studioName}>{studio?.name || 'Studio não configurado'}</Text>
              <Text style={styles.studioType}>{studio?.type || 'Configure seu studio'}</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                index < menuItems.length - 1 && styles.menuItemBorder,
              ]}
              onPress={item.onPress}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon as any} size={20} color={colors.neutral[700]} />
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.neutral[400]} />
            </TouchableOpacity>
          ))}
        </Card>

        <Button
          title="Sair da conta"
          onPress={handleLogout}
          variant="outline"
          style={styles.logoutButton}
        />
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
  profileCard: {
    marginBottom: spacing[4],
  },
  avatarContainer: {
    alignItems: 'center',
    padding: spacing[4],
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  avatarText: {
    ...typography.variants.h1,
    color: colors.neutral[0],
  },
  userName: {
    ...typography.variants.h3,
    color: colors.neutral[900],
    marginBottom: spacing[1],
  },
  userEmail: {
    ...typography.variants.body,
    color: colors.neutral[600],
    marginBottom: spacing[1],
  },
  userRole: {
    ...typography.variants.bodySmall,
    color: colors.primary[500],
    fontWeight: typography.weights.medium,
  },
  studioCard: {
    marginBottom: spacing[4],
  },
  studioTitle: {
    ...typography.variants.h4,
    color: colors.neutral[900],
    marginBottom: spacing[3],
  },
  studioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  studioDetails: {
    marginLeft: spacing[3],
  },
  studioName: {
    ...typography.variants.body,
    color: colors.neutral[900],
    fontWeight: typography.weights.medium,
  },
  studioType: {
    ...typography.variants.bodySmall,
    color: colors.neutral[600],
  },
  menuCard: {
    marginBottom: spacing[4],
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing[4],
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemTitle: {
    ...typography.variants.body,
    color: colors.neutral[900],
    marginLeft: spacing[3],
  },
  logoutButton: {
    marginTop: spacing[2],
  },
});
