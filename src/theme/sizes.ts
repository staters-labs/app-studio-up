export const sizes = {
  /** Altura padrão de inputs e botões (mockup de autenticação). */
  control: 56,
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
