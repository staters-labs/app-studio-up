import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { borders } from '../../theme/borders';
import { sizes } from '../../theme/sizes';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  containerStyle,
  style,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyles = [
    styles.container,
    containerStyle,
  ];

  const inputContainerStyles = [
    styles.inputContainer,
    isFocused && styles.inputContainerFocused,
    error && styles.inputContainerError,
  ].filter(Boolean) as StyleProp<ViewStyle>[];

  const inputStyles = [
    styles.input,
    leftIcon && styles.inputWithLeftIcon,
    rightIcon && styles.inputWithRightIcon,
    style,
  ].filter(Boolean) as StyleProp<TextStyle>[];

  return (
    <View style={containerStyles}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={inputContainerStyles}>
        {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
        
        <TextInput
          style={inputStyles}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={colors.text.placeholder}
          {...textInputProps}
        />
        
        {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
      </View>
      
      {(error || helperText) && (
        <Text style={[styles.helperText, error && styles.errorText]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing[5],
  },

  errorText: {
    color: colors.error[500],
  },

  helperText: {
    ...typography.variants.caption,
    color: colors.text.secondary,
    marginTop: spacing[1],
  },

  iconContainer: {
    paddingHorizontal: spacing[4],
  },

  input: {
    flex: 1,
    ...typography.variants.body,
    color: colors.text.primary,
    height: '100%',
    paddingHorizontal: spacing[4],
  },

  inputContainer: {
    alignItems: 'center',
    backgroundColor: colors.surface.raised,
    borderColor: colors.surface.border,
    borderRadius: borders.radii.lg,
    borderWidth: borders.widths.thin,
    flexDirection: 'row',
    height: sizes.control,
  },

  inputContainerError: {
    borderColor: colors.error[500],
  },

  inputContainerFocused: {
    borderColor: colors.primary[500],
  },

  inputWithLeftIcon: {
    paddingLeft: 0,
  },

  inputWithRightIcon: {
    paddingRight: 0,
  },

  label: {
    color: colors.text.primary,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    marginBottom: spacing[2],
  },
});
