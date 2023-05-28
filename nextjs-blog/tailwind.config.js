/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
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
        'pretty-blue': '#68B0AB',
        'light-tan': '#F6E6D6',
        'medium-tan': '#CAAA8B',
        'dark-brown': '#4D3F53',
        'light-med-purple': '#E1CEEA',
        'light-light-tan': '#F6EFEA',
        'white': '#FFFFFFF'
      },
    },
  },
  variants: {},
  plugins: [require('flowbite/plugin')],
}

