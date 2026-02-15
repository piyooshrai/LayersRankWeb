import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5B941',
          orange: '#F58B44',
          red: '#E85D4C',
          green: '#4CAF7D',
        },
        ink: {
          DEFAULT: '#2D2D3A',
          light: '#4A4A5A',
          muted: '#6B6B7B',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          off: '#F8F9FA',
        },
        // Keep legacy references for existing pages
        navy: '#2D2D3A',
        confidence: '#4CAF7D',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      borderColor: {
        DEFAULT: '#E5E7EB',
      },
    },
  },
  plugins: [],
};

export default config;
