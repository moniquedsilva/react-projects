export default function index() {
  return (
    <header className='w-content-scale 2xl:w-content-area mt-header-top text-primary flex justify-between items-center fixed z-10'>
      <a href='/'>
        <img src='./assets/icons/logo.svg' alt='Remind Me Logo' />
      </a>
      <nav className='cursor-pointer md:hidden'>
        <img src='./assets/icons/nav-button.svg' alt='Open Menu' />
      </nav>
      <nav className='hidden md:flex gap-x-9 xl:gap-x-header-nav lg:mr-56 xl:mr-96'>
        <a href='#home'>Home</a>
        <a href='#features'>Features</a>
        <a href='#about-us'>About us</a>
      </nav>
      <button className='hidden md:block p-header-button-sm lg:p-header-button border-primary border-1.5 rounded-radius text-primary-2'>
        About App
      </button>
    </header>
  );
}
