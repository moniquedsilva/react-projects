import './footer.css';

export default function Footer() {
  return (
    <footer id='about-us' className='footer-section'>
      <div className='footer-logo'>
        <a href='/#'>
          <img src='./assets/logo.svg' alt='Logo' />
          <p className='footer-paragraph'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500.
          </p>
        </a>
      </div>
      <div className='footer-links'>
        <article className='links-box'>
          <h3>Tour</h3>
          <a href='#'>Thailand</a>
          <a href='#'>Canada</a>
          <a href='#'>Korea</a>
          <a href='#'>Italy</a>
        </article>
        <article className='links-box'>
          <h3>Support</h3>
          <a href='#'>Account</a>
          <a href='#'>Legal</a>
          <a href='#'>Contact</a>
          <a href='#'>Privacy Policy</a>
        </article>
        <article className='links-box'>
          <h3>Userful Pages</h3>
          <a href='#'>Deals</a>
          <a href='#'>FAQs</a>
          <a href='#'>Why Us</a>
        </article>
      </div>
    </footer>
  );
}
