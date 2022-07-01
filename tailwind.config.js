module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Primary': '#252525',
      'Secondary': '#9747FF',
      'TertiaryA': '#B18CF9',
      'TertiaryB': '#d1c2ff',
      'TertiaryC': '#673bbc',
      'TertiaryD': '#3C2975',
      'Warning': '#D1111C',
      'Start': '#FBBB0C',
      'Success': '#009649',
      'Info': '#0078B7',
      'DarkA': '#1D1D1D',
      'DarkB': '#383838',
      'DarkC': '#545454',
      'GreyA': '#414141',
      'GreyB': '#656565',
      'GreyC': '#838383',
      'GreyD': '#D1D1D1',
      'GreyE': '#EFEFEF',
      'White': '#FFFFFF',
      'cBlack': '#000000'
    },
    extend: {
      fontFamily: {
        product: ['Product-sans']
      },
      animation: {
        blob: 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1)',
          },
          '33%': {
            transform: 'scale(1.1)',
          },
          '66%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          }
        }
      },
      dropShadow: {
        'Secondary': '0 0px 13px rgba(151, 71, 255, 0.85)',
      }
    },
  },
  plugins: [],
}
