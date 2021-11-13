module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        blue: '#2D76F9',
      },
      borderColor: {
        primary: '#2D76F9',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      borderRadius: {
        //Header
        radius: '3.125rem',
        //Hero
        'img-radius': '0px 0px 0px 100px',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      lineHeight: {
        //Hero
        'hero-title': '5.3125rem',
        'hero-txt': '2.25rem',
      },
      spacing: {
        //General
        distance: '3.125rem',
        inside: '1.875rem',
        margin: '1.5625rem',
        //Header
        'header-top': '25px',
        'header-nav': '3.125rem',
        'header-button': '11px 40px',
        'header-button-sm': '8px 20px',
        //Hero
        'hero-limitations': '9.375rem',
        'hero-texts': '1.875rem',
        'hero-button': '24px 58px',
        'hero-button-sm': '12px 29px',
        'hero-spacing': '6.68rem',
      },
      textColor: {
        primary: '#212121',
        'primary-2': '#2D76F9',
        'primary-3': '#747474',
      },
      width: {
        //Layout Dimensions
        container: '90rem',
        'content-scale': '86%',
        'content-area': '83.75rem',
        //Hero
        'hero-scale': '93%',
        'hero-texts': '40%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
