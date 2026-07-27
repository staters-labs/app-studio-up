export const sizes = {
  /** Altura padrão de inputs e botões (iOS safe minimum). */
  control: 56,
  controlLg: 60,
  controlSm: 40,
  /** Recuo horizontal do conteúdo das telas. */
  screenPadding: 28,
  icon: {
    sm: 16,
    md: 20,
    lg: 24,
  },
} as const;

export type SizesType = typeof sizes;
