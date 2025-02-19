/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    colors: {
      'background': '#000A2F',
      'primary': '#FFFFFF',

      'secondary-light': '#4D58A3',
      'secondary': '#BD34CF',
      'secondary-dim': '#A648FE',
      'secondary-dark': '#072C0D',

      'gradient': '#852169',

      'tertiary': '#FF4136',
      'tertiary2': '#AAAAAA',

      'white': '#FFFFFF',
      'black': '#000000'
    },
    
  },
  plugins: [],
}
