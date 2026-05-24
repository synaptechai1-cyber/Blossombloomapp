export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bloom: {
          50: '#fff0f5', 100: '#fde0ea', 200: '#fbbdd0',
          300: '#f791ae', 400: '#f0618a', 500: '#e8637a',
          600: '#d4486a', 700: '#b83358', 800: '#8f2244', 900: '#6b1633',
        },
        blush: '#fff5f8',
        rose: '#fde0ea',
        warm: '#fdf0e0',
        mink: '#2a1520',
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
}
