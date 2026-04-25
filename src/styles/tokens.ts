/**
 * Converts a numeric pixel value to a px string.
 */
export const px = (n: number): string => `${n}px`;

const gray900 = '#0f1721';
const gray700 = '#334155';
const gray500 = '#647487';
const gray400 = '#92a1af';
const gray300 = '#bcc7d2';
const gray200 = '#d7e0e7';
const gray150 = '#e4eaef';
const gray100 = '#edf1f5';
const gray50 = '#f6f8fa';
const white = '#ffffff';

const brandPrimary = '#2f6f68';
const brandPrimaryHover = '#285f59';
const brandPrimaryForeground = white;

const statusInUseBg = '#e7f4ef';
const statusInUseForeground = brandPrimary;

/**
 * Color tokens for the OpenCourt light theme.
 * Includes the neutral ramp, brand accent, and semantic aliases.
 */
export const colors = {
  gray: {
    50: gray50,
    100: gray100,
    150: gray150,
    200: gray200,
    300: gray300,
    400: gray400,
    500: gray500,
    700: gray700,
    900: gray900,
  },
  white,
  pageBg: gray50,
  border: gray150,
  brand: {
    primary: brandPrimary,
    primaryHover: brandPrimaryHover,
    primaryForeground: brandPrimaryForeground,
  },
  semantic: {
    textPrimary: gray900,
    textSecondary: gray500,
    textMuted: gray400,
    textOnDark: white,
    bgPage: gray50,
    bgCard: white,
    bgSidebar: gray150,
    bgNavActive: gray100,
    bgListItem: gray100,
    border: gray150,
    borderInactive: gray300,
    divider: gray200,
    placeholder: gray400,
    status: {
      inUse: {
        background: statusInUseBg,
        foreground: statusInUseForeground,
      },
    },
  },
} as const;

/**
 * Typography tokens using DM Sans for every text style.
 * Each token defines font size, weight, and line height in px.
 */
export const typography = {
  fontFamily: 'DM Sans',
  displayNumber: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 38,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 30,
  },
  titleCard: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 24,
  },
  headingSection: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 22,
  },
  bodyEmphasis: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 20,
  },
  body: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
  },
  caption: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18,
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 16,
    letterSpacing: 0.6,
  },
  micro: {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: 14,
  },
} as const;

/**
 * Spacing tokens based on an 8pt grid for consistent layout rhythm.
 */
export const spacing = {
  xs: px(4),
  sm: px(8),
  md: px(16),
  lg: px(24),
  xl: px(32),
  '2xl': px(40),
  navX: px(12),
  navY: px(10),
  gap: px(16),
} as const;

/**
 * Corner radius tokens for controls, cards, and compact UI surfaces.
 */
export const borderRadius = {
  pill: px(4),
  button: px(6),
  input: px(8),
  card: px(12),
  badge: px(20),
  avatar: '50%',
} as const;

const cardBorder = `1.5px solid ${colors.semantic.border}`;
const activeEventBorder = `3px solid ${colors.brand.primary}`;
const inactiveEventBorder = `3px solid ${colors.semantic.borderInactive}`;
const inputDefaultBorder = `1px solid ${colors.semantic.border}`;
const inputFocusBorder = `1.5px solid ${colors.brand.primary}`;

/**
 * Border tokens for cards, inputs, and calendar events.
 * Depth in the system is intentionally achieved with borders instead of shadows.
 */
export const borders = {
  card: cardBorder,
  activeEvent: activeEventBorder,
  inactiveEvent: inactiveEventBorder,
  inputDefault: inputDefaultBorder,
  inputFocus: inputFocusBorder,
} as const;

/**
 * Shadow tokens remain intentionally empty because the visual system avoids box-shadow.
 */
export const shadows = {
  none: 'none',
} as const;

/**
 * Component tokens composed from the base palette for consistent UI implementation.
 */
export const components = {
  button: {
    primary: {
      backgroundColor: colors.brand.primary,
      color: colors.brand.primaryForeground,
      borderRadius: borderRadius.button,
      paddingHorizontal: spacing.lg,
      height: px(36),
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.semantic.textPrimary,
      borderColor: colors.semantic.border,
      borderWidth: px(1.5),
      borderRadius: borderRadius.button,
      height: px(28),
    },
    authCta: {
      backgroundColor: colors.semantic.textPrimary,
      color: colors.semantic.textOnDark,
      borderRadius: borderRadius.input,
      height: px(44),
      width: '100%',
    },
  },
  input: {
    height: px(40),
    radius: borderRadius.input,
    border: borders.inputDefault,
    focusBorder: borders.inputFocus,
    placeholderColor: colors.semantic.placeholder,
  },
  nav: {
    activeItemBg: colors.semantic.bgNavActive,
    iconColor: colors.semantic.textPrimary,
    labelColor: colors.semantic.textSecondary,
    paddingX: spacing.navX,
    paddingY: spacing.navY,
  },
  card: {
    bg: colors.semantic.bgCard,
    border: borders.card,
    radius: borderRadius.card,
    padding: spacing.md,
  },
  badge: {
    inUse: {
      backgroundColor: colors.semantic.status.inUse.background,
      color: colors.semantic.status.inUse.foreground,
      borderRadius: borderRadius.badge,
      paddingHorizontal: spacing.sm,
      paddingVertical: px(4),
    },
  },
} as const;

/**
 * Root theme token object that groups all categories in one typed export.
 */
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  borders,
  shadows,
  components,
} as const;

export type Theme = typeof theme;