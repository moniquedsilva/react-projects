export default function Testimonial() {
  return (
    <section className='lg:w-hero-scale 2xl:w-content-area py-distance flex flex-col lg:flex-row items-center justify-between gap-distance 2xl:gap-testimonial-spacing text-primary self-start md:my-margin'>
      <img
        src='./assets/figures/testimonial.jpg'
        alt='Testimonial People'
        className='hidden md:block w-screen lg:w-testimonial-img 2xl:w-auto lg:rounded-r-testimonial-img'
      />
      <div className='flex flex-col items-center gap-y-10 xl:gap-y-between w-content-scale lg:w-testimonial-text'>
        <h2 className='font-semibold self-start text-2xl xl:text-4xl text-primary'>
          What do they think
        </h2>
        <div className='flex gap-x-8 self-start'>
          <img src='./assets/figures/profile1.jpg' alt='Profile Picture' />
          <div className='space-y-5'>
            <h3 className='font-semibold text-lg text-primary'>
              Samantha Sench
            </h3>
            <h4 className='text-sm text-primary-3'>Student at University</h4>
          </div>
        </div>
        <p className='text-lg leading-9 text-primary'>
          "Hi, it’s Samantha. After using it made me a lot of benefits, starting
          with convenience of setting a deadline of tasks and schedule after
          that the app is very simple using.""
        </p>
        <div className='flex gap-x-6 lg:self-start'>
          <img
            src='./assets/icons/arrow-left.svg'
            alt='Arrow Left'
            className='cursor-pointer'
          />
          <img
            src='./assets/icons/arrow-right.svg'
            alt='Arrow Right'
            className='cursor-pointer'
          />
        </div>
      </div>
    </section>
  );
}
