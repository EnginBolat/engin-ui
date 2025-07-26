export const Spacing = {
  xs: 2,
  s: 4,
  sm: 8,
  m: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
  massive: 56,
  gigantic: 64,
  ultra: 72,
  extreme: 80,
} as const;

export type SpacingKey = keyof typeof Spacing;
