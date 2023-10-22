/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#282a36',
        current: '#44475a',
        selection: '#44475a',
        foreground: '#f8f8f2',
        comment: '#6272a4',
        cyan: '#8be9fd',
        green: '#50fa7b',
        orange: '#ffb86c',
        pink: '#ff79c6',
        purple: '#bd93f9',
        red: '#ff5555',
        yellow: '#f1fa8c',
        dark: '#21222D',
        accent: '#40455A',
        divider: 'rgba(0,0,0,.1)'
      }
    },
  },
  plugins: [],
}
