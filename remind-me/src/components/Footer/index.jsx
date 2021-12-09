export default function Footer() {
  return (
    <footer className='flex flex-col lg:flex-row gap-10 lg:items-center justify-between py-mobile-py lg:py-distance w-content-scale 2xl:w-content-area'>
      <div className='xl:mr-20 space-y-7 w-full lg:w-2/4 xl:w-2/4'>
        <a href='/#'>
          <img
            src='./assets/icons/logo-big.svg'
            alt='Remind Me Logo'
            className='w-2/4 lg:w-full'
          />
        </a>
        <p className='text-lg leading-9 text-primary-3'>
          Task deadlines and scheduling applications with various benefits and
          advantages
        </p>
      </div>
      <div className='flex flex-wrap gap-10 w-full'>
        <div className='flex flex-col gap-y-3.5 w-links-sm xl:w-links'>
          <h3 className='font-semibold mb-7 text-2xl'>Sitemaps</h3>
          <a href='/#' className='text-lg text-primary-3'>
            <span className='text-primary-2'>•</span> Home
          </a>
          <a href='/#features' className='text-lg text-primary-3'>
            <span className='text-primary-2'>•</span> Features
          </a>
          <a href='/#about-us' className='text-lg text-primary-3'>
            <span className='text-primary-2'>•</span> About Us
          </a>
        </div>
        <div className='flex flex-col gap-y-3.5 w-links-sm xl:w-links'>
          <h3 className='font-semibold mb-7 text-2xl'>Advantages</h3>
          <a href='/#' className='text-lg text-primary-3'>
            <span className='text-primary-2'>•</span> Set Task Better
          </a>
          <a href='/#' className='text-lg text-primary-3'>
            <span className='text-primary-2'>•</span> Easy Manage
          </a>
          <a href='/#' className='text-lg text-primary-3'>
            <span className='text-primary-2'>•</span> Get Notification
          </a>
        </div>
        <div className='flex flex-col gap-y-3.5 mb-follow-us w-links-sm xl:w-links'>
          <h3 className='font-semibold mb-7 text-2xl'>Follow Us</h3>
          <div className='flex gap-x-10'>
            <a href='https://facebook.com/' target='_blank' rel='noopener'>
              <img src='./assets/icons/facebook.svg' alt='Facebook' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener'>
              <img src='./assets/icons/twitter.svg' alt='Twitter' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener'>
              <img src='./assets/icons/linkedin.svg' alt='Linkedin' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
