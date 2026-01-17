/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-gold': '#D4AF37',
        'wedding-red': '#C41E3A',
        'soft-cream': '#F8F5F2',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'], // For elegant script
      },
       backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')", // Wedding background placeholder
      }
    },
  },
  plugins: [],
}
