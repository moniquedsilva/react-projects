export default function Download() {
  return (
    <section className='w-content-scale 2xl:w-content-area py-distance flex flex-col justify-center items-center'>
      <img
        src='./assets/figures/rectanglesMob.jpg'
        alt='Rectangles'
        className='md:hidden w-full relative'
      />
      <img
        src='./assets/figures/rectangles.jpg'
        alt='Rectangles'
        className='hidden md:block relative'
      />
      <article className='w-download-box-sm md:w-download-box absolute text-center'>
        <h2 className='font-semibold text-white text-2xl leading-download-title-sm lg:text-4xl lg:leading-download-title mb-distance md:mb-2'>
          Download an app now and the various benefits you will get immediately
        </h2>
        <div className='flex flex-col justify-between gap-6'>
          <button className='rounded-radius bg-white text-primary-2 text-base lg:text-lg p-download-buttons-sm lg:p-download-buttons cursor-pointer'>
            Download App
          </button>
          <button className='rounded-radius bg-transparent border border-white text-white text-base lg:text-lg p-download-buttons-sm lg:p-download-buttons cursor-pointer'>
            About App
          </button>
        </div>
      </article>
    </section>
  );
}
