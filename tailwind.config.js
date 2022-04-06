module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    borderWidth: {
      '1': '1px',
    },
    extend: {
      colors: {
        'primary': '#EC4794',
        'netral-130': '#333333',
        'netral-50': '#D0D0D0',
        'netral-90': '#9D9D9D',
        'background': '#F7F9F8'
      },
    },
  },
  plugins: [],
}
