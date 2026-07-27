import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { borders } from './borders';
import { shadows } from './shadows';
import { sizes } from './sizes';

export const theme = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  sizes,

  // Common styles
  common: {
    container: {
      flex: 1,
      backgroundColor: colors.neutral[0],
    },
    centeredContainer: {
      flex: 1,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      backgroundColor: colors.neutral[0],
    },
    card: {
      backgroundColor: colors.neutral[0],
      borderRadius: borders.radii.lg,
      padding: spacing[4],
      ...shadows.md,
    },
    section: {
      marginBottom: spacing[6],
    },
  },
} as const;

export type ThemeType = typeof theme;

// Default export for styled-components or theme provider
export default theme;
