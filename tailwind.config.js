/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js"
  ],
  theme: {
    extend: {
      colors:{
        lightPurple: '#6843CD',
        mediumPurple: '#291465',
        darkPurple: '#11013C',
        textPurple: '#24027E',
        OTPButton:'#5D39BE',
        borderColor:'#D9D9D9',
        emailButton: '#EDEBFF',
        textColor: '#666666',
      },
      height:{
        '805':'805px'
      },
      width:{
        '642':'642px'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Syne: ['syne','sans-serif'],
        RobotoSerif: ['Roboto Serif','sans-serif']
      },
    },
  },
  plugins: [],
}

