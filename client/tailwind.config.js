/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dce7f3',
          200: '#bad1e7',
          300: '#8cb3d7',
          400: '#5891c3',
          500: '#3574af',
          600: '#255b92',
          700: '#1e4875',
          800: '#1a365d', // deep blue
          900: '#142742',
          DEFAULT: '#1a365d',
        },
        secondary: {
          50: '#fff8f2',
          100: '#feeddb',
          200: '#fcd7b4',
          300: '#fab984',
          400: '#f69651',
          500: '#e67e22', // saffron / orange
          600: '#cb6619',
          700: '#a74f17',
          800: '#863f1b',
          900: '#6d3619',
          DEFAULT: '#e67e22',
        },
        accent: {
          50: '#f1f8f4',
          100: '#dbeee2',
          200: '#b8dec7',
          300: '#8ac4a3',
          400: '#5ea77f',
          500: '#3c8b63',
          600: '#2d6a4f', // deep green
          700: '#245640',
          800: '#1f4534',
          900: '#1b3a2c',
          DEFAULT: '#2d6a4f',
        },
        navy: {
          DEFAULT: '#0f2042',
          ashoka: '#000080',
        },
        saffron: {
          light: '#ff9933',
          DEFAULT: '#e67e22',
          dark: '#d35400',
        },
        tirangaGreen: {
          light: '#138808',
          DEFAULT: '#2d6a4f',
          dark: '#1b4332',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(26, 54, 93, 0.08)',
        'card': '0 10px 25px -5px rgba(26, 54, 93, 0.08), 0 8px 10px -6px rgba(26, 54, 93, 0.04)',
      }
    },
  },
  plugins: [],
}
