/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#569cd6',
          foreground: '#1e1e1e',
        },
        secondary: {
          DEFAULT: '#4ec9b0',
          foreground: '#1e1e1e',
        },
        accent: {
          DEFAULT: '#6a9955',
          foreground: '#d4d4d4',
        },
        muted: {
          DEFAULT: '#252526',
          foreground: '#9c9c9c',
        },
        background: '#1e1e1e',
        foreground: '#d4d4d4',
        card: {
          DEFAULT: '#252526',
          foreground: '#d4d4d4',
        },
        border: '#3c3c3c',
        input: '#3c3c3c',
        ring: '#007acc',
      },
      fontFamily: {
        sans: [
          'Cascadia Code',
          'Fira Code',
          'Segoe UI',
          'Consolas',
          'ui-monospace',
          'monospace',
          'system-ui',
          'sans-serif',
        ],
        mono: ['Cascadia Code', 'Fira Code', 'Consolas', 'ui-monospace', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '0.75rem',
      },
    },
  },
  plugins: [],
}
