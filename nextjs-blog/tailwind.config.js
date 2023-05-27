/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'baby-green': '#D8F3DC',
        'light-medium-green': '#B7E4C7',
        'medium-green': '#95D5B2',
        'light-purple': '#bbd0ff',
        'light-medium-purple': '#b8c0ff',
        'dark-purple': '#c8b6ff',
        'light-light-purple': '#e7c6ff',
        'sage-green': '#8FC0A9',
        'pretty-blue': '#68B0AB'
      },
    },
  },
  variants: {},
  plugins: [],
}

