export default function index() {
  return (
    <header className='fixed flex justify-center mt-4 2xl:mt-header-top w-full z-10'>
      <div className='flex items-center justify-between text-primary w-content-scale 2xl:w-content-area'>
        <a href='/#home'>
          <img src='./assets/icons/logo.svg' alt='Remind Me Logo' />
        </a>
        <nav className='cursor-pointer md:hidden'>
          <img src='./assets/icons/nav-button.svg' alt='Open Menu' />
        </nav>
        <nav className='hidden md:flex gap-x-9 xl:gap-x-header-nav lg:mr-56 xl:mr-96'>
          <a href='#home' className='hover:text-primary-2'>
            Home
          </a>
          <a href='#features' className='hover:text-primary-2'>
            Features
          </a>
          <a href='#about-us' className='hover:text-primary-2'>
            About us
          </a>
        </nav>
        <button className='hidden md:block border-primary border-1.5 p-header-button-sm lg:p-header-button rounded-radius text-primary-2'>
          About App
        </button>
      </div>
    </header>
  );
}
