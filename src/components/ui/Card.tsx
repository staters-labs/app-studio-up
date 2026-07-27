import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { borders } from '../../theme/borders';
import { shadows } from '../../theme/shadows';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: keyof typeof spacing;
  style?: ViewStyle;
  testID?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 4,
  style,
  testID,
}) => {
  const cardStyles = [
    styles.base,
    styles[`variant_${variant}`],
    { padding: spacing[padding] },
    style,
  ];

  return (
    <View style={cardStyles} testID={testID}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.neutral[0],
    borderRadius: borders.radii.lg,
  },
  
  variant_default: {
    ...shadows.md,
  },
  
  variant_outlined: {
    borderWidth: borders.widths.medium,
    borderColor: colors.neutral[200],
  },
  
  variant_elevated: {
    ...shadows.lg,
  },
});
