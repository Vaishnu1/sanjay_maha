// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wedding-bg': "url('/bg.JPG')",
      },
    },
  },
  plugins: [],
}
