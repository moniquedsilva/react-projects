export default function Footer() {
  return (
    <footer className='flex flex-col lg:flex-row justify-between lg:items-center gap-10 md:my-margin py-distance w-content-scale 2xl:w-content-area'>
      <div className='w-full lg:w-2/4 xl:w-2/4 space-y-7 xl:mr-20'>
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
          <h3 className='text-2xl font-semibold mb-7'>Sitemaps</h3>
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
          <h3 className='text-2xl font-semibold mb-7'>Advantages</h3>
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
          <h3 className='text-2xl font-semibold mb-7'>Follow Us</h3>
          <div className='flex gap-x-10'>
            <a href='/#'>
              <img src='./assets/icons/facebook.svg' alt='Facebook' />
            </a>
            <a href='/#'>
              <img src='./assets/icons/twitter.svg' alt='Twitter' />
            </a>
            <a href='/#'>
              <img src='./assets/icons/linkedin.svg' alt='Linkedin' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
