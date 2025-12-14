import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F526B',
          dark: '#134267',
        },
        accent: {
          DEFAULT: '#C51317',
          hover: '#BB0E12',
          active: '#B10C0F',
        },
        gray: {
          light: '#F3F4F8',
          DEFAULT: '#495B60',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

