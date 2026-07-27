import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

interface LogoProps {
  /** Altura do cubo em pontos. O sparkle é posicionado proporcionalmente. */
  size?: number;
  showWordmark?: boolean;
  style?: ViewStyle;
  testID?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 64,
  showWordmark = true,
  style,
  testID,
}) => {
  const markWidth = size * 1.2;

  return (
    <View style={[styles.container, style]} testID={testID}>
      <Svg width={markWidth} height={size} viewBox="0 0 120 100">
        {/* Cubo isométrico em traço, alinhado à esquerda do viewBox */}
        <Path
          d="M46 12 L86 33 L86 79 L46 100 L6 79 L6 33 Z"
          fill="none"
          stroke={colors.text.primary}
          strokeWidth={5}
          strokeLinejoin="round"
        />
        <Path
          d="M6 33 L46 54 L86 33 M46 54 L46 100"
          fill="none"
          stroke={colors.text.primary}
          strokeWidth={5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Sparkle de quatro pontas no canto superior direito */}
        <Path
          d="M100 0 C102 12 106 16 118 18 C106 20 102 24 100 36 C98 24 94 20 82 18 C94 16 98 12 100 0 Z"
          fill={colors.primary[500]}
        />
      </Svg>

      {showWordmark && <Text style={styles.wordmark}>Studio Up</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  wordmark: {
    color: colors.text.primary,
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.regular,
    marginTop: spacing[3],
  },
});
