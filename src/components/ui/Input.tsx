import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { borders } from '../../theme/borders';

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
  ];

  const inputStyles = [
    styles.input,
    leftIcon && styles.inputWithLeftIcon,
    rightIcon && styles.inputWithRightIcon,
    style,
  ];

  return (
    <View style={containerStyles}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={inputContainerStyles}>
        {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
        
        <TextInput
          style={inputStyles}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={colors.neutral[500]}
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
    marginBottom: spacing[4],
  },
  
  label: {
    ...typography.variants.bodySmall,
    color: colors.neutral[700],
    marginBottom: spacing[1],
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: borders.widths.medium,
    borderColor: colors.neutral[300],
    borderRadius: borders.radii.md,
    backgroundColor: colors.neutral[0],
  },
  
  inputContainerFocused: {
    borderColor: colors.primary[500],
  },
  
  inputContainerError: {
    borderColor: colors.error[500],
  },
  
  input: {
    flex: 1,
    ...typography.variants.body,
    color: colors.neutral[900],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
  },
  
  inputWithLeftIcon: {
    paddingLeft: spacing[1],
  },
  
  inputWithRightIcon: {
    paddingRight: spacing[1],
  },
  
  iconContainer: {
    paddingHorizontal: spacing[3],
  },
  
  helperText: {
    ...typography.variants.caption,
    color: colors.neutral[600],
    marginTop: spacing[1],
  },
  
  errorText: {
    color: colors.error[500],
  },
});
