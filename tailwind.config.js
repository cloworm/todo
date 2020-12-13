module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      light_veryLightGrey: 'hsl(0, 0%, 98%)',
      light_veryLightGreyBlue: 'hsl(236, 33%, 92%)',
      light_lightGreyBlue: 'hsl(233, 11%, 84%)',
      light_darkGreyBlue: 'hsl(236, 9%, 61%)',
      light_veryDarkGreyBlue: 'hsl(236, 19%, 35%)',
      dark_veryDarkBlue: 'hsl(235, 21%, 11%)',
      dark_veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
      dark_lightGreyBlue: 'hsl(234, 39%, 85%)',
      dark_lightGreyBlueHover: 'hsl(236, 33%, 92%)',
      dark_darkGreyBlue: 'hsl(234, 11%, 52%)',
      dark_veryDarkGreyBlue: 'hsl(233, 14%, 35%)',
      dark_veryDarkGreyBlue2: 'hsl(237, 14%, 26%)'
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'light-background': "url('/images/bg-desktop-light.jpg')"
      }),
      letterSpacing: {
        widest: '.4em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
