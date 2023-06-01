/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-montserrat)',
      },

      colors: {
        gray: {
          100: '#F0F0F0',
          900: '#1A1A1A',
        },
      },
    },
    backgroundImage: {
      'enigma-gradient':
        'linear-gradient(51.06deg,#9358f7 0.87%,#9259f7 7.31%,#8e5df6 13.75%,#8862f5 20.19%,#806bf4 26.63%,#7575f2 33.07%,#6882f0 39.51%,#5990ee 45.95%,#4a9feb 52.39%,#3bade9 58.84%,#2ebae7 65.28%,#23c4e5 71.72%,#1bcde4 78.16%,#15d2e3 84.6%,#11d6e2 91.04%,#10d7e2 97.48% ',
      'purple-bliss-gradient':
        'linear-gradient(135deg, #6964DE 2.88%, #FCA6E9 100%)',
      'rose-gold-sunset-gradient':
        'linear-gradient(45.4deg, #F4426C 6.41%, #FBF2B1 98.99%)',
      'vibrant-orchid-gradient':
        'linear-gradient(132.33deg, #D24074 -0.67%, #6518B4 102.54%)',
    },
  },
  plugins: [],
})
