import { Platform } from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const typography = {
  fontFamily,
  
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  
  weights: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  
  // lineHeight no React Native é medido em pixels absolutos, nunca em múltiplos
  // do fontSize — valores fracionários esmagam a linha e borram a renderização.
  variants: {
    h1: {
      fontSize: 36,
      fontWeight: '700' as const,
      lineHeight: 44,
    },
    h2: {
      fontSize: 30,
      fontWeight: '700' as const,
      lineHeight: 38,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 32,
    },
    h4: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 16,
    },
    button: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 22,
    },
  },
} as const;

export type TypographyType = typeof typography;
