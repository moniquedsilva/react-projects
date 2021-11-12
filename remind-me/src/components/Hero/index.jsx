export default function Hero() {
  return (
    <section
      id='home'
      className='2xl:w-content-area pt-hero-limitations flex flex-col items-center gap-distance text-primary'
    >
      <div className='w-content-scale 2xl:w-content-area flex flex-col gap-y-hero-texts'>
        <h1 className='font-semibold text-5xl'>
          Manage Schedule and Task Easy
        </h1>
        <p>
          Create and organize schedule and task deadline become better, easy
          manage and certainly no longer lagging behind schedule of activities
          and task
        </p>
        <button>Download App</button>
      </div>
      <div>
        <img src='./assets/figures/hero.svg' alt='Remind Me App' />
      </div>
    </section>
  );
}
