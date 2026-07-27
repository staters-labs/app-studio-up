import { colors } from './colors';

export const borders = {
  widths: {
    thin: 1,
    medium: 2,
    thick: 3,
  },
  
  radii: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },
  
  colors: {
    default: colors.neutral[300],
    focus: colors.primary[500],
    error: colors.error[500],
    success: colors.success[500],
  },
} as const;

export type BordersType = typeof borders;
