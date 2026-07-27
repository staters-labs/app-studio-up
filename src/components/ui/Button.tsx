import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { borders } from '../../theme/borders';
import { sizes } from '../../theme/sizes';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'soft' | 'social';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  /** Ícone exibido antes do rótulo (ex.: logo do Google). */
  leftIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  style,
  textStyle,
  testID,
}) => {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[`size_${size}`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${variant}`],
    styles[`text_size_${size}`],
    disabled && styles.textDisabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.text.inverse : colors.primary[500]}
          size="small"
        />
      ) : (
        <>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: borders.radii.lg,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // Variants
  primary: {
    backgroundColor: colors.primary[500],
  },
  secondary: {
    backgroundColor: colors.neutral[100],
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.primary[500],
    borderWidth: borders.widths.medium,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  /** Botão tonal de baixa ênfase — fundo lavanda, texto navy. */
  soft: {
    backgroundColor: colors.primary[50],
  },
  /** Login social — fundo branco com traço neutro. */
  social: {
    backgroundColor: colors.surface.raised,
    borderColor: colors.surface.border,
    borderWidth: borders.widths.thin,
  },

  // Sizes
  size_sm: {
    height: sizes.controlSm,
    paddingHorizontal: spacing[3],
  },
  size_md: {
    height: sizes.controlLg,
    paddingHorizontal: spacing[4],
  },
  size_lg: {
    height: sizes.controlLg,
    paddingHorizontal: spacing[6],
  },

  // Disabled state
  disabled: {
    opacity: 0.5,
  },

  leftIcon: {
    marginRight: spacing[3],
  },

  // Text styles
  text: {
    ...typography.variants.button,
    fontFamily: typography.fontFamily,
  },
  text_primary: {
    color: colors.text.inverse,
  },
  text_secondary: {
    color: colors.primary[500],
  },
  text_outline: {
    color: colors.primary[500],
  },
  text_ghost: {
    color: colors.primary[500],
  },
  text_soft: {
    color: colors.primary[500],
  },
  text_social: {
    color: colors.text.primary,
  },

  // Text sizes
  text_size_sm: {
    fontSize: typography.sizes.sm,
  },
  text_size_md: {
    fontSize: typography.sizes.md,
  },
  text_size_lg: {
    fontSize: typography.sizes.lg,
  },

  textDisabled: {
    color: colors.neutral[500],
  },
});
