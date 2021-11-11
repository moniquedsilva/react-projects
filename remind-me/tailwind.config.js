module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        primary: '#2D76F9',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      borderRadius: {
        radius: '3.125rem',
      },
      textColor: {
        primary: '#212121',
        'primary-2': '#2D76F9',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      width: {
        //Layout Dimensions
        container: '90rem',
        'content-scale': '86%',
        'content-area': '83.75rem',
      },
      spacing: {
        //Header
        'header-top': '25px',
        'header-nav': '3.125rem',
        'header-button': '11px 40px',
        'header-button-sm': '8px 20px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
