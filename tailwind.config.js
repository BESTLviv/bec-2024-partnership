module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'full-screen': "url('../assets/full-screen.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        customOrange: 'rgb(249, 156, 4)',
      },
    },
    
    fontSize: {
      title: ['32px', '41px'],
      header: ['42px', '53px']
    },
    fontFamily: {
      daysOne: ['Days One'], 
      jura: ['Jura'], 
      workSans: ['Work Sans'], 
    }
  },
  plugins: [],
};
