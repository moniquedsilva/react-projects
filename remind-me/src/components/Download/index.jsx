export default function Download() {
  return (
    <section className='flex flex-col justify-center items-center py-mobile-py lg:py-distance w-content-scale 2xl:w-content-area'>
      <img
        src='./assets/figures/rectanglesMob.jpg'
        alt='Rectangles'
        className='md:hidden relative w-full'
      />
      <img
        src='./assets/figures/rectangles.jpg'
        alt='Rectangles'
        className='hidden md:block relative'
      />
      <article className='absolute flex flex-col items-center text-center w-download-box-sm md:w-download-box 2xl:w-download-large'>
        <h2 className='font-semibold mb-distance-m md:mb-2 lg:mb-4 xl:mb-16 2xl:mb-24 text-white text-2xl leading-download-title-sm lg:text-3xl lg:leading-10 xl:text-4xl xl:leading-download-title'>
          Download an app now and the various benefits you will get immediately
        </h2>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-distance-m'>
          <button className='bg-white cursor-pointer rounded-radius p-download-buttons-sm lg:p-download-buttons text-primary-2 text-base lg:text-lg w-button-w'>
            Download App
          </button>
          <button className='bg-transparent border border-white cursor-pointer p-download-buttons-sm lg:p-download-buttons rounded-radius text-white text-base lg:text-lg w-button-w'>
            About App
          </button>
        </div>
      </article>
    </section>
  );
}
