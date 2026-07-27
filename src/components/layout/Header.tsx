import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { borders } from '../../theme/borders';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightAction?: {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
  style?: ViewStyle;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  rightAction,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      {showBackButton ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={colors.primary[500]} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      
      {rightAction ? (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={rightAction.onPress}
        >
          <Ionicons name={rightAction.icon} size={24} color={colors.primary[500]} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    padding: spacing[2],
  },
  
  backButton: {
    padding: spacing[2],
  },
  
  container: {
    alignItems: 'center',
    backgroundColor: colors.neutral[0],
    borderBottomColor: colors.neutral[200],
    borderBottomWidth: borders.widths.thin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },
  
  placeholder: {
    width: 40,
  },
  
  title: {
    flex: 1,
    ...typography.variants.h4,
    color: colors.neutral[900],
    textAlign: 'center',
  },
});
