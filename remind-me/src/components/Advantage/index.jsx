export default function Advantage() {
  return (
    <>
      <section className='lg:w-hero-scale 2xl:w-content-area py-distance flex flex-col lg:flex-row items-center justify-between gap-distance 2xl:gap-advantage-spacing text-primary self-start md:my-margin'>
        <img
          src='./assets/figures/schedule.svg'
          alt='Schedule'
          className='w-screen lg:w-advantage-img 2xl:w-auto lg:rounded-b-advantage-left'
        />
        <div className='w-content-scale lg:w-advantage-text flex flex-col gap-y-distance'>
          <h2 className='font-semibold text-2xl leading-advantage-title-sm lg:text-4xl lg:leading-advantage-title'>
            Set up task and schedule with a best features
          </h2>
          <p className='text-primary-3 text-lg leading-advantage-txt'>
            The best feature makes you better, with the latest technology to
            meet your needs. Of course, with such features as organizing
            schedules and leading assignments, it will make you easier, So get
            the application now !
          </p>
        </div>
      </section>
      <section className='lg:w-hero-scale 2xl:w-content-area py-distance flex flex-col lg:flex-row items-center justify-between gap-distance lg:gap-8 xl:gap-24 2xl:gap-advantage-spacing text-primary self-end md:my-margin'>
        <img
          src='./assets/figures/notification.svg'
          alt='App Notification'
          className='lg:order-last w-screen lg:w-advantage-img 2xl:w-auto lg:rounded-l-advantage-left'
        />
        <div className='w-content-scale lg:w-advantage-text flex flex-col gap-y-distance'>
          <h2 className='font-semibold text-2xl leading-advantage-title-sm lg:text-4xl lg:leading-advantage-title'>
            Get the highest priority application notification
          </h2>
          <p className='text-primary-3 text-lg leading-advantage-txt'>
            The best feature makes you better, with the latest technology to
            meet your needs. Of course, with such features as organizing
            schedules and leading assignments, it will make you easier, So get
            the application now !
          </p>
        </div>
      </section>
    </>
  );
}
