export default function Hero() {
  return (
    <section
      id='home'
      className='flex flex-col lg:flex-row gap-distance lg:gap-8 xl:gap-hero-spacing items-center md:mb-margin pt-hero-limitations self-end text-primary lg:pt-0 lg:w-hero-scale 2xl:w-content-area'
    >
      <div className='flex flex-col gap-y-hero-texts w-content-scale lg:w-hero-texts'>
        <h1 className='font-semibold text-5xl leading-hero-title lg:text-4xl xl:text-5xl xl:leading-hero-title'>
          Manage Schedule and Task Easy
        </h1>
        <p className='text-primary-3 text-lg leading-hero-txt lg:text-base xl:text-lg xl:leading-hero-txt'>
          Create and organize schedule and task deadline become better, easy
          manage and certainly no longer lagging behind schedule of activities
          and task
        </p>
        <button className='bg-blue mt-2.5 p-hero-button-sm md:p-hero-button rounded-full text-white text-sm md:text-lg w-max'>
          Download App
        </button>
      </div>
      <div>
        <img
          src='./assets/figures/hero.svg'
          alt='Remind Me App'
          className='lg:rounded-img-radius w-screen lg:w-full'
        />
      </div>
    </section>
  );
}
