import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Header, Card } from '../../components';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const settingsSections = [
    {
      title: 'Notificações',
      items: [
        {
          id: 'push-notifications',
          title: 'Notificações Push',
          type: 'switch',
          value: notificationsEnabled,
          onValueChange: setNotificationsEnabled,
        },
        {
          id: 'email-notifications',
          title: 'Notificações por E-mail',
          type: 'switch',
          value: true,
          onValueChange: () => {},
        },
      ],
    },
    {
      title: 'Aparência',
      items: [
        {
          id: 'dark-mode',
          title: 'Modo Escuro',
          type: 'switch',
          value: darkModeEnabled,
          onValueChange: setDarkModeEnabled,
        },
      ],
    },
    {
      title: 'Dados',
      items: [
        {
          id: 'export-data',
          title: 'Exportar Dados',
          type: 'navigation',
          onPress: () => {},
        },
        {
          id: 'clear-cache',
          title: 'Limpar Cache',
          type: 'navigation',
          onPress: () => {},
        },
      ],
    },
    {
      title: 'Conta',
      items: [
        {
          id: 'change-password',
          title: 'Alterar Senha',
          type: 'navigation',
          onPress: () => {},
        },
        {
          id: 'delete-account',
          title: 'Excluir Conta',
          type: 'navigation',
          onPress: () => {},
          destructive: true,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Configurações" showBackButton />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {settingsSections.map((section) => (
          <Card key={section.title} style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.settingItem,
                  index < section.items.length - 1 && styles.settingItemBorder,
                ]}
              >
                <Text
                  style={[
                    styles.settingTitle,
                    item.destructive && styles.destructiveText,
                  ]}
                >
                  {item.title}
                </Text>
                {item.type === 'switch' ? (
                  <Switch
                    value={item.value}
                    onValueChange={item.onValueChange}
                    trackColor={{ false: colors.neutral[300], true: colors.primary[200] }}
                    thumbColor={item.value ? colors.primary[500] : colors.neutral[400]}
                  />
                ) : (
                  <TouchableOpacity onPress={item.onPress}>
                    <Ionicons name="chevron-forward" size={20} color={colors.neutral[400]} />
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </Card>
        ))}

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Studio Up v1.0.0</Text>
        </View>
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
  sectionCard: {
    marginBottom: spacing[4],
  },
  sectionTitle: {
    ...typography.variants.h4,
    color: colors.neutral[900],
    marginBottom: spacing[3],
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing[3],
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  settingTitle: {
    ...typography.variants.body,
    color: colors.neutral[900],
  },
  destructiveText: {
    color: colors.error[500],
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: spacing[4],
    marginBottom: spacing[8],
  },
  versionText: {
    ...typography.variants.bodySmall,
    color: colors.neutral[500],
  },
});
