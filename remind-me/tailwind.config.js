module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        //Layout Dimensions
        container: '90rem',
        'content-scale': '86%',
        'content-area': '83.75rem',
      },
      spacing: {
        //Header
        'header-top': '25px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
