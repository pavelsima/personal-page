// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme')

// ../node_modules/pliny/dist/**/*.mjs is needed for monorepo setup
/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    '../node_modules/pliny/**/*.{js,ts,tsx}',
    './node_modules/pliny/**/*.{js,ts,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './lib/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  // Make Tailwind's `dark:` utilities respond to the design-system's
  // [data-theme="dark"] attribute that next-themes writes on <html>.
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        //@ts-ignore
        sans: ['Geist', ...defaultTheme.fontFamily.sans],
        //@ts-ignore
        mono: ['"Geist Mono"', ...defaultTheme.fontFamily.mono],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        // Bound to the design-system accent so light + dark themes both work.
        primary: {
          50: 'var(--accent)',
          100: 'var(--accent)',
          200: 'var(--accent)',
          300: 'var(--accent)',
          400: 'var(--accent)',
          500: 'var(--accent)',
          600: 'var(--accent)',
          700: 'var(--accent)',
          800: 'var(--accent)',
          900: 'var(--accent)',
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'var(--text-muted)',
            maxWidth: 'none',
            a: {
              color: 'var(--accent)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--border-strong)',
              '&:hover': {
                color: 'var(--accent) !important',
                textDecorationColor: 'var(--accent)',
              },
              code: { color: 'var(--accent)' },
            },
            h1: {
              fontFamily: 'Geist, sans-serif',
              fontWeight: '500',
              letterSpacing: '-0.025em',
              color: 'var(--text)',
            },
            h2: {
              fontFamily: 'Geist, sans-serif',
              fontWeight: '500',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginTop: '56px',
              marginBottom: '16px',
              fontSize: '32px',
            },
            h3: {
              fontFamily: 'Geist, sans-serif',
              fontWeight: '500',
              color: 'var(--text)',
              marginTop: '40px',
              marginBottom: '12px',
              fontSize: '22px',
            },
            'h4,h5,h6': {
              color: 'var(--text)',
            },
            p: {
              fontSize: '18px',
              lineHeight: '1.75',
              marginBottom: '24px',
            },
            pre: {
              backgroundColor: 'var(--glass-strong)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '20px 24px',
            },
            code: {
              color: 'var(--accent)',
              backgroundColor: 'var(--glass)',
              border: '1px solid var(--border)',
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '6px',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            details: {
              backgroundColor: 'var(--glass)',
              border: '1px solid var(--border)',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderRadius: '8px',
            },
            hr: { borderColor: 'var(--border)' },
            'ol li::marker': {
              fontWeight: '600',
              color: 'var(--text-muted)',
            },
            'ul li::marker': {
              color: 'var(--text-muted)',
            },
            strong: { color: 'var(--text)', fontWeight: '500' },
            blockquote: {
              color: 'var(--text-muted)',
              borderLeftColor: 'var(--accent)',
              fontFamily: '"Instrument Serif", serif',
              fontStyle: 'italic',
              fontSize: '24px',
              fontWeight: '400',
            },
            'blockquote p::before': { content: 'none' },
            'blockquote p::after': { content: 'none' },
            img: { borderRadius: '16px' },
            thead: {
              th: { color: 'var(--text)' },
              borderBottomColor: 'var(--border-strong)',
            },
            tbody: {
              tr: { borderBottomColor: 'var(--border)' },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
