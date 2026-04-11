/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hynix: {
          red: '#E4002B',
          dark: '#1a1a2e',
          card: '#16213e',
          accent: '#0f3460',
        },
      },
    },
  },
  plugins: [],
}
