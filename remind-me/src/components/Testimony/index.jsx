export default function Testimony() {
  return (
    <section className='flex flex-col items-center gap-y-10 md:my-margin py-distance w-content-scale 2xl:w-content-area'>
      <h2 className='font-semibold self-start text-2xl text-primary'>
        What do they think
      </h2>
      <div>
        <div className='flex gap-x-8 self-start'>
          <img src='./assets/figures/profile1.jpg' alt='Profile Picture' />
          <div className='space-y-5'>
            <h3 className='font-semibold text-lg text-primary'>
              Samantha Sench
            </h3>
            <h4 className='text-sm text-primary-3'>Student at University</h4>
          </div>
        </div>
      </div>
      <p className='text-lg leading-9 text-primary'>
        "Hi, it’s Samantha. After using it made me a lot of benefits, starting
        with convenience of setting a deadline of tasks and schedule after that
        the app is very simple using.""
      </p>
      <div className='flex gap-x-6'>
        <img src='./assets/icons/arrow-left.svg' alt='Arrow Left' />
        <img src='./assets/icons/arrow-right.svg' alt='Arrow Right' />
      </div>
    </section>
  );
}
