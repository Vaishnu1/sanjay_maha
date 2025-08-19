/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F9F5F0', // Soft off-white
        'text': '#4E3A28',       // Rich brown
        'primary': '#D4AF37',    // Gold accent
        'secondary': '#A87C7C',  // Muted rose
        'accent': '#8B4513',     // Darker brown
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/bg.JPG')",
      },
    },
  },
  plugins: [],
}