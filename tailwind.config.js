module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,ts,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./*",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DB4444",
        secondary: "#6c757d",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
        light: "#f8f9fa",
        dark: "#343a40"
      },
      
      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],

      // },
      screens: {
        "2xl": { max: "1535px" },
      },
    },
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  plugins: [],
};
