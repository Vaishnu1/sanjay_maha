/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFF8F0', // A soft off-white
        'primary': '#4A5C6A',    // A deep slate blue
        'secondary': '#D4B499',   // A warm tan
        'accent': '#A46C6C',     // A muted rose
      },
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        // --- THIS IS THE IMPORTANT PART ---
        // It connects the name 'hero-bg' to your actual image file.
        'hero-bg': "url('/header-background.jpg')",
      }
    },
  },
  plugins: [],
}
