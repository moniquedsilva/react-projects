export default function index() {
  return (
    <header className='w-content-scale 2xl:w-content-area mt-header-top flex justify-between items-center'>
      <a href='/'>
        <img src='./assets/icons/logo.svg' alt='Remind Me Logo' />
      </a>
      <nav className='cursor-pointer md:hidden'>
        <img src='./assets/icons/nav-button.svg' alt='Open Menu' />
      </nav>
    </header>
  );
}
