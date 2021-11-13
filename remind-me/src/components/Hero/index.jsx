export default function Hero() {
  return (
    <section
      id='home'
      className='lg:w-hero-scale 2xl:w-content-area pt-hero-limitations lg:pt-0 flex flex-col lg:flex-row items-center gap-distance lg:gap-8 xl:gap-hero-spacing text-primary self-end md:mb-margin'
    >
      <div className='w-content-scale lg:w-hero-texts flex flex-col gap-y-hero-texts'>
        <h1 className='font-semibold text-5xl leading-hero-title lg:text-4xl xl:text-5xl xl:leading-hero-title'>
          Manage Schedule and Task Easy
        </h1>
        <p className='text-primary-3 text-lg leading-hero-txt lg:text-base xl:text-lg xl:leading-hero-txt'>
          Create and organize schedule and task deadline become better, easy
          manage and certainly no longer lagging behind schedule of activities
          and task
        </p>
        <button className='w-max p-hero-button-sm md:p-hero-button mt-2.5 rounded-full bg-blue text-white text-sm md:text-lg'>
          Download App
        </button>
      </div>
      <div>
        <img
          src='./assets/figures/hero.svg'
          alt='Remind Me App'
          className='w-screen lg:w-full lg:rounded-img-radius'
        />
      </div>
    </section>
  );
}
