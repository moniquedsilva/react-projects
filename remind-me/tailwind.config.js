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
        //Advantage
        'advantage-left': '6.25rem',
        //Testimonial
        'testimonial-img': '6.25rem',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      lineHeight: {
        //Hero
        'hero-title': '5.3125rem',
        'hero-txt': '2.25rem',
        //Advantage
        'advantage-title': '4.06rem',
        'advantage-title-sm': '2.5rem',
        'advantage-txt': '2.25rem',
        //Download
        'download-title': '4.06rem',
        'download-title-sm': '2.25rem',
      },
      spacing: {
        //General
        distance: '4.6875rem',
        'distance-m': '3.125rem',
        'mobile-py': '1.5625rem',
        between: '3.125rem',
        inside: '1.875rem',
        margin: '1.5625rem',
        //Header
        'header-mb': '4.6875rem',
        'header-top': '25px',
        'header-nav': '3.125rem',
        'header-button': '11px 40px',
        'header-button-sm': '8px 20px',
        //Hero
        'hero-limitations': '9.375rem',
        'hero-texts': '1.875rem',
        'hero-button': '22px 58px',
        'hero-button-sm': '12px 29px',
        'hero-spacing': '6.68rem',
        //Advantage
        'advantage-spacing': '9.18rem',
        //Download
        'download-buttons': '22px 58px',
        'download-buttons-sm': '14px 29px',
        //Testimonial
        'advantage-spacing': '9.18rem',
        //Footer
        'follow-us': '4.7rem',
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
        //Advantage
        'advantage-img': '52%',
        'advantage-text': '36%',
        //Download
        'download-buttons': '44%',
        'download-box': '58%',
        'download-box-sm': '78%',
        'download-large': '40%',
        'button-w': '250px',
        //Testimonial
        'testimonial-text': '36%',
        'testimonial-img': '52%',
        //Footer
        links: '10.81rem',
        'links-sm': '10rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
