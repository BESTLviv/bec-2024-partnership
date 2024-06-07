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
        'custom-gradient': 'linear-gradient(-90deg, #F99C04 0%, #000000 100%)',
        'portrait1': "url('../assets/portrait1.png')",
        'portrait2': "url('../assets/full-screen.png')",
        'proposition-gradient': 'linear-gradient(90deg, rgb(67, 67, 67), rgb(0, 0, 0) 100%)',
      },
      colors: {
        customOrange: 'rgb(249, 156, 4)',
        customBrown: 'rgb(67, 44, 9)',
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
