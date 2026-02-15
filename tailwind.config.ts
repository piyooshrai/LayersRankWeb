import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#081427',
        slate: '#334155',
        confidence: '#12B981'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: []
};

export default config;
