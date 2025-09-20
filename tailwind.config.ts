
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#1A3D3F',      // deep green
          light: '#EDF7F6',
          accent: '#C9A66B',       // gold beige
        },
      },
    },
  },
  plugins: [],
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ]
}
export default config
