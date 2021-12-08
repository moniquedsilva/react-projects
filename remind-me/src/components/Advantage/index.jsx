export default function Advantage() {
  return (
    <>
      <section
        id='features'
        className='flex flex-col lg:flex-row gap-distance-m 2xl:gap-advantage-spacing  items-center justify-between py-mobile-py lg:py-distance self-start text-primary  lg:w-hero-scale 2xl:w-content-area'
      >
        <img
          src='./assets/figures/schedule.svg'
          alt='Schedule'
          className='lg:rounded-b-advantage-left w-screen lg:w-advantage-img 2xl:w-auto'
        />
        <div className='flex flex-col gap-y-distance-m w-content-scale lg:w-advantage-text'>
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
      <section className='flex flex-col lg:flex-row gap-distance-m lg:gap-8 xl:gap-24 2xl:gap-advantage-spacing items-center justify-between py-mobile-py lg:py-distance self-end text-primary lg:w-hero-scale 2xl:w-content-area'>
        <img
          src='./assets/figures/notification.svg'
          alt='App Notification'
          className='lg:order-last lg:rounded-l-advantage-left w-screen lg:w-advantage-img 2xl:w-auto'
        />
        <div className='flex flex-col gap-y-distance-m w-content-scale lg:w-advantage-text'>
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
