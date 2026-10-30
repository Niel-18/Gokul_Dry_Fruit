/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#FAF6F0',
          DEFAULT: '#F5EFE4',
          dark: '#EAE0D0',
        },
        walnut: {
          light: '#4A332B',
          DEFAULT: '#38251F',
          dark: '#271915',
          deep: '#1E1310',
        },
        gold: {
          light: '#C9A86A',
          DEFAULT: '#B08A4A',
          dark: '#8E6D33',
          muted: '#D8C29D',
          pale: '#F3ECE0',
        },
        berry: {
          light: '#8C3B43',
          DEFAULT: '#722F35',
          dark: '#552126',
        },
        sand: {
          light: '#EFE6D5',
          DEFAULT: '#E5D6BE',
          dark: '#D4BE9F',
        },
        charcoal: {
          light: '#3A3632',
          DEFAULT: '#25221F',
          dark: '#171513',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(56, 37, 31, 0.08), 0 4px 6px -2px rgba(56, 37, 31, 0.04)',
        'luxury-hover': '0 20px 40px -15px rgba(56, 37, 31, 0.16), 0 8px 12px -4px rgba(56, 37, 31, 0.08)',
        'gold-subtle': '0 0 0 1px rgba(176, 138, 74, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A86A 0%, #B08A4A 50%, #8E6D33 100%)',
      }
    },
  },
  plugins: [],
}

