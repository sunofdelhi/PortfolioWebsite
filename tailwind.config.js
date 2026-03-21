/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
        surface: '#1E293B',
        cobalt: '#1B4FD8',
        'primary-text': '#F8FAFC',
        muted: '#94A3B8',
        border: '#334155',
        amber: '#F59E0B',
      },
      fontFamily: {
        headline: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
