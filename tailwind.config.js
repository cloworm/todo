module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'light-background': "url('/images/bg-desktop-light.jpg')",
        'dark-background': "url('/images/bg-desktop-dark.jpg')"
      }),
      letterSpacing: {
        widest: '.4em'
      },
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
    },
    customForms: theme => ({
      default: {
        checkbox: {
          icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>',
          '&:checked': {
            backgroundImage: `linear-gradient(to right bottom, rgb(111, 192, 253), rgb(169, 111, 238))`,
          }
        }
      }
    })
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
