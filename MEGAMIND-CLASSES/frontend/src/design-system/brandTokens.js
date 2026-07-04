export const typographySystem = {
  display: {
    family: 'Poppins',
    use: 'Brand title, hero headlines, section titles, and emphasis moments',
    scale: {
      hero: 'clamp(3rem, 7vw, 5.5rem)',
      h1: 'clamp(2.5rem, 5vw, 4rem)',
      h2: 'clamp(2rem, 4vw, 3rem)',
      h3: 'clamp(1.5rem, 3vw, 2rem)',
    },
  },
  body: {
    family: 'Inter',
    use: 'Primary reading text, forms, navigation, and UI labels',
    scale: {
      base: '1rem',
      sm: '0.9375rem',
      lg: '1.125rem',
    },
  },
  accent: {
    family: 'Space Grotesk',
    use: 'Numbers, data highlights, counters, badges, and visual accents',
  },
};

export const logoUsageGuidelines = {
  primary: 'Use the logo wordmark on light or dark surfaces with generous clear space.',
  clearSpace: 'Keep at least the height of the logo mark around every side.',
  minimumSize: 'Do not reduce the wordmark below 120px wide in digital layouts.',
  colorRules: [
    'Prefer brand blue for primary use.',
    'Use white on dark surfaces when contrast is required.',
    'Avoid using unapproved gradients inside the logo lockup.',
  ],
  misuse: [
    'Do not stretch, skew, or add outlines.',
    'Do not place the logo over busy photographs without a protective surface.',
    'Do not recolor the wordmark outside approved palette combinations.',
  ],
};

export const colorTokens = {
  brand: {
    50: '#eef8ff',
    100: '#d9efff',
    200: '#c5e6ff',
    300: '#9ed3ff',
    400: '#5fafff',
    500: '#1186d8',
    600: '#0b68b5',
    700: '#0d5592',
    800: '#0f4778',
    900: '#12324f',
  },
  accent: {
    50: '#fff8ea',
    100: '#fde8c5',
    200: '#fbd28c',
    300: '#f7b24f',
    400: '#f39b21',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b35608',
  },
  success: {
    50: '#ecfdf3',
    500: '#16a34a',
    600: '#15803d',
  },
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
  },
  danger: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    600: '#475569',
    800: '#1e293b',
    950: '#020617',
  },
};

export const spacingTokens = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  sectionY: {
    mobile: '4rem',
    desktop: '6rem',
  },
  container: {
    mobile: '1rem',
    desktop: '1.5rem',
  },
};

export const elevationTokens = {
  soft: '0 10px 45px -20px rgba(2, 6, 23, 0.35)',
  card: '0 20px 60px -24px rgba(15, 23, 42, 0.28)',
  glow: '0 0 0 1px rgba(17, 134, 216, 0.18), 0 10px 50px -20px rgba(17, 134, 216, 0.45)',
  modal: '0 30px 80px -25px rgba(2, 6, 23, 0.45)',
};

export const gradientPresets = {
  brandHero: 'linear-gradient(135deg, #eef8ff 0%, #ffffff 48%, #fff8ea 100%)',
  brandSurface: 'linear-gradient(180deg, rgba(17, 134, 216, 0.08), rgba(255, 255, 255, 0))',
  accentGlow: 'radial-gradient(circle at top left, rgba(245, 158, 11, 0.18), transparent 42%)',
  darkDepth: 'linear-gradient(135deg, #0f172a 0%, #020617 58%, #111827 100%)',
  glassTint: 'linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04))',
};

export const backgroundPatterns = {
  gridLight:
    'linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
  gridDark:
    'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
  dotsLight:
    'radial-gradient(circle, rgba(17, 134, 216, 0.12) 1px, transparent 1px)',
  dotsDark:
    'radial-gradient(circle, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
};

export const illustrationPlaceholders = {
  mathematics: {
    title: 'Mathematics',
    description: 'Formula sheets, graphs, and abstract geometry shapes',
    mood: 'precise and analytical',
  },
  classroom: {
    title: 'Classroom',
    description: 'Instructor-led group study with board-based explanation',
    mood: 'calm and focused',
  },
  students: {
    title: 'Students',
    description: 'Small batch learners in a productive problem-solving loop',
    mood: 'disciplined and energetic',
  },
  teacher: {
    title: 'Teacher',
    description: 'Confident mentoring and concept-first explanation',
    mood: 'authoritative and approachable',
  },
};

export const pageTransitionAnimations = {
  fadePage: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  slidePageUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const sectionBackgroundVariants = {
  default:
    'bg-transparent',
  softBlue:
    'bg-gradient-to-b from-brand-50/60 via-transparent to-transparent dark:from-brand-950/20',
  warmAccent:
    'bg-gradient-to-b from-accent-50/60 via-transparent to-transparent dark:from-accent-950/20',
  neutralGrid:
    'bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)]',
};

export const iconographyStyle = {
  strokeWidth: 1.8,
  size: 20,
  cornerRadius: 'rounded-xl',
  styleRules: [
    'Use simple outline icons first.',
    'Reserve filled icons for state changes or active emphasis.',
    'Keep icons inside a consistent square touch target.',
    'Match icon weight to the surrounding typography scale.',
  ],
};

